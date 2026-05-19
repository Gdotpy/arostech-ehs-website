export const siteUrl = 'https://arostech-ehs-website.vercel.app'

export const serviceLandingPages = [
  {
    slug: 'dc3-sirce',
    eyebrow: 'DC-3 / SIRCE',
    title: 'Capacitación, DC-3 y evidencia sin desorden operativo.',
    accent: 'para contratistas y equipos internos.',
    description:
      'ArosTech EHS ayuda a ordenar cursos, constancias DC-3, matrices de capacitación y evidencia para responder mejor ante clientes, auditorías e inspecciones.',
    cta: 'Solicitar apoyo con DC-3',
    secondaryCta: 'Ver cursos STPS',
    secondaryHref: '/cursos',
    metadataTitle: 'DC-3 y SIRCE para empresas y contratistas en México',
    metadataDescription:
      'Apoyo para ordenar capacitación STPS, constancias DC-3, evidencia documental y matrices de contratistas antes de auditorías o ingreso a sitio.',
    painPoints: [
      'Constancias DC-3 dispersas entre correos, carpetas y responsables.',
      'Cuadrillas con capacitación incompleta o difícil de demostrar.',
      'Matrices sin vigencias, responsables o relación clara con la tarea real.',
    ],
    deliverables: [
      'Diagnóstico de brechas de capacitación y evidencia.',
      'Matriz de cursos, DC-3, vigencias, responsables y pendientes.',
      'Ruta de regularización por cuadrilla, puesto o frente de trabajo.',
      'Recomendaciones para preparar expedientes de contratistas.',
    ],
    process: [
      'Revisamos la actividad, número de trabajadores y exigencias del cliente o sitio.',
      'Mapeamos cursos, DC-3, evidencias disponibles y brechas operativas.',
      'Priorizamos acciones por riesgo, fecha objetivo e impacto en acceso a sitio.',
    ],
    related: [
      { label: 'Checklist STPS y DC-3', href: '/recursos/checklist-stps-dc3-contratistas' },
      { label: 'Artículo DC-3 para contratistas', href: '/recursos/dc3-contratistas-evidencia-sitio' },
    ],
  },
  {
    slug: 'seguridad-telecom-alturas',
    eyebrow: 'Telecom / Alturas',
    title: 'Seguridad para cuadrillas telecom antes de entrar a sitio.',
    accent: 'altura, evidencia y control de contratistas.',
    description:
      'Apoyo práctico para contratistas telecom que trabajan en torres, azoteas, postes, fibra óptica, mantenimiento y sitios de cliente con requisitos documentales.',
    cta: 'Hablar con un especialista',
    secondaryCta: 'Ver trabajo en alturas',
    secondaryHref: '/cursos/trabajo-seguro-en-alturas',
    metadataTitle: 'Seguridad telecom y trabajos en altura para contratistas',
    metadataDescription:
      'Diagnóstico y capacitación para cuadrillas telecom con trabajo en altura, DC-3, EPP, inducción y evidencia documental.',
    painPoints: [
      'Ingreso a sitio bloqueado por falta de expediente o capacitación demostrable.',
      'Diferencias entre la tarea real de campo y la evidencia que conserva la empresa.',
      'EPP, permisos e inducción gestionados por áreas distintas sin trazabilidad.',
    ],
    deliverables: [
      'Revisión de matriz de cuadrillas, actividades y evidencia.',
      'Ruta de capacitación para trabajo en altura y riesgos relacionados.',
      'Checklist documental antes de enviar personal a sitio.',
      'Plan de seguimiento para vencimientos y cambios de cuadrilla.',
    ],
    process: [
      'Identificamos el tipo de sitio, actividad, cliente y fecha objetivo.',
      'Revisamos capacitación, DC-3, EPP, inducción y evidencia disponible.',
      'Definimos acciones mínimas antes de movilizar la cuadrilla.',
    ],
    related: [
      { label: 'Curso trabajo seguro en alturas', href: '/cursos/trabajo-seguro-en-alturas' },
      { label: 'Checklist para contratistas', href: '/recursos/checklist-stps-dc3-contratistas' },
    ],
  },
  {
    slug: 'iso-45001',
    eyebrow: 'ISO 45001',
    title: 'Prepara tu sistema de seguridad y salud para una revisión seria.',
    accent: 'sin prometer certificación automática.',
    description:
      'Acompañamos a empresas mexicanas en análisis de brechas, documentación, auditorías internas y preparación operativa para ISO 45001.',
    cta: 'Evaluar brecha ISO',
    secondaryCta: 'Ver servicios',
    secondaryHref: '/servicios',
    metadataTitle: 'ISO 45001 en México: diagnóstico, implementación y auditoría interna',
    metadataDescription:
      'Apoyo para evaluar brechas, ordenar evidencia y preparar sistemas de gestión de seguridad y salud en el trabajo bajo ISO 45001.',
    painPoints: [
      'Procedimientos documentados que no reflejan la operación real.',
      'Evidencia dispersa entre seguridad, recursos humanos, operación y contratistas.',
      'Auditorías internas que detectan hallazgos tarde o sin responsables claros.',
    ],
    deliverables: [
      'Diagnóstico GAP frente al sistema de gestión esperado.',
      'Mapa de documentación, evidencia, responsables y riesgos prioritarios.',
      'Plan de auditoría interna y acciones de cierre.',
      'Acompañamiento para preparar equipos y líderes de proceso.',
    ],
    process: [
      'Definimos alcance, sedes, procesos y objetivos de la revisión.',
      'Levantamos brechas documentales y operativas con entrevistas y evidencia.',
      'Priorizamos acciones por impacto, responsable y fecha objetivo.',
    ],
    related: [
      { label: 'Curso auditor interno ISO 45001', href: '/cursos/auditor-interno-iso-45001' },
      { label: 'Servicios EHS', href: '/servicios' },
    ],
  },
  {
    slug: 'iso-14001',
    eyebrow: 'ISO 14001',
    title: 'Ordena tu gestión ambiental con evidencia clara.',
    accent: 'para auditorías, clientes y mejora continua.',
    description:
      'ArosTech EHS apoya la revisión de brechas, controles, documentación y evidencia para sistemas de gestión ambiental ISO 14001.',
    cta: 'Evaluar brecha ISO',
    secondaryCta: 'Ver curso ambiental',
    secondaryHref: '/cursos/medio-ambiente-iso-14001',
    metadataTitle: 'ISO 14001 en México: diagnóstico y gestión ambiental',
    metadataDescription:
      'Apoyo para revisar brechas, controles, documentación y evidencia de sistemas de gestión ambiental ISO 14001.',
    painPoints: [
      'Controles ambientales documentados sin evidencia fácil de consultar.',
      'Responsables, registros y acciones correctivas repartidos entre áreas.',
      'Preparación tardía antes de auditorías de cliente o certificación.',
    ],
    deliverables: [
      'Diagnóstico de brechas ambientales y documentales.',
      'Mapa de aspectos, controles, evidencia y responsables.',
      'Plan de preparación para auditoría interna o de cliente.',
      'Recomendaciones para integrar seguridad, ambiente y operación.',
    ],
    process: [
      'Revisamos alcance ambiental, procesos, registros y compromisos relevantes.',
      'Identificamos evidencia disponible y pendientes críticos.',
      'Priorizamos acciones para preparación y seguimiento.',
    ],
    related: [
      { label: 'Curso ISO 14001', href: '/cursos/medio-ambiente-iso-14001' },
      { label: 'Servicios EHS', href: '/servicios' },
    ],
  },
] as const

