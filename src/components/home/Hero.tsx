import { Link } from 'react-router-dom'
import { CONTATO } from '../../constants/contato'
import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-verde/90 via-verde/80 to-preto/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            ERCA
            <span className="block text-laranja mt-2">
              Alimentando quem protege a nação
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Referência em rações de combate e kits alimentares para as Forças Armadas,
            emergências e missões humanitárias em Angola.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 bg-laranja text-white px-6 py-3 rounded-lg font-semibold hover:bg-laranja/80 transition-colors shadow-lg"
            >
              Ver Produtos
              <HiArrowRight size={18} />
            </Link>
            <a
              href={CONTATO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-verde transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
