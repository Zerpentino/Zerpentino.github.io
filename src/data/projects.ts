export type CaseStudy = {
  challenge: string
  solution: string
  scope: string[]
  architecture: string[]
  features: string[]
  security: string[]
  technicalNotes: string[]
}

export type Project = {
  id: string
  name: string
  category: string
  stack: string[]
  summary: string
  features: string[]
  visibility: 'case-study' | 'public-repository'
  caseStudy: CaseStudy
}

// Portfolio content is intentionally isolated from presentation components.
// Do not add repository URLs or client information until the publication audit.
export const projects: Project[] = [
  {
    id: 'arrendamiento-global',
    name: 'Arrendamiento Global',
    category: 'Full Stack',
    stack: ['.NET MAUI', 'C#', 'XAML', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'mysql2'],
    summary: 'Solución Full Stack para clientes de arrendamiento con contratos, recibos, documentos y pagos.',
    features: ['API REST', 'JWT', 'Stripe Checkout', 'Firebase'],
    visibility: 'case-study',
    caseStudy: {
      challenge: 'Centralizar la consulta de contratos, recibos, documentos, datos relacionados y operaciones de pago desde una aplicación móvil.',
      solution: 'Cliente móvil conectado a una API REST para gestionar información de arrendamiento, operaciones de pago y notificaciones.',
      scope: ['Cliente móvil con .NET MAUI, C# y XAML.', 'Backend con TypeScript, Node.js y Express.', 'Acceso a datos con mysql2, repositorios y SQL parametrizado.', 'Modelo de datos persistido en MySQL.'],
      architecture: ['Aplicación móvil como cliente.', 'API REST con rutas y middleware de autenticación.', 'Capa de repositorios para acceso a datos.', 'MySQL como almacenamiento principal.'],
      features: ['Usuarios y clientes.', 'Contratos, anexos, recibos, documentos y seguros.', 'Pagos, bancos y cobranzas.', 'Notificaciones, dispositivos y reportes.'],
      security: ['JWT, bcrypt y middleware de autenticación.', 'Stripe Checkout y webhook para operaciones de pago.', 'Firebase Admin para notificaciones y dispositivos.', 'Nodemailer; generación de PDF, Excel y QR donde corresponde.'],
      technicalNotes: ['Coordinación entre cliente móvil y backend mediante rutas y dominios coincidentes.', 'Manejo de pagos y eventos mediante Stripe Checkout y webhook.', 'Uso de SQL parametrizado a través de repositorios.'],
    },
  },
  {
    id: 'imdelice',
    name: 'ImDelice',
    category: 'Full Stack',
    stack: ['.NET MAUI', 'C#', 'XAML', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Prisma ORM'],
    summary: 'Sistema para operación de restaurante con productos, variantes, combos, mesas, pedidos, inventario y pagos.',
    features: ['REST API', 'JWT', 'roles/permisos'],
    visibility: 'case-study',
    caseStudy: {
      challenge: 'Organizar la operación de restaurante en torno a menú, pedidos, mesas, inventario, pagos y actividades relacionadas.',
      solution: 'Aplicación Full Stack para operación de restaurante, con cliente .NET MAUI y backend REST sobre Node.js, Express, MySQL y Prisma.',
      scope: ['Cliente con .NET MAUI, C# y XAML.', 'Backend con TypeScript, Node.js y Express.', 'Persistencia en MySQL mediante Prisma ORM.', 'Prisma Migrate para migraciones.'],
      architecture: ['Capas de presentation, routes, core, infra y container.', 'API REST para las operaciones del sistema.', 'Prisma como capa de ORM y migraciones.', 'MySQL como base de datos.'],
      features: ['Usuarios, roles, permisos y categorías.', 'Productos, variantes, combos, modificadores y menús.', 'Mesas, órdenes, pagos e inventario.', 'Movimientos, gastos, reportes y operación de cocina donde corresponde.'],
      security: ['JWT y Bearer authentication.', 'bcrypt para credenciales.', 'Roles y permisos.', 'Zod para validación.'],
      technicalNotes: ['Modelado de operación de restaurante con productos configurables.', 'Separación por capas entre presentación, core e infraestructura.', 'Migraciones gestionadas con Prisma Migrate.'],
    },
  },
  {
    id: 'mindhelp',
    name: 'MindHelp',
    category: 'Mobile + Web',
    stack: ['.NET MAUI', 'C#', 'XAML', 'Angular', 'TypeScript', 'Angular Material', 'RxJS', 'Reactive Forms', 'REST APIs'],
    summary: 'Plataforma de atención psicológica con clientes móvil y web.',
    features: ['autenticación', 'perfiles', 'agenda', 'citas', 'chat', 'videollamadas', 'NOM-035', 'SecureStorage', 'AES', 'OpenTok/Vonage'],
    visibility: 'case-study',
    caseStudy: {
      challenge: 'Ofrecer experiencias móvil y web para procesos de atención psicológica, perfiles, agenda, citas y comunicación.',
      solution: 'Clientes móvil y web que consumen una API REST externa para los flujos de atención psicológica.',
      scope: ['Cliente móvil con .NET MAUI, C# y XAML.', 'Cliente web con Angular, TypeScript, Angular Material, RxJS y Reactive Forms.', 'Consumo de API REST externa.', 'No se incluye un backend propio ni base de datos de servidor.'],
      architecture: ['Aplicación móvil y portal web como clientes independientes.', 'Integración con API REST externa.', 'Flujos web construidos con Angular Material, RxJS y Reactive Forms.', 'Almacenamiento seguro y cifrado en el cliente móvil.'],
      features: ['Login, registro, recuperación y cambio de contraseña.', 'Perfiles, terapeutas, categorías y disponibilidad.', 'Agenda, citas, reprogramación y cancelación.', 'Chat, videollamadas, NOM-035, seguimiento terapéutico y PDF en portal terapeuta.'],
      security: ['Bearer authentication.', 'SecureStorage en móvil.', 'AES en payloads móviles.', 'OpenTok/Vonage y OneSignal en el portal web.'],
      technicalNotes: ['Coordinación de flujos de atención entre clientes móvil y web.', 'Manejo de agenda, citas y comunicación mediante integraciones confirmadas.', 'Consumo de servicios externos sin atribuir un backend propio.'],
    },
  },
  {
    id: 'abarrotes',
    name: 'Abarrotes',
    category: 'POS / Mobile-Desktop',
    stack: ['.NET MAUI', 'C#', 'XAML', 'SQLite', 'Microsoft.Data.Sqlite', 'xUnit', 'CommunityToolkit.Maui'],
    summary: 'POS local para ventas, inventario, clientes y operación de caja.',
    features: ['migraciones SQLite', 'importación XLSX', 'respaldos/restauración', 'pruebas automatizadas'],
    visibility: 'case-study',
    caseStudy: {
      challenge: 'Concentrar ventas, inventario, clientes y operación de caja en un POS local para operación comercial.',
      solution: 'Aplicación .NET MAUI con almacenamiento SQLite local, procesos de respaldo, migraciones y pruebas automatizadas.',
      scope: ['Interfaz con .NET MAUI, C# y XAML.', 'Arquitectura con Pages, Models, DTOs, Services, Repositories y Data.', 'Persistencia local con SQLite y Microsoft.Data.Sqlite.', 'Pruebas automatizadas con xUnit.'],
      architecture: ['Capas Pages, Models, DTOs, Services, Repositories y Data.', 'SQLite local con migraciones versionadas, índices y transacciones.', 'CommunityToolkit.Maui como librería de apoyo.', 'Sin backend remoto ni sincronización cloud funcional.'],
      features: ['Productos, departamentos, inventario y movimientos.', 'POS, líneas de ticket, tickets pendientes, reimpresión y cancelación de venta.', 'Caja: apertura, movimientos, corte y cierre.', 'Clientes, perfiles fiscales, pagos de clientes, importación XLSX, respaldo y restauración.'],
      security: ['Commit y rollback para integridad de transacciones.', 'Validación SHA-256 de respaldos.', 'Migraciones versionadas e índices en SQLite.'],
      technicalNotes: ['Persistencia y operación local sin depender de una API remota.', 'Manejo de respaldo, restauración e importación XLSX.', 'Cobertura de pruebas automatizadas con xUnit.'],
    },
  },
]
