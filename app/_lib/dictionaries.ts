export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

const dictionaries = {
  es: {
    nav: {
      services: "Servicios",
      process: "Proceso",
      showcases: "Casos",
      pricing: "Tarifas",
      contact: "Contacto",
    },
    hero: {
      location: "Vallès Occidental, Barcelona",
      name: "Metin Aslan",
      title: "Consultor de Automatización Digital para PYMES",
      tagline:
        "La micro-automatización puede aplicarse en cualquier negocio. Automatizo procesos administrativos con IA y No-Code. Ahorra 10-15 horas semanales sin contratar más personal.",
      cta: "Ver Servicios",
      ctaSecondary: "Contactar",
      valuePills: [
        "Desde 250 €",
        "Entrega en 2-3 semanas",
        "Sin dependencia tecnológica",
      ],
    },
    about: {
      heading: "Sobre Mí",
      p1: "Soy Metin Aslan, consultor especializado en la intersección entre las finanzas y la tecnología. Graduado en Economía por la Universidad Koç y con un Máster en Transformación Digital en los Negocios por ESEI/UCAM (España), cuento con más de 5 años de experiencia internacional.",
      p2: "Mi trayectoria incluye auditoría financiera en una Big 4 (EY) y gestión de departamentos contables en Reino Unido y EE.UU. Esta experiencia me permite identificar ineficiencias administrativas críticas. Desde enero de 2026 opero como consultor autónomo en España, desarrollando soluciones de automatización con IA y herramientas No-Code (n8n, Make, Google Workspace) para PYMES.",
      p3: "Ofrezco micro-automatizaciones ágiles y económicas que democratizan el acceso a la Inteligencia Artificial para el pequeño empresario, permitiendo aumentar la capacidad de trabajo sin contratar más personal administrativo.",
      credentials: [
        { label: "EY (Ernst & Young)", detail: "Auditoría Financiera" },
        { label: "Universidad Koç", detail: "Grado en Economía" },
        { label: "ESEI / UCAM", detail: "Máster en Transformación Digital" },
        { label: "+5 años", detail: "Experiencia Internacional (UK, USA, ES)" },
        { label: "Autónomo en España", detail: "Desde enero 2026" },
      ],
    },
    differentiators: {
      heading: "Por Qué Elegirme",
      subtitle: "Cuatro ventajas competitivas que diferencian mi servicio de las alternativas tradicionales.",
      items: [
        {
          title: "No-Code vs Desarrollo Tradicional",
          description: "Mis soluciones se entregan en 2-3 semanas, no en 6-12 meses. El coste es hasta un 70% menor que el desarrollo a medida, porque utilizo plataformas No-Code (Make, n8n) en lugar de programación personalizada.",
          stat: "70%",
          statLabel: "menor coste",
        },
        {
          title: "IA Generativa Integrada",
          description: "A diferencia de la automatización rígida (RPA), mis soluciones incorporan modelos de IA que comprenden documentos no estructurados: facturas escaneadas, emails, albaranes escritos a mano.",
          stat: "IA",
          statLabel: "generativa",
        },
        {
          title: "Perfil Híbrido: Negocio + Tecnología",
          description: "Economista, ex-auditor de EY (Big 4) y especialista en transformación digital. Entiendo las ineficiencias operativas porque he trabajado dentro de ellas.",
          stat: "Big 4",
          statLabel: "experiencia",
        },
        {
          title: "Independencia del Cliente",
          description: "Las soluciones se construyen sobre tus propias herramientas (Google Workspace, Excel, tu CRM). Sin dependencia de proveedor. Todo queda bajo tu control.",
          stat: "100%",
          statLabel: "tu control",
        },
      ],
    },
    market: {
      heading: "La Oportunidad en España",
      subtitle: "Las PYMES españolas necesitan automatización urgentemente. Los datos del INE y la nueva legislación lo confirman.",
      stats: [
        {
          value: "2,9M+",
          label: "empresas en España son PYMES",
          detail: "El 99,8% del tejido empresarial. El 93% son microempresas (<10 empleados). Fuente: INE.",
        },
        {
          value: "12%",
          label: "de PYMES usan IA o Big Data",
          detail: "El 88% restante gestiona sus procesos de forma manual o con herramientas básicas. Fuente: ONTSI.",
        },
        {
          value: "31%",
          label: "han digitalizado procesos",
          detail: "Casi 7 de cada 10 PYMES todavía operan con flujos de trabajo manuales o en papel.",
        },
        {
          value: "2026",
          label: "obligación de factura electrónica",
          detail: "La Ley Crea y Crece obliga a todas las empresas a emitir y recibir facturas electrónicas.",
        },
      ],
      footer: "Fuentes: INE, ONTSI, Ley Crea y Crece (Ley 18/2022), DigitalES.",
    },
    services: {
      heading: "Servicios",
      subtitle:
        "Intervengo en la operativa diaria de tu empresa para sustituir tareas manuales y repetitivas por flujos de trabajo digitales automatizados.",
      targetNote: "Especializado en microempresas (1-9 empleados) del Vallès Occidental y Área Metropolitana de Barcelona. Sectores prioritarios: logística, gestorías y despachos profesionales.",
      items: [
        {
          title: "Diagnóstico Operativo",
          description:
            "Estudio personalizado de cómo gestionas tus datos (facturas, bases de datos, comunicaciones). Identifico los puntos de dolor que consumen tiempo y diseñamos juntos la solución.",
        },
        {
          title: "Arquitectura de Automatización",
          description:
            "Diseño de soluciones a medida con tecnologías No-Code (Make, n8n) que conectan tus herramientas (Gmail, Excel, CRMs) con modelos de IA (OpenAI, Claude, Gemini).",
        },
        {
          title: "Desarrollo e Implementación",
          description:
            "Configuración y puesta en marcha de bots y agentes digitales. Por ejemplo: un sistema que lee pedidos entrantes, extrae datos del cliente y genera la factura automáticamente.",
        },
        {
          title: "Formación y Acompañamiento",
          description:
            "Capacitación directa a tu equipo para que puedan operar con las nuevas herramientas digitales de forma autónoma. Las soluciones permanecen bajo tu control.",
        },
      ],
    },
    process: {
      heading: "Cómo Trabajo",
      subtitle:
        "Metodología en 5 fases para garantizar calidad y plazos en cada proyecto.",
      phases: [
        {
          number: "01",
          title: "Diagnóstico y Consultoría Inicial",
          description:
            "Reunión para entender tus puntos de dolor. Análisis de herramientas actuales. Propuesta técnica y económica detallada.",
        },
        {
          number: "02",
          title: "Diseño de la Arquitectura",
          description:
            "Diagrama de flujo de la automatización. Selección de herramientas No-Code (Make, n8n). Definición de especificaciones.",
        },
        {
          number: "03",
          title: "Desarrollo e Integración",
          description:
            "Configuración de escenarios. Conexión de APIs entre tus aplicaciones. Pruebas unitarias de flujos de datos.",
        },
        {
          number: "04",
          title: "Testing y Despliegue",
          description:
            "Ejecución en entorno de pruebas con datos reales. Ajuste de modelos de IA. Puesta en producción (Go Live).",
        },
        {
          number: "05",
          title: "Formación y Entrega",
          description:
            "Capacitación a tu equipo. Documentación técnica y manual de usuario. Inicio del periodo de garantía.",
        },
      ],
    },
    showcases: {
      heading: "Casos de Éxito",
      subtitle:
        "La micro-automatización funciona en cualquier sector. Ejemplos reales sin nombres de empresa.",
      challengeLabel: "Problema",
      solutionLabel: "Solución",
      resultLabel: "Resultado",
      items: [
        {
          sector: "Gestoría / Asesoría fiscal",
          challenge:
            "Ingesta manual de facturas y documentos de múltiples clientes.",
          solution:
            "Sistema que clasifica, extrae datos y distribuye documentos automáticamente.",
          metric: "~12h/semana",
          metricLabel: "ahorradas",
        },
        {
          sector: "Taller de restauración de muebles",
          challenge:
            "Búsqueda de oportunidades comerciales y elaboración manual de presupuestos.",
          solution:
            "Motor de búsqueda de oportunidades y automatización de presupuestos.",
          metric: "3x",
          metricLabel: "más rápido",
        },
        {
          sector: "Empresa de logística y transporte",
          challenge:
            "Flujos intensivos de papel: albaranes, cartas de porte, facturas.",
          solution:
            "Automatización de la digitalización y procesamiento de documentos.",
          metric: "80%",
          metricLabel: "menos papel",
        },
      ],
    },
    pricing: {
      heading: "Tarifas",
      subtitle:
        "Precios orientativos por valor aportado. Solicita una propuesta técnica y económica personalizada sin compromiso.",
      vat: "* Todos los precios son sin IVA (21%). Sujeto a condiciones.",
      comparisonHeading: "Comparativa",
      comparison: {
        headers: ["", "Metin Aslan", "Gran Consultora", "Agencia de Marketing", "Hacerlo tú mismo"],
        rows: [
          { label: "Coste típico", values: ["Desde 1.500 €", "50.000–100.000 €", "3.000–10.000 €", "Gratis (tu tiempo)"] },
          { label: "Plazo de entrega", values: ["2-3 semanas", "6-12 meses", "1-3 meses", "Indefinido"] },
          { label: "IA integrada", values: ["Sí", "Sí (coste elevado)", "Raramente", "Limitada"] },
          { label: "Enfoque PYME", values: ["Sí", "No", "Parcial", "N/A"] },
        ],
      },
      cta: "Solicitar Presupuesto",
      from: "Desde",
      items: [
        {
          title: "Auditoría y Diagnóstico",
          price: "250",
          unit: "EUR",
          description:
            "Entrada al servicio. Reunión inicial, análisis de herramientas actuales y propuesta técnica detallada.",
          features: [
            "Reunión de diagnóstico",
            "Análisis de procesos",
            "Propuesta técnica y económica",
            "Sin compromiso",
          ],
        },
        {
          title: "Implementación Setup",
          price: "1.500",
          unit: "EUR",
          description:
            "Proyecto completo de automatización. Diseño, desarrollo, pruebas y puesta en producción.",
          features: [
            "Arquitectura No-Code",
            "Integración con tus herramientas",
            "Despliegue y pruebas",
            "Documentación básica",
          ],
          highlighted: true,
        },
        {
          title: "Mantenimiento y Soporte",
          price: "200",
          unit: "EUR/mes",
          description:
            "Soporte recurrente para garantizar el correcto funcionamiento y evolución de tus automatizaciones.",
          features: [
            "Soporte técnico mensual",
            "Ajustes y mejoras",
            "Actualización de flujos",
            "Formación continua",
          ],
        },
      ],
    },
    contact: {
      heading: "Contacto",
      subtitle: "¿Tu PYME dedica demasiadas horas a la burocracia? Contacta y hablamos.",
      email: "Email",
      location: "Ubicación",
      locationValue: "Vallès Occidental, Barcelona",
      availability: "Disponibilidad",
      availabilityValue: "Vallès Occidental, Área Metropolitana de Barcelona y remoto",
      formName: "Nombre",
      formEmail: "Email de contacto",
      formMessage: "Describe brevemente tu situación",
      formSubmit: "Enviar Consulta",
      formDisclaimer: "Al enviar, aceptas la política de privacidad.",
    },
    faq: {
      heading: "Preguntas Frecuentes",
      subtitle: "Resuelve tus dudas antes de contactar.",
      items: [
        {
          question: "¿Qué es la automatización No-Code?",
          answer: "Es el uso de plataformas visuales (Make, n8n) para conectar tus aplicaciones y automatizar tareas sin escribir código. Es más rápido, más barato y más fácil de mantener que el desarrollo tradicional.",
        },
        {
          question: "¿Cuánto tiempo tarda un proyecto típico?",
          answer: "Un proyecto de automatización completo se entrega en 2-3 semanas, desde el diagnóstico hasta la puesta en producción. Proyectos más complejos pueden extenderse a 4-6 semanas.",
        },
        {
          question: "¿Necesito conocimientos técnicos?",
          answer: "No. Las soluciones se construyen sobre herramientas que ya conoces (Gmail, Excel, Google Drive). Incluyo formación para que tu equipo pueda operar de forma autónoma.",
        },
        {
          question: "¿Qué pasa si algo deja de funcionar?",
          answer: "Ofrezco un servicio de mantenimiento mensual (desde 200 €/mes) que incluye soporte técnico, ajustes y actualizaciones. Además, las plataformas No-Code tienen monitorización integrada.",
        },
        {
          question: "¿Puedo beneficiarme del Kit Digital?",
          answer: "Sí. Mis servicios están alineados con las categorías subvencionables del programa Kit Digital (fondos Next Generation EU). Te oriento sobre cómo solicitar tu bono digital.",
        },
        {
          question: "¿En qué se diferencia de contratar una consultora grande?",
          answer: "Las grandes consultoras trabajan con presupuestos mínimos de 50.000–100.000 € y plazos de 6-12 meses. Mi servicio ofrece soluciones equivalentes para PYMES desde 1.500 €, entregadas en semanas.",
        },
      ],
    },
    resources: {
      heading: "Recursos y Guías",
      subtitle: "Artículos prácticos sobre automatización para PYMES.",
      comingSoon: "Próximamente",
      items: [
        { title: "Cómo preparar tu negocio para la factura electrónica obligatoria", tag: "Ley Crea y Crece" },
        { title: "5 procesos que toda gestoría puede automatizar hoy", tag: "Automatización" },
        { title: "Kit Digital: guía paso a paso para solicitar tu bono", tag: "Subvenciones" },
      ],
    },
    footer: {
      rights: "Todos los derechos reservados.",
      legal: "Aviso Legal",
      privacy: "Privacidad",
      cookies: "Cookies",
    },
    legal: {
      title: "Aviso Legal",
      description:
        "Aviso legal y condiciones de uso del sitio web de Metin Aslan.",
      identificationHeading: "Datos Identificativos",
      identificationIntro:
        "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informan los siguientes datos identificativos del titular de este sitio web:",
      holder: "Titular",
      nie: "NIF/NIE",
      address: "Domicilio",
      emailLabel: "Correo electrónico",
      activity: "Actividad profesional",
      iae: "Epígrafe IAE (CNAE 6202)",
      objectHeading: "Objeto",
      objectText:
        "Este sitio web tiene como finalidad informar sobre los servicios profesionales de consultoría en automatización de procesos y transformación digital ofrecidos por Metin Aslan como trabajador autónomo establecido en España. La actividad se encuadra en el sector de las Tecnologías de la Información y la Comunicación (TIC), específicamente consultoría de automatización de procesos (CNAE 6202 - Actividades de consultoría informática).",
      contractingHeading: "Condiciones de Contratación",
      contractingItems: [
        "Los servicios se contratan por acuerdo mutuo tras la aceptación de un presupuesto por escrito.",
        "Los presupuestos tienen una validez de 30 días naturales salvo indicación contraria.",
        "Condiciones de pago: 50% del importe al inicio del proyecto y 50% a la entrega del mismo, salvo acuerdo diferente por escrito.",
        "Todos los precios indicados son sin IVA. Se aplicará el tipo impositivo vigente (actualmente 21%).",
        "El plazo de entrega se establecerá en cada presupuesto individualizado.",
        "El cliente tendrá derecho a solicitar revisiones razonables dentro del alcance acordado del proyecto.",
      ],
      ipHeading: "Propiedad Intelectual",
      ipText:
        "Todos los contenidos de este sitio web (textos, imágenes, diseño, logotipos, código fuente) son propiedad de Metin Aslan o se utilizan con la debida licencia, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa.",
      liabilityHeading: "Limitación de Responsabilidad",
      liabilityText:
        "Metin Aslan no se responsabiliza de los daños que pudieran derivarse del uso de este sitio web, incluyendo errores u omisiones en los contenidos, falta de disponibilidad del sitio, o transmisión de virus o programas maliciosos, siempre que no le sean directamente imputables.",
      jurisdictionHeading: "Legislación Aplicable y Jurisdicción",
      jurisdictionText:
        "El presente aviso legal se rige por la legislación española. Para cualquier controversia que pudiera surgir, las partes se someten a la jurisdicción de los juzgados y tribunales de Barcelona.",
    },
    privacy: {
      title: "Política de Privacidad",
      description:
        "Política de privacidad y protección de datos personales de Metin Aslan.",
      controllerHeading: "Responsable del Tratamiento",
      controller: "Responsable",
      dataHeading: "Datos Recopilados",
      dataIntro:
        "La recopilación de datos personales es mínima y se limita a:",
      dataItems: [
        "Datos facilitados voluntariamente a través del formulario de contacto de este sitio web (nombre, correo electrónico, mensaje).",
        "Datos facilitados voluntariamente por el usuario al contactar por correo electrónico.",
        "Datos de navegación (dirección IP, tipo de navegador) recopilados automáticamente por el proveedor de alojamiento.",
      ],
      purposeHeading: "Finalidades del Tratamiento",
      purposeItems: [
        "Responder a las consultas recibidas por correo electrónico.",
        "Gestionar la relación comercial y profesional.",
        "Cumplir con las obligaciones legales aplicables.",
      ],
      basisHeading: "Base Jurídica",
      basisItems: [
        "Consentimiento del interesado (art. 6.1.a del RGPD).",
        "Ejecución de un contrato o medidas precontractuales (art. 6.1.b del RGPD).",
        "Interés legítimo del responsable (art. 6.1.f del RGPD).",
      ],
      retentionHeading: "Plazo de Conservación",
      retentionText:
        "Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y durante los plazos legalmente establecidos.",
      recipientsHeading: "Destinatarios",
      recipientsText:
        "Los datos no se cederán a terceros salvo obligación legal. El sitio web está alojado en Vercel Inc., cuyos servidores pueden encontrarse fuera de la UE, contando con las garantías adecuadas de transferencia internacional de datos.",
      rightsHeading: "Derechos del Interesado",
      rightsIntro:
        "De acuerdo con el RGPD y la LOPDGDD, usted tiene derecho a:",
      rightsItems: [
        "Acceder a sus datos personales.",
        "Solicitar su rectificación o supresión.",
        "Solicitar la limitación de su tratamiento.",
        "Oponerse al tratamiento.",
        "Solicitar la portabilidad de sus datos.",
        "Presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) - www.aepd.es.",
      ],
      rightsContact: "Para ejercer estos derechos, puede contactar con nosotros en:",
      securityHeading: "Medidas de Seguridad",
      securityText:
        "Se han adoptado las medidas técnicas y organizativas apropiadas para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.",
      lastUpdated: "Última actualización: enero de 2026.",
    },
    cookies: {
      title: "Política de Cookies",
      description: "Política de cookies del sitio web de Metin Aslan.",
      whatHeading: "¿Qué son las cookies?",
      whatText:
        "Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando los visita. Se utilizan para recordar preferencias, mejorar la experiencia de navegación y recopilar información estadística.",
      usedHeading: "Cookies utilizadas en este sitio web",
      usedText:
        "Este sitio web no utiliza cookies propias ni cookies de seguimiento de terceros. No se instalan cookies de análisis, publicidad ni redes sociales.",
      usedText2:
        "El proveedor de alojamiento (Vercel) puede utilizar cookies técnicas estrictamente necesarias para el funcionamiento del servicio. Estas cookies son esenciales y no requieren consentimiento previo.",
      manageHeading: "Cómo gestionar las cookies",
      manageText:
        "Puede configurar su navegador para aceptar, rechazar o eliminar cookies. A continuación se indican las instrucciones de los navegadores más comunes:",
      manageItems: [
        "Google Chrome: Configuración > Privacidad y seguridad",
        "Mozilla Firefox: Opciones > Privacidad y seguridad",
        "Safari: Preferencias > Privacidad",
        "Microsoft Edge: Configuración > Privacidad",
      ],
      updateHeading: "Actualización de esta política",
      updateText:
        "Esta política de cookies puede ser actualizada en el futuro. En caso de incorporar cookies de análisis u otras funcionalidades que requieran tratamiento de datos, se actualizará esta política y se implementará un mecanismo de consentimiento previo conforme a la normativa vigente.",
      lastUpdated: "Última actualización: enero de 2026.",
    },
    notFound: {
      title: "Página no encontrada.",
      back: "Volver al inicio",
    },
  },
  en: {
    nav: {
      services: "Services",
      process: "Process",
      showcases: "Cases",
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      location: "Vallès Occidental, Barcelona",
      name: "Metin Aslan",
      title: "Digital Automation Consultant for SMEs",
      tagline:
        "Micro-automation can work in any business. I automate administrative processes with AI and No-Code tools. Save 10-15 hours per week without hiring more staff.",
      cta: "View Services",
      ctaSecondary: "Get in Touch",
      valuePills: [
        "From €250",
        "Delivered in 2-3 weeks",
        "No vendor lock-in",
      ],
    },
    about: {
      heading: "About Me",
      p1: "I'm Metin Aslan, a consultant specializing in the intersection of finance and technology. I hold a degree in Economics from Koç University and a Master's in Digital Business Transformation from ESEI/UCAM (Spain), with over 5 years of international experience.",
      p2: "My background includes financial auditing at a Big 4 (EY) and managing accounting departments in the UK and USA. This experience allows me to identify critical administrative inefficiencies. Since January 2026 I have been operating as an independent consultant in Spain, developing automation solutions with AI and No-Code tools (n8n, Make, Google Workspace) for SMEs.",
      p3: "I offer agile, affordable micro-automations that democratize access to Artificial Intelligence for small businesses, enabling increased capacity without hiring additional administrative staff.",
      credentials: [
        { label: "EY (Ernst & Young)", detail: "Financial Auditing" },
        { label: "Koç University", detail: "Economics Degree" },
        { label: "ESEI / UCAM", detail: "Master's in Digital Transformation" },
        { label: "+5 years", detail: "International Experience (UK, USA, ES)" },
        { label: "Autonomo in Spain", detail: "Since January 2026" },
      ],
    },
    differentiators: {
      heading: "Why Choose Me",
      subtitle: "Four competitive advantages that set my service apart from traditional alternatives.",
      items: [
        {
          title: "No-Code vs Traditional Development",
          description: "My solutions are delivered in 2-3 weeks, not 6-12 months. The cost is up to 70% lower than custom development because I use No-Code platforms (Make, n8n) instead of custom programming.",
          stat: "70%",
          statLabel: "lower cost",
        },
        {
          title: "Integrated Generative AI",
          description: "Unlike rigid automation (RPA), my solutions incorporate AI models that understand unstructured documents: scanned invoices, emails, handwritten delivery notes.",
          stat: "AI",
          statLabel: "generative",
        },
        {
          title: "Hybrid Profile: Business + Technology",
          description: "Economist, former EY (Big 4) auditor and digital transformation specialist. I understand operational inefficiencies because I've worked inside them.",
          stat: "Big 4",
          statLabel: "experience",
        },
        {
          title: "Client Independence",
          description: "Solutions are built on your own tools (Google Workspace, Excel, your CRM). No vendor lock-in. Everything stays under your control.",
          stat: "100%",
          statLabel: "your control",
        },
      ],
    },
    market: {
      heading: "The Opportunity in Spain",
      subtitle: "Spanish SMEs urgently need automation. INE data and new legislation confirm it.",
      stats: [
        {
          value: "2.9M+",
          label: "companies in Spain are SMEs",
          detail: "99.8% of the business fabric. 93% are micro-enterprises (<10 employees). Source: INE.",
        },
        {
          value: "12%",
          label: "of SMEs use AI or Big Data",
          detail: "The remaining 88% manage their processes manually or with basic tools. Source: ONTSI.",
        },
        {
          value: "31%",
          label: "have digitized processes",
          detail: "Nearly 7 out of 10 SMEs still operate with manual or paper-based workflows.",
        },
        {
          value: "2026",
          label: "e-invoicing mandate",
          detail: "The Ley Crea y Crece requires all businesses to issue and receive electronic invoices.",
        },
      ],
      footer: "Sources: INE, ONTSI, Ley Crea y Crece (Law 18/2022), DigitalES.",
    },
    services: {
      heading: "Services",
      subtitle:
        "I intervene in your company's daily operations to replace manual and repetitive tasks with automated digital workflows.",
      targetNote: "Specialized in micro-enterprises (1-9 employees) in Vallès Occidental and Barcelona Metropolitan Area. Priority sectors: logistics, accountancies and professional offices.",
      items: [
        {
          title: "Operational Diagnosis",
          description:
            "Personalized study of how you manage your data (invoices, databases, communications). I identify pain points that consume time and we design the solution together.",
        },
        {
          title: "Automation Architecture",
          description:
            "Design of tailored solutions with No-Code technologies (Make, n8n) that connect your tools (Gmail, Excel, CRMs) with AI models (OpenAI, Claude, Gemini).",
        },
        {
          title: "Development & Implementation",
          description:
            "Configuration and deployment of bots and digital agents. For example: a system that reads incoming orders, extracts customer data and generates the invoice automatically.",
        },
        {
          title: "Training & Support",
          description:
            "Direct training for your team to operate the new digital tools autonomously. Solutions remain under your control.",
        },
      ],
    },
    process: {
      heading: "How I Work",
      subtitle:
        "5-phase methodology to ensure quality and deadlines on every project.",
      phases: [
        {
          number: "01",
          title: "Diagnosis & Initial Consulting",
          description:
            "Meeting to understand your pain points. Analysis of current tools. Detailed technical and economic proposal.",
        },
        {
          number: "02",
          title: "Architecture Design",
          description:
            "Automation flow diagram. Selection of No-Code tools (Make, n8n). Specification definition.",
        },
        {
          number: "03",
          title: "Development & Integration",
          description:
            "Scenario configuration. API connections between your applications. Unit testing of data flows.",
        },
        {
          number: "04",
          title: "Testing & Deployment",
          description:
            "Execution in test environment with real data. AI model tuning. Production deployment (Go Live).",
        },
        {
          number: "05",
          title: "Training & Handover",
          description:
            "Team training. Technical documentation and user manual. Warranty period begins.",
        },
      ],
    },
    showcases: {
      heading: "Case Studies",
      subtitle:
        "Micro-automation works in any sector. Real examples without company names.",
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      resultLabel: "Result",
      items: [
        {
          sector: "Accounting firm / Tax advisory",
          challenge:
            "Manual intake of invoices and documents from multiple clients.",
          solution:
            "System that classifies, extracts data and distributes documents automatically.",
          metric: "~12h/week",
          metricLabel: "saved",
        },
        {
          sector: "Furniture restoration workshop",
          challenge:
            "Search for business opportunities and manual quote preparation.",
          solution:
            "Opportunity search engine and quote automation.",
          metric: "3x",
          metricLabel: "faster",
        },
        {
          sector: "Logistics & transport company",
          challenge:
            "Paper-intensive flows: delivery notes, waybills, invoices.",
          solution:
            "Automation of document digitization and processing.",
          metric: "80%",
          metricLabel: "less paper",
        },
      ],
    },
    pricing: {
      heading: "Pricing",
      subtitle:
        "Indicative prices based on value delivered. Request a personalized technical and economic proposal with no obligation.",
      vat: "* All prices exclude VAT (21%). Subject to conditions.",
      comparisonHeading: "Comparison",
      comparison: {
        headers: ["", "Metin Aslan", "Big Consultancy", "Marketing Agency", "Do It Yourself"],
        rows: [
          { label: "Typical cost", values: ["From €1,500", "€50,000–100,000", "€3,000–10,000", "Free (your time)"] },
          { label: "Delivery time", values: ["2-3 weeks", "6-12 months", "1-3 months", "Indefinite"] },
          { label: "AI integrated", values: ["Yes", "Yes (high cost)", "Rarely", "Limited"] },
          { label: "SME focus", values: ["Yes", "No", "Partial", "N/A"] },
        ],
      },
      cta: "Request a Quote",
      from: "From",
      items: [
        {
          title: "Audit & Diagnosis",
          price: "250",
          unit: "EUR",
          description:
            "Entry point. Initial meeting, analysis of current tools and detailed technical proposal.",
          features: [
            "Diagnostic meeting",
            "Process analysis",
            "Technical and economic proposal",
            "No obligation",
          ],
        },
        {
          title: "Setup Implementation",
          price: "1,500",
          unit: "EUR",
          description:
            "Complete automation project. Design, development, testing and production deployment.",
          features: [
            "No-Code architecture",
            "Integration with your tools",
            "Deployment and testing",
            "Basic documentation",
          ],
          highlighted: true,
        },
        {
          title: "Maintenance & Support",
          price: "200",
          unit: "EUR/month",
          description:
            "Recurring support to ensure your automations run correctly and evolve with your needs.",
          features: [
            "Monthly technical support",
            "Adjustments and improvements",
            "Workflow updates",
            "Ongoing training",
          ],
        },
      ],
    },
    contact: {
      heading: "Contact",
      subtitle: "Does your SME spend too many hours on bureaucracy? Get in touch and let's talk.",
      email: "Email",
      location: "Location",
      locationValue: "Vallès Occidental, Barcelona",
      availability: "Availability",
      availabilityValue: "Vallès Occidental, Barcelona Metropolitan Area and remote",
      formName: "Name",
      formEmail: "Contact email",
      formMessage: "Briefly describe your situation",
      formSubmit: "Send Inquiry",
      formDisclaimer: "By submitting, you accept the privacy policy.",
    },
    faq: {
      heading: "Frequently Asked Questions",
      subtitle: "Get answers before reaching out.",
      items: [
        {
          question: "What is No-Code automation?",
          answer: "It's the use of visual platforms (Make, n8n) to connect your applications and automate tasks without writing code. It's faster, cheaper and easier to maintain than traditional development.",
        },
        {
          question: "How long does a typical project take?",
          answer: "A complete automation project is delivered in 2-3 weeks, from diagnosis to production deployment. More complex projects may extend to 4-6 weeks.",
        },
        {
          question: "Do I need technical knowledge?",
          answer: "No. Solutions are built on tools you already know (Gmail, Excel, Google Drive). I include training so your team can operate autonomously.",
        },
        {
          question: "What happens if something stops working?",
          answer: "I offer a monthly maintenance service (from €200/month) that includes technical support, adjustments and updates. Additionally, No-Code platforms have built-in monitoring.",
        },
        {
          question: "Can I benefit from Kit Digital?",
          answer: "Yes. My services are aligned with the subsidizable categories of the Kit Digital program (Next Generation EU funds). I guide you on how to apply for your digital voucher.",
        },
        {
          question: "How is this different from hiring a big consultancy?",
          answer: "Large consultancies work with minimum budgets of €50,000–100,000 and timelines of 6-12 months. My service offers equivalent solutions for SMEs from €1,500, delivered in weeks.",
        },
      ],
    },
    resources: {
      heading: "Resources & Guides",
      subtitle: "Practical articles on automation for SMEs.",
      comingSoon: "Coming soon",
      items: [
        { title: "How to prepare your business for mandatory e-invoicing", tag: "Ley Crea y Crece" },
        { title: "5 processes every accounting firm can automate today", tag: "Automation" },
        { title: "Kit Digital: step-by-step guide to apply for your voucher", tag: "Grants" },
      ],
    },
    footer: {
      rights: "All rights reserved.",
      legal: "Legal Notice",
      privacy: "Privacy",
      cookies: "Cookies",
    },
    legal: {
      title: "Legal Notice",
      description: "Legal notice and terms of use for Metin Aslan's website.",
      identificationHeading: "Identification Details",
      identificationIntro:
        "In compliance with Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), the following identification details of the owner of this website are provided:",
      holder: "Owner",
      nie: "Tax ID (NIE)",
      address: "Address",
      emailLabel: "Email",
      activity: "Professional activity",
      iae: "IAE Code (CNAE 6202)",
      objectHeading: "Purpose",
      objectText:
        "This website aims to inform about the professional process automation and digital transformation consulting services offered by Metin Aslan as a self-employed professional established in Spain. The activity falls within the Information and Communication Technology (ICT) sector, specifically process automation consulting (CNAE 6202 - IT consulting activities).",
      contractingHeading: "Contracting Conditions",
      contractingItems: [
        "Services are contracted by mutual agreement after acceptance of a written quotation.",
        "Quotations are valid for 30 calendar days unless otherwise indicated.",
        "Payment terms: 50% of the amount at the start of the project and 50% upon delivery, unless otherwise agreed in writing.",
        "All prices shown exclude VAT. The current applicable rate (21%) will be applied.",
        "The delivery timeline will be established in each individual quotation.",
        "The client is entitled to request reasonable revisions within the agreed scope of the project.",
      ],
      ipHeading: "Intellectual Property",
      ipText:
        "All content on this website (texts, images, design, logos, source code) is owned by or licensed to Metin Aslan and is protected by Spanish and international intellectual property laws. Reproduction, distribution, public communication or transformation without express authorization is prohibited.",
      liabilityHeading: "Limitation of Liability",
      liabilityText:
        "Metin Aslan is not responsible for any damages that may arise from the use of this website, including errors or omissions in the content, unavailability of the site, or transmission of viruses or malicious programs, provided they are not directly attributable.",
      jurisdictionHeading: "Applicable Law and Jurisdiction",
      jurisdictionText:
        "This legal notice is governed by Spanish law. For any dispute that may arise, the parties submit to the jurisdiction of the courts of Barcelona.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "Privacy policy and personal data protection for Metin Aslan's website.",
      controllerHeading: "Data Controller",
      controller: "Controller",
      dataHeading: "Data Collected",
      dataIntro:
        "Personal data collection is minimal and limited to:",
      dataItems: [
        "Data voluntarily provided through the contact form on this website (name, email address, message).",
        "Data voluntarily provided by the user when contacting via email.",
        "Navigation data (IP address, browser type) automatically collected by the hosting provider.",
      ],
      purposeHeading: "Purposes of Processing",
      purposeItems: [
        "Responding to inquiries received via email.",
        "Managing the commercial and professional relationship.",
        "Complying with applicable legal obligations.",
      ],
      basisHeading: "Legal Basis",
      basisItems: [
        "Consent of the data subject (Art. 6.1.a GDPR).",
        "Execution of a contract or pre-contractual measures (Art. 6.1.b GDPR).",
        "Legitimate interest of the controller (Art. 6.1.f GDPR).",
      ],
      retentionHeading: "Retention Period",
      retentionText:
        "Personal data will be retained for the time necessary to fulfill the purpose for which it was collected and for the legally required periods.",
      recipientsHeading: "Recipients",
      recipientsText:
        "Data will not be shared with third parties except where legally required. The website is hosted by Vercel Inc., whose servers may be located outside the EU, with appropriate international data transfer safeguards in place.",
      rightsHeading: "Data Subject Rights",
      rightsIntro: "Under the GDPR and LOPDGDD, you have the right to:",
      rightsItems: [
        "Access your personal data.",
        "Request rectification or erasure.",
        "Request restriction of processing.",
        "Object to processing.",
        "Request data portability.",
        "Lodge a complaint with the Spanish Data Protection Agency (AEPD) - www.aepd.es.",
      ],
      rightsContact: "To exercise these rights, you can contact us at:",
      securityHeading: "Security Measures",
      securityText:
        "Appropriate technical and organizational measures have been adopted to ensure the security of personal data and prevent its alteration, loss, unauthorized processing or access.",
      lastUpdated: "Last updated: January 2026.",
    },
    cookies: {
      title: "Cookie Policy",
      description: "Cookie policy for Metin Aslan's website.",
      whatHeading: "What are cookies?",
      whatText:
        "Cookies are small text files that websites store on the user's device when visited. They are used to remember preferences, improve the browsing experience and collect statistical information.",
      usedHeading: "Cookies used on this website",
      usedText:
        "This website does not use its own cookies or third-party tracking cookies. No analytics, advertising or social media cookies are installed.",
      usedText2:
        "The hosting provider (Vercel) may use strictly necessary technical cookies for the operation of the service. These cookies are essential and do not require prior consent.",
      manageHeading: "How to manage cookies",
      manageText:
        "You can configure your browser to accept, reject or delete cookies. Below are the instructions for the most common browsers:",
      manageItems: [
        "Google Chrome: Settings > Privacy and security",
        "Mozilla Firefox: Options > Privacy and security",
        "Safari: Preferences > Privacy",
        "Microsoft Edge: Settings > Privacy",
      ],
      updateHeading: "Updates to this policy",
      updateText:
        "This cookie policy may be updated in the future. If analytics cookies or other features requiring data processing are incorporated, this policy will be updated and a prior consent mechanism will be implemented in accordance with applicable regulations.",
      lastUpdated: "Last updated: January 2026.",
    },
    notFound: {
      title: "Page not found.",
      back: "Back to home",
    },
  },
};

export type Dictionary = (typeof dictionaries)["es"];

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale as Locale] || dictionaries.es;
}
