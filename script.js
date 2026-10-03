// =====================================================
// CONFIGURACIÓN DE LA TIENDA
// =====================================================
const PHONE_NUMBER = "18494268576";
const SERVER_NAME = "Dream Y0002 NA";
const VENDOR_NAME = "AegonTargaryen9";
const PRICE_PER_1M_LINKS = 1.00;
const STORAGE_KEY = "oh_market_cart_v1";
const LANG_STORAGE_KEY = "oh_market_lang";

// =====================================================
// DICCIONARIO DE INTERNACIONALIZACIÓN (i18n)
// =====================================================
const TRANSLATIONS = {
  es: {
    // Nav & Hero
    nav_tagline: "Deviants y Energy Links sin esperas",
    hero_badge: "Tienda Oficial Once Human",
    hero_desc: "Domina el servidor <strong>Dream Y0002 NA</strong> con el mejor equipamiento, Deviants de combate de máximo nivel y Energy Links al mejor precio del mercado.",
    hero_server_label: "Servidor:",
    btn_catalog: "Ver Catálogo Deviants",
    btn_calculator: "Calculadora de Links",

    // Calculadora
    calc_title: "Calculadora de Energy Links",
    calc_subtitle: "Cotiza al instante la cantidad de links que necesitas y pide directo por WhatsApp.",
    calc_amount_label: "Cantidad de Energy Links:",
    calc_placeholder: "Ej: 1000000",
    calc_est_price: "Precio estimado:",
    calc_note: "Tasa: $1.00 USD por cada 1,000,000 Energy Links.",
    btn_order_links: "Ordenar Energy Links por WhatsApp",
    calc_invalid_alert: "Por favor ingresa una cantidad válida de Energy Links.",
    wa_links_msg: (vendor, amount, server, price) =>
      `Hola ${vendor}, quiero comprar ${amount} Energy Links en el servidor ${server}. Precio estimado: ${price}. ¿Tienes disponibilidad para entrega inmediata?`,

    // Catálogo
    catalog_title: "Catálogo de Deviants Disponibles",
    catalog_subtitle: "Deviants de alto nivel listos para transferir de inmediato en Dream Y0002 NA",
    search_placeholder: "Buscar Deviant por nombre o descripción (ej: Lobo, Wish, Sol...)",
    filter_all: "Todos",
    filter_starfall: "Starfall",
    filter_lunar: "Lunar",
    filter_caos: "Caos",
    filter_aberrante: "Aberrante",
    filter_infrasonicos: "Infrasónicos",
    filter_otros: "Otros Deviants",
    available_badge: "Disponible",
    btn_add: "Agregar",
    aria_add: "Agregar {name} al pedido",
    results_count: (count) => `${count} Deviants disponibles`,
    toolbar_updated: "Actualizado para Dream Y0002 NA",
    no_results_title: "No se encontraron Deviants",
    no_results_desc: (query) => `No hay coincidencias para "<strong>${query}</strong>" en esta categoría.`,
    btn_show_all: "Mostrar todos",

    // Carrito
    cart_title: "Tu Pedido de Deviants",
    cart_subtitle: "Selecciona los Deviants que deseas y envía la lista completa por WhatsApp.",
    cart_selected_count: (count) => `${count} ${count === 1 ? 'seleccionado' : 'seleccionados'}`,
    cart_clear_title: "Vaciar lista",
    cart_clear_btn: "Vaciar",
    cart_empty_text: "No has agregado Deviants a tu pedido todavía. ¡Haz clic en <strong>Agregar</strong> en las tarjetas de abajo!",
    cart_total_label: "Total estimado:",
    btn_send_cart: "Enviar Pedido por WhatsApp",
    cart_confirm_clear: "¿Deseas vaciar todos los Deviants seleccionados?",
    cart_added_toast: (name) => `¡${name} añadido al pedido!`,
    floating_cart_view: "Ver Pedido",
    floating_cart_items: (count) => `${count} ${count === 1 ? 'item' : 'items'}`,
    wa_cart_header: (vendor, server) => `¡Hola ${vendor}! Quiero realizar el siguiente pedido de Deviants en el servidor *${server}*:\n\n`,
    wa_cart_footer: (totalItems, totalUSD) => `\n📦 Total de Deviants: ${totalItems}\n💰 Monto Total: *${totalUSD}*\n\n¿Los tienes listos para transferir in-game?`,

    // Pasos
    steps_title: "¿Cómo Funciona la Compra?",
    steps_subtitle: "Proceso transparente, rápido y 100% seguro dentro del juego.",
    step1_title: "1. Arma tu Pedido",
    step1_desc: "Selecciona tus Deviants o calcula tus Energy Links y pulsa en el botón de WhatsApp.",
    step2_title: "2. Confirma y Paga",
    step2_desc: "Acordamos disponibilidad por chat y realizas el pago por tu método preferido.",
    step3_title: "3. Entrega In-Game",
    step3_desc: "Nos coordinamos en el servidor <strong>Dream Y0002 NA</strong> y recibes tus ítems de inmediato.",

    // Garantías
    feat1_title: "Seguridad 100%",
    feat1_desc: "Transacciones directas dentro del juego en el servidor Dream Y0002 NA sin riesgos.",
    feat2_title: "Entrega Rápida",
    feat2_desc: "Coordinación inmediata por WhatsApp una vez verificado el pedido.",
    feat3_title: "Atención Directa",
    feat3_desc: "Trato directo con AegonTargaryen9 sin intermediarios ni comisiones extra.",

    // Footer
    footer_title: "¿Tienes alguna duda o buscas un Deviant especial?",
    footer_desc: "Escríbeme por WhatsApp y coordinamos tu entrega en <strong>Dream Y0002 NA</strong> al instante.",
    footer_btn: "Hablar con Soporte por WhatsApp",
    footer_copy: "© 2026 Once Human Market • Dream Y0002 NA Trading Store.",
    wa_footer_text: "Hola AegonTargaryen9, quiero informacion sobre tus servicios en Once Human",

    // Modal
    modal_close_aria: "Cerrar imagen"
  },

  en: {
    // Nav & Hero
    nav_tagline: "Deviants & Energy Links with zero wait",
    hero_badge: "Official Once Human Store",
    hero_desc: "Dominate the <strong>Dream Y0002 NA</strong> server with top-tier gear, max-level combat Deviants, and Energy Links at the best market price.",
    hero_server_label: "Server:",
    btn_catalog: "Browse Deviants Catalog",
    btn_calculator: "Links Calculator",

    // Calculadora
    calc_title: "Energy Links Calculator",
    calc_subtitle: "Instantly quote the links you need and order directly via WhatsApp.",
    calc_amount_label: "Energy Links Amount:",
    calc_placeholder: "e.g. 1000000",
    calc_est_price: "Estimated price:",
    calc_note: "Rate: $1.00 USD per 1,000,000 Energy Links.",
    btn_order_links: "Order Energy Links via WhatsApp",
    calc_invalid_alert: "Please enter a valid amount of Energy Links.",
    wa_links_msg: (vendor, amount, server, price) =>
      `Hello ${vendor}, I would like to buy ${amount} Energy Links on the ${server} server. Estimated price: ${price}. Do you have immediate availability?`,

    // Catálogo
    catalog_title: "Available Deviants Catalog",
    catalog_subtitle: "High-level Deviants ready for immediate in-game transfer on Dream Y0002 NA",
    search_placeholder: "Search Deviant by name or description (e.g. Wolf, Wish, Sun...)",
    filter_all: "All",
    filter_starfall: "Starfall",
    filter_lunar: "Lunar",
    filter_caos: "Chaos",
    filter_aberrante: "Aberrant",
    filter_infrasonicos: "Infrasonic",
    filter_otros: "Other Deviants",
    available_badge: "Available",
    btn_add: "Add",
    aria_add: "Add {name} to order",
    results_count: (count) => `${count} Deviants available`,
    toolbar_updated: "Updated for Dream Y0002 NA",
    no_results_title: "No Deviants Found",
    no_results_desc: (query) => `No matches found for "<strong>${query}</strong>" in this category.`,
    btn_show_all: "Show all",

    // Carrito
    cart_title: "Your Deviants Order",
    cart_subtitle: "Select the Deviants you want and send the full list via WhatsApp.",
    cart_selected_count: (count) => `${count} ${count === 1 ? 'selected' : 'selected'}`,
    cart_clear_title: "Clear list",
    cart_clear_btn: "Clear",
    cart_empty_text: "You haven't added Deviants to your order yet. Click <strong>Add</strong> on the cards below!",
    cart_total_label: "Estimated total:",
    btn_send_cart: "Send Order via WhatsApp",
    cart_confirm_clear: "Do you want to clear all selected Deviants?",
    cart_added_toast: (name) => `Added ${name} to order!`,
    floating_cart_view: "View Order",
    floating_cart_items: (count) => `${count} ${count === 1 ? 'item' : 'items'}`,
    wa_cart_header: (vendor, server) => `Hello ${vendor}! I would like to place the following Deviants order on the *${server}* server:\n\n`,
    wa_cart_footer: (totalItems, totalUSD) => `\n📦 Total Deviants: ${totalItems}\n💰 Total Amount: *${totalUSD}*\n\nAre they ready for in-game transfer?`,

    // Pasos
    steps_title: "How Does Ordering Work?",
    steps_subtitle: "Transparent, fast, and 100% secure in-game process.",
    step1_title: "1. Build Your Order",
    step1_desc: "Select your Deviants or calculate your Energy Links and click the WhatsApp button.",
    step2_title: "2. Confirm & Pay",
    step2_desc: "We confirm stock via chat and you pay through your preferred method.",
    step3_title: "3. In-Game Delivery",
    step3_desc: "We coordinate on the <strong>Dream Y0002 NA</strong> server and you receive your items immediately.",

    // Garantías
    feat1_title: "100% Secure",
    feat1_desc: "Direct, risk-free in-game transactions on the Dream Y0002 NA server.",
    feat2_title: "Fast Delivery",
    feat2_desc: "Immediate WhatsApp coordination once the order is verified.",
    feat3_title: "Direct Support",
    feat3_desc: "Direct deal with AegonTargaryen9 with zero intermediaries or hidden fees.",

    // Footer
    footer_title: "Have any questions or looking for a special Deviant?",
    footer_desc: "Message me on WhatsApp and we will coordinate your delivery on <strong>Dream Y0002 NA</strong> instantly.",
    footer_btn: "Chat with Support on WhatsApp",
    footer_copy: "© 2026 Once Human Market • Dream Y0002 NA Trading Store.",
    wa_footer_text: "Hello AegonTargaryen9, I would like information about your Once Human services",

    // Modal
    modal_close_aria: "Close image"
  }
};

