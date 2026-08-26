import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Phone, MapPin, CalendarCheck, CheckCircle, ArrowLeft } from 'lucide-react'

const AMARILLO = '#F5D060'
const AMARILLO_OSCURO = '#C9A730'

const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <input
      {...props}
      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 transition"
      style={{ '--tw-ring-color': AMARILLO }}
      onFocus={e => e.target.style.borderColor = AMARILLO_OSCURO}
      onBlur={e => e.target.style.borderColor = '#d1d5db'}
    />
  </div>
)

export default function Reserva() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    patente: '',
    marca: '',
    anio: '',
    kilometraje: '',
    servicio: '',
    descripcion: '',
    ofertas: true,
  })
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)

    try {
      // Envía los datos a Web3Forms → llega correo automático al taller y al cliente
      // Ve a web3forms.com, pon tu correo y copia la Access Key aquí:
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'TU_ACCESS_KEY_DE_WEB3FORMS', // ← CAMBIA ESTO
          subject: `Nueva solicitud de reserva - ${formData.nombre}`,
          from_name: 'Taller Eldasa Web',
          // Correo de confirmación automático al cliente:
          replyto: formData.email,
          ...formData,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setEnviado(true)
        // Abre WhatsApp con los datos del formulario listos para enviar
        const numero = '56944987410' // Número real del taller
        const texto =
          `Hola, acabo de solicitar una reserva desde la web de Taller Eldasa.%0A%0A` +
          `*Nombre:* ${formData.nombre}%0A` +
          `*Teléfono:* ${formData.telefono}%0A` +
          `*Vehículo:* ${formData.marca} (${formData.patente})%0A` +
          `*Año:* ${formData.anio}%0A` +
          `*Kilometraje:* ${formData.kilometraje} km%0A` +
          `*Servicio:* ${formData.servicio}%0A` +
          `*Descripción:* ${formData.descripcion}%0A%0A` +
          `¡Quedo atento a la confirmación!`
        window.open(`https://wa.me/${numero}?text=${texto}`, '_blank')
      } else {
        alert('Hubo un error enviando el formulario. Por favor contáctanos por WhatsApp.')
      }
    } catch {
      alert('Error de red. Por favor contáctanos directamente por WhatsApp.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-eldasa.jpg" alt="Logo Taller Eldasa" className="h-10 w-auto rounded-sm" />
            <div>
              <h1 className="text-xl font-black leading-none text-gray-900">Taller Eldasa</h1>
              <p className="text-xs text-gray-500 leading-none tracking-wide uppercase">Mecánica Automotriz</p>
            </div>
          </Link>
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
            to="/"
            className="flex items-center gap-2 font-semibold text-sm text-gray-700 hover:text-gray-900 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
        </div>
      </header>

      {/* Banda de color del taller */}
      <div className="w-full py-8 text-center" style={{ backgroundColor: AMARILLO }}>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Agenda tu visita</h2>
        <p className="text-gray-700 mt-1 text-sm md:text-base">
          Completa el formulario y nos pondremos en contacto contigo para confirmar tu reserva.
        </p>
      </div>

      {/* Formulario */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 border-t-4" style={{ borderColor: AMARILLO_OSCURO }}>

          {enviado ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <CheckCircle className="w-20 h-20 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-900">¡Solicitud enviada!</h3>
              <p className="text-gray-600 max-w-sm">
                Te hemos enviado un correo de confirmación. Se ha abierto WhatsApp para que podamos coordinar el horario exacto contigo.
              </p>
              <Link
                to="/"
                className="mt-4 inline-flex items-center gap-2 font-bold px-6 py-3 rounded-md text-gray-900 transition hover:opacity-90"
                style={{ backgroundColor: AMARILLO }}
              >
                <ArrowLeft className="w-4 h-4" /> Volver al inicio
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <InputField label="Nombre completo" type="text" name="nombre" required placeholder="Tu nombre y apellido" onChange={handleChange} />
                <InputField label="Número de teléfono" type="tel" name="telefono" required placeholder="+56 9 XXXX XXXX" onChange={handleChange} />
                <InputField label="Correo electrónico" type="email" name="email" required placeholder="tucorreo@ejemplo.com" onChange={handleChange} />
                <InputField label="Patente del vehículo" type="text" name="patente" required placeholder="XX-XX-XX" onChange={handleChange} />
                <InputField label="Marca y modelo" type="text" name="marca" required placeholder="Ej: Toyota Corolla" onChange={handleChange} />
                <InputField label="Año del vehículo" type="number" name="anio" required placeholder="Ej: 2019" onChange={handleChange} />
                <InputField label="Kilometraje" type="number" name="kilometraje" placeholder="Ej: 50000" onChange={handleChange} />
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Tipo de servicio</label>
                  <select
                    name="servicio"
                    required
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none bg-white transition"
                    onFocus={e => e.target.style.borderColor = AMARILLO_OSCURO}
                    onBlur={e => e.target.style.borderColor = '#d1d5db'}
                  >
                    <option value="">Seleccione un servicio</option>
                    <option value="Mantenimiento Preventivo">Mantenimiento Preventivo</option>
                    <option value="Frenos">Frenos</option>
                    <option value="Diagnóstico Scanner">Diagnóstico Scanner</option>
                    <option value="Mecánica Integral">Mecánica Integral</option>
                    <option value="Otro">Otro (especificar abajo)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción del servicio</label>
                <textarea
                  name="descripcion"
                  rows="4"
                  onChange={handleChange}
                  placeholder="Describe brevemente el problema o servicio que necesitas..."
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none resize-none transition"
                  onFocus={e => e.target.style.borderColor = AMARILLO_OSCURO}
                  onBlur={e => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Checkbox ofertas */}
              <div className="rounded-md p-4 border border-gray-200" style={{ backgroundColor: '#FFFBEA' }}>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="ofertas"
                    checked={formData.ofertas}
                    onChange={handleChange}
                    className="mt-0.5 w-5 h-5 rounded border-gray-300 cursor-pointer"
                    style={{ accentColor: AMARILLO_OSCURO }}
                  />
                  <span className="text-sm text-gray-700 leading-snug">
                    Quiero recibir notificaciones de ofertas, recordatorios de mantenimiento y avisos para mi vehículo en mi correo electrónico.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="w-full font-bold py-4 px-6 rounded-md text-gray-900 flex justify-center items-center gap-2 text-lg transition hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: AMARILLO }}
              >
                <CalendarCheck className="w-5 h-5" />
                {enviando ? 'Procesando...' : 'Solicitar Reserva'}
              </button>
              <p className="text-xs text-center text-gray-400">
                Al enviar, recibirás un correo de confirmación y se abrirá WhatsApp para coordinar el horario exacto.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
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
