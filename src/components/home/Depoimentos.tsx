import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

const depoimentos = [
  {
    nome: 'Cel. João Mendes',
    cargo: 'Comandante Logístico - FAA',
    texto: 'As rações da ERCA são referência nas nossas operações. Qualidade, durabilidade e sabor que os nossos militares merecem.',
    estrelas: 5,
  },
  {
    nome: 'Dra. Ana Paulo',
    cargo: 'Coordenadora de Emergências - Cruz Vermelha Angola',
    texto: 'Utilizamos os kits ERCA em missões humanitárias. São práticos, nutritivos e bem aceites pelas comunidades.',
    estrelas: 5,
  },
  {
    nome: 'Maj. Carlos Silva',
    cargo: 'Força Aérea Angolana',
    texto: 'A ração individual de 24h é o nosso padrão. Leve, completa e mantém o combatente operacional o dia inteiro.',
    estrelas: 5,
  },
]

export default function Depoimentos() {
  return (
    <section className="py-20 bg-cinza">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-preto mb-4">
            Quem confia na ERCA
          </h2>
          <p className="text-cinza-escuro max-w-2xl mx-auto">
            Depoimentos de quem conhece a nossa qualidade no terreno.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {depoimentos.map((dep, index) => (
            <motion.div
              key={dep.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white p-8 shadow-sm border border-cinza"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: dep.estrelas }).map((_, i) => (
                  <HiStar key={i} className="text-verde" size={18} />
                ))}
              </div>
              <p className="text-preto/80 leading-relaxed mb-6 italic">"{dep.texto}"</p>
              <div>
                <p className="font-semibold text-preto">{dep.nome}</p>
                <p className="text-sm text-cinza-escuro">{dep.cargo}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