let currentLang = "es";

function t(key) {
  if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key] !== undefined) {
    return TRANSLATIONS[currentLang][key];
  }
  if (TRANSLATIONS.es && TRANSLATIONS.es[key] !== undefined) {
    return TRANSLATIONS.es[key];
  }
  return key;
}

// =====================================================
// CATÁLOGO COMPLETO DE DEVIANTS (BILINGÜE)
// =====================================================
const DEVIANTS_DATA = [
  // --- STARFALL ---
  {
    id: "medusa-polar",
    name: "Medusa Polar",
    name_en: "Polar Jelly - Starfall Inversion",
    category: "Starfall",
    price: 15,
    img: "Medusa Polar.jpeg",
    desc: "Deviant Starfall exclusivo de alto rendimiento.",
    desc_en: "Can participate in combat to deal Ice DMG to a large area.",
    highlight: "Top Starfall",
    highlight_en: "Top Starfall"
  },
  {
    id: "vudu",
    name: "Vudú",
    name_en: "Voodoo Doll - Starfall Inversion",
    category: "Starfall",
    price: 15,
    img: "Vudú.jpeg",
    desc: "Deviant Starfall versátil para combate y control.",
    desc_en: "Can participate in combat, sharing damage received by its master or possessing enemies.",
    highlight: "Popular",
    highlight_en: "Popular"
  },
  {
    id: "sol",
    name: "Sol",
    name_en: "Invincible Sun - Starfall Inversion",
    category: "Starfall",
    price: 15,
    img: "Sol.jpeg",
    desc: "Deviant Starfall radiante de gran potencia.",
    desc_en: "Can participate in combat to periodically release blazing energy rays, inflicting continuous Burn DMG.",
    highlight: "Top Tier",
    highlight_en: "Top Tier"
  },
  {
    id: "zapamandra",
    name: "Zapamandra",
    name_en: "Zapamander - Gravity Abyss",
    category: "Starfall",
    price: 15,
    img: "Zapamandra.jpeg",
    desc: "Deviant Starfall elemental eléctrico letal.",
    desc_en: "Can participate in combat to summon thunderclouds to strike enemies and enhance electrical damage.",
    highlight: "Nuevo",
    highlight_en: "New"
  },
  {
    id: "minicomilon-starfall",
    name: "Minicomilón",
    name_en: "Mini Feaster - Starfall Inversion",
    category: "Starfall",
    price: 15,
    img: "Minicomilón.jpeg",
    desc: "Deviant Starfall de recolección y asistencia.",
    desc_en: "Can participate in combat, marking enemies or summoning tentacles to attack them.",
    highlight: "Destacado",
    highlight_en: "Featured"
  },

  // --- LUNAR ---
  {
    id: "lobo",
    name: "Lobo",
    name_en: "Lonewolf's Whisper - Lunar Oracle",
    category: "Lunar",
    price: 15,
    img: "Lobo.jpeg",
    desc: "Deviant Lunar de agilidad y ataque veloz.",
    desc_en: "Can participate in combat. Will transform into a black wolf and attack enemies.",
    highlight: "Top Combate",
    highlight_en: "Top Combat"
  },
  {
    id: "camara",
    name: "Cámara",
    name_en: "ZapCam - Lunar Oracle",
    category: "Lunar",
    price: 15,
    img: "Cámara.jpeg",
    desc: "Deviant Lunar de soporte estratégico y visión.",
    desc_en: "Can participate in combat to constantly photograph nearby enemies, increasing Weapon DMG received.",
    highlight: "Utilidad",
    highlight_en: "Utility"
  },
  {
    id: "pyro-dino",
    name: "Pyro Dino",
    name_en: "Pyro Dino - Lunar Oracle",
    category: "Lunar",
    price: 15,
    img: "Pirodino.jpeg",
    desc: "Deviant Lunar con daño ígneo en área continuo.",
    desc_en: "Can participate in combat to breathe fire and inflict continuous Burn DMG.",
    highlight: "Daño Fuego",
    highlight_en: "Fire Damage"
  },
  {
    id: "hada-nieves",
    name: "Hada de las Nieves",
    name_en: "Snowsprite - Lunar Oracle",
    category: "Lunar",
    price: 15,
    img: "Hada de las nieves.jpeg",
    desc: "Deviant Lunar con congelación y ralentización táctica.",
    desc_en: "Can participate in combat to summon fragile frost crystals that explode upon shattering for Frost DMG.",
    highlight: "Control Frío",
    highlight_en: "Cold Control"
  },
  {
    id: "zenopurificador",
    name: "Zenopurificador",
    name_en: "Zeno-Purifier - Lunar Oracle",
    category: "Lunar",
    price: 15,
    img: "Zenopurificador.jpeg",
    desc: "Deviant Lunar de purificación y soporte de territorio.",
    desc_en: "Can participate in combat. Grants its owner quick-draw attacks with a shadowy blade.",
    highlight: "Territorio",
    highlight_en: "Territory"
  },
  {
    id: "mariposa-lunar",
    name: "Mariposa Lunar",
    name_en: "Butterfly's Emissary - Starry Night",
    category: "Lunar",
    price: 10,
    img: "Mariposa Lunar.jpeg",
    desc: "Deviant Lunar ágil y ligera para apoyo inicial.",
    desc_en: "Can participate in combat to mark enemy Weakspots, increasing the damage they receive.",
    highlight: "Económico",
    highlight_en: "Budget Pick"
  },

  // --- CAOS ---
  {
    id: "hada-caos",
    name: "Hada del Caos",
    name_en: "Chaos Snowsprite",
    category: "Caos",
    price: 15,
    img: "hada del caos.jpg",
    desc: "Deviant Caos con habilidades impredecibles de combate.",
    desc_en: "Chaos variant with high Dex value, summoning devastating exploding frost crystals.",
    highlight: "Caos Especial",
    highlight_en: "Special Chaos"
  },
  {
    id: "mini-maravilla",
    name: "Mini Maravilla del Caos",
    name_en: "Chaos Mini Wonder",
    category: "Caos",
    price: 15,
    img: "minimaravilla.webp",
    desc: "Deviant Caos compacto de gran poder ofensivo.",
    desc_en: "Chaos variant with high Dex value, absorbing enemy gunfire and retaliating with high power.",
    highlight: "Alta Potencia",
    highlight_en: "High Power"
  },
  {
    id: "mr-wish-caos",
    name: "Mr. Wish del Caos",
    name_en: "Chaos Mr. Wish",
    category: "Caos",
    price: 15,
    img: "mr_wish.jpg",
    desc: "Deviant Caos que desata proyectiles continuos.",
    desc_en: "Chaos variant with high Dex value, using firearms to unleash rapid-fire attacks and apply The Bull's Eye.",
    highlight: "Tirador",
    highlight_en: "Sharpshooter"
  },
  {
    id: "chaosaurus",
    name: "Chaosaurus",
    name_en: "Chaosaurus",
    category: "Caos",
    price: 15,
    img: "Chaosaurus.jpeg",
    desc: "Deviant Caos prehistórico de ataque feroz.",
    desc_en: "Prehistoric Chaos Deviation that participates in combat to breathe devastating fire.",
    highlight: "Fuerza Bruta",
    highlight_en: "Brute Force"
  },

  // --- ABERRANTE ---
  {
    id: "rebecca-aberrante",
    name: "Rebecca Aberrante",
    name_en: "Rebecca - Aberrant Progeny",
    category: "Aberrante",
    price: 15,
    img: "Rebecca aberrante.jpeg",
    desc: "Deviant Aberrante de élite con gran sinergia de combate.",
    desc_en: "Can summon the avatar of \"her\" to comfort and soothe other Deviations.",
    highlight: "Elite",
    highlight_en: "Elite"
  },
  {
    id: "dr-osito-aberrante",
    name: "Dr. Osito Aberrante",
    name_en: "Dr. Teddy - Aberrant Progeny",
    category: "Aberrante",
    price: 15,
    img: "Dr Osito Aberrante.jpeg",
    desc: "Deviant Aberrante con soporte de tanque y curación.",
    desc_en: "Can participate in combat to heal or rescue fallen Meta-Humans with increased resilience.",
    highlight: "Tanque/Soporte",
    highlight_en: "Tank / Support"
  },

  // --- OTROS DEVIANTS ---
  {
    id: "invocador-almas",
    name: "Invocador de Almas",
    name_en: "Soul Summoner",
    category: "Otros",
    price: 10,
    img: "Invocador de almas.jpeg",
    desc: "Deviant místico invocador de refuerzos espirituales.",
    desc_en: "Can participate in combat to weaken enemies with cursed arrows, increasing Weapon DMG.",
    highlight: "Invocación",
    highlight_en: "Summoner"
  },
  {
    id: "alterador-espacio",
    name: "Alterador de espacio",
    name_en: "Space Turner",
    category: "Otros",
    price: 10,
    img: "Alterador de espacio.jpeg",
    desc: "Deviant especializado en alterar el espacio a su alrededor.",
    desc_en: "Deviant specialized in altering the space around it.",
    highlight: "Nuevo",
    highlight_en: "New"
  },
  {
    id: "begimo",
    name: "Bégimo",
    name_en: "Behemoth",
    category: "Otros",
    price: 10,
    img: "begimo.jpeg",
    desc: "Deviant colosal de alta resistencia física.",
    desc_en: "A loyal companion for George. High-durability guardian construct.",
    highlight: "Defensivo",
    highlight_en: "Defensive"
  },
  {
    id: "caballero-plateado",
    name: "Caballero Plateado",
    name_en: "Nutcracker - Silver Knight",
    category: "Otros",
    price: 10,
    img: "Caballero Plateado.jpeg",
    desc: "Deviant acorazado ideal para choque frontal.",
    desc_en: "Operates in the territory to defend it from invaders with stalwart armored combat.",
    highlight: "Armadura",
    highlight_en: "Armor"
  },
  {
    id: "mr-wish-rex",
    name: "Mr. Wish Rex",
    name_en: "Mr. Wish - Chefosaurus Rex Warrior",
    category: "Otros",
    price: 10,
    img: "Mr Wish Rex.jpeg",
    desc: "Deviant clásico con bonificación de disparo y precisión.",
    desc_en: "Can participate in combat to use guns to attack and apply The Bull's Eye on enemies.",
    highlight: "Rango",
    highlight_en: "Ranged"
  },
  {
    id: "george-el-valiente",
    name: "George el Valiente",
    name_en: "Brave George",
    category: "Otros",
    price: 10,
    img: "George el Valiente.jpeg",
    desc: "Deviant valeroso que potencia el daño del jugador.",
    desc_en: "A loyal companion for Metas, boosting player status effects and combat prowess.",
    highlight: "Buff Daño",
    highlight_en: "Damage Buff"
  },
  {
    id: "ballenato",
    name: "Ballenato",
    name_en: "Whalepup",
    category: "Otros",
    price: 10,
    img: "Ballenato.jpeg",
    desc: "Deviant acuático de apoyo y utilidad en base.",
    desc_en: "Can participate in combat, transforming the battlefield into an underwater world that drowns enemies.",
    highlight: "Utilidad",
    highlight_en: "Utility"
  },
  {
    id: "lobo-radiante",
    name: "Lobo Radiante",
    name_en: "Lonewolf's Whisper - Radiant Variant",
    category: "Otros",
    price: 10,
    img: "Lobo Radiante.jpeg",
    desc: "Deviant veloz con efectos lumínicos de asistencia.",
    desc_en: "Can participate in combat. Will transform into a black wolf and attack enemies.",
    highlight: "Velocidad",
    highlight_en: "Speed"
  },
  {
    id: "vudu-esponjoso",
    name: "Vudú Esponjoso",
    name_en: "Voodoo Doll - Fluffy Curse",
    category: "Otros",
    price: 10,
    img: "Vudú Esponjoso.jpeg",
    desc: "Deviant de mitigación de daño y resistencia aumentada.",
    desc_en: "Can participate in combat, sharing damage received by its master or possessing enemies.",
    highlight: "Resistencia",
    highlight_en: "Durability"
  },
  {
    id: "sol-infrasonico",
    name: "Sol Infrasónico",
    name_en: "Invincible Sun - Infrasonic Illusion",
    category: "Infrasonicos",
    price: 10,
    img: "Sol infrasonico.jpeg",
    desc: "Deviant de ondas sónicas devastadoras en área.",
    desc_en: "Can participate in combat to periodically release blazing energy rays inflicting Burn DMG.",
    highlight: "Daño Sónico",
    highlight_en: "Burn / Sonic"
  },
  {
    id: "mariposa-azul",
    name: "Mariposa Azul",
    name_en: "Butterfly's Emissary - Glistening Blue",
    category: "Otros",
    price: 10,
    img: "Mariposa Azul.jpeg",
    desc: "Deviant clásico de distracción y apoyo básico.",
    desc_en: "Can participate in combat to mark enemy Weakspots, increasing the damage they receive.",
    highlight: "Básico",
    highlight_en: "Basic"
  },
  {
    id: "minicomilon-devorador",
    name: "Minicomilón - Devorador de Estrellas",
    name_en: "Mini Feaster - Star Devourer",
    category: "Otros",
    price: 10,
    img: "minicomilon_devorador_estrellas.jpeg",
    desc: "Deviant especial de recolección acelerada de recursos.",
    desc_en: "Can participate in combat, marking enemies or summoning tentacles to attack them.",
    highlight: "Farmeo",
    highlight_en: "Farming"
  },
  {
    id: "gel-supurante",
    name: "Gel Supurante: Estrella Marina",
    name_en: "Festering Gel - Marine Star",
    category: "Otros",
    price: 10,
    img: "Gel sulpurante estrella marina.jpeg",
    desc: "Deviant gelatinoso de cobertura y regeneración de cordura.",
    desc_en: "Can participate in combat to transform into shelter and block enemy attacks while recovering Sanity.",
    highlight: "Cordura",
    highlight_en: "Sanity"
  },
  {
    id: "cuenco-reconfortante",
    name: "Cuenco Reconfortante",
    name_en: "Hug-in-a-Bowl",
    category: "Otros",
    price: 10,
    img: "Cuenco reconfortante.jpeg",
    desc: "Deviant de soporte culinario y nutrición en territorio.",
    desc_en: "Produces special ingredients to cook unique dishes. Used to recover Sanity in territory.",
    highlight: "Comida",
    highlight_en: "Food"
  },
  {
    id: "cocinosaurio-rex",
    name: "Cocinosaurio Rex",
    name_en: "Chefosaurus Rex",
    category: "Otros",
    price: 10,
    img: "Cocinosaurio Rex.jpeg",
    desc: "Deviant experto en cocina y buffs gastronómicos.",
    desc_en: "Operates in the territory to assist in cooking and producing enhanced food dishes.",
    highlight: "Cocina",
    highlight_en: "Chef"
  },
  {
    id: "munecooo",
    name: "Muñeco de papel infrasónico",
    name_en: "Paper Doll - Infrasonic Illusion",
    category: "Infrasonicos",
    price: 10,
    img: "munecooo.jpeg",
    desc: "Deviant de apoyo con habilidades de resonancia infrasónica.",
    desc_en: "Operates in the territory. Discovers lost materials while cleaning and maintaining base.",
    highlight: "Nuevo",
    highlight_en: "New"
  },
  {
    id: "bolita",
    name: "Bola de nieve infrasónica",
    name_en: "Snow Globe - Infrasonic Illusion",
    category: "Infrasonicos",
    price: 10,
    img: "bolita.jpeg",
    desc: "Deviant infrasónico que utiliza el frío para controlar el combate.",
    desc_en: "Infrasonic Deviant that uses frost to control the battlefield.",
    highlight: "Nuevo",
    highlight_en: "New"
  },
  {
    id: "conejito",
    name: "Conejo recolector infrasónico",
    name_en: "Gathering Rabbit - Infrasonic Illusion",
    category: "Infrasonicos",
    price: 10,
    img: "conejito.jpeg",
    desc: "Deviant infrasónico que recolecta recursos para el territorio.",
    desc_en: "Infrasonic Deviant that gathers resources for the territory.",
    highlight: "Nuevo",
    highlight_en: "New"
  },
  {
    id: "cachorrito",
    name: "Cachorro amigable infrasónico",
    name_en: "Friendly Puppy - Infrasonic Illusion",
    category: "Infrasonicos",
    price: 10,
    img: "cachorrito.jpeg",
    desc: "Deviant infrasónico amistoso de compañía y apoyo.",
    desc_en: "Friendly Infrasonic Deviant focused on companionship and support.",
    highlight: "Nuevo",
    highlight_en: "New"
  },
  {
    id: "cascanueces-infrasonico",
    name: "Cascanueces -infrasónico",
    name_en: "Nutcracker - Infrasonic Illusion",
    category: "Infrasonicos",
    price: 10,
    img: "cascanuecesinfra.jpeg",
    desc: "Deviant infrasónico de territorio que defiende tu base contra invasores.",
    desc_en: "Operates in the territory. Infrasonic variant that defends your base with sonic attacks.",
    highlight: "Nuevo",
    highlight_en: "New"
  },
  {
    id: "encendedor-atomico-infrasonico",
    name: "Encendedor atomico- infrasónico",
    name_en: "Atomic Lighter - Infrasonic Illusion",
    category: "Infrasonicos",
    price: 10,
    img: "encendedor.jpeg",
    desc: "Deviant infrasónico de combate con detonación nuclear táctica.",
    desc_en: "Can participate in combat to trigger a powerful nuclear explosion and sonic waves.",
    highlight: "Nuevo",
    highlight_en: "New"
  },
  {
    id: "alterador-espacio-infrasonico",
    name: "Alterador de espacio - infrasónico",
    name_en: "Space Turner - Infrasonic Illusion",
    category: "Infrasonicos",
    price: 10,
    img: "cubitoinfra.jpeg",
    desc: "Deviant infrasónico especializado en distorsionar y alterar el espacio.",
    desc_en: "Infrasonic Deviant specialized in altering the space around it.",
    highlight: "Nuevo",
    highlight_en: "New"
  },
  {
    id: "conejo",
    name: "Conejo",
    name_en: "Lethal Rabbit",
    category: "Otros",
    price: 10,
    img: "Conejo.jpeg",
    desc: "Deviant ágil de apoyo y utilidad.",
    desc_en: "Operates in the territory. Can hunt animals to harvest meat and animal hides.",
    highlight: "Nuevo",
    highlight_en: "New"
  },
  {
    id: "abeja",
    name: "Abeja",
    name_en: "Buzzy Bee - Radiant Flourish",
    category: "Otros",
    price: 10,
    img: "Abeja.jpeg",
    desc: "Deviant de apoyo con gran movilidad.",
    desc_en: "Operates in the territory to increase the probability of crop mutation.",
    highlight: "Nuevo",
    highlight_en: "New"
  }
];

