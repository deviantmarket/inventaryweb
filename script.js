"use strict";

/* =====================================================
   SABOR CARIBE - LOGICA DE NEGOCIO & INTERACTIVIDAD
   WhatsApp: +1 (849) 426-8576
   ===================================================== */

const CONFIG = {
    whatsappNumber: "18494268576",
    freeShippingThreshold: 30.00,
    standardDeliveryFee: 2.50,
    currencySymbol: "$",
    storageKey: "sabor_caribe_cart_v2",
    userKey: "sabor_caribe_user_data_v2"
};

/* ---------------- ELEMENTOS DEL DOM ---------------- */
const DOM = {
    // Header & Nav
    siteHeader: document.getElementById("siteHeader"),
    menuButton: document.getElementById("menuButton"),
    mainNav: document.getElementById("mainNav"),
    navLinks: document.querySelectorAll(".nav-link"),

    // Cart Panel & Overlay
    cartPanel: document.getElementById("cartPanel"),
    cartOverlay: document.getElementById("cartOverlay"),
    openCartBtn: document.getElementById("openCart"),
    closeCartBtn: document.getElementById("closeCart"),
    cartScrollArea: document.getElementById("cartScrollArea"),
    cartItems: document.getElementById("cartItems"),
    cartCountBadge: document.getElementById("cartCount"),
    cartSubtotal: document.getElementById("cartSubtotal"),
    deliveryRow: document.getElementById("deliveryRow"),
    deliveryCost: document.getElementById("deliveryCost"),
    cartTotal: document.getElementById("cartTotal"),
    whatsappOrderBtn: document.getElementById("whatsappOrder"),
    whatsappHelperHint: document.getElementById("whatsappHelperHint"),

    // Guía de pasos (tracker)
    trackerStep1: document.getElementById("trackerStep1"),
    trackerStep2: document.getElementById("trackerStep2"),
    trackerStep3: document.getElementById("trackerStep3"),

    // Free Shipping Bar
    shippingProgressFill: document.getElementById("shippingProgressFill"),
    shippingProgressText: document.getElementById("shippingProgressText"),

    // Formulario de Checkout
    cartCheckoutForm: document.getElementById("cartCheckoutForm"),
    tabDelivery: document.getElementById("tabDelivery"),
    tabPickup: document.getElementById("tabPickup"),
    addressGroup: document.getElementById("addressGroup"),
    customerName: document.getElementById("customerName"),
    customerAddress: document.getElementById("customerAddress"),
    paymentMethod: document.getElementById("paymentMethod"),
    orderNotes: document.getElementById("orderNotes"),

    // Búsqueda y Filtros
    searchInput: document.getElementById("searchInput"),
    clearSearchBtn: document.getElementById("clearSearch"),
    filterButtons: document.querySelectorAll(".filter"),
    productCards: document.querySelectorAll(".product-card"),
    productGrid: document.getElementById("productGrid"),
    noResults: document.getElementById("noResults"),
    resetSearchBtn: document.getElementById("resetSearchBtn"),

    // Botones de Agregar
    addButtons: document.querySelectorAll(".add-button"),

    // Floating Actions
    floatingCartBtn: document.getElementById("floatingCartBtn"),
    floatingCartCount: document.getElementById("floatingCartCount"),
    floatingCartTotal: document.getElementById("floatingCartTotal"),

    // Links WhatsApp generales
    heroWhatsapp: document.getElementById("heroWhatsapp"),
    contactWhatsapp: document.getElementById("contactWhatsapp"),

    // Toast Container
    toastContainer: document.getElementById("toastContainer"),

    // Status Badge
    storeStatus: document.getElementById("storeStatus")
};

/* ---------------- ESTADO DE LA APLICACIÓN ---------------- */
let state = {
    cart: [],
    deliveryMode: "delivery", // "delivery" o "pickup"
    activeCategory: "todos",
    searchQuery: ""
};

/* =====================================================
   INICIALIZACIÓN
   ===================================================== */
function init() {
    loadCartFromStorage();
    loadUserDataFromStorage();
    bindEvents();
    renderCart();
    updateLiveCategoryCounts();
    updateStoreOpenStatus();
}

/* =====================================================
   PERSISTENCIA (LOCAL STORAGE)
   ===================================================== */
function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem(CONFIG.storageKey);
        if (saved) {
            state.cart = JSON.parse(saved);
        }
    } catch (e) {
        console.warn("No se pudo cargar el carrito del almacenamiento local", e);
        state.cart = [];
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.cart));
    } catch (e) {
        console.warn("No se pudo guardar el carrito", e);
    }
}

