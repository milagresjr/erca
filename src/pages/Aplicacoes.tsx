import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { HiCamera } from 'react-icons/hi2'
import { produtos } from '../data/produtos'

const aplicacoes: {
  titulo: string
  descricao: string
  produtos: string
  icone: string
}[] = [
  {
    titulo: 'Forças Armadas',
    descricao:
      'Operações militares, manobras tácticas, missões de patrulha e defesa territorial. As nossas rações garantem que o combatente mantenha a energia e foco necessários.',
    produtos: 'Todas as rações operacionais',
    icone: '🛡️',
  },
  {
    titulo: 'Missões de Paz',
    descricao:
      'Missões internacionais de manutenção de paz, onde a logística alimentar precisa ser autónoma, confiável e de longa duração.',
    produtos: 'Rações Individuais 12h e 24h',
    icone: '🕊️',
  },
  {
    titulo: 'Emergências e Resgates',
    descricao:
      'Operações de busca e salvamento, catástrofes naturais e situações de emergência onde o acesso a alimentos preparados é limitado.',
    produtos: 'Rações Individuais e Colectivas',
    icone: '🚨',
  },
  {
    titulo: 'Missões Humanitárias',
    descricao:
      'Apoio alimentar a populações deslocadas, campos de refugiados e distribuição em zonas de crise com necessidade de alimentos não perecíveis.',
    produtos: 'Rações Colectivas',
    icone: '🤝',
  },
  {
    titulo: 'Treinamento e Instrução',
    descricao:
      'Cursos de formação militar, exercícios de campo e programas de instrução que exigem alimentação prática e nutritiva.',
    produtos: 'Rações Individuais para Horas',
    icone: '🎯',
  },
  {
    titulo: 'Operações Navais',
    descricao:
      'Missões navais prolongadas, resgate em alto mar e situações de naufrágio onde a resistência à água salgada é essencial.',
    produtos: 'Ração para Náufragos',
    icone: '⚓',
  },
]

export default function Aplicacoes() {
  return (
    <>
      <Helmet>
        <title>Aplicações - ERCA</title>
        <meta
          name="description"
          content="Conheça as aplicações das rações ERCA: Forças Armadas, emergências, resgates, missões humanitárias e operações navais."
        />
      </Helmet>

      <section className="relative bg-azul py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('/images/bgs/bg4.png')",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Aplicações</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Soluções alimentares para cada missão e operação.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aplicacoes.map((app, index) => (
              <motion.div
                key={app.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-cinza bg-white overflow-hidden hover:shadow-lg hover:border-azul/30 transition-all"
              >
                <div className="h-40 bg-cinza flex items-center justify-center">
                  <HiCamera size={32} className="text-cinza-escuro/50" />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-3">{app.icone}</div>
                  <h3 className="text-xl font-bold text-preto mb-3">{app.titulo}</h3>
                  <p className="text-preto/80 leading-relaxed mb-4">{app.descricao}</p>
                  <div className="rounded-lg bg-azul/5 px-4 py-2">
                    <span className="text-xs font-semibold text-azul uppercase tracking-wider">
                      Produtos indicados:
                    </span>
                    <p className="text-sm text-preto/70 mt-1">{app.produtos}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cinza">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-preto mb-4">
              Produtos Disponíveis por Categoria
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-sm border border-cinza">
              <h3 className="text-2xl font-bold text-azul mb-6">Rações Individuais</h3>
              <ul className="space-y-4">
                {produtos
                  .filter((p) => p.categoria === 'Individual')
                  .map((p) => (
                    <li key={p.id} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-azul/10 text-azul text-sm font-bold">{p.nome.charAt(0)}</span>
                      <div>
                        <p className="font-semibold text-preto">{p.nome}</p>
                        <p className="text-sm text-cinza-escuro">{p.descricao}</p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm border border-cinza">
              <h3 className="text-2xl font-bold text-azul mb-6">Rações Colectivas</h3>
              <ul className="space-y-4">
                {produtos
                  .filter((p) => p.categoria === 'Coletiva')
                  .map((p) => (
                    <li key={p.id} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-azul/10 text-azul text-sm font-bold">{p.nome.charAt(0)}</span>
                      <div>
                        <p className="font-semibold text-preto">{p.nome}</p>
                        <p className="text-sm text-cinza-escuro">{p.descricao}</p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