function getDeviantName(deviant, lang = currentLang) {
  if (lang === 'en' && deviant.name_en) return deviant.name_en;
  return deviant.name;
}

function getDeviantDesc(deviant, lang = currentLang) {
  if (lang === 'en' && deviant.desc_en) return deviant.desc_en;
  return deviant.desc;
}

function getDeviantHighlight(deviant, lang = currentLang) {
  if (lang === 'en' && deviant.highlight_en) return deviant.highlight_en;
  return deviant.highlight;
}

function getDeviantCategory(category, lang = currentLang) {
  const cat = (category || "").toLowerCase();
  if (lang === 'en') {
    if (cat === 'caos') return 'Chaos';
    if (cat === 'aberrante') return 'Aberrant';
    if (cat === 'infrasonicos') return 'Infrasonic';
    if (cat === 'otros') return 'Other';
    return category;
  }
  if (cat === 'infrasonicos') return 'Infrasónicos';
  return category;
}

// =====================================================
// ESTADO GLOBAL
// =====================================================
let currentFilter = "all";
let currentSearchQuery = "";
let deviantsCart = [];

// =====================================================
// UTILIDADES DE FORMATO
// =====================================================
function formatUSD(value) {
  return `$${Number(value).toFixed(2)} USD`;
}

function formatNumber(num) {
  return Number(num).toLocaleString(currentLang === 'en' ? 'en-US' : 'es-ES');
}

