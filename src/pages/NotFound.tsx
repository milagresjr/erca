import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada - ERCA</title>
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <p className="text-8xl font-bold text-verde mb-4">404</p>
          <h1 className="text-2xl font-bold text-preto mb-4">
            Página não encontrada
          </h1>
          <p className="text-cinza-escuro mb-8 max-w-md mx-auto">
            A página que procura não existe ou foi movida.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-verde text-white px-6 py-3 rounded-lg font-semibold hover:bg-verde/80 transition-colors"
          >
            Voltar ao Início
          </a>
        </div>
      </section>
    </>
  )
}
