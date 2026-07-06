import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { CONTATO } from '../../constants/contato'
import type { Produto } from '../../data/produtos'

interface Props {
  produto: Produto | null
  onFechar: () => void
}

export default function ProdutoModal({ produto, onFechar }: Props) {
  useEffect(() => {
    if (produto) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [produto])

  return (
    <AnimatePresence>
      {produto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onFechar}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-preto/60 p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
          >
            <button
              onClick={onFechar}
              className="absolute right-4 top-4 p-1 rounded-lg text-cinza-escuro hover:text-preto hover:bg-cinza"
            >
              <HiX size={20} />
            </button>

            <div
              className="h-48 rounded-lg bg-cover bg-center mb-4"
              style={{ backgroundImage: `url('${produto.imagem}')` }}
            />
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 ${
                produto.categoria === 'Individual'
                  ? 'bg-verde/10 text-verde'
                  : 'bg-laranja/10 text-laranja'
              }`}
            >
              {produto.categoria}
            </span>
            <h3 className="text-xl font-bold text-preto mb-3">{produto.nome}</h3>
            <p className="text-cinza-escuro mb-6 leading-relaxed">{produto.descricao}</p>

            <h4 className="font-semibold text-preto mb-3">Especificações:</h4>
            <ul className="space-y-2 mb-8">
              {produto.especificacoes.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center gap-2 text-sm text-preto/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-verde flex-shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>

            <a
              href={CONTATO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-laranja text-white py-3 rounded-lg font-semibold hover:bg-laranja/80 transition-colors"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