function loadUserDataFromStorage() {
    try {
        const saved = localStorage.getItem(CONFIG.userKey);
        if (saved) {
            const data = JSON.parse(saved);
            if (data.name && DOM.customerName) DOM.customerName.value = data.name;
            if (data.address && DOM.customerAddress) DOM.customerAddress.value = data.address;
            if (data.payment && DOM.paymentMethod) DOM.paymentMethod.value = data.payment;
        }
    } catch (e) {
        console.warn("Error cargando datos de usuario", e);
    }
}

function saveUserDataToStorage() {
    try {
        const data = {
            name: DOM.customerName ? DOM.customerName.value.trim() : "",
            address: DOM.customerAddress ? DOM.customerAddress.value.trim() : "",
            payment: DOM.paymentMethod ? DOM.paymentMethod.value : ""
        };
        localStorage.setItem(CONFIG.userKey, JSON.stringify(data));
    } catch (e) {
        console.warn("Error guardando datos de usuario", e);
    }
}

/* =====================================================
   CÁLCULOS DEL CARRITO
   ===================================================== */
function getCartSubtotal() {
    return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartCount() {
    return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getDeliveryFee() {
    if (state.deliveryMode === "pickup") {
        return 0;
    }
    const subtotal = getCartSubtotal();
    if (subtotal === 0 || subtotal >= CONFIG.freeShippingThreshold) {
        return 0;
    }
    return CONFIG.standardDeliveryFee;
}

function getGrandTotal() {
    const subtotal = getCartSubtotal();
    if (subtotal === 0) return 0;
    return subtotal + getDeliveryFee();
}

/* =====================================================
   GESTIÓN DEL CARRITO
   ===================================================== */
function addToCart(name, price, image) {
    const existingIndex = state.cart.findIndex(item => item.name.toLowerCase() === name.toLowerCase());

    if (existingIndex > -1) {
        state.cart[existingIndex].quantity += 1;
    } else {
        state.cart.push({
            name: name,
            price: Number(price),
            quantity: 1,
            image: image || "imagenes/productos/producto-01.jpg"
        });
    }

    saveCartToStorage();
    renderCart();
    showToast(`🛒 "${name}" agregado al carrito`);

    // Feedback visual en el botón de carrito
    if (DOM.cartCountBadge) {
        DOM.cartCountBadge.style.transform = "scale(1.3)";
        setTimeout(() => {
            DOM.cartCountBadge.style.transform = "scale(1)";
        }, 200);
    }
}

function updateQuantity(index, delta) {
    if (!state.cart[index]) return;

    state.cart[index].quantity += delta;

    if (state.cart[index].quantity <= 0) {
        const removedName = state.cart[index].name;
        state.cart.splice(index, 1);
        showToast(`🗑️ "${removedName}" eliminado`);
    }

    saveCartToStorage();
    renderCart();
}

function removeFromCart(index) {
    if (!state.cart[index]) return;
    const removedName = state.cart[index].name;
    state.cart.splice(index, 1);
    saveCartToStorage();
    renderCart();
    showToast(`🗑️ "${removedName}" eliminado`);
}

/* =====================================================
   RENDERIZADO DEL CARRITO
   ===================================================== */
function renderCart() {
    const count = getCartCount();
    const subtotal = getCartSubtotal();
    const deliveryFee = getDeliveryFee();
    const grandTotal = getGrandTotal();

    // Actualizar contadores
    if (DOM.cartCountBadge) DOM.cartCountBadge.textContent = count;
    if (DOM.floatingCartCount) DOM.floatingCartCount.textContent = count;
    if (DOM.floatingCartTotal) DOM.floatingCartTotal.textContent = `${CONFIG.currencySymbol}${grandTotal.toFixed(2)}`;

    // Mostrar/ocultar floating cart según items y scroll
    checkFloatingCartVisibility();

    // Barra de envío gratis
    renderFreeShippingProgress(subtotal);

    // Items list
    if (state.cart.length === 0) {
        DOM.cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-icon">🛒</div>
                <h3>Tu carrito está vacío</h3>
                <p>Explora nuestro delicioso menú y agrega tus platos favoritos.</p>
                <button type="button" class="button primary-button" onclick="closeCartPanel(); document.getElementById('productos').scrollIntoView({behavior: 'smooth'});">
                    Ver Menú
                </button>
            </div>
        `;
        if (DOM.whatsappOrderBtn) DOM.whatsappOrderBtn.disabled = true;
    } else {
        DOM.cartItems.innerHTML = state.cart.map((item, index) => {
            const itemSubtotal = (item.price * item.quantity).toFixed(2);
            return `
                <div class="cart-item">
                    <div class="cart-item-img">
                        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" onerror="this.onerror=null; this.src='imagenes/productos/producto-01.jpg';">
                    </div>
                    <div class="cart-item-info">
                        <strong>${escapeHtml(item.name)}</strong>
                        <span class="cart-item-price">${CONFIG.currencySymbol}${itemSubtotal}</span>
                    </div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button type="button" class="qty-btn" data-action="minus" data-index="${index}" aria-label="Disminuir cantidad">−</button>
                            <span class="qty-number">${item.quantity}</span>
                            <button type="button" class="qty-btn" data-action="plus" data-index="${index}" aria-label="Aumentar cantidad">+</button>
                        </div>
                        <button type="button" class="remove-item-btn" data-action="remove" data-index="${index}" aria-label="Eliminar ${escapeHtml(item.name)} del carrito" title="Eliminar del carrito">🗑️</button>
                    </div>
                </div>
            `;
        }).join("");

        if (DOM.whatsappOrderBtn) DOM.whatsappOrderBtn.disabled = false;
    }

    // Actualizar resumen de precios
    if (DOM.cartSubtotal) DOM.cartSubtotal.textContent = `${CONFIG.currencySymbol}${subtotal.toFixed(2)}`;

    if (DOM.deliveryCost) {
        if (state.deliveryMode === "pickup") {
            DOM.deliveryCost.innerHTML = '<span style="color: var(--accent-green-dark); font-weight:700;">Retiro en Local ($0.00)</span>';
        } else if (subtotal >= CONFIG.freeShippingThreshold) {
            DOM.deliveryCost.innerHTML = '<span style="color: var(--accent-green-dark); font-weight:700;">¡GRATIS!</span>';
        } else {
            DOM.deliveryCost.textContent = `${CONFIG.currencySymbol}${deliveryFee.toFixed(2)}`;
        }
    }

    if (DOM.cartTotal) DOM.cartTotal.textContent = `${CONFIG.currencySymbol}${grandTotal.toFixed(2)}`;

    // Guía de pasos + mensaje de ayuda junto al botón de WhatsApp
    updateCheckoutGuidance();
}

/**
 * Actualiza en vivo el tracker de pasos (Pedido → Entrega → Enviar),
 * resalta los campos ya completados y muestra un aviso claro junto al
 * botón de WhatsApp cuando aún falta algo, para que el cliente siempre
 * sepa qué hacer y dónde está el botón de envío.
 */
function updateCheckoutGuidance() {
    const hasItems = state.cart.length > 0;
    const name = DOM.customerName ? DOM.customerName.value.trim() : "";
    const address = DOM.customerAddress ? DOM.customerAddress.value.trim() : "";
    const needsAddress = state.deliveryMode !== "pickup";
    const dataComplete = Boolean(name) && (!needsAddress || Boolean(address));

    // Resaltar campos completados
    if (DOM.customerName) DOM.customerName.classList.toggle("field-complete", Boolean(name));
    if (DOM.customerAddress) DOM.customerAddress.classList.toggle("field-complete", !needsAddress || Boolean(address));

    // Tracker de pasos
    if (DOM.trackerStep1) {
        DOM.trackerStep1.classList.toggle("done", hasItems);
        DOM.trackerStep1.classList.toggle("active", !hasItems);
    }
    if (DOM.trackerStep2) {
        DOM.trackerStep2.classList.toggle("done", hasItems && dataComplete);
        DOM.trackerStep2.classList.toggle("active", hasItems && !dataComplete);
    }
    if (DOM.trackerStep3) {
        DOM.trackerStep3.classList.toggle("active", hasItems && dataComplete);
    }

    // Aviso junto al botón de WhatsApp
    if (DOM.whatsappHelperHint) {
        DOM.whatsappHelperHint.style.display = (hasItems && !dataComplete) ? "block" : "none";
    }
}

function renderFreeShippingProgress(subtotal) {
    if (!DOM.shippingProgressFill || !DOM.shippingProgressText) return;

    if (state.deliveryMode === "pickup") {
        DOM.shippingProgressFill.style.width = "100%";
        DOM.shippingProgressText.innerHTML = "🏪 Pedido para <strong>Retiro en Local</strong> (Sin costo de envío)";
        return;
    }

    const threshold = CONFIG.freeShippingThreshold;
    const percentage = Math.min(100, Math.round((subtotal / threshold) * 100));
    DOM.shippingProgressFill.style.width = `${percentage}%`;

    if (subtotal >= threshold) {
        DOM.shippingProgressText.innerHTML = "🎉 ¡Felicidades! Tienes <strong>Envío GRATIS</strong> en esta orden";
    } else {
        const remaining = (threshold - subtotal).toFixed(2);
        DOM.shippingProgressText.innerHTML = `Agrega <strong>${CONFIG.currencySymbol}${remaining}</strong> más para tener <strong>Envío Gratis</strong> 🛵`;
    }
}

/* =====================================================
   PANEL LATERAL (DRAWER)
   ===================================================== */
function openCartPanel() {
    if (DOM.cartPanel && DOM.cartOverlay) {
        DOM.cartPanel.classList.add("active");
        DOM.cartOverlay.classList.add("active");
        document.body.classList.add("no-scroll");
    }
}

function closeCartPanel() {
    if (DOM.cartPanel && DOM.cartOverlay) {
        DOM.cartPanel.classList.remove("active");
        DOM.cartOverlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
}

/* =====================================================
   WHATSAPP & GENERADOR DE PEDIDO
   ===================================================== */
function createWhatsAppUrl(message) {
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function generateWhatsAppOrderMessage() {
    const customerName = DOM.customerName ? DOM.customerName.value.trim() : "";
    const customerAddress = DOM.customerAddress ? DOM.customerAddress.value.trim() : "";
    const paymentMethod = DOM.paymentMethod ? DOM.paymentMethod.value : "Efectivo";
    const orderNotes = DOM.orderNotes ? DOM.orderNotes.value.trim() : "";

    const subtotal = getCartSubtotal();
    const deliveryFee = getDeliveryFee();
    const total = getGrandTotal();

    let msg = "🌴 *PEDIDO - SABOR CARIBE* 🌴\n";
    msg += "━━━━━━━━━━━━━━━━━━━━━━\n";

    if (customerName) {
        msg += `👤 *Cliente:* ${customerName}\n`;
    }

    if (state.deliveryMode === "pickup") {
        msg += "🏪 *Modalidad:* Retiro en Local\n";
    } else {
        msg += "🛵 *Modalidad:* Entrega a Domicilio\n";
        if (customerAddress) {
            msg += `📍 *Dirección:* ${customerAddress}\n`;
        }
    }

    msg += `💳 *Método de Pago:* ${paymentMethod}\n`;

    if (orderNotes) {
        msg += `📝 *Notas Especiales:* ${orderNotes}\n`;
    }

    msg += "━━━━━━━━━━━━━━━━━━━━━━\n";
    msg += "📋 *DETALLE DEL PEDIDO:*\n";

    state.cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        msg += `• ${item.quantity}x ${item.name} ($${item.price.toFixed(2)}) ➜ $${itemTotal}\n`;
    });

    msg += "━━━━━━━━━━━━━━━━━━━━━━\n";
    msg += `💵 *Subtotal:* $${subtotal.toFixed(2)}\n`;

    if (state.deliveryMode === "delivery") {
        if (deliveryFee === 0) {
            msg += "🛵 *Envío:* ¡GRATIS!\n";
        } else {
            msg += `🛵 *Envío:* $${deliveryFee.toFixed(2)}\n`;
        }
    }

    msg += `💰 *TOTAL A PAGAR: $${total.toFixed(2)}*\n`;
    msg += "━━━━━━━━━━━━━━━━━━━━━━\n";
    msg += "¿Me pueden confirmar la disponibilidad y tiempo estimado de entrega? ¡Muchas gracias!";

    return msg;
}

function handleWhatsAppCheckout() {
    if (state.cart.length === 0) {
        showToast("⚠️ Agrega al menos un producto al carrito");
        return;
    }

    const name = DOM.customerName ? DOM.customerName.value.trim() : "";
    const address = DOM.customerAddress ? DOM.customerAddress.value.trim() : "";

    if (!name) {
        showToast("⚠️ Por favor ingresa tu nombre completo");
        scrollToCheckoutField(DOM.customerName);
        return;
    }

    if (state.deliveryMode === "delivery" && !address) {
        showToast("⚠️ Por favor ingresa la dirección de entrega");
        scrollToCheckoutField(DOM.customerAddress);
        return;
    }

    saveUserDataToStorage();

    const message = generateWhatsAppOrderMessage();
    const url = createWhatsAppUrl(message);

    window.open(url, "_blank");
}

/**
 * Lleva la vista (dentro del scroll único del carrito) hasta el campo
 * que falta completar y lo enfoca, para que el cliente lo vea de inmediato.
 */
function scrollToCheckoutField(field) {
    if (!field) return;
    field.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => field.focus(), 300);
}

/* =====================================================
   BÚSQUEDA Y FILTRADO DE PRODUCTOS
   ===================================================== */
function filterAndSearchProducts() {
    const query = state.searchQuery.toLowerCase().trim();
    const category = state.activeCategory;
    let visibleCount = 0;

    DOM.productCards.forEach(card => {
        const cardCategory = card.dataset.category || "";
        const name = (card.dataset.name || "").toLowerCase();
        const desc = (card.dataset.description || "").toLowerCase();

        const matchesCategory = (category === "todos" || cardCategory === category);
        const matchesSearch = (!query || name.includes(query) || desc.includes(query));

        if (matchesCategory && matchesSearch) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (DOM.noResults) {
        DOM.noResults.style.display = visibleCount === 0 ? "block" : "none";
    }

    if (DOM.clearSearchBtn) {
        DOM.clearSearchBtn.style.display = query.length > 0 ? "grid" : "none";
    }
}

function updateLiveCategoryCounts() {
    const counts = {
        todos: DOM.productCards.length,
        platos: 0,
        hamburguesas: 0,
        bebidas: 0,
        postres: 0
    };

    DOM.productCards.forEach(card => {
        const cat = card.dataset.category;
        if (counts[cat] !== undefined) {
            counts[cat]++;
        }
    });

    Object.keys(counts).forEach(cat => {
        const el = document.getElementById(`count-${cat}`);
        if (el) el.textContent = counts[cat];
    });
}

/* =====================================================
   ESTADO DE ATENCIÓN EN TIEMPO REAL
   ===================================================== */
function updateStoreOpenStatus() {
    if (!DOM.storeStatus) return;

    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour + (minutes / 60);

    // Horario: 11:30 a 23:00
    const isOpen = (currentTime >= 11.5 && currentTime <= 23.5);

    if (isOpen) {
        DOM.storeStatus.innerHTML = `
            <span class="pulse-dot"></span>
            <strong>Abierto ahora</strong>
            <span class="delivery-time">• Entregas en 25 - 40 min</span>
        `;
    } else {
        DOM.storeStatus.innerHTML = `
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#eab308;margin-right:6px;"></span>
            <strong>Tomando reservas</strong>
            <span class="delivery-time">• Abrimos 11:30 AM</span>
        `;
    }
}

/* =====================================================
   FLOATING CART & SCROLL OBSERVER
   ===================================================== */
function checkFloatingCartVisibility() {
    if (!DOM.floatingCartBtn) return;
    const hasItems = state.cart.length > 0;
    const scrolledPastHero = window.scrollY > 400;

    if (hasItems && scrolledPastHero) {
        DOM.floatingCartBtn.classList.add("visible");
    } else {
        DOM.floatingCartBtn.classList.remove("visible");
    }
}

/* =====================================================
   NOTIFICACIONES TOAST
   ===================================================== */
function showToast(message) {
    if (!DOM.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("toast-out");
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
    }, 2200);
}

/* =====================================================
   UTILIDADES
   ===================================================== */
function escapeHtml(text) {
    if (!text) return "";
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* =====================================================
   EVENT LISTENERS
   ===================================================== */
function bindEvents() {
    // Abrir/Cerrar Carrito
    if (DOM.openCartBtn) DOM.openCartBtn.addEventListener("click", openCartPanel);
    if (DOM.closeCartBtn) DOM.closeCartBtn.addEventListener("click", closeCartPanel);
    if (DOM.cartOverlay) DOM.cartOverlay.addEventListener("click", closeCartPanel);
    if (DOM.floatingCartBtn) DOM.floatingCartBtn.addEventListener("click", openCartPanel);

    // Botones de agregar producto
    DOM.addButtons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const price = Number(button.dataset.price);
            const image = button.dataset.image;

            if (!name || isNaN(price)) {
                showToast("⚠️ No se pudo agregar este plato");
                return;
            }

            addToCart(name, price, image);

            // Feedback visual temporal
            const originalText = button.innerHTML;
            button.classList.add("added");
            button.innerHTML = "<span>✓ ¡Agregado!</span>";
            setTimeout(() => {
                button.classList.remove("added");
                button.innerHTML = originalText;
            }, 1200);
        });
    });

    // Delegación de eventos dentro del Carrito (Sumar, Restar, Eliminar)
    if (DOM.cartItems) {
        DOM.cartItems.addEventListener("click", (e) => {
            const btn = e.target.closest("button[data-action]");
            if (!btn) return;

            const action = btn.dataset.action;
            const index = Number(btn.dataset.index);

            if (action === "plus") updateQuantity(index, 1);
            if (action === "minus") updateQuantity(index, -1);
            if (action === "remove") removeFromCart(index);
        });
    }

    // Modalidad de Entrega (Tabs: Delivery vs Retiro)
    if (DOM.tabDelivery && DOM.tabPickup) {
        DOM.tabDelivery.addEventListener("click", () => {
            state.deliveryMode = "delivery";
            DOM.tabDelivery.classList.add("active");
            DOM.tabPickup.classList.remove("active");
            if (DOM.addressGroup) DOM.addressGroup.style.display = "";
            renderCart();
        });

        DOM.tabPickup.addEventListener("click", () => {
            state.deliveryMode = "pickup";
            DOM.tabPickup.classList.add("active");
            DOM.tabDelivery.classList.remove("active");
            if (DOM.addressGroup) DOM.addressGroup.style.display = "none";
            renderCart();
        });
    }

    // Guía de pasos en vivo: se actualiza mientras el cliente escribe
    if (DOM.customerName) {
        DOM.customerName.addEventListener("input", updateCheckoutGuidance);
    }
    if (DOM.customerAddress) {
        DOM.customerAddress.addEventListener("input", updateCheckoutGuidance);
    }

    // Enviar pedido por WhatsApp
    if (DOM.whatsappOrderBtn) {
        DOM.whatsappOrderBtn.addEventListener("click", handleWhatsAppCheckout);
    }

    // Búsqueda en Vivo
    if (DOM.searchInput) {
        DOM.searchInput.addEventListener("input", (e) => {
            state.searchQuery = e.target.value;
            filterAndSearchProducts();
        });
    }

    if (DOM.clearSearchBtn) {
        DOM.clearSearchBtn.addEventListener("click", () => {
            DOM.searchInput.value = "";
            state.searchQuery = "";
            filterAndSearchProducts();
            DOM.searchInput.focus();
        });
    }

    if (DOM.resetSearchBtn) {
        DOM.resetSearchBtn.addEventListener("click", () => {
            DOM.searchInput.value = "";
            state.searchQuery = "";
            state.activeCategory = "todos";
            DOM.filterButtons.forEach(btn => {
                btn.classList.toggle("active", btn.dataset.filter === "todos");
            });
            filterAndSearchProducts();
        });
    }

    // Filtros de categoría
    DOM.filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            DOM.filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.activeCategory = btn.dataset.filter || "todos";
            filterAndSearchProducts();
        });
    });

    // Menú Móvil
    if (DOM.menuButton && DOM.mainNav) {
        DOM.menuButton.addEventListener("click", () => {
            const isOpen = DOM.mainNav.classList.toggle("open");
            DOM.menuButton.setAttribute("aria-expanded", String(isOpen));
        });

        DOM.mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                DOM.mainNav.classList.remove("open");
                DOM.menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Tecla Escape para cerrar modales
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCartPanel();
            if (DOM.mainNav) DOM.mainNav.classList.remove("open");
        }
    });

    // Scroll Events (Sticky Header & Floating Cart)
    window.addEventListener("scroll", () => {
        if (DOM.siteHeader) {
            DOM.siteHeader.classList.toggle("scrolled", window.scrollY > 30);
        }
        checkFloatingCartVisibility();
    }, { passive: true });

    // Guardar cambios en inputs del usuario
    if (DOM.customerName) DOM.customerName.addEventListener("change", saveUserDataToStorage);
    if (DOM.customerAddress) DOM.customerAddress.addEventListener("change", saveUserDataToStorage);
    if (DOM.paymentMethod) DOM.paymentMethod.addEventListener("change", saveUserDataToStorage);
}

// Iniciar app al cargar el DOM
document.addEventListener("DOMContentLoaded", init);
if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
}
