# INVENTORIX — Inventario Inteligente

Proyecto demo: app web de inventario con autenticación y pago por PayPal (simulado).

Instrucciones rápidas:

1. Crear entorno virtual e instalar dependencias:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

2. Ejecutar la app:

```bash
python app.py
```

3. Abrir en el navegador: http://localhost:5000

Notas:
- La cuenta admin configurada tiene acceso gratuito: `torresvasquezjosemanuel616@gmail.com` / `THEGANSTHER09`.
- El flujo de pago abre el QR de PayPal proporcionado; la confirmación es simulada por el usuario.
- Para integrarlo con PayPal real, añade verificación de webhooks/IPN y validación en el servidor.