// =====================================================
// SISTEMA DE IDIOMA Y TRADUCCIÓN DEL DOM
// =====================================================
function updateDOMTranslations() {
  document.documentElement.lang = currentLang;

  // Actualizar textos normales con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = t(key);
    if (text) {
      el.innerHTML = text;
    }
  });

  // Actualizar placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const text = t(key);
    if (text) {
      el.placeholder = text;
    }
  });

  // Actualizar titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    const text = t(key);
    if (text) {
      el.title = text;
    }
  });

  // Actualizar aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    const text = t(key);
    if (text) {
      el.setAttribute('aria-label', text);
    }
  });

  // Actualizar botón de WhatsApp de soporte en footer
  const btnWhatsappFooter = document.getElementById('btnWhatsappFooter');
  if (btnWhatsappFooter) {
    const waFooterMsg = encodeURIComponent(t('wa_footer_text'));
    btnWhatsappFooter.href = `https://wa.me/${PHONE_NUMBER}?text=${waFooterMsg}`;
  }

  // Actualizar botones del selector de idioma
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') return;
  currentLang = lang;

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    console.warn("No se pudo guardar el idioma en localStorage:", e);
  }

  updateDOMTranslations();
  renderCatalog();
  renderCart();
  calculatePrice();
}

function initLanguage() {
  let savedLang = null;
  try {
    savedLang = localStorage.getItem(LANG_STORAGE_KEY);
  } catch (e) {
    console.warn("No se pudo leer el idioma de localStorage:", e);
  }

  if (savedLang === 'en' || savedLang === 'es') {
    currentLang = savedLang;
  } else {
    currentLang = 'es';
  }

  updateDOMTranslations();

  // Escuchar eventos en los botones del selector de idioma
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });
}

