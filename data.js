// =================================================================
// data.js — Base de Datos Oficial de Contenido para Natural Wellness
// Ecosistema Digital LAWENMOLL (Sabiduría Ancestral)
// =================================================================

const CATALOGO_WELLNESS = {
  // 🥗 RECETAS MILENARIAS
  recetas: [
    {
      id: "receta-1",
      titulo: "Bowl de avena, chía y canela bajo IG",
      profesional: "Chef Camila Ríos (@camila_nutri)",
      categoria: "recetas",
      concepto: "🥗 Recetas Milenarias",
      etiquetas: ["🌾 Sin Gluten", "🩺 Bajo IG", "🌱 Vegano"],
      youtubeUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
      tiempo: "10 minutos",
      ingredientes: "• 1/2 taza de avena cert. sin gluten\n• 1 cda de semillas de chía\n• 1 cdta de canela en polvo\n• 1/2 taza de bebida vegetal sin azúcar"
    },
    {
      id: "receta-2",
      titulo: "Smoothie Verde Desinflamante APLV & Sin Azúcar",
      profesional: "Dra. María Paz (Nutrición Celular)",
      categoria: "recetas",
      concepto: "🥗 Recetas Milenarias",
      etiquetas: ["🥛 Sin Lactosa / APLV", "🩺 Bajo IG", "🌿 Antioxidante"],
      youtubeUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
      tiempo: "5 minutos",
      ingredientes: "• 1 taza de espinaca fresca\n• 1/2 pepino con piel\n• 1 trozo pequeño de jengibre\n• 200ml de agua de coco o agua purificada"
    }
  ],

  // 🏃 MOVIMIENTOS ANCESTRALES (EJERCICIOS & GAP)
  ejercicios: [
    {
      id: "ejercicio-1",
      titulo: "Rutina de GAP: Glúteos, Abdomen y Piernas",
      profesional: "NatyGlossGym (@natyglossgym)",
      categoria: "ejercicios",
      concepto: "🏃 Movimientos Ancestrales",
      etiquetas: ["🏋️‍♀️ Sin Peso y Sin Saltos", "🩺 Bajo Impacto", "🔥 Tono Muscular"],
      youtubeUrl: "https://www.youtube.com/embed/ItMcmDCxD6A",
      duracion: "25 minutos",
      descripcion: "Entrenamiento enfocado en tonificación de tren inferior y core, diseñado especialmente sin saltos ni peso adicional."
    },
    {
      id: "ejercicio-2",
      titulo: "Rutina de Movilidad Articular y Fortalecimiento de Core",
      profesional: "Prof. Mateo Silva (@mateo_fit)",
      categoria: "ejercicios",
      concepto: "🏃 Movimientos Ancestrales",
      etiquetas: ["🧘 Movilidad Adaptada", "💪 Estabilidad Lumbar"],
      youtubeUrl: "https://www.youtube.com/embed/inpok4MKVLM",
      duracion: "15 minutos",
      descripcion: "Ejercicios guiados para mejorar la flexibilidad de columna, caderas y fortalecimiento del cinturón abdominal."
    }
  ],

  // 🧘 SABIDURÍA ANCESTRAL & AUTOAYUDA (MEDITACIONES Y BREATHWORK)
  meditaciones: [
    {
      id: "meditacion-1",
      titulo: "Respiración Consciente & Breathwork para Calmar la Mente",
      profesional: "Elena Vega (Instructora Mindfulness)",
      categoria: "meditaciones",
      concepto: "🧘 Sabiduría Ancestral",
      etiquetas: ["🧘 Sala Lotus VIP", "🌬️ Breathwork", "✨ Anti-Estrés"],
      youtubeUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
      duracion: "12 minutos",
      descripcion: "Sesión guiada de respiración ritmada para regular el sistema nervioso y reducir el cortisol."
    },
    {
      id: "meditacion-2",
      titulo: "Meditación de Desconexión Digital & Equilibrio Cognitivo",
      profesional: "Equipo Natural Wellness",
      categoria: "meditaciones",
      concepto: "🧘 Sabiduría Ancestral",
      etiquetas: ["🌿 Pausa Digital", "🧠 Claridad Mental"],
      youtubeUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
      duracion: "10 minutos",
      descripcion: "Guiado para pausar el uso de pantallas y restaurar la atención plena."
    }
  ],

  // 🏛️ SALAS VIRTUALES ADAPTADAS
  salas: [
    {
      id: "sala-1",
      nombre: "Sala Lotus",
      name: "Sala Lotus",
      capacidad: "⭐ Capacidad: 6 personas (VIP Cámara)",
      capacity: "⭐ Capacidad: 6 personas (VIP Cámara)",
      etiqueta: "Mindfulness & Breathwork",
      tag: "Mindfulness & Breathwork",
      descripcion: "Espacio íntimo con luz suave para meditación, breathwork y círculos de palabra.",
      desc: "Espacio íntimo con luz suave para meditación, breathwork y círculos de palabra.",
      precioHora: 15000,
      priceHr: 15000,
      esDesplegable: false,
      isDropdown: false
    },
    {
      id: "sala-2",
      nombre: "Sala Cielo",
      name: "Sala Cielo",
      capacidad: "⭐ Capacidad: 8 personas",
      capacity: "⭐ Capacidad: 8 personas",
      etiqueta: "Cocina Demo & Streaming",
      tag: "Cocina Demo & Streaming",
      descripcion: "Cocina demostrativa en vivo para talleres culinarios bajo índice glicémico.",
      desc: "Cocina demostrativa en vivo para talleres culinarios bajo índice glicémico.",
      precioHora: 15000,
      priceHr: 15000,
      esDesplegable: false,
      isDropdown: false
    },
    {
      id: "sala-3",
      nombre: "Sala Bosque",
      name: "Sala Bosque",
      capacidad: "⭐ Capacidad: 10 personas",
      capacity: "⭐ Capacidad: 10 personas",
      etiqueta: "Movilidad & Core",
      tag: "Movilidad & Core",
      descripcion: "Equipada para movilidad adaptada en silla, fortalecimiento de core y HIIT de bajo impacto.",
      desc: "Equipada para movilidad adaptada en silla, fortalecimiento de core y HIIT de bajo impacto.",
      precioHora: 15000,
      priceHr: 15000,
      esDesplegable: false,
      isDropdown: false
    },
    {
      id: "sala-4",
      nombre: "Sala Raíz",
      name: "Sala Raíz",
      capacidad: "⭐ Capacidad: 2 personas (1:1) + Videoteca",
      capacity: "⭐ Capacidad: 2 personas (1:1) + Videoteca",
      etiqueta: "Consultas & Desplegable",
      tag: "Consultas & Desplegable",
      descripcion: "Cabina privada para nutrición clínica y acceso directo a toda la videoteca.",
      desc: "Cabina privada para nutrición clínica y acceso directo a toda la videoteca.",
      precioHora: 15000,
      priceHr: 15000,
      esDesplegable: true,
      isDropdown: true
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CATALOGO_WELLNESS;
}
