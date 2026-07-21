import type { Produto } from '../../data/produtos'
import { HiArrowRight } from 'react-icons/hi'
import { HiCamera } from 'react-icons/hi2'

interface Props {
  produto: Produto
  onVerMais: (produto: Produto) => void
}

export default function ProdutoCard({ produto, onVerMais }: Props) {
  return (
    <div className="group rounded-xl border border-cinza bg-white p-6 hover:shadow-lg hover:border-azul/30 transition-all flex flex-col">
      <div className="h-40 rounded-lg bg-cinza mb-4 flex items-center justify-center">
        <HiCamera size={32} className="text-cinza-escuro/50" />
      </div>
      <span
        className={`inline-self-start mb-3 rounded-full px-3 py-1 text-xs font-semibold ${
          produto.categoria === 'Individual'
            ? 'bg-azul/10 text-azul'
            : 'bg-verde/10 text-verde'
        }`}
      >
        {produto.categoria}
      </span>
      <h3 className="text-lg font-semibold text-preto mb-2 leading-snug">
        {produto.nome}
      </h3>
      <p className="text-sm text-cinza-escuro mb-4 flex-1 leading-relaxed">
        {produto.descricao}
      </p>
      <button
        onClick={() => onVerMais(produto)}
        className="inline-flex items-center gap-2 text-sm font-semibold text-azul hover:text-verde transition-colors mt-auto"
      >
        Ver mais <HiArrowRight size={16} />
      </button>
    </div>
  )
}
