import { Link } from 'react-router-dom'
import {
  Wrench, Phone, MapPin, Clock, CalendarCheck, ShieldCheck,
  PenTool, Car, Gauge, Settings, Timer, Paintbrush, Sliders,
  Layers, Settings2, Lightbulb
} from 'lucide-react'

const AMARILLO = '#F5D060'
const AMARILLO_OSCURO = '#C9A730'

const servicios = [
  {
    icon: <ShieldCheck className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Mantenimiento Preventivo',
    descripcion: 'Cambio de aceite, filtros, bujías y revisión general según kilometraje.',
  },
  {
    icon: <Car className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Frenos',
    descripcion: 'Cambio de pastillas, rectificado de discos y revisión completa del sistema de frenos.',
  },
  {
    icon: <PenTool className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Diagnósticos',
    descripcion: 'Scanner computarizado, lectura de códigos de falla y análisis de sensores.',
  },
  {
    icon: <Wrench className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Mecánica Integral',
    descripcion: 'Reparaciones generales, motor, suspensión y transmisión.',
  },
  {
    icon: <Gauge className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Suspensión',
    descripcion: 'Revisión y cambio de amortiguadores, muelles, rótulas y terminales de dirección.',
  },
  {
    icon: <Settings className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Embrague',
    descripcion: 'Cambio de disco, plato y collarín de embrague para transmisiones manuales.',
  },
  {
    icon: <Timer className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Correa de Distribución',
    descripcion: 'Cambio de correa de distribución con kit completo según especificaciones del fabricante.',
  },
  {
    icon: <Paintbrush className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Enderezada y Pintada',
    descripcion: 'Servicio de carrocería, enderezada de golpes y pintura profesional a horno.',
  },
  {
    icon: <Sliders className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Afinación de Motor',
    descripcion: 'Revisión y ajuste de bujías, inyectores, sincronización y rendimiento del motor.',
  },
  {
    icon: <Layers className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Reparación de Culata',
    descripcion: 'Diagnóstico y reparación de culata, juntas, rectificado y sellado.',
  },
  {
    icon: <Settings2 className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Reparación de Motor',
    descripcion: 'Reparación completa de motores en vehículos livianos, incluye rectificado.',
  },
  {
    icon: <Lightbulb className="w-9 h-9" style={{ color: AMARILLO_OSCURO }} />,
    titulo: 'Pulida de Ópticos',
    descripcion: 'Restauración y pulido profesional de faros y ópticos para mejor visibilidad.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo-eldasa.jpg" alt="Logo Taller Eldasa" className="h-10 w-auto rounded-sm" />
            <div>
              <h1 className="text-xl font-black leading-none text-gray-900">Taller Eldasa</h1>
              <p className="text-xs text-gray-500 leading-none tracking-wide uppercase">Mecánica Automotriz</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" style={{ color: AMARILLO_OSCURO }} />
              +56 9 4498 7410
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: AMARILLO_OSCURO }} />
              San Vicente de Tagua Tagua
            </div>
          </div>
          <Link
            to="/reserva"
            className="font-bold px-5 py-2 rounded-md text-gray-900 transition hover:opacity-90"
            style={{ backgroundColor: AMARILLO }}
          >
            Agendar Cita
          </Link>
        </div>
      </header>

      {/* Hero — imagen de fondo con overlay */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-eldasa.jpg')" }}
        />
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-28 md:py-36 flex flex-col items-start">
          <span
            className="text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{ backgroundColor: AMARILLO, color: '#1a1a1a' }}
          >
            Mecánica Automotriz
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 max-w-2xl">
            Tu vehículo en manos de expertos.
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-xl">
            Más que filtros y lubricantes — vida para tu vehículo. Diagnóstico, mantenimiento y reparación integral en San Vicente de Tagua Tagua.
          </p>
          <Link
            to="/reserva"
            className="font-bold text-lg px-8 py-3 rounded-md text-gray-900 flex items-center gap-2 transition hover:opacity-90"
            style={{ backgroundColor: AMARILLO }}
          >
            <CalendarCheck className="w-5 h-5" />
            Reservar Ahora
          </Link>
        </div>
      </section>

      {/* Servicios — grilla 4 columnas en desktop */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Nuestros Servicios</h3>
            <p className="text-gray-500 max-w-xl mx-auto">
              Ofrecemos soluciones integrales para el cuidado de tu automóvil con garantía en cada trabajo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicios.map((s, i) => (
              <div
                key={i}
                className="p-5 border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3"
              >
                {s.icon}
                <h4 className="text-base font-bold text-gray-900">{s.titulo}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/reserva"
              className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-md text-gray-900 transition hover:opacity-90 text-lg"
              style={{ backgroundColor: AMARILLO }}
            >
              <CalendarCheck className="w-5 h-5" />
              Agenda tu visita aquí
            </Link>
          </div>
        </div>
      </section>

      {/* Info rápida */}
      <section className="py-12" style={{ backgroundColor: '#FFFBEA' }}>
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <Clock className="w-8 h-8" style={{ color: AMARILLO_OSCURO }} />
            <h5 className="font-bold text-gray-900">Horario</h5>
            <p className="text-sm text-gray-600">Lun - Vie: 09:00 - 18:30<br />Sábado: 09:00 - 13:00</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Phone className="w-8 h-8" style={{ color: AMARILLO_OSCURO }} />
            <h5 className="font-bold text-gray-900">Teléfono / WhatsApp</h5>
            <a
              href="https://wa.me/56944987410"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline"
              style={{ color: AMARILLO_OSCURO }}
            >
              +56 9 4498 7410
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="w-8 h-8" style={{ color: AMARILLO_OSCURO }} />
            <h5 className="font-bold text-gray-900">Ubicación</h5>
            <a
              href="https://maps.app.goo.gl/yuf7pJJsj1Nd8FKj6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:underline"
            >
              Guardia Suiza Norte 1781<br />San Vicente de Tagua Tagua<br />Ver en Google Maps →
            </a>
          </div>
        </div>

        {/* Mapa incrustado */}
        <div className="max-w-4xl mx-auto mt-8 px-4 rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Ubicación Taller Eldasa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.3661392525933!2d-71.0903129!3d-34.4428525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966483211aa37bf1%3A0xe7134f2b87f3c175!2sTaller%20Mecanico%20ELDASA!5e0!3m2!1ses!2scl!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Wrench className="w-5 h-5" style={{ color: AMARILLO }} />
            <span className="font-black">Taller Eldasa</span>
            <span className="text-gray-500 text-xs">· Mecánica Automotriz</span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Taller Eldasa. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  )
}