// =====================================================
// PERSISTENCIA LOCALSTORAGE DEL CARRITO
// =====================================================
function saveCartToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deviantsCart));
  } catch (e) {
    console.warn("No se pudo guardar el carrito en localStorage:", e);
  }
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        deviantsCart = parsed;
      }
    }
  } catch (e) {
    console.warn("No se pudo cargar el carrito:", e);
    deviantsCart = [];
  }
}

// =====================================================
// CALCULADORA DE ENERGY LINKS
// =====================================================
const linkAmountInput = document.getElementById('linkAmount');
const totalPriceEl = document.getElementById('totalPrice');
const btnOrderLinks = document.getElementById('btnOrderLinks');
const quickBtns = document.querySelectorAll('.btn-quick-amount');

function calculatePrice() {
  if (!linkAmountInput || !totalPriceEl) return;

  const amount = parseFloat(linkAmountInput.value) || 0;
  const total = (amount / 1000000) * PRICE_PER_1M_LINKS;

  totalPriceEl.textContent = formatUSD(total);
}

if (linkAmountInput) {
  linkAmountInput.addEventListener('input', calculatePrice);
  calculatePrice();
}

if (quickBtns.length > 0) {
  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const addVal = parseInt(btn.dataset.amount, 10) || 0;
      if (btn.dataset.mode === "set") {
        linkAmountInput.value = addVal;
      } else {
        const currentVal = parseInt(linkAmountInput.value, 10) || 0;
        linkAmountInput.value = currentVal + addVal;
      }
      calculatePrice();
      pulseElement(linkAmountInput);
    });
  });
}