export const resources = [
  {
    slug: 'checklist-stps-dc3-contratistas',
    type: 'Lead magnet',
    title: 'Checklist STPS y DC-3 para contratistas',
    subtitle:
      'Revisa capacitación, evidencia, EPP e inducción antes de que tu cuadrilla llegue al sitio.',
    description:
      'Descarga una checklist práctica y una matriz editable para detectar brechas antes de iniciar trabajos con contratistas.',
    metadataTitle: 'Checklist STPS y DC-3 para contratistas',
    metadataDescription:
      'Checklist descargable para revisar capacitación, DC-3, EPP, permisos, inducción y expediente antes de entrar a sitio.',
    datePublished: '2026-05-18',
    cta: 'Descargar checklist',
    highlights: [
      'Checklist rápido para capacitación, DC-3, EPP, permisos, inducción y expediente.',
      'Matriz editable para controlar contratista, actividad, evidencia, vigencia y pendiente.',
      'Semáforo de preparación: listo, revisar antes de entrar o alto riesgo documental-operativo.',
    ],
    audience:
      'Contratistas, coordinadores EHS, responsables de capacitación, supervisores de cuadrilla y clientes que administran ingreso a sitio.',
    body: [
      {
        heading: 'El bloqueo casi nunca es solo por la DC-3',
        paragraphs: [
          'Muchas empresas tratan la constancia como un documento aislado, pero el problema real suele estar en demostrar preparación completa: tarea, capacitación, evidencia, EPP, inducción, vigencia y responsable.',
          'Este recurso ayuda a revisar brechas antes de que la cuadrilla llegue al sitio y descubra que no puede entrar o que no puede demostrar su preparación básica.',
        ],
      },
      {
        heading: 'Qué incluye',
        paragraphs: [
          'El material está pensado como punto de partida operativo. No sustituye una revisión normativa, legal o técnica específica, pero sí ayuda a ordenar la conversación con seguridad, operaciones, capacitación y contratistas.',
        ],
      },
    ],
    related: [
      { label: 'Servicio DC-3 / SIRCE', href: '/servicios/dc3-sirce' },
      { label: 'Telecom y alturas', href: '/servicios/seguridad-telecom-alturas' },
    ],
  },
  {
    slug: 'dc3-contratistas-evidencia-sitio',
    type: 'Artículo',
    title: 'DC-3 para contratistas: cómo ordenar capacitación y evidencia antes de entrar a sitio',
    subtitle:
      'Una guía práctica para separar curso, constancia, evidencia y tarea real sin prometer cumplimiento automático.',
    description:
      'Cómo preparar una matriz de capacitación y evidencia para contratistas antes de auditorías, ingresos a sitio o revisiones de cliente.',
    metadataTitle: 'DC-3 para contratistas: evidencia antes de entrar a sitio',
    metadataDescription:
      'Guía práctica para ordenar capacitación, DC-3, evidencias, vigencias y responsables antes de enviar contratistas a sitio.',
    datePublished: '2026-05-18',
    cta: 'Solicitar apoyo con DC-3',
    highlights: [
      'Separa curso, constancia, evidencia, tarea real y responsable.',
      'Usa una matriz simple para encontrar brechas antes del ingreso a sitio.',
      'Conecta seguridad, capacitación, operaciones y administración de contratistas.',
    ],
    audience:
      'Empresas que coordinan cuadrillas propias o contratistas en telecom, mantenimiento, construcción ligera, energía o sitios industriales.',
    body: [
      {
        heading: 'Empieza por la tarea real',
        paragraphs: [
          'Una DC-3 aislada no explica por sí sola si una persona está preparada para la actividad que realizará. Antes de enviar una cuadrilla, conviene listar actividad, área, riesgo, curso relacionado, evidencia disponible y responsable.',
          'Esta matriz no reemplaza la revisión especialista. Su valor es mostrar qué información existe y qué falta confirmar antes de comprometer una fecha de ingreso a sitio.',
        ],
      },
      {
        heading: 'Revisa trazabilidad, no solo archivos',
        paragraphs: [
          'El riesgo operativo aparece cuando la evidencia está repartida entre correos, carpetas personales, WhatsApp o formatos sin vigencia. Si no se puede encontrar rápido, no está lista para una revisión seria.',
          'Una revisión práctica debería marcar si la evidencia corresponde a la persona, a la tarea, al sitio y al periodo aplicable.',
        ],
      },
      {
        heading: 'Convierte pendientes en próximos pasos',
        paragraphs: [
          'Después de revisar la matriz, separa los pendientes por urgencia: bloqueadores de ingreso, brechas de capacitación, evidencia incompleta, EPP o inducción pendiente, y puntos que requieren revisión técnica o normativa.',
          'Ese orden ayuda a evitar reuniones largas sin decisiones y concentra al equipo en lo que debe resolverse antes de movilizar personal.',
        ],
      },
    ],
    related: [
      { label: 'Descargar checklist', href: '/recursos/checklist-stps-dc3-contratistas' },
      { label: 'Servicio DC-3 / SIRCE', href: '/servicios/dc3-sirce' },
    ],
  },
  {
    slug: 'nom-017-epp-revision-operativa',
    type: 'Artículo',
    title: 'NOM-017-STPS-2024 y EPP: cómo revisar tu operación antes de prometer cumplimiento',
    subtitle:
      'Una guía práctica para detectar brechas en selección, uso, capacitación y evidencia de equipo de protección personal.',
    description:
      'Revisión operativa para ordenar matriz puesto-tarea-EPP, capacitación y evidencia antes de auditorías o inspecciones.',
    metadataTitle: 'NOM-017-STPS-2024 y EPP: revisión operativa',
    metadataDescription:
      'Guía práctica para revisar matriz puesto-tarea-EPP, capacitación y evidencia sin prometer cumplimiento automático.',
    datePublished: '2026-05-18',
    cta: 'Solicitar diagnóstico de EPP',
    highlights: [
      'Empieza por tareas reales, áreas, puestos y exposiciones.',
      'Conecta EPP con capacitación, entrega, supervisión y evidencia.',
      'Usa la checklist como diagnóstico, no como certificado.',
    ],
    audience:
      'Responsables EHS, operaciones, compras, capacitación y supervisión con personal propio o contratistas.',
    body: [
      {
        heading: 'El problema no empieza con la norma',
        paragraphs: [
          'Empieza cuando una cuadrilla, una línea de producción o un contratista trabaja con EPP que siempre se ha usado así, pero nadie tiene claro si sigue siendo adecuado para la tarea, el ambiente y la evidencia que la empresa necesita conservar.',
          'Antes de afirmar cumplimiento, conviene revisar fuente oficial, alcance y obligaciones específicas con una persona especialista. Mientras tanto, sí se puede ordenar la matriz de EPP y la evidencia que la sostiene.',
        ],
      },
      {
        heading: 'Construye una matriz simple',
        paragraphs: [
          'Incluye área, puesto, tarea, riesgo o exposición, EPP requerido según análisis interno, condición de uso, responsable, capacitación relacionada, evidencia disponible y brecha.',
          'Si la empresa no puede llenar esas columnas con confianza, probablemente necesita una revisión más profunda antes de asegurar que su programa está listo.',
        ],
      },
      {
        heading: 'Revisa evidencia, no solo entrega',
        paragraphs: [
          'Muchas empresas sí entregan equipo. El punto débil suele estar en registros incompletos, listas sin conexión con capacitación o constancias guardadas en carpetas separadas.',
          'Si la evidencia depende de buscar en correos, WhatsApp o archivos personales, el riesgo no es teórico: está en la trazabilidad.',
        ],
      },
    ],
    related: [
      { label: 'Servicios EHS', href: '/servicios' },
      { label: 'Hablar con un especialista', href: '/contacto?cta=diagnostico-epp' },
    ],
  },
] as const

export type ServiceLandingPage = (typeof serviceLandingPages)[number]
export type Resource = (typeof resources)[number]
