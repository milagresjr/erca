import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { produtos } from '../data/produtos'
import type { Produto } from '../data/produtos'
import ProdutoCard from '../components/produtos/ProdutoCard'
import ProdutoModal from '../components/produtos/ProdutoModal'

export default function Produtos() {
  const [filtro, setFiltro] = useState<'Todas' | 'Individual' | 'Coletiva'>('Todas')
  const [modalProduto, setModalProduto] = useState<Produto | null>(null)

  const filtradas =
    filtro === 'Todas'
      ? produtos
      : produtos.filter((p) => p.categoria === filtro)

  return (
    <>
      <Helmet>
        <title>Produtos - ERCA</title>
        <meta
          name="description"
          content="Catálogo completo de rações de combate individuais e colectivas da ERCA para Forças Armadas, emergências e missões humanitárias."
        />
      </Helmet>

      <section className="relative bg-verde py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558704164-ab7ca0016c1f?w=1920&q=80')",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Produtos</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Catálogo completo de rações operacionais individuais e colectivas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cinza">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-3 mb-12">
            {(['Todas', 'Individual', 'Coletiva'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  filtro === cat
                    ? 'bg-verde text-white shadow-md'
                    : 'bg-white text-preto/70 border border-cinza hover:border-verde/30'
                }`}
              >
                {cat === 'Todas' ? 'Todas as Categorias' : cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtradas.map((produto) => (
              <motion.div
                key={produto.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProdutoCard
                  produto={produto}
                  onVerMais={setModalProduto}
                />
              </motion.div>
            ))}
          </motion.div>

          {filtradas.length === 0 && (
            <p className="text-center text-cinza-escuro mt-12">
              Nenhum produto encontrado nesta categoria.
            </p>
          )}
        </div>
      </section>

      <ProdutoModal
        produto={modalProduto}
        onFechar={() => setModalProduto(null)}
      />
    </>
  )
}
