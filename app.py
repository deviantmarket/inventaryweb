from flask import Flask, request, session, redirect, jsonify, send_from_directory, make_response
import os
import sqlite3
from pathlib import Path

app = Flask(__name__, static_folder='.', static_url_path='')
app.secret_key = os.environ.get('SECRET_KEY','cambia_esto_por_una_clave_segura')

# SQLite DB
DB_PATH = Path(__file__).parent / 'inventory.db'

def get_db_conn():
	conn = sqlite3.connect(DB_PATH)
	conn.row_factory = sqlite3.Row
	return conn

def ensure_db():
	if not DB_PATH.exists():
		conn = get_db_conn()
		cur = conn.cursor()
		cur.execute('''
		CREATE TABLE items (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			quantity INTEGER NOT NULL DEFAULT 0,
			price REAL NOT NULL DEFAULT 0.0,
			description TEXT
		)
		''')
		conn.commit()
		conn.close()

ensure_db()

# Configuración del administrador (según petición del usuario)
ADMIN_EMAIL = 'torresvasquezjosemanuel616@gmail.com'
ADMIN_PASS = 'THEGANSTHER09'

# Link PayPal proporcionado
PAYPAL_QR = 'https://www.paypal.com/qrcodes/p2pqrc/NQY63UULSD9YW'

@app.route('/')
def index():
	return send_from_directory('.', 'index.html')

@app.route('/style.css')
def css():
	return send_from_directory('.', 'style.css')

@app.route('/api/login', methods=['POST'])
def api_login():
	data = request.get_json() or {}
	email = data.get('email','').strip().lower()
	password = data.get('password','')
	if email == ADMIN_EMAIL and password == ADMIN_PASS:
		session['email'] = email
		session['admin'] = True
		session['paid'] = True
		return jsonify(success=True, admin=True, paid=True, email=email)
	# Login básico para otros usuarios (sin pago)
	if email and password:
		session['email'] = email
		session['admin'] = False
		session['paid'] = False
		return jsonify(success=True, admin=False, paid=False, email=email)
	return jsonify(success=False), 401

@app.route('/api/status')
def api_status():
	return jsonify(email=session.get('email'), admin=session.get('admin',False), paid=session.get('paid',False))

@app.route('/api/purchase', methods=['POST'])
def api_purchase():
	# Redirigir al enlace de PayPal (cliente puede abrirlo)
	return jsonify(redirect=PAYPAL_QR)

@app.route('/api/confirm-payment', methods=['POST'])
def api_confirm_payment():
	# En un sistema real aquí verificarías con PayPal IPN/Webhooks.
	# Para esta demo, aceptamos una confirmación manual del cliente.
	if 'email' in session:
		session['paid'] = True
		return jsonify(success=True)
	return jsonify(success=False), 403

@app.route('/dashboard')
def dashboard():
	if not session.get('paid'):
		return redirect('/')
	email = session.get('email')
		content = f"""
		<!doctype html>
		<html><head><meta charset='utf-8'><title>Panel - INVENTORIX</title>
		<link rel='stylesheet' href='/style.css'>
		</head><body>
		<div style='padding:24px;color:#e6eef8'>
			<h1>Bienvenido al Panel de INVENTORIX</h1>
			<p>Usuario: {email}</p>
			<p>Estado: <strong>Acceso completo</strong></p>
			<p><a href='/' style='color:#7c3aed'>Volver</a> | <a href='/api/logout' style='color:#7c3aed'>Cerrar sesión</a></p>

			<section style='margin-top:18px'>
				<h2>Inventario</h2>
				<div id='inventoryApp'>
					<form id='itemForm' style='display:flex;gap:8px;align-items:center;margin-bottom:12px'>
						<input id='name' placeholder='Nombre' required style='padding:8px;border-radius:8px'>
						<input id='quantity' type='number' placeholder='Cantidad' value='0' style='width:90px;padding:8px;border-radius:8px'>
						<input id='price' type='number' step='0.01' placeholder='Precio' value='0.00' style='width:110px;padding:8px;border-radius:8px'>
						<input id='description' placeholder='Descripción' style='padding:8px;border-radius:8px'>
						<button class='btn primary' type='submit'>Añadir</button>
					</form>
					<table id='itemsTable' style='width:100%;border-collapse:collapse'>
						<thead><tr style='text-align:left;color:var(--muted)'><th>Nombre</th><th>Cantidad</th><th>Precio</th><th>Descripción</th><th></th></tr></thead>
						<tbody></tbody>
					</table>
				</div>
			</section>
		</div>

		<script>
		async function api(path, opts){
			const res = await fetch(path, opts);
			return res.json().catch(()=>({}));
		}

		async function loadItems(){
			const r = await api('/api/items');
			const tbody = document.querySelector('#itemsTable tbody');
			tbody.innerHTML = '';
			(r.items||[]).forEach(it=>{
				const tr = document.createElement('tr');
				tr.innerHTML = `<td>${it.name}</td><td>${it.quantity}</td><td>$${it.price.toFixed(2)}</td><td>${it.description||''}</td><td><button class='btn secondary' data-id='${it.id}'>Eliminar</button></td>`;
				tbody.appendChild(tr);
			});
			document.querySelectorAll('button[data-id]').forEach(b=>b.onclick=async ()=>{
				const id = b.getAttribute('data-id');
				if(confirm('Eliminar este artículo?')){
					await api('/api/items/'+id,{method:'DELETE'});
					loadItems();
				}
			});
		}

		document.getElementById('itemForm').onsubmit = async (e)=>{
			e.preventDefault();
			const name = document.getElementById('name').value;
			const quantity = parseInt(document.getElementById('quantity').value||0);
			const price = parseFloat(document.getElementById('price').value||0);
			const description = document.getElementById('description').value;
			await api('/api/items',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,quantity,price,description})});
			document.getElementById('itemForm').reset();
			loadItems();
		}

		loadItems();
		</script>

		</body></html>
		"""
		return make_response(content)

@app.route('/admin')
def admin_panel():
	if not session.get('admin'):
		return "Acceso denegado", 403
	email = session.get('email')
	content = f"""
	<!doctype html>
	<html><head><meta charset='utf-8'><title>Admin - INVENTORIX</title>
	<link rel='stylesheet' href='/style.css'>
	</head><body>
	  <div style='padding:24px;color:#e6eef8'>
		<h1>Panel Admin</h1>
		<p>Administrador: {email}</p>
		<p>Esta cuenta tiene acceso gratuito permanente a la app.</p>
		<form method='post' action='/api/logout'><button class='btn' type='submit'>Cerrar sesión</button></form>
	  </div>
	</body></html>
	"""
	return make_response(content)

@app.route('/api/logout', methods=['GET','POST'])
def api_logout():
	session.clear()
	return redirect('/')

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000, debug=True)