if (btnOrderLinks) {
  btnOrderLinks.addEventListener('click', () => {
    const rawVal = parseFloat(linkAmountInput?.value) || 0;
    const price = totalPriceEl ? totalPriceEl.textContent : "$0.00 USD";

    if (rawVal <= 0) {
      alert(t('calc_invalid_alert'));
      linkAmountInput?.focus();
      return;
    }

    const formattedAmount = formatNumber(rawVal);
    const message = TRANSLATIONS[currentLang].wa_links_msg(VENDOR_NAME, formattedAmount, SERVER_NAME, price);

    const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  });
}

// =====================================================
// RENDERIZADO DEL CATÁLOGO DE DEVIANTS
// =====================================================
const cardsGrid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchDeviants');
const filterBtns = document.querySelectorAll('.filter-btn');
const resultsCountEl = document.getElementById('resultsCount');

function getFilteredDeviants() {
  return DEVIANTS_DATA.filter(item => {
    // Filtro de categoría
    const matchesCategory = currentFilter === "all" || item.category.toLowerCase() === currentFilter.toLowerCase();

    // Filtro de búsqueda por texto (busca en español e inglés para mayor comodidad)
    const query = currentSearchQuery.trim().toLowerCase();
    const nameEs = item.name.toLowerCase();
    const nameEn = (item.name_en || "").toLowerCase();
    const descEs = item.desc.toLowerCase();
    const descEn = (item.desc_en || "").toLowerCase();
    const hlEs = (item.highlight || "").toLowerCase();
    const hlEn = (item.highlight_en || "").toLowerCase();
    const catEs = item.category.toLowerCase();
    const catEn = getDeviantCategory(item.category, 'en').toLowerCase();

    const matchesSearch = !query || 
      nameEs.includes(query) || 
      nameEn.includes(query) ||
      descEs.includes(query) ||
      descEn.includes(query) ||
      hlEs.includes(query) ||
      hlEn.includes(query) ||
      catEs.includes(query) ||
      catEn.includes(query);

    return matchesCategory && matchesSearch;
  });
}

