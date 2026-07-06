import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CONTATO } from '../constants/contato'

export default function Sobre() {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - ERCA</title>
        <meta
          name="description"
          content="Conheça a história, missão, visão e valores da ERCA - Empresa de Rações de Combate de Angola."
        />
      </Helmet>

      <section className="relative bg-verde py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('/images/others/images.jpeg')",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Sobre Nós</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Conheça a história e os valores que movem a ERCA.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-preto mb-6">Nossa História</h2>
              <p className="text-preto/80 leading-relaxed mb-6">
                A ERCA - Empresa de Rações de Combate de Angola nasceu da necessidade de
                fornecer alimentação de alto valor nutricional e energético para as Forças
                Armadas Angolanas, em operações de defesa, missões de paz e situações de
                emergência.
              </p>
              <p className="text-preto/80 leading-relaxed mb-6">
                Com produção 100% nacional, a ERCA orgulha-se de ser uma empresa que
                contribui directamente para a segurança e soberania alimentar do país,
                empregando trabalhadores militares treinados e utilizando ingredientes
                seleccionados para garantir o melhor desempenho no terreno.
              </p>
              <p className="text-preto/80 leading-relaxed">
                Hoje, somos referência no fornecimento de rações operacionais, atendendo
                não apenas as Forças Armadas, mas também missões humanitárias, operações de
                resgate e situações de catástrofe em todo o território nacional.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden h-96"
            >
              <img
                src="/images/others/Comandos-Angolanos.jpeg"
                alt="Comandos Angolanos"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cinza">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                titulo: 'Missão',
                descricao:
                  'Produzir e fornecer rações de combate e kits alimentares de excelência, garantindo a nutrição e o desempenho dos nossos militares e a segurança alimentar em missões críticas.',
              },
              {
                titulo: 'Visão',
                descricao:
                  'Ser a principal referência em soluções alimentares operacionais em Angola e no continente africano, reconhecida pela qualidade, inovação e compromisso com a pátria.',
              },
              {
                titulo: 'Valores',
                descricao:
                  'Patriotismo, disciplina, qualidade, inovação, responsabilidade social e compromisso com a vida e a segurança alimentar dos que servem a nação.',
              },
            ].map((item) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-8 shadow-sm border border-cinza"
              >
                <h3 className="text-xl font-bold text-verde mb-4">{item.titulo}</h3>
                <p className="text-preto/80 leading-relaxed">{item.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-preto mb-4">
              Selos de Qualidade
            </h2>
            <p className="text-cinza-escuro max-w-2xl mx-auto">
              Produzimos sob os mais rigorosos padrões internacionais.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { titulo: 'ISO 22000', desc: 'Sistema de Gestão de Segurança Alimentar' },
              { titulo: 'HACCP', desc: 'Análise de Perigos e Controlo de Pontos Críticos' },
              { titulo: 'Food Safety', desc: 'Padrões rigorosos de segurança alimentar' },
              { titulo: 'Produção Militar', desc: 'Elaborado por trabalhadores militares treinados' },
            ].map((selo) => (
              <div
                key={selo.titulo}
                className="rounded-xl border border-cinza bg-cinza p-6 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-verde/10">
                  <span className="text-2xl text-verde">✓</span>
                </div>
                <h3 className="font-semibold text-preto mb-1">{selo.titulo}</h3>
                <p className="text-sm text-cinza-escuro">{selo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-verde">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-white font-bold italic">
            "{CONTATO.slogan}"
          </p>
        </div>
      </section>
    </>
  )
}
