import { motion } from 'framer-motion'
import { HiShieldCheck, HiClock, HiFire, HiAcademicCap } from 'react-icons/hi'

const items = [
  {
    icone: HiShieldCheck,
    titulo: 'Food Safety',
    descricao: 'Produção sob rigorosos padrões de segurança alimentar, garantindo qualidade em cada refeição.',
  },
  {
    icone: HiClock,
    titulo: 'Validade até 24 meses',
    descricao: 'Produtos com longa vida útil, prontos para consumo imediato sem necessidade de refrigeração.',
  },
  {
    icone: HiFire,
    titulo: 'Alta Performance Energética',
    descricao: 'Refeições formuladas para máximo rendimento físico e mental em operações exigentes.',
  },
  {
    icone: HiAcademicCap,
    titulo: 'Produção Militar',
    descricao: 'Elaborados por trabalhadores militares treinados, com conhecimento das necessidades do terreno.',
  },
]

export default function Diferenciais() {
  return (
    <section className="py-20 bg-azul/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-preto mb-4">
            Porquê a ERCA?
          </h2>
          <p className="text-cinza-escuro max-w-2xl mx-auto">
            Os nossos diferenciais fazem a diferença quando cada minuto conta.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-azul/10 bg-white p-6 text-center hover:border-azul/30 hover:shadow-lg hover:shadow-azul/5 transition-all"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-azul text-white group-hover:bg-verde transition-colors">
                <item.icone size={28} />
              </div>
              <h3 className="text-lg font-semibold text-preto mb-2">{item.titulo}</h3>
              <p className="text-sm text-cinza-escuro leading-relaxed">{item.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