function renderCatalog() {
  if (!cardsGrid) return;

  const filtered = getFilteredDeviants();

  if (resultsCountEl) {
    resultsCountEl.textContent = TRANSLATIONS[currentLang].results_count(filtered.length);
  }

  if (filtered.length === 0) {
    cardsGrid.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>${t('no_results_title')}</h3>
        <p>${TRANSLATIONS[currentLang].no_results_desc(escapeHtml(currentSearchQuery))}</p>
        <button type="button" class="btn-clear-search" onclick="resetFilters()">${t('btn_show_all')}</button>
      </div>
    `;
    return;
  }

  cardsGrid.innerHTML = filtered.map(deviant => {
    const displayName = escapeHtml(getDeviantName(deviant));
    const displayCategory = escapeHtml(getDeviantCategory(deviant.category));
    const displayDesc = escapeHtml(getDeviantDesc(deviant));
    const displayHighlight = escapeHtml(getDeviantHighlight(deviant));
    const ariaAdd = t('aria_add').replace('{name}', displayName);

    return `
      <div class="card" data-id="${deviant.id}" data-category="${deviant.category}">
        <div class="card-tag tag-${deviant.category.toLowerCase()}">${displayCategory}</div>
        <div class="card-img-wrapper">
          ${deviant.img ? `
            <img 
              loading="lazy" 
              class="deviant-img" 
              src="${deviant.img}" 
              alt="${displayName}" 
              data-title="${displayName}"
            >
          ` : ''}
          ${displayHighlight ? `<span class="card-badge-feat">${displayHighlight}</span>` : ''}
        </div>
        <h3>${displayName}</h3>
        <p class="stats"><i class="fa-solid fa-bolt"></i> ${displayCategory} • ${t('available_badge')}</p>
        <p class="desc">${displayDesc}</p>
        <div class="card-footer">
          <span class="price">${formatUSD(deviant.price)}</span>
          <button 
            type="button" 
            class="btn-card-add" 
            onclick="addDeviantById('${deviant.id}')"
            aria-label="${ariaAdd}"
          >
            <i class="fa-solid fa-cart-plus"></i> ${t('btn_add')}
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Re-enlazar eventos de imágenes para el modal
  attachImageModalEvents();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m];
  });
}

function resetFilters() {
  currentFilter = "all";
  currentSearchQuery = "";
  if (searchInput) searchInput.value = "";
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === "all");
  });
  renderCatalog();
}

// Eventos de Búsqueda y Filtros
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    renderCatalog();
  });
}

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.category || "all";
      renderCatalog();
    });
  });
}

// =====================================================
// CARRITO DE COMPRAS Y PEDIDOS
// =====================================================
function addDeviantById(id) {
  const itemData = DEVIANTS_DATA.find(d => d.id === id);
  if (!itemData) return;

  const existing = deviantsCart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    deviantsCart.push({
      id: itemData.id,
      name: itemData.name,
      category: itemData.category,
      price: itemData.price,
      quantity: 1
    });
  }

  saveCartToStorage();
  renderCart();
  showCartToast(TRANSLATIONS[currentLang].cart_added_toast(getDeviantName(itemData)));
  pulseCartBadge();
}

function addToCart(button, deviantName) {
  const item = DEVIANTS_DATA.find(d => d.name === deviantName) || 
               DEVIANTS_DATA.find(d => (d.name_en || "").toLowerCase() === (deviantName || "").toLowerCase()) ||
               DEVIANTS_DATA.find(d => d.name.toLowerCase() === (deviantName || "").toLowerCase());
  if (item) {
    addDeviantById(item.id);
  }
}

function increaseCartItem(index) {
  if (!deviantsCart[index]) return;
  deviantsCart[index].quantity += 1;
  saveCartToStorage();
  renderCart();
  pulseCartBadge();
}

function decreaseCartItem(index) {
  if (!deviantsCart[index]) return;
  if (deviantsCart[index].quantity > 1) {
    deviantsCart[index].quantity -= 1;
  } else {
    deviantsCart.splice(index, 1);
  }
  saveCartToStorage();
  renderCart();
  pulseCartBadge();
}

function removeCartItem(index) {
  if (!deviantsCart[index]) return;
  deviantsCart.splice(index, 1);
  saveCartToStorage();
  renderCart();
  pulseCartBadge();
}

function clearCart() {
  if (deviantsCart.length === 0) return;
  if (confirm(t('cart_confirm_clear'))) {
    deviantsCart = [];
    saveCartToStorage();
    renderCart();
    pulseCartBadge();
  }
}

