export type ProjectDetail = {
    slug: string;

    overview: {
        status: string;
        frontend: string;
        backend: string;
        database: string;
        authentication: string;
        deployment: string;
    };

    architecture: {
        title: string;
        description: string;
        layers: {
            name: string;
            responsibility: string;
            technologies: string[];
            type:
            | "presentation"
            | "application"
            | "domain"
            | "infrastructure"
            | "persistence";
        }[];
    };
    systemDesign: {
        title: string;
        description: string;
        nodes: {
            id: string;
            label: string;
            description: string;
            type:
            | "actor"
            | "frontend"
            | "backend"
            | "security"
            | "persistence"
            | "external";
        }[];
    };
    databaseModel: {
        title: string;
        description: string;
        entities: {
            name: string;
            description: string;
            fields: string[];
        }[];
        relationships: {
            from: string;
            to: string;
            label: string;
        }[];
    };

    flow: {
        actor: string;
        description: string;
        steps: string[];
    }[];

    features: {
        title: string;
        description: string;
        items: string[];
        icon: string;
    }[];

    techStack: {
        title: string;
        technologies: string[];
    }[];

    decisions: {
        question: string;
        answer: string;
    }[];

    gallery: {
        title: string;
        image: string;
        description: string;
    }[];

    lessons: string[];

    codeStructure: {
        title: string;
        description: string;
        folders: {
            name: string;
            description: string;
        }[];
    }[];

    apiEndpoints: {
        group: string;
        description: string;
        endpoints: {
            method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
            path: string;
            description: string;
            access: "Público" | "Autenticado" | "Administrador";
        }[];
    }[];
    challenges: {
        title: string;
        problem: string;
        solution: string;
        technologies: string[];
    }[];
    roadmap: {
        title: string;
        description: string;
        priority: "Alta" | "Media" | "Baja";
        status: "Planificado" | "En evaluación";
        technologies: string[];
    }[];
    metrics: {
        value: string;
        label: string;
        description: string;
    }[];
};


