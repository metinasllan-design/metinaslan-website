export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

const dictionaries = {
  es: {
    nav: {
      services: "Servicios",
      pricing: "Tarifas",
      contact: "Contacto",
    },
    hero: {
      location: "Vallès Occidental, Barcelona",
      name: "Metin Aslan",
      title: "Consultor de Automatización Digital para PYMES",
      tagline:
        "Automatizo procesos administrativos de tu negocio con IA y herramientas No-Code. Ahorra 10-15 horas semanales sin contratar más personal.",
      cta: "Ver Servicios",
      ctaSecondary: "Contactar",
    },
    about: {
      heading: "Sobre Mí",
      p1: "Soy Metin Aslan, consultor especializado en la intersección entre las finanzas y la tecnología. Graduado en Economía por la Universidad Koç y con un Máster en Transformación Digital en los Negocios por ESEI/UCAM (España), cuento con más de 5 años de experiencia internacional.",
      p2: "Mi trayectoria incluye auditoría financiera en una Big 4 (EY) y gestión de departamentos contables en Reino Unido y EE.UU. Esta experiencia me permite identificar ineficiencias administrativas críticas. Desde agosto de 2025 opero como consultor autónomo en España, desarrollando soluciones de automatización con IA y herramientas No-Code (n8n, Make, Google Workspace) para PYMES.",
      p3: "Ofrezco micro-automatizaciones ágiles y económicas que democratizan el acceso a la Inteligencia Artificial para el pequeño empresario, permitiendo aumentar la capacidad de trabajo sin contratar más personal administrativo.",
    },
    services: {
      heading: "Servicios",
      subtitle:
        "Intervengo en la operativa diaria de tu empresa para sustituir tareas manuales y repetitivas por flujos de trabajo digitales automatizados.",
      items: [
        {
          title: "Diagnóstico Operativo",
          description:
            "Estudio personalizado de cómo gestionas tus datos (facturas, bases de datos, comunicaciones). Identifico los puntos de dolor que consumen tiempo y diseñamos juntos la solución.",
        },
        {
          title: "Arquitectura de Automatización",
          description:
            "Diseño de soluciones a medida con tecnologías No-Code (Make, n8n) que conectan tus herramientas (Gmail, Excel, CRMs) con modelos de IA (OpenAI, Gemini).",
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
    pricing: {
      heading: "Tarifas",
      subtitle:
        "Precios orientativos por valor aportado. Solicita una propuesta técnica y económica personalizada sin compromiso.",
      vat: "* Todos los precios son sin IVA (21%). Sujeto a condiciones.",
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
        "Este sitio web no dispone de formularios de contacto ni cuentas de usuario. La recopilación de datos personales es mínima y se limita a:",
      dataItems: [
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
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      location: "Vallès Occidental, Barcelona",
      name: "Metin Aslan",
      title: "Digital Automation Consultant for SMEs",
      tagline:
        "I automate your business administrative processes with AI and No-Code tools. Save 10-15 hours per week without hiring more staff.",
      cta: "View Services",
      ctaSecondary: "Get in Touch",
    },
    about: {
      heading: "About Me",
      p1: "I'm Metin Aslan, a consultant specializing in the intersection of finance and technology. I hold a degree in Economics from Koç University and a Master's in Digital Business Transformation from ESEI/UCAM (Spain), with over 5 years of international experience.",
      p2: "My background includes financial auditing at a Big 4 (EY) and managing accounting departments in the UK and USA. This experience allows me to identify critical administrative inefficiencies. Since August 2025 I have been operating as an independent consultant in Spain, developing automation solutions with AI and No-Code tools (n8n, Make, Google Workspace) for SMEs.",
      p3: "I offer agile, affordable micro-automations that democratize access to Artificial Intelligence for small businesses, enabling increased capacity without hiring additional administrative staff.",
    },
    services: {
      heading: "Services",
      subtitle:
        "I intervene in your company's daily operations to replace manual and repetitive tasks with automated digital workflows.",
      items: [
        {
          title: "Operational Diagnosis",
          description:
            "Personalized study of how you manage your data (invoices, databases, communications). I identify pain points that consume time and we design the solution together.",
        },
        {
          title: "Automation Architecture",
          description:
            "Design of tailored solutions with No-Code technologies (Make, n8n) that connect your tools (Gmail, Excel, CRMs) with AI models (OpenAI, Gemini).",
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
    pricing: {
      heading: "Pricing",
      subtitle:
        "Indicative prices based on value delivered. Request a personalized technical and economic proposal with no obligation.",
      vat: "* All prices exclude VAT (21%). Subject to conditions.",
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
        "This website does not have contact forms or user accounts. Personal data collection is minimal and limited to:",
      dataItems: [
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
