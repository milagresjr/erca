import { CONTATO } from '../../constants/contato'
import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgs/bg2.png')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-azul/90 via-azul/80 to-preto/70" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/images/logo/logo-background-com-fundo-removebg-preview.png"
          alt=""
          className="max-w-sm h-auto opacity-10"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="block">
              Alimentando quem protege a nação
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Referência em rações de combate e kits alimentares para as Forças Armadas,
            emergências e missões humanitárias em Angola.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/produtos"
              className="inline-flex items-center gap-2 bg-white text-azul px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Ver Produtos
              <HiArrowRight size={18} />
            </a>
            <a
              href={CONTATO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-azul transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