export const projectDetails: ProjectDetail[] = [
    {
        slug: "viajespro",

        metrics: [
            {
                value: "3",
                label: "Tipos de usuario",
                description:
                    "Clientes, agentes certificados y administradores.",
            },
            {
                value: "REST",
                label: "Arquitectura API",
                description:
                    "Comunicación entre el frontend y ASP.NET Core.",
            },
            {
                value: "JWT",
                label: "Autenticación",
                description:
                    "Sesiones protegidas mediante tokens y autorización.",
            },
            {
                value: "SQL Server",
                label: "Persistencia",
                description:
                    "Modelo relacional para reservas, pagos y viajes.",
            },
        ],

        overview: {
            status: "Aplicación en vivo",
            frontend: "React",
            backend: "ASP.NET Core",
            database: "SQL Server",
            authentication: "JWT",
            deployment: "Vercel",
        },

        architecture: {
            title: "Separación de responsabilidades en ViajesPro",
            description:
                "La solución divide la interfaz, las operaciones de negocio, las entidades y la persistencia para mantener el sistema organizado y facilitar su evolución.",
            layers: [
                {
                    name: "Capa de presentación",
                    responsibility:
                        "Presenta viajes, reservas, paneles administrativos y formularios de certificación. También captura y valida la información antes de enviarla a la API.",
                    technologies: [
                        "Next.js",
                        "React",
                        "TypeScript",
                        "Tailwind CSS",
                    ],
                    type: "presentation",
                },
                {
                    name: "Capa de aplicación",
                    responsibility:
                        "Expone endpoints, procesa solicitudes HTTP, valida permisos y coordina las operaciones relacionadas con viajes, reservas y agentes.",
                    technologies: [
                        "ASP.NET Core",
                        "Controllers",
                        "DTOs",
                        "JWT",
                    ],
                    type: "application",
                },
                {
                    name: "Capa de dominio",
                    responsibility:
                        "Representa las entidades y reglas centrales del sistema, incluyendo usuarios, agentes, viajes, disponibilidades, reservas, pagos y estados.",
                    technologies: [
                        "C# Models",
                        "Business Rules",
                        "Enums",
                        "Validation",
                    ],
                    type: "domain",
                },
                {
                    name: "Capa de infraestructura",
                    responsibility:
                        "Implementa autenticación, carga de documentos, configuración del servicio, autorización y comunicación con servicios externos.",
                    technologies: [
                        "Middleware",
                        "File Upload",
                        "Dependency Injection",
                        "Authorization",
                    ],
                    type: "infrastructure",
                },
                {
                    name: "Capa de persistencia",
                    responsibility:
                        "Gestiona consultas, relaciones y transacciones sobre la base de datos relacional.",
                    technologies: [
                        "Entity Framework Core",
                        "DbContext",
                        "SQL Server",
                        "LINQ",
                    ],
                    type: "persistence",
                },
            ],
        },
        systemDesign: {
            title: "Arquitectura general de ViajesPro",
            description:
                "La plataforma conecta clientes, agentes certificados y administradores con un frontend web, una API REST protegida y una base de datos relacional.",
            nodes: [
                {
                    id: "viajespro-users",
                    label: "Clientes, agentes y administradores",
                    description:
                        "Los clientes realizan reservas, los agentes certificados publican viajes y los administradores supervisan la plataforma.",
                    type: "actor",
                },
                {
                    id: "viajespro-frontend",
                    label: "Frontend con Next.js",
                    description:
                        "La interfaz presenta viajes, formularios, paneles administrativos y procesos de certificación utilizando rutas del App Router.",
                    type: "frontend",
                },
                {
                    id: "viajespro-security",
                    label: "Autenticación y autorización",
                    description:
                        "JWT, roles y permisos controlan el acceso a las operaciones disponibles para cada tipo de usuario.",
                    type: "security",
                },
                {
                    id: "viajespro-api",
                    label: "ASP.NET Core Web API",
                    description:
                        "La API aplica las reglas de negocio relacionadas con viajes, disponibilidades, reservas, pasajeros, agentes y reembolsos.",
                    type: "backend",
                },
                {
                    id: "viajespro-ef",
                    label: "Entity Framework Core",
                    description:
                        "La capa de persistencia traduce las operaciones del dominio en consultas y transacciones sobre SQL Server.",
                    type: "persistence",
                },
                {
                    id: "viajespro-database",
                    label: "SQL Server",
                    description:
                        "Almacena usuarios, agentes, documentación, destinos, viajes, reservas, estados, pagos, notificaciones e historial.",
                    type: "persistence",
                },
            ],
        },
        databaseModel: {
            title: "Entidades principales de ViajesPro",
            description:
                "El modelo relacional separa identidad, certificación, catálogo de viajes, disponibilidad, reservas, pagos y trazabilidad.",
            entities: [
                {
                    name: "Usuarios",
                    description:
                        "Almacena las cuentas que acceden a la plataforma.",
                    fields: [
                        "UsuarioId",
                        "RolId",
                        "Nombre",
                        "Correo",
                        "PasswordHash",
                        "Activo",
                    ],
                },
                {
                    name: "Agentes",
                    description:
                        "Contiene la información legal del usuario que solicita autorización para ofrecer viajes.",
                    fields: [
                        "AgenteId",
                        "UsuarioId",
                        "NombreLegal",
                        "NumeroCedula",
                        "NumeroLicencia",
                        "EstadoCertificacionId",
                    ],
                },
                {
                    name: "DocumentosAgente",
                    description:
                        "Registra los archivos utilizados para validar la identidad y licencia del agente.",
                    fields: [
                        "DocumentoAgenteId",
                        "AgenteId",
                        "TipoDocumento",
                        "RutaArchivo",
                        "FechaCarga",
                    ],
                },
                {
                    name: "Viajes",
                    description:
                        "Representa los paquetes publicados por agentes certificados.",
                    fields: [
                        "ViajeId",
                        "AgenteId",
                        "DestinoId",
                        "TipoViajeId",
                        "Titulo",
                        "Descripcion",
                        "Precio",
                        "EstadoViajeId",
                    ],
                },
                {
                    name: "Disponibilidades",
                    description:
                        "Define fechas, cupos y condiciones disponibles para cada viaje.",
                    fields: [
                        "DisponibilidadId",
                        "ViajeId",
                        "FechaSalida",
                        "FechaRegreso",
                        "CuposDisponibles",
                        "Activo",
                    ],
                },
                {
                    name: "Reservas",
                    description:
                        "Registra la operación realizada por un cliente sobre una disponibilidad.",
                    fields: [
                        "ReservaId",
                        "UsuarioId",
                        "DisponibilidadId",
                        "EstadoReservaId",
                        "FechaReserva",
                        "CantidadPersonas",
                        "PrecioUnitario",
                        "PrecioTotal",
                    ],
                },
                {
                    name: "Pasajeros",
                    description:
                        "Almacena las personas asociadas a una reservación.",
                    fields: [
                        "PasajeroId",
                        "ReservaId",
                        "NombreCompleto",
                        "DocumentoIdentidad",
                        "FechaNacimiento",
                    ],
                },
                {
                    name: "Pagos",
                    description:
                        "Conserva los movimientos financieros asociados a una reserva.",
                    fields: [
                        "PagoId",
                        "ReservaId",
                        "Monto",
                        "EstadoPagoId",
                        "FechaPago",
                        "Referencia",
                    ],
                },
                {
                    name: "HistorialReserva",
                    description:
                        "Registra cada transición de estado realizada sobre la reserva.",
                    fields: [
                        "HistorialReservaId",
                        "ReservaId",
                        "EstadoAnteriorId",
                        "EstadoNuevoId",
                        "UsuarioResponsableId",
                        "Motivo",
                        "FechaCambio",
                    ],
                },
            ],
            relationships: [
                {
                    from: "Usuarios",
                    to: "Agentes",
                    label:
                        "Un usuario puede solicitar certificación y convertirse en agente autorizado.",
                },
                {
                    from: "Agentes",
                    to: "DocumentosAgente",
                    label:
                        "Cada agente puede adjuntar varios documentos de respaldo.",
                },
                {
                    from: "Agentes",
                    to: "Viajes",
                    label:
                        "Un agente certificado puede publicar y administrar múltiples viajes.",
                },
                {
                    from: "Viajes",
                    to: "Disponibilidades",
                    label:
                        "Un viaje puede ofrecer varias fechas con cupos independientes.",
                },
                {
                    from: "Usuarios",
                    to: "Reservas",
                    label:
                        "Un cliente puede realizar múltiples reservas.",
                },
                {
                    from: "Disponibilidades",
                    to: "Reservas",
                    label:
                        "Cada reserva consume cupos de una disponibilidad específica.",
                },
                {
                    from: "Reservas",
                    to: "Pasajeros",
                    label:
                        "Una reservación contiene uno o más pasajeros.",
                },
                {
                    from: "Reservas",
                    to: "Pagos",
                    label:
                        "Una reserva puede registrar uno o varios movimientos de pago.",
                },
                {
                    from: "Reservas",
                    to: "HistorialReserva",
                    label:
                        "Cada cambio de estado genera un registro de trazabilidad.",
                },
            ],
        },

        codeStructure: [
            {
                title: "Frontend",
                description:
                    "El frontend utiliza Next.js con App Router. La aplicación separa las rutas, los componentes visuales, las utilidades compartidas y la lógica de protección de acceso.",
                folders: [
                    {
                        name: "src/app",
                        description:
                            "Contiene las rutas, páginas, layouts y segmentos principales de la aplicación utilizando el App Router de Next.js.",
                    },
                    {
                        name: "src/components",
                        description:
                            "Agrupa componentes reutilizables de interfaz como formularios, navegación, tarjetas, paneles y elementos visuales.",
                    },
                    {
                        name: "src/lib",
                        description:
                            "Centraliza funciones compartidas, configuraciones, validaciones y utilidades utilizadas por distintas partes del frontend.",
                    },
                    {
                        name: "src/middleware.js",
                        description:
                            "Interviene en las solicitudes antes de cargar determinadas rutas y permite aplicar reglas de acceso y redirección.",
                    },
                    {
                        name: "public",
                        description:
                            "Almacena recursos estáticos como imágenes, íconos y archivos visibles desde el navegador.",
                    },
                    {
                        name: "Certificación de agentes",
                        description:
                            "Registro y revisión de datos legales, cédula, licencia y documentos requeridos para autorizar la publicación de viajes.",
                    },
                ],
            },
            {
                title: "Backend",
                description:
                    "La API está construida con ASP.NET Core y separa las responsabilidades entre controladores, modelos, objetos de transferencia, middleware y acceso a datos.",
                folders: [
                    {
                        name: "Controllers",
                        description:
                            "Expone los endpoints HTTP para usuarios, viajes, reservas, pagos, permisos y otros módulos de la plataforma.",
                    },
                    {
                        name: "DTOs",
                        description:
                            "Define los objetos utilizados para recibir y devolver datos sin exponer directamente todas las propiedades de las entidades.",
                    },
                    {
                        name: "Models",
                        description:
                            "Contiene las entidades que representan usuarios, roles, viajes, reservas, pagos, permisos y demás datos del dominio.",
                    },
                    {
                        name: "Context",
                        description:
                            "Configura el DbContext y la comunicación entre Entity Framework Core y SQL Server.",
                    },
                    {
                        name: "Middleware",
                        description:
                            "Implementa lógica transversal que se ejecuta durante el procesamiento de las solicitudes HTTP.",
                    },
                    {
                        name: "Program.cs",
                        description:
                            "Registra servicios, autenticación, autorización, Entity Framework, controladores y configuración general de la API.",
                    },
                ],
            },

            {
                title: "Persistencia",
                description:
                    "La capa de persistencia utiliza Entity Framework Core para mapear las entidades de la aplicación y gestionar su almacenamiento en SQL Server.",
                folders: [
                    {
                        name: "DbContext",
                        description:
                            "Representa la sesión de trabajo con la base de datos y expone las colecciones de entidades utilizadas por la API.",
                    },
                    {
                        name: "Entity Framework Core",
                        description:
                            "Gestiona consultas, relaciones y operaciones de persistencia desde el backend.",
                    },
                    {
                        name: "SQL Server",
                        description:
                            "Almacena la información relacional de usuarios, roles, viajes, reservas, pagos, pantallas y permisos.",
                    },
                ],
            },
        ],
        apiEndpoints: [
            {
                group: "Autenticación",
                description:
                    "Endpoints responsables del registro, inicio de sesión, recuperación del usuario autenticado y consulta de permisos.",
                endpoints: [
                    {
                        method: "POST",
                        path: "/api/Auth/login",
                        description:
                            "Valida las credenciales, genera el token JWT y devuelve los datos del usuario junto con sus permisos.",
                        access: "Público",
                    },
                    {
                        method: "POST",
                        path: "/api/Auth/registro",
                        description:
                            "Registra una nueva cuenta y asigna automáticamente el rol de cliente.",
                        access: "Público",
                    },
                    {
                        method: "GET",
                        path: "/api/Auth/me",
                        description:
                            "Obtiene el perfil del usuario identificado mediante el token JWT.",
                        access: "Autenticado",
                    },
                    {
                        method: "GET",
                        path: "/api/Auth/permisos/{usuarioId}",
                        description:
                            "Consulta las pantallas y permisos asignados al rol de un usuario.",
                        access: "Autenticado",
                    },
                ],
            },
            {
                group: "Certificación de agentes",
                description:
                    "Proceso mediante el cual un usuario presenta sus datos legales y documentos para ser autorizado como agente de viajes.",
                endpoints: [
                    {
                        method: "GET",
                        path: "/api/Agentes/certificacion/estado",
                        description:
                            "Consulta si el usuario tiene una solicitud de certificación y devuelve su estado, datos registrados y motivo de rechazo.",
                        access: "Autenticado",
                    },
                    {
                        method: "POST",
                        path: "/api/Agentes/certificacion",
                        description:
                            "Envía una solicitud con nombre legal, cédula, número de licencia y documentos adjuntos mediante multipart/form-data.",
                        access: "Autenticado",
                    },
                ],
            },
            {
                group: "Viajes",
                description:
                    "Operaciones para consultar, filtrar y administrar los viajes publicados en la plataforma.",
                endpoints: [
                    {
                        method: "GET",
                        path: "/api/Viajes",
                        description:
                            "Obtiene los viajes y permite filtrarlos por estado, tipo, destino o texto de búsqueda.",
                        access: "Autenticado",
                    },
                    {
                        method: "GET",
                        path: "/api/Viajes/{viajeId}",
                        description:
                            "Obtiene el detalle de un viaje junto con su destino y disponibilidades.",
                        access: "Autenticado",
                    },
                    {
                        method: "POST",
                        path: "/api/Viajes",
                        description:
                            "Crea un nuevo viaje después de validar el tipo, destino y posibles duplicados.",
                        access: "Administrador",
                    },
                    {
                        method: "PUT",
                        path: "/api/Viajes/{viajeId}",
                        description:
                            "Actualiza la información, precio, cupos y estado de un viaje.",
                        access: "Administrador",
                    },
                    {
                        method: "PUT",
                        path: "/api/Viajes/{viajeId}/desactivar",
                        description:
                            "Desactiva un viaje sin eliminar su información histórica.",
                        access: "Administrador",
                    },
                ],
            },
            {
                group: "Reservas",
                description:
                    "Endpoints que gestionan la creación, consulta y actualización del estado de las reservaciones.",
                endpoints: [
                    {
                        method: "GET",
                        path: "/api/Reservas",
                        description:
                            "Obtiene las reservas con información del usuario, viaje, disponibilidad y estado.",
                        access: "Autenticado",
                    },
                    {
                        method: "GET",
                        path: "/api/Reservas/{reservaId}",
                        description:
                            "Obtiene el detalle de una reserva, incluyendo pasajeros, pagos e historial de estados.",
                        access: "Autenticado",
                    },
                    {
                        method: "POST",
                        path: "/api/Reservas",
                        description:
                            "Crea una reserva, registra sus pasajeros, descuenta cupos y genera el historial inicial.",
                        access: "Autenticado",
                    },
                    {
                        method: "PUT",
                        path: "/api/Reservas/{reservaId}/estado",
                        description:
                            "Cambia el estado de una reserva y ajusta los cupos cuando se cancela o reactiva.",
                        access: "Autenticado",
                    },
                ],
            },
            {
                group: "Disponibilidad",
                description:
                    "Operaciones relacionadas con las fechas y cupos disponibles para cada viaje.",
                endpoints: [
                    {
                        method: "GET",
                        path: "/api/Disponibilidades",
                        description:
                            "Obtiene las disponibilidades registradas para los viajes.",
                        access: "Público",
                    },
                    {
                        method: "GET",
                        path: "/api/Disponibilidades/{disponibilidadId}",
                        description:
                            "Obtiene una disponibilidad específica por su identificador.",
                        access: "Público",
                    },
                    {
                        method: "POST",
                        path: "/api/Disponibilidades",
                        description:
                            "Registra una nueva fecha y cantidad de cupos para un viaje.",
                        access: "Administrador",
                    },
                ],
            },
        ],
        challenges: [
            {
                title: "Evitar reservas duplicadas",
                problem:
                    "Un usuario podía intentar reservar más de una vez la misma fecha de viaje, provocando registros repetidos y una experiencia inconsistente.",
                solution:
                    "Antes de crear la reserva, la API verifica si el usuario ya posee una reserva activa para la misma disponibilidad. Las reservas canceladas no bloquean una nueva operación.",
                technologies: [
                    "Entity Framework Core",
                    "Validaciones de negocio",
                    "LINQ",
                ],
            },
            {
                title: "Validar la certificación de los agentes",
                problem:
                    "La plataforma no debe permitir que cualquier usuario publique y comercialice viajes sin demostrar que posee identidad legal y licencia para operar como agente.",
                solution:
                    "Se implementó un proceso de certificación que solicita datos legales, cédula, número de licencia y documentos de respaldo. La API evita documentos duplicados, controla los estados de revisión y conserva el motivo cuando una solicitud es rechazada.",
                technologies: [
                    "ASP.NET Core",
                    "Multipart Form Data",
                    "File Upload",
                    "Entity Framework Core",
                    "Role Authorization",
                ],
            },
            {
                title: "Mantener los cupos consistentes",
                problem:
                    "La cantidad de cupos disponibles debe mantenerse sincronizada con las reservas creadas, canceladas, reactivadas o reagendadas.",
                solution:
                    "La API valida los cupos antes de confirmar cada operación y actualiza la disponibilidad según el cambio realizado. Al cancelar se devuelven los cupos y al reactivar se descuentan nuevamente.",
                technologies: [
                    "SQL Server",
                    "Entity Framework Core",
                    "Transacciones",
                ],
            },
            {
                title: "Crear reservas de forma atómica",
                problem:
                    "Una reserva involucra varias operaciones: guardar la cabecera, registrar pasajeros, descontar cupos y crear el historial de estado.",
                solution:
                    "Todas las operaciones se ejecutan dentro de una transacción. Si alguna falla, se realiza rollback para evitar reservas incompletas o cupos modificados incorrectamente.",
                technologies: [
                    "Database Transactions",
                    "Entity Framework Core",
                    "SQL Server",
                ],
            },
            {
                title: "Gestionar el ciclo de vida de una reserva",
                problem:
                    "Las reservas pueden pasar por distintos estados, y cada cambio debe conservar el estado anterior, el nuevo estado, el usuario responsable y el motivo.",
                solution:
                    "Cada modificación registra una entrada en el historial de estados. Esto permite conservar trazabilidad y consultar cómo evolucionó una reserva.",
                technologies: [
                    "Historial de estados",
                    "Modelo relacional",
                    "Auditoría",
                ],
            },
            {
                title: "Reagendar sin perder consistencia",
                problem:
                    "Mover una reserva a otra fecha requiere devolver los cupos anteriores, validar la nueva disponibilidad y descontar los cupos de la nueva fecha.",
                solution:
                    "El reagendamiento comprueba que la nueva fecha pertenezca al mismo viaje, esté activa, no haya pasado y tenga cupos suficientes. Después actualiza ambas disponibilidades, registra el movimiento y genera una notificación.",
                technologies: [
                    "Transacciones",
                    "Autorización",
                    "Notificaciones",
                    "Validaciones",
                ],
            },
            {
                title: "Controlar solicitudes de reembolso",
                problem:
                    "Una reserva no debe generar múltiples solicitudes activas de reembolso ni solicitar montos inválidos.",
                solution:
                    "La API comprueba el estado de la reserva, evita solicitudes duplicadas y calcula el monto utilizando los pagos aprobados asociados a la operación.",
                technologies: [
                    "Entity Framework Core",
                    "Reglas de negocio",
                    "Estados de pago",
                ],
            },
        ],
        roadmap: [
            {
                title: "Integración de pasarela de pago",
                description:
                    "Permitir el pago de reservas desde la plataforma, registrar transacciones y actualizar automáticamente el estado de pago.",
                priority: "Alta",
                status: "Planificado",
                technologies: [
                    "Payment Gateway",
                    "Webhooks",
                    "Estados de pago",
                ],
            },
            {
                title: "Pruebas automatizadas",
                description:
                    "Agregar pruebas unitarias y de integración para validar reglas de negocio, autenticación, reservas y cambios de estado.",
                priority: "Alta",
                status: "Planificado",
                technologies: [
                    "xUnit",
                    "Integration Testing",
                    "Mocking",
                ],
            },
            {
                title: "Contenedores con Docker",
                description:
                    "Empaquetar frontend, API y servicios relacionados para mantener entornos consistentes entre desarrollo y producción.",
                priority: "Media",
                status: "Planificado",
                technologies: [
                    "Docker",
                    "Docker Compose",
                    "Containers",
                ],
            },
            {
                title: "Pipeline de CI/CD",
                description:
                    "Automatizar validaciones, compilación, pruebas y despliegue cuando se publiquen cambios en los repositorios.",
                priority: "Media",
                status: "Planificado",
                technologies: [
                    "GitHub Actions",
                    "Build Pipeline",
                    "Automated Deployment",
                ],
            },
            {
                title: "Servicio de correos",
                description:
                    "Enviar confirmaciones de reserva, avisos de reprogramación, cambios de estado y recuperación de cuenta.",
                priority: "Alta",
                status: "Planificado",
                technologies: [
                    "Email Service",
                    "Templates",
                    "Background Jobs",
                ],
            },
            {
                title: "Caché para consultas frecuentes",
                description:
                    "Reducir consultas repetidas para catálogos, destinos y viajes disponibles mediante una capa de caché.",
                priority: "Baja",
                status: "En evaluación",
                technologies: [
                    "Redis",
                    "Cache Invalidation",
                    "Performance",
                ],
            },
            {
                title: "Observabilidad centralizada",
                description:
                    "Centralizar logs, métricas y trazas para facilitar el diagnóstico de errores y el seguimiento del rendimiento.",
                priority: "Media",
                status: "En evaluación",
                technologies: [
                    "OpenTelemetry",
                    "Structured Logging",
                    "Monitoring",
                ],
            },
            {
                title: "Procesamiento asíncrono",
                description:
                    "Mover notificaciones y operaciones no críticas fuera del flujo principal para mejorar el tiempo de respuesta.",
                priority: "Baja",
                status: "En evaluación",
                technologies: [
                    "Background Services",
                    "Message Queue",
                    "RabbitMQ",
                ],
            },
        ],
        flow: [
            {
                actor: "Cliente",
                description:
                    "Recorrido principal de una persona que explora los viajes disponibles y realiza una reservación.",
                steps: [
                    "Crear una cuenta o iniciar sesión.",
                    "Explorar los viajes publicados en la plataforma.",
                    "Consultar el destino, precio, fechas, cupos y servicios incluidos.",
                    "Seleccionar una disponibilidad.",
                    "Indicar la cantidad de personas que participarán en el viaje.",
                    "Completar la información de los pasajeros.",
                    "Confirmar la reservación.",
                    "Consultar el estado y seguimiento de la reserva.",
                    "Recibir notificaciones ante cambios, pausas o reprogramaciones.",
                    "Solicitar un reembolso cuando corresponda.",
                ],
            },

            {
                actor: "Agente de viajes",
                description:
                    "Proceso seguido por un usuario que desea certificarse como agente para ofrecer y administrar viajes dentro de la plataforma.",
                steps: [
                    "Crear una cuenta o iniciar sesión.",
                    "Acceder al proceso de certificación como agente de viajes.",
                    "Registrar el nombre legal, número de cédula y número de licencia.",
                    "Adjuntar los documentos de identidad y licencia requeridos.",
                    "Enviar la solicitud de certificación.",
                    "Consultar si la solicitud está pendiente, aprobada o rechazada.",
                    "Corregir y volver a enviar la documentación cuando la solicitud sea rechazada.",
                    "Obtener autorización para operar como agente certificado.",
                    "Crear viajes con destinos, precios, servicios incluidos y condiciones.",
                    "Registrar fechas de salida, regreso y cupos disponibles.",
                    "Administrar los viajes y reservaciones asociadas a sus publicaciones.",
                    "Notificar reprogramaciones, cancelaciones o devoluciones a los clientes.",
                ],
            },

            {
                actor: "Administrador",
                description:
                    "Flujo encargado de validar agentes, administrar la plataforma y supervisar las operaciones realizadas por clientes y agentes.",
                steps: [
                    "Iniciar sesión con una cuenta administrativa.",
                    "Consultar las solicitudes de certificación de agentes.",
                    "Revisar los datos legales, la cédula, la licencia y los documentos adjuntos.",
                    "Aprobar o rechazar la certificación indicando el motivo correspondiente.",
                    "Administrar usuarios, roles, pantallas y permisos.",
                    "Gestionar destinos, ciudades, países y tipos de viaje.",
                    "Supervisar los viajes publicados por los agentes certificados.",
                    "Consultar reservaciones, pasajeros y pagos.",
                    "Gestionar estados, reprogramaciones, cancelaciones y reembolsos.",
                    "Revisar quejas, interacciones e historial de cambios.",
                ],
            },
        ],

        features: [
            {
                title: "Gestión de viajes",
                description:
                    "Administración de paquetes turísticos, destinos, precios y contenido del viaje.",
                items: ["Paquetes", "Destinos", "Precios", "Detalles"],
                icon: "Plane",
            },
            {
                title: "Reservas",
                description:
                    "Flujo completo para consultar disponibilidad y registrar reservaciones.",
                items: ["Disponibilidad", "Cantidad de personas", "Estados", "Historial"],
                icon: "CalendarCheck",
            },
            {
                title: "Autenticación",
                description:
                    "Acceso protegido mediante tokens y permisos según el tipo de usuario.",
                items: ["JWT", "Roles", "Autorización", "Sesiones"],
                icon: "ShieldCheck",
            },
            {
                title: "Agentes certificados",
                description:
                    "Registro y validación de información legal para quienes publican viajes.",
                items: [
                    "Datos legales",
                    "Documentación",
                    "Certificación",
                    "Validación",
                ],
                icon: "BadgeCheck",
            },
            {
                title: "Gestión administrativa",
                description:
                    "Herramientas para controlar contenido, operaciones y estados del sistema.",
                items: ["Usuarios", "Reservas", "Viajes", "Disponibilidad"],
                icon: "Settings",
            },
            {
                title: "Reprogramaciones",
                description:
                    "Preparado para gestionar viajes pausados, reprogramaciones y devoluciones.",
                items: [
                    "Notificaciones",
                    "Cambio de fecha",
                    "Devoluciones",
                    "Seguimiento",
                ],
                icon: "RefreshCcw",
            },
        ],

        techStack: [
            {
                title: "Frontend",
                technologies: ["React", "JavaScript", "Axios", "React Router"],
            },
            {
                title: "Backend",
                technologies: ["ASP.NET Core", "C#", "Entity Framework Core"],
            },
            {
                title: "Base de datos",
                technologies: ["SQL Server", "Relaciones", "Vistas", "Constraints"],
            },
            {
                title: "Seguridad y despliegue",
                technologies: ["JWT", "Roles", "Vercel", "REST API"],
            },
        ],

        decisions: [
            {
                question: "¿Por qué React?",
                answer:
                    "Permitió construir una interfaz modular y reutilizable, separando la navegación, los formularios, las tarjetas de viajes y los procesos de reserva en componentes independientes.",
            },
            {
                question: "¿Por qué ASP.NET Core?",
                answer:
                    "Ofrece una base sólida para crear APIs REST, aplicar inyección de dependencias, validaciones, autenticación y una separación clara entre controladores, servicios y acceso a datos.",
            },
            {
                question: "¿Por qué SQL Server?",
                answer:
                    "El sistema necesita relaciones consistentes entre usuarios, viajes, disponibilidad, reservas y estados. SQL Server permite aplicar integridad referencial y consultas estructuradas.",
            },
            {
                question: "¿Por qué JWT?",
                answer:
                    "JWT permite proteger los endpoints y mantener una autenticación desacoplada entre el frontend desplegado y la API.",
            },
        ],

        gallery: [
            {
                title: "Exploración de destinos",
                image: "/images/projects/viajespro/hero.png",
                description:
                    "Pantalla principal con filtros por destino, precio y tipo de viaje, además de acceso directo al detalle de cada paquete.",
            },
            {
                title: "Detalle del viaje",
                image: "/images/projects/viajespro/detail.png",
                description:
                    "Vista con información del destino, servicios incluidos, precio, fechas disponibles y acceso al proceso de reserva.",
            },
            {
                title: "Proceso de reserva",
                image: "/images/projects/viajespro/booking.png",
                description:
                    "Formulario para seleccionar disponibilidad, cantidad de personas y confirmar los datos de la reservación.",
            },
            {
                title: "Historial de reservas",
                image: "/images/projects/viajespro/reservations.png",
                description:
                    "Sección donde el cliente puede consultar las reservas realizadas y revisar el estado de cada operación.",
            },
            {
                title: "Gestión de viajes",
                image: "/images/projects/viajespro/management.png",
                description:
                    "Herramientas para administrar paquetes turísticos, precios, destinos, contenido y disponibilidad.",
            },
            {
                title: "Panel administrativo",
                image: "/images/projects/viajespro/admin.png",
                description:
                    "Vista de control para gestionar usuarios, agentes, reservas y procesos administrativos de la plataforma.",
            },
        ],


        lessons: [
            "Separar correctamente frontend, API y base de datos.",
            "Diseñar relaciones para reservas, usuarios y disponibilidad.",
            "Implementar autenticación y autorización con JWT.",
            "Consumir una API REST desde una aplicación React.",
            "Aplicar validaciones tanto en frontend como en backend.",
            "Modelar procesos de negocio que involucran distintos estados.",
        ],




    },
    {
        slug: "pet-adopt",

        metrics: [
            {
                value: "3",
                label: "Perfiles principales",
                description:
                    "Adoptantes, publicadores y administradores.",
            },
            {
                value: "React",
                label: "Aplicación SPA",
                description:
                    "Frontend construido con React y Vite.",
            },
            {
                value: ".NET",
                label: "API REST",
                description:
                    "Backend desarrollado con ASP.NET Core.",
            },
            {
                value: "JWT + Key",
                label: "Seguridad",
                description:
                    "Autenticación de usuarios y validación del cliente.",
            },
        ],

        overview: {
            status: "Proyecto completado",
            frontend: "React 19 + Vite",
            backend: "ASP.NET Core Web API",
            database: "SQL Server",
            authentication: "JWT, roles y API Key",
            deployment: "Vercel + API remota",
        },

        architecture: {
            title: "Separación de responsabilidades en Pet Adopt",
            description:
                "La aplicación separa navegación, consumo de datos, reglas del proceso de adopción y persistencia para evitar dependencias innecesarias.",
            layers: [
                {
                    name: "Capa de presentación",
                    responsibility:
                        "Gestiona el catálogo, los formularios, los paneles por rol y la experiencia visual de la plataforma.",
                    technologies: [
                        "React",
                        "Vite",
                        "React Router",
                        "Tailwind CSS",
                    ],
                    type: "presentation",
                },
                {
                    name: "Estado y comunicación",
                    responsibility:
                        "Centraliza el consumo de la API, el caché remoto y el estado de autenticación utilizado por la interfaz.",
                    technologies: [
                        "React Query",
                        "Axios",
                        "Zustand",
                        "API Modules",
                    ],
                    type: "application",
                },
                {
                    name: "Capa de aplicación",
                    responsibility:
                        "Expone endpoints y coordina operaciones de mascotas, usuarios, solicitudes, recomendaciones y procesos administrativos.",
                    technologies: [
                        "ASP.NET Core",
                        "Controllers",
                        "DTOs",
                        "JWT",
                    ],
                    type: "application",
                },
                {
                    name: "Capa de dominio",
                    responsibility:
                        "Contiene las entidades y reglas del proceso de adopción, incluyendo validaciones de disponibilidad y solicitudes duplicadas.",
                    technologies: [
                        "C# Models",
                        "Validation",
                        "Role Rules",
                        "Adoption Rules",
                    ],
                    type: "domain",
                },
                {
                    name: "Infraestructura y seguridad",
                    responsibility:
                        "Protege la API mediante autenticación JWT, autorización por rol y validación de API Key.",
                    technologies: [
                        "Middleware",
                        "API Key",
                        "JWT Bearer",
                        "Authorization",
                    ],
                    type: "infrastructure",
                },
                {
                    name: "Persistencia",
                    responsibility:
                        "Administra las relaciones entre usuarios, perfiles, mascotas, catálogos y solicitudes.",
                    technologies: [
                        "Entity Framework Core",
                        "DbContext",
                        "SQL Server",
                        "LINQ",
                    ],
                    type: "persistence",
                },
            ],
        },
        systemDesign: {
            title: "Arquitectura general de Pet Adopt",
            description:
                "La solución conecta adoptantes y administradores mediante una SPA en React, una API REST y una base de datos SQL Server.",
            nodes: [
                {
                    id: "pet-adopt-users",
                    label: "Adoptantes y administradores",
                    description:
                        "Los adoptantes exploran mascotas y envían solicitudes, mientras que los administradores gestionan publicaciones y procesos de adopción.",
                    type: "actor",
                },
                {
                    id: "pet-adopt-frontend",
                    label: "Frontend con React y Vite",
                    description:
                        "React Router controla la navegación, React Query administra el estado remoto y Zustand mantiene la sesión global.",
                    type: "frontend",
                },
                {
                    id: "pet-adopt-api-key",
                    label: "API Key y autenticación JWT",
                    description:
                        "La API Key valida el cliente que consume el servicio y JWT identifica al usuario y sus permisos.",
                    type: "security",
                },
                {
                    id: "pet-adopt-api",
                    label: "ASP.NET Core Web API",
                    description:
                        "Gestiona usuarios, mascotas, solicitudes de adopción, recomendaciones, roles y operaciones administrativas.",
                    type: "backend",
                },
                {
                    id: "pet-adopt-ef",
                    label: "Entity Framework Core",
                    description:
                        "Administra el acceso a los datos, las relaciones entre entidades y las transacciones del proceso de adopción.",
                    type: "persistence",
                },
                {
                    id: "pet-adopt-database",
                    label: "SQL Server",
                    description:
                        "Almacena usuarios, perfiles de adoptantes, mascotas, especies, razas, solicitudes, estados y auditorías.",
                    type: "persistence",
                },
            ],
        },
        databaseModel: {
            title: "Entidades principales de Pet Adopt",
            description:
                "El modelo separa las cuentas, los perfiles de adopción, el catálogo de mascotas y el proceso de evaluación de solicitudes.",
            entities: [
                {
                    name: "Users",
                    description:
                        "Almacena las cuentas, credenciales y roles de acceso.",
                    fields: [
                        "UserId",
                        "RoleId",
                        "Name",
                        "Email",
                        "PasswordHash",
                        "IsActive",
                    ],
                },
                {
                    name: "Adopters",
                    description:
                        "Representa el perfil de una persona interesada en adoptar.",
                    fields: [
                        "AdopterId",
                        "UserId",
                        "Phone",
                        "Address",
                        "HousingType",
                        "HasOtherPets",
                    ],
                },
                {
                    name: "Pets",
                    description:
                        "Contiene la información general, médica y descriptiva de cada mascota.",
                    fields: [
                        "PetId",
                        "SpeciesId",
                        "BreedId",
                        "PetStatusId",
                        "Name",
                        "Age",
                        "Size",
                        "Description",
                    ],
                },
                {
                    name: "Species",
                    description:
                        "Catálogo utilizado para clasificar las mascotas por especie.",
                    fields: [
                        "SpeciesId",
                        "Name",
                        "Description",
                    ],
                },
                {
                    name: "Breeds",
                    description:
                        "Catálogo de razas asociado a una especie.",
                    fields: [
                        "BreedId",
                        "SpeciesId",
                        "Name",
                        "Description",
                    ],
                },
                {
                    name: "AdoptionRequests",
                    description:
                        "Registra la solicitud enviada por un adoptante para una mascota.",
                    fields: [
                        "AdoptionRequestId",
                        "AdopterId",
                        "PetId",
                        "StatusId",
                        "RequestDate",
                        "ReviewDate",
                        "ReviewedByUserId",
                        "Observations",
                    ],
                },
                {
                    name: "Recommendations",
                    description:
                        "Almacena recomendaciones o comentarios enviados por los usuarios.",
                    fields: [
                        "RecommendationId",
                        "UserId",
                        "StatusId",
                        "Content",
                        "CreatedAt",
                        "ReviewedAt",
                    ],
                },
                {
                    name: "AuditLogs",
                    description:
                        "Conserva registros de acciones administrativas y cambios relevantes.",
                    fields: [
                        "AuditLogId",
                        "UserId",
                        "Action",
                        "EntityName",
                        "EntityId",
                        "CreatedAt",
                    ],
                },
            ],
            relationships: [
                {
                    from: "Users",
                    to: "Adopters",
                    label:
                        "Una cuenta de usuario puede tener un perfil de adoptante.",
                },
                {
                    from: "Species",
                    to: "Breeds",
                    label:
                        "Una especie puede contener múltiples razas.",
                },
                {
                    from: "Species",
                    to: "Pets",
                    label:
                        "Cada mascota pertenece a una especie.",
                },
                {
                    from: "Breeds",
                    to: "Pets",
                    label:
                        "Cada mascota puede estar asociada a una raza.",
                },
                {
                    from: "Adopters",
                    to: "AdoptionRequests",
                    label:
                        "Un adoptante puede enviar varias solicitudes de adopción.",
                },
                {
                    from: "Pets",
                    to: "AdoptionRequests",
                    label:
                        "Una mascota puede recibir múltiples solicitudes antes de ser adoptada.",
                },
                {
                    from: "Users",
                    to: "Recommendations",
                    label:
                        "Los usuarios autenticados pueden enviar recomendaciones.",
                },
                {
                    from: "Users",
                    to: "AuditLogs",
                    label:
                        "Las acciones relevantes quedan vinculadas al usuario responsable.",
                },
            ],
        },

        codeStructure: [
            {
                title: "Frontend",
                description:
                    "El frontend separa la comunicación con la API, los componentes reutilizables, las páginas, las rutas y el estado global.",
                folders: [
                    {
                        name: "src/api",
                        description:
                            "Módulos de Axios responsables de consumir los endpoints de la API.",
                    },
                    {
                        name: "src/components",
                        description:
                            "Componentes reutilizables de interfaz, navegación y presentación de datos.",
                    },
                    {
                        name: "src/pages",
                        description:
                            "Páginas agrupadas por módulos como adopción, administración, autenticación, perfil y publicación.",
                    },
                    {
                        name: "src/router",
                        description:
                            "Configuración de rutas públicas, privadas y protegidas por rol.",
                    },
                    {
                        name: "src/store",
                        description:
                            "Estado global de autenticación y sesión administrado mediante Zustand.",
                    },
                    {
                        name: "src/utils",
                        description:
                            "Funciones auxiliares utilizadas en distintos módulos de la aplicación.",
                    },
                ],
            },

            {
                title: "Backend",
                description:
                    "La API organiza el acceso HTTP, los contratos de datos y las entidades persistentes en capas diferenciadas.",
                folders: [
                    {
                        name: "Controllers",
                        description:
                            "Controladores REST para autenticación, mascotas, adopciones, usuarios, publicadores y administración.",
                    },
                    {
                        name: "DTOs",
                        description:
                            "Contratos separados por dominio para recibir y devolver información sin exponer directamente las entidades.",
                    },
                    {
                        name: "Models",
                        description:
                            "Entidades de Entity Framework que representan las tablas y vistas de la base de datos.",
                    },
                    {
                        name: "Context",
                        description:
                            "DbContext y configuración de acceso a SQL Server mediante Entity Framework Core.",
                    },
                    {
                        name: "Middleware",
                        description:
                            "Middleware personalizado para validaciones transversales como la API Key.",
                    },
                    {
                        name: "Database",
                        description:
                            "Recursos relacionados con la estructura y configuración de la base de datos.",
                    },
                    {
                        name: "Program.cs",
                        description:
                            "Configuración de dependencias, autenticación JWT, autorización, CORS, Swagger y pipeline HTTP.",
                    },
                ],
            },

            {
                title: "Módulos principales",
                description:
                    "La solución divide las responsabilidades según los actores y procesos del sistema de adopción.",
                folders: [
                    {
                        name: "Adopción",
                        description:
                            "Consulta de mascotas, creación de solicitudes y seguimiento del estado de adopción.",
                    },
                    {
                        name: "Publicadores",
                        description:
                            "Registro de solicitudes para publicar mascotas y administración de publicaciones propias.",
                    },
                    {
                        name: "Administración",
                        description:
                            "Gestión de usuarios, mascotas, solicitudes, especies, razas y auditoría.",
                    },
                    {
                        name: "Recomendaciones",
                        description:
                            "Sugerencias de mascotas basadas en información y preferencias del adoptante.",
                    },
                ],
            },
        ],

        apiEndpoints: [
            {
                group: "Autenticación",
                description:
                    "Endpoints encargados del registro de usuarios, inicio de sesión y recuperación de la sesión autenticada mediante JWT.",
                endpoints: [
                    {
                        method: "POST",
                        path: "/api/Auth/register",
                        description:
                            "Registra una cuenta como adoptante o crea una solicitud para convertirse en publicador. También valida correo, tipo de cuenta y documentación.",
                        access: "Público",
                    },
                    {
                        method: "POST",
                        path: "/api/Auth/login",
                        description:
                            "Valida las credenciales del usuario y devuelve un token JWT junto con la información de la cuenta y su rol.",
                        access: "Público",
                    },
                    {
                        method: "GET",
                        path: "/api/Auth/me",
                        description:
                            "Obtiene los datos del usuario autenticado utilizando el identificador almacenado en el token JWT.",
                        access: "Autenticado",
                    },
                ],
            },

            {
                group: "Mascotas",
                description:
                    "Operaciones públicas para explorar mascotas y operaciones administrativas para gestionar su información.",
                endpoints: [
                    {
                        method: "GET",
                        path: "/api/Pets",
                        description:
                            "Obtiene el catálogo de mascotas y permite filtrar por especie, raza, tamaño, estado o nombre.",
                        access: "Público",
                    },
                    {
                        method: "GET",
                        path: "/api/Pets/{id}",
                        description:
                            "Obtiene el detalle de una mascota, incluyendo información médica, estado, características e imagen principal.",
                        access: "Público",
                    },
                    {
                        method: "POST",
                        path: "/api/Pets",
                        description:
                            "Registra una nueva mascota después de validar especie, raza, tamaño y estado.",
                        access: "Administrador",
                    },
                    {
                        method: "PUT",
                        path: "/api/Pets/{id}",
                        description:
                            "Actualiza la información general, médica y descriptiva de una mascota.",
                        access: "Administrador",
                    },
                    {
                        method: "DELETE",
                        path: "/api/Pets/{id}",
                        description:
                            "Elimina una mascota registrada en el sistema.",
                        access: "Administrador",
                    },
                ],
            },

            {
                group: "Solicitudes de adopción",
                description:
                    "Endpoints que administran la creación, consulta, aprobación y rechazo de solicitudes realizadas por los adoptantes.",
                endpoints: [
                    {
                        method: "GET",
                        path: "/api/AdoptionRequests",
                        description:
                            "Obtiene las solicitudes de adopción y permite filtrarlas por adoptante, mascota o estado.",
                        access: "Administrador",
                    },
                    {
                        method: "GET",
                        path: "/api/AdoptionRequests/{id}",
                        description:
                            "Obtiene el detalle de una solicitud de adopción específica.",
                        access: "Autenticado",
                    },
                    {
                        method: "GET",
                        path: "/api/AdoptionRequests/my-requests/{adopterId}",
                        description:
                            "Consulta el historial de solicitudes realizadas por un adoptante.",
                        access: "Autenticado",
                    },
                    {
                        method: "POST",
                        path: "/api/AdoptionRequests",
                        description:
                            "Crea una solicitud para una mascota disponible y evita que el mismo adoptante genere solicitudes pendientes duplicadas.",
                        access: "Autenticado",
                    },
                    {
                        method: "PUT",
                        path: "/api/AdoptionRequests/{id}/approve",
                        description:
                            "Aprueba una solicitud, marca la mascota como adoptada y cancela las demás solicitudes pendientes asociadas.",
                        access: "Administrador",
                    },
                    {
                        method: "PUT",
                        path: "/api/AdoptionRequests/{id}/reject",
                        description:
                            "Rechaza una solicitud pendiente y registra el responsable, la fecha de revisión y las observaciones.",
                        access: "Administrador",
                    },
                ],
            },

            {
                group: "Recomendaciones",
                description:
                    "Módulo que permite a los usuarios enviar recomendaciones o comentarios y a los administradores revisarlos.",
                endpoints: [
                    {
                        method: "POST",
                        path: "/api/Recommendations",
                        description:
                            "Registra una recomendación vinculada automáticamente al usuario autenticado.",
                        access: "Autenticado",
                    },
                    {
                        method: "GET",
                        path: "/api/Recommendations",
                        description:
                            "Obtiene las recomendaciones registradas y permite filtrarlas por estado.",
                        access: "Administrador",
                    },
                    {
                        method: "PUT",
                        path: "/api/Recommendations/{id}/review",
                        description:
                            "Actualiza el estado de una recomendación y permite guardar observaciones administrativas.",
                        access: "Administrador",
                    },
                    {
                        method: "DELETE",
                        path: "/api/Recommendations/{id}",
                        description:
                            "Elimina una recomendación registrada.",
                        access: "Administrador",
                    },
                ],
            },
        ],

        challenges: [
            {
                title: "Evitar solicitudes duplicadas",
                problem:
                    "Un mismo adoptante podía enviar múltiples solicitudes pendientes para la misma mascota, generando duplicidad y dificultando el proceso de revisión.",
                solution:
                    "Antes de registrar una nueva solicitud, la API verifica si ya existe una solicitud pendiente del mismo adoptante para esa mascota. Si existe, la operación es rechazada.",
                technologies: [
                    "Entity Framework Core",
                    "LINQ",
                    "Validaciones de negocio",
                ],
            },

            {
                title: "Mantener la disponibilidad de las mascotas",
                problem:
                    "Una mascota no puede ser adoptada por más de un usuario, incluso cuando existen varias solicitudes pendientes.",
                solution:
                    "Cuando una solicitud es aprobada, la mascota cambia automáticamente a estado Adoptada y todas las demás solicitudes pendientes son canceladas dentro de la misma operación.",
                technologies: [
                    "Database Transactions",
                    "SQL Server",
                    "Entity Framework Core",
                ],
            },

            {
                title: "Separar entidades de la API",
                problem:
                    "Exponer directamente las entidades de la base de datos aumenta el acoplamiento entre la API y el cliente.",
                solution:
                    "Se implementó una capa de DTOs para controlar la información enviada y recibida, facilitando la evolución del modelo sin afectar el frontend.",
                technologies: [
                    "DTO Pattern",
                    "ASP.NET Core",
                    "Entity Framework Core",
                ],
            },

            {
                title: "Controlar permisos según el rol",
                problem:
                    "No todos los usuarios pueden administrar mascotas o aprobar adopciones.",
                solution:
                    "La API utiliza autenticación JWT y autorización basada en roles para restringir las operaciones administrativas únicamente a los usuarios autorizados.",
                technologies: [
                    "JWT",
                    "Role Authorization",
                    "ASP.NET Core",
                ],
            },

            {
                title: "Optimizar el consumo de la API",
                problem:
                    "Las consultas repetidas podían generar múltiples peticiones innecesarias al servidor.",
                solution:
                    "El frontend utiliza TanStack React Query para almacenar en caché los datos consultados, reutilizar respuestas y mantener sincronizada la información automáticamente.",
                technologies: [
                    "React Query",
                    "Caching",
                    "Axios",
                ],
            },

            {
                title: "Administrar el estado global del usuario",
                problem:
                    "La información del usuario autenticado debía estar disponible en toda la aplicación sin prop drilling.",
                solution:
                    "Se implementó Zustand como almacén global para mantener la sesión, el rol y los datos del usuario accesibles desde cualquier módulo.",
                technologies: [
                    "Zustand",
                    "React",
                    "Global State",
                ],
            },

            {
                title: "Proteger la API frente a accesos externos",
                problem:
                    "Era necesario impedir que aplicaciones externas consumieran la API sin autorización.",
                solution:
                    "Además del JWT para los usuarios, la API incorpora un middleware basado en API Key para validar las solicitudes antes de procesarlas.",
                technologies: [
                    "API Key",
                    "Middleware",
                    "ASP.NET Core",
                ],
            },
        ],

        roadmap: [
            {
                title: "Sistema inteligente de recomendaciones",
                description:
                    "Incorporar un motor de recomendaciones basado en las preferencias del adoptante, historial de adopciones y características de las mascotas para sugerir candidatos más adecuados.",
                priority: "Alta",
                status: "Planificado",
                technologies: [
                    "Machine Learning",
                    "Recommendation Engine",
                    "Entity Framework Core",
                ],
            },

            {
                title: "Notificaciones por correo",
                description:
                    "Enviar correos automáticos cuando una solicitud sea aprobada, rechazada o requiera información adicional.",
                priority: "Alta",
                status: "Planificado",
                technologies: [
                    "SMTP",
                    "Email Templates",
                    "Background Jobs",
                ],
            },

            {
                title: "Chat entre adoptantes y publicadores",
                description:
                    "Permitir la comunicación directa entre ambas partes para coordinar entrevistas, visitas y resolver dudas sobre las mascotas.",
                priority: "Alta",
                status: "Planificado",
                technologies: [
                    "SignalR",
                    "WebSockets",
                    "Real Time",
                ],
            },

            {
                title: "Galería de imágenes",
                description:
                    "Permitir múltiples fotografías por mascota para mostrar diferentes ángulos y mejorar la experiencia de los posibles adoptantes.",
                priority: "Media",
                status: "Planificado",
                technologies: [
                    "Cloudinary",
                    "Azure Blob Storage",
                    "Image Optimization",
                ],
            },

            {
                title: "Aplicación PWA",
                description:
                    "Convertir la plataforma en una Progressive Web App para permitir instalación desde el navegador y funcionamiento parcial sin conexión.",
                priority: "Media",
                status: "En evaluación",
                technologies: [
                    "PWA",
                    "Service Workers",
                    "Offline Cache",
                ],
            },

            {
                title: "Panel analítico",
                description:
                    "Incorporar estadísticas sobre adopciones, mascotas disponibles, tiempos promedio de adopción y actividad de los usuarios.",
                priority: "Media",
                status: "Planificado",
                technologies: [
                    "Charts",
                    "SQL Views",
                    "Dashboard",
                ],
            },

            {
                title: "Geolocalización de refugios",
                description:
                    "Mostrar refugios y organizaciones cercanas utilizando mapas interactivos y ubicación del usuario.",
                priority: "Baja",
                status: "En evaluación",
                technologies: [
                    "Google Maps",
                    "Geolocation API",
                    "Maps SDK",
                ],
            },

            {
                title: "Pipeline CI/CD",
                description:
                    "Automatizar pruebas, compilación y despliegue continuo del frontend y backend mediante GitHub Actions.",
                priority: "Media",
                status: "Planificado",
                technologies: [
                    "GitHub Actions",
                    "Docker",
                    "CI/CD",
                ],
            },
        ],

        flow: [
            {
                actor: "Adoptante",
                description:
                    "Recorrido de una persona que busca una mascota y envía una solicitud formal de adopción.",
                steps: [
                    "Crear una cuenta como adoptante.",
                    "Completar la información básica del perfil.",
                    "Explorar el catálogo de mascotas disponibles.",
                    "Aplicar filtros por especie, raza, tamaño o características.",
                    "Consultar el detalle de una mascota.",
                    "Enviar una solicitud de adopción.",
                    "Consultar el estado de las solicitudes realizadas.",
                    "Recibir la aprobación o el rechazo de la solicitud.",
                ],
            },
            {
                actor: "Administrador",
                description:
                    "Flujo encargado de gestionar mascotas, revisar solicitudes y mantener la integridad del proceso de adopción.",
                steps: [
                    "Iniciar sesión con permisos administrativos.",
                    "Registrar o actualizar mascotas disponibles.",
                    "Consultar las solicitudes pendientes.",
                    "Revisar la información del adoptante y de la mascota.",
                    "Aprobar o rechazar la solicitud.",
                    "Actualizar automáticamente el estado de la mascota.",
                    "Cancelar solicitudes pendientes incompatibles.",
                    "Consultar registros administrativos y de auditoría.",
                ],
            },
        ],

        features: [
            {
                title: "Catálogo y búsqueda de mascotas",
                description:
                    "Módulo orientado a facilitar la exploración de mascotas disponibles para adopción.",
                items: [
                    "Listado de mascotas disponibles.",
                    "Consulta del detalle individual de cada mascota.",
                    "Filtrado por especie, raza, tamaño y estado.",
                    "Visualización de información descriptiva y fotografías.",
                ],
                icon: "Search",
            },
            {
                title: "Gestión de solicitudes de adopción",
                description:
                    "Flujo completo para registrar, consultar y revisar solicitudes.",
                items: [
                    "Creación de solicitudes por parte del adoptante.",
                    "Consulta del historial y estado de solicitudes.",
                    "Aprobación o rechazo desde el panel administrativo.",
                    "Validación para evitar solicitudes duplicadas.",
                    "Actualización del estado de la mascota cuando se aprueba la adopción.",
                ],
                icon: "ClipboardCheck",
            },
            {
                title: "Administración de mascotas",
                description:
                    "Herramientas para registrar y mantener actualizado el catálogo.",
                items: [
                    "Registro de nuevas mascotas.",
                    "Edición de información existente.",
                    "Cambio de disponibilidad y estado.",
                    "Eliminación controlada de registros.",
                    "Gestión de imágenes asociadas.",
                ],
                icon: "PawPrint",
            },
            {
                title: "Usuarios y perfiles",
                description:
                    "Gestión de las cuentas que interactúan con la plataforma.",
                items: [
                    "Registro e inicio de sesión.",
                    "Perfiles de adoptantes.",
                    "Roles de acceso.",
                    "Protección de rutas según permisos.",
                    "Consulta de información del usuario autenticado.",
                ],
                icon: "Users",
            },
            {
                title: "Catálogos administrativos",
                description:
                    "Mantenimiento de la información utilizada para clasificar mascotas.",
                items: [
                    "Gestión de especies.",
                    "Gestión de razas.",
                    "Gestión de tamaños.",
                    "Gestión de estados de mascotas.",
                    "Relación entre especies y razas.",
                ],
                icon: "ListTree",
            },
            {
                title: "Recomendaciones y auditoría",
                description:
                    "Funciones complementarias para recibir retroalimentación y mantener trazabilidad.",
                items: [
                    "Envío de recomendaciones por usuarios.",
                    "Revisión administrativa de recomendaciones.",
                    "Registro de acciones relevantes.",
                    "Consulta de eventos de auditoría.",
                ],
                icon: "ShieldCheck",
            },
        ],

        techStack: [
            {
                title: "Frontend",
                technologies: [
                    "React 19",
                    "Vite",
                    "React Router",
                    "TanStack React Query",
                    "Axios",
                    "Zustand",
                    "Tailwind CSS 4",
                    "Framer Motion",
                ],
            },
            {
                title: "Backend",
                technologies: [
                    "ASP.NET Core Web API",
                    "C#",
                    "Entity Framework Core",
                    "Controllers",
                    "DTOs",
                    "Dependency Injection",
                    "LINQ",
                ],
            },
            {
                title: "Seguridad",
                technologies: [
                    "JWT Bearer",
                    "Autorización por roles",
                    "API Key Middleware",
                    "Rutas protegidas",
                    "Validación de solicitudes",
                ],
            },
            {
                title: "Datos y herramientas",
                technologies: [
                    "SQL Server",
                    "Swagger / OpenAPI",
                    "Git",
                    "GitHub",
                    "Visual Studio",
                    "Visual Studio Code",
                    "Postman",
                ],
            },
        ],

        decisions: [
            {
                question:
                    "¿Por qué separar el frontend y el backend en repositorios independientes?",
                answer:
                    "La separación permite mantener ciclos de desarrollo y despliegue independientes, reduce el acoplamiento y facilita que la API pueda ser consumida por otros clientes en el futuro.",
            },
            {
                question:
                    "¿Por qué utilizar React Query para manejar los datos remotos?",
                answer:
                    "React Query centraliza las consultas, el caché, la revalidación y los estados de carga, evitando duplicar lógica de consumo de API en cada página.",
            },
            {
                question:
                    "¿Por qué usar Zustand junto con React Query?",
                answer:
                    "React Query se utiliza para el estado proveniente del servidor, mientras que Zustand mantiene información global del cliente, principalmente la sesión y los datos del usuario autenticado.",
            },
            {
                question:
                    "¿Por qué implementar DTOs en la API?",
                answer:
                    "Los DTOs evitan exponer directamente las entidades de persistencia, permiten controlar los datos enviados y recibidos y mantienen contratos más estables con el frontend.",
            },
            {
                question:
                    "¿Por qué combinar JWT con una API Key?",
                answer:
                    "JWT identifica y autoriza al usuario, mientras que la API Key limita qué aplicaciones pueden consumir el servicio. Ambas medidas protegen niveles diferentes de acceso.",
            },
            {
                question:
                    "¿Por qué las reglas de adopción se validan en el backend?",
                answer:
                    "Las validaciones críticas deben ejecutarse en la API para impedir solicitudes duplicadas, adopciones incompatibles o cambios de estado inválidos, aunque el frontend también valide la experiencia del usuario.",
            },
            {
                question:
                    "¿Por qué separar los controladores por módulo?",
                answer:
                    "La división entre autenticación, mascotas, adopciones, catálogos, recomendaciones y auditoría facilita el mantenimiento y permite que cada módulo evolucione con menor impacto sobre los demás.",
            },
        ],

        gallery: [],

        lessons: [
            "Aprendí a separar correctamente el estado remoto del estado global del frontend.",
            "Comprendí cómo diseñar contratos de API utilizando DTOs sin exponer directamente las entidades de la base de datos.",
            "Fortalecí la implementación de autenticación JWT y autorización basada en roles.",
            "Aprendí a utilizar middleware para agregar una capa adicional de protección mediante API Key.",
            "Comprendí la importancia de validar las reglas críticas de adopción desde el backend.",
            "Mejoré la organización de una SPA mediante módulos de API, páginas, componentes, rutas y stores.",
            "Aprendí a mantener sincronizado el estado visual del frontend después de aprobar, rechazar o crear solicitudes.",
            "Fortalecí el diseño de bases de datos relacionales con catálogos, estados y relaciones entre usuarios, mascotas y solicitudes.",
        ],
    },


];


export function getProjectDetail(slug: string) {
    return projectDetails.find((project) => project.slug === slug);
}