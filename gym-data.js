/* EDITA ESTE ARCHIVO para actualizar el gimnasio. Guarda con Ctrl + S y recarga.
   Conserva comillas y comas. Los textos vacíos "" ocultan los enlaces opcionales.
   No agregues contraseñas ni datos privados: este archivo será público. */
window.GYM_DATA = {
  nombre: "EnergyGym",
  introduccion: "Entrena a tu ritmo. Construye disciplina. Haz espacio para una versión más fuerte de ti.",
  // Mantén true hasta confirmar los datos y servicios con el cliente.
  demostracion: true,
  beneficios: [
    { titulo: "Fuerza con propósito", texto: "Máquinas y pesas para trabajar en tus objetivos y construir constancia." },
    { titulo: "Acompañamiento cercano", texto: "Orientación para conocer los ejercicios y entrenar con mayor confianza." },
    { titulo: "Tu ritmo, tu proceso", texto: "Un ambiente sin juicios, tanto si comienzas como si ya tienes experiencia." }
  ],
  // precio es texto: incluye SIEMPRE moneda y periodo, por ejemplo "$499 MXN / mes".
  // Vacío = "Consulta el precio". No se cobra ni se contrata desde la web.
  planes: [
    { nombre: "Esencial", etiqueta: "TU PROPIO RITMO", precio: "", descripcion: "El espacio para convertir el entrenamiento en un hábito.", incluye: ["Acceso al gimnasio", "Uso de máquinas y pesas"], destacado: false },
    { nombre: "Completo", etiqueta: "UN PASO MÁS", precio: "", descripcion: "Más acompañamiento para darle dirección a tu esfuerzo.", incluye: ["Acceso al gimnasio", "Rutina personalizada", "Seguimiento mensual"], destacado: true },
    { nombre: "Personal", etiqueta: "ENFOQUE EN TI", precio: "", descripcion: "Entrenamiento uno a uno, centrado en tus objetivos.", incluye: ["Sesión individual", "Orientación durante el entrenamiento", "Atención personalizada"], destacado: false }
  ],
  notaPlanes: "Consulta tarifas vigentes, inscripción, disponibilidad y condiciones directamente con el gimnasio.",
  preguntas: [
    { pregunta: "¿Puedo empezar sin experiencia?", respuesta: "Sí. Puedes empezar a tu ritmo. Comenta tu experiencia y tus objetivos con el personal para conocer la orientación disponible." },
    { pregunta: "¿Qué llevo a mi primera visita?", respuesta: "Ropa cómoda, calzado deportivo, agua y una toalla. Consulta con el gimnasio cualquier requisito adicional antes de asistir." },
    { pregunta: "¿Cómo elijo un plan?", respuesta: "Revisa qué incluye cada opción y consulta con el personal la disponibilidad, las tarifas y las condiciones vigentes." },
    { pregunta: "¿Puedo inscribirme desde esta página?", respuesta: "La página es informativa. Las inscripciones y cualquier contratación se realizan directamente con el gimnasio." }
  ],
  direccion: "Fincas del Lago 123, Col. Centro, Ciudad, Estado, CP 12345", 
  horarios: [{ dias: "Lunes a viernes", horas: "6:00 a 22:00" }, { dias: "Domingo", horas: "Cerrado" }], 
  primeraVisita: "Trae ropa cómoda, calzado deportivo, agua y una toalla. Confirma horarios y disponibilidad antes de asistir.",
  whatsapp: "", // Solo dígitos con código de país. Actívalo únicamente con el número real.
  telefono: "", // Número internacional, por ejemplo +52 seguido de los 10 dígitos.
  instagram: "", // URL completa https://www.instagram.com/usuario/
  mapa: "", // Enlace https:// de Google Maps de la ubicación real.
  mensajeWhatsapp: "Hola, me gustaría conocer los planes y horarios de EnergyGym."
};
