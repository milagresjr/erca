import { useState } from 'react'
import { motion } from 'framer-motion'
import { produtos } from '../../data/produtos'
import type { Produto } from '../../data/produtos'
import ProdutoCard from './ProdutoCard'
import ProdutoModal from './ProdutoModal'

export default function ProdutosList() {
  const [filtro, setFiltro] = useState<'Todas' | 'Individual' | 'Coletiva'>('Todas')
  const [modalProduto, setModalProduto] = useState<Produto | null>(null)

  const filtradas =
    filtro === 'Todas'
      ? produtos
      : produtos.filter((p) => p.categoria === filtro)

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-preto mb-4">
            Nossos Produtos
          </h2>
          <p className="text-cinza-escuro max-w-2xl mx-auto">
            Soluções alimentares para cada missão, do individual ao colectivo.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {(['Todas', 'Individual', 'Coletiva'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                filtro === cat
                  ? 'bg-azul text-white'
                  : 'bg-white text-preto/70 border border-cinza hover:border-azul/30'
              }`}
            >
              {cat === 'Todas' ? 'Todas' : cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
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
      </div>

      <ProdutoModal
        produto={modalProduto}
        onFechar={() => setModalProduto(null)}
      />
    </section>
  )
}