function renderCart() {
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmptyEl = document.getElementById('cartEmpty');
  const cartBadge = document.getElementById('cartBadge');
  const cartTotalEl = document.getElementById('cartTotal');
  const sendCartBtn = document.getElementById('btnSendCart');
  const floatingCartBar = document.getElementById('floatingCartBar');
  const floatingCount = document.getElementById('floatingCartCount');
  const floatingTotal = document.getElementById('floatingCartTotal');

  const totalItems = deviantsCart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = deviantsCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Actualizar barra flotante móvil
  if (floatingCartBar && floatingCount && floatingTotal) {
    if (totalItems > 0) {
      floatingCartBar.classList.add('visible');
      floatingCount.textContent = TRANSLATIONS[currentLang].floating_cart_items(totalItems);
      floatingTotal.textContent = formatUSD(totalPrice);
    } else {
      floatingCartBar.classList.remove('visible');
    }
  }

  if (!cartItemsEl || !cartEmptyEl || !cartBadge || !cartTotalEl || !sendCartBtn) {
    return;
  }

  cartItemsEl.innerHTML = '';

  if (deviantsCart.length === 0) {
    cartEmptyEl.style.display = 'block';
    sendCartBtn.disabled = true;
    cartBadge.textContent = TRANSLATIONS[currentLang].cart_selected_count(0);
    cartTotalEl.textContent = formatUSD(0);
    return;
  }

  cartEmptyEl.style.display = 'none';
  cartBadge.textContent = TRANSLATIONS[currentLang].cart_selected_count(totalItems);

  deviantsCart.forEach((item, index) => {
    const itemData = DEVIANTS_DATA.find(d => d.id === item.id);
    const displayName = itemData ? getDeviantName(itemData) : item.name;
    const displayCategory = itemData ? getDeviantCategory(itemData.category) : item.category;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <div class="cart-item-title">
        <strong>${escapeHtml(displayName)}</strong>
        <div class="cart-item-meta">
          <span class="cart-item-tag">${escapeHtml(displayCategory)}</span>
          <span>${item.quantity} × ${formatUSD(item.price)} = <strong>${formatUSD(item.price * item.quantity)}</strong></span>
        </div>
      </div>
      <div class="cart-item-actions">
        <button type="button" class="btn-qty" onclick="decreaseCartItem(${index})" title="${currentLang === 'en' ? 'Subtract 1' : 'Restar uno'}" aria-label="${currentLang === 'en' ? 'Subtract 1' : 'Restar 1'}">−</button>
        <span class="cart-item-qty">${item.quantity}</span>
        <button type="button" class="btn-qty" onclick="increaseCartItem(${index})" title="${currentLang === 'en' ? 'Add 1' : 'Añadir uno'}" aria-label="${currentLang === 'en' ? 'Add 1' : 'Sumar 1'}">+</button>
        <button type="button" class="btn-remove" onclick="removeCartItem(${index})" title="${currentLang === 'en' ? 'Remove from order' : 'Eliminar del pedido'}" aria-label="${currentLang === 'en' ? 'Remove ' + displayName : 'Eliminar ' + displayName}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    cartItemsEl.appendChild(itemEl);
  });

  cartTotalEl.textContent = formatUSD(totalPrice);
  sendCartBtn.disabled = false;
}

function sendCartWhatsApp() {
  if (deviantsCart.length === 0) return;

  const totalItems = deviantsCart.reduce((sum, item) => sum + item.quantity, 0);
  const total = deviantsCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const cartLines = deviantsCart.map(item => {
    const itemData = DEVIANTS_DATA.find(d => d.id === item.id);
    const name = itemData ? getDeviantName(itemData) : item.name;
    const category = itemData ? getDeviantCategory(itemData.category) : item.category;
    return `▪ ${item.quantity}x ${name} (${category}) — ${formatUSD(item.price * item.quantity)}`;
  });

  const header = TRANSLATIONS[currentLang].wa_cart_header(VENDOR_NAME, SERVER_NAME);
  const footer = TRANSLATIONS[currentLang].wa_cart_footer(totalItems, formatUSD(total));
  const message = `${header}${cartLines.join('\n')}\n${footer}`;

  const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// =====================================================
// TOAST Y NOTIFICACIONES
// =====================================================
let toastTimeout;
function showCartToast(message) {
  const toast = document.getElementById('cartToast');
  if (!toast) return;

  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
  toast.classList.add('visible');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2200);
}

function pulseCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.classList.remove('pop');
    void badge.offsetWidth;
    badge.classList.add('pop');
  }
}

function pulseElement(el) {
  if (!el) return;
  el.style.transform = 'scale(1.02)';
  setTimeout(() => {
    el.style.transform = '';
  }, 180);
}

// =====================================================
// MODAL DE IMÁGENES
// =====================================================
const imageModal = document.getElementById('imageModal');
const imageModalImg = document.getElementById('imageModalImg');
const imageModalCaption = document.getElementById('imageModalCaption');
const imageModalClose = document.getElementById('imageModalClose');
const imageModalBackdrop = document.getElementById('imageModalBackdrop');

function openImageModal(src, title) {
  if (!imageModal || !imageModalImg || !imageModalCaption) return;

  imageModalImg.src = src;
  imageModalImg.alt = title || '';
  imageModalCaption.textContent = title || '';
  imageModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  if (!imageModal) return;
  imageModal.setAttribute('aria-hidden', 'true');
  if (imageModalImg) imageModalImg.src = '';
  if (imageModalCaption) imageModalCaption.textContent = '';
  document.body.style.overflow = '';
}

function attachImageModalEvents() {
  document.querySelectorAll('.deviant-img').forEach(img => {
    img.removeEventListener('click', img._modalHandler);
    img._modalHandler = () => {
      openImageModal(img.src, img.dataset.title || img.alt);
    };
    img.addEventListener('click', img._modalHandler);

    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
    }
  });
}

if (imageModalClose) imageModalClose.addEventListener('click', closeImageModal);
if (imageModalBackdrop) imageModalBackdrop.addEventListener('click', closeImageModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeImageModal();
});

// =====================================================
// ANIMACIÓN DE PARTÍCULAS EN CANVAS (Optimizado)
// =====================================================
const canvas = document.getElementById('particlesCanvas');

if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  let animationFrameId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }

  window.addEventListener('resize', () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(resizeCanvas, 200);
  });

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : canvas.height + 10;
      this.size = Math.random() * 2 + 0.6;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = -(Math.random() * 0.5 + 0.2);
      this.color = Math.random() > 0.4 ? '#00f0ff' : '#ff0055';
      this.opacity = Math.random() * 0.6 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset(false);
      }
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particlesArray = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 75);
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    ctx.globalAlpha = 1;
    animationFrameId = requestAnimationFrame(animateParticles);
  }

  resizeCanvas();
  animateParticles();
}

// =====================================================
// SMOOTH SCROLL PARA ANCLAS
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.length > 1 && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// =====================================================
// INICIALIZACIÓN GLOBAL
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  loadCartFromStorage();
  renderCatalog();
  renderCart();

  const sendCartBtn = document.getElementById('btnSendCart');
  if (sendCartBtn) {
    sendCartBtn.addEventListener('click', sendCartWhatsApp);
  }

  const clearCartBtn = document.getElementById('btnClearCart');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }
});