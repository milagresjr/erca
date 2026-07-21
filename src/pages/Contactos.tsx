import { Helmet } from 'react-helmet-async'
import FormularioContato from '../components/contato/FormularioContato'

export default function Contactos() {
  return (
    <>
      <Helmet>
        <title>Contactos - ERCA</title>
        <meta
          name="description"
          content="Entre em contacto com a ERCA. Telefones, email, endereço e formulário para solicitar orçamentos e informações."
        />
      </Helmet>

      <section className="relative bg-azul py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('/images/bgs/bg6.png')",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contactos</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Estamos prontos para atender às suas necessidades.
          </p>
        </div>
      </section>

      <FormularioContato />
    </>
  )
}
