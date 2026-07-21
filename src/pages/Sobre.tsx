import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { CONTATO } from "../constants/contato";

const imagensPCA = [
  "/images/others/pca-erca.jpg",
  "/images/others/erca-pca1.jpeg",
  "/images/others/erca-pca2.jpeg",
];

function PCASlider() {
  const [atual, setAtual] = useState(0);

  const proxima = useCallback(() => {
    setAtual((prev) => (prev + 1) % imagensPCA.length);
  }, []);

  const anterior = useCallback(() => {
    setAtual((prev) => (prev - 1 + imagensPCA.length) % imagensPCA.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(proxima, 4000);
    return () => clearInterval(timer);
  }, [proxima]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative rounded-xl overflow-hidden group"
    >
      <div className="aspect-[3/4] relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={imagensPCA[atual]}
            src={imagensPCA[atual]}
            alt="Titilson Dias"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      <button
        onClick={anterior}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-preto/50 hover:bg-preto/70 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ‹
      </button>
      <button
        onClick={proxima}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-preto/50 hover:bg-preto/70 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {imagensPCA.map((_, i) => (
          <button
            key={i}
            onClick={() => setAtual(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === atual ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

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

      <section className="relative bg-azul py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/images/bgs/bg5.png')",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sobre Nós
          </h1>
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
              <h2 className="text-3xl font-bold text-preto mb-6">
                Nossa História
              </h2>
              <p className="text-preto/80 leading-relaxed mb-6">
                A ERCA - Empresa de Rações de Combate de Angola nasceu da
                necessidade de fornecer alimentação de alto valor nutricional e
                energético para as Forças Armadas Angolanas, em operações de
                defesa, missões de paz e situações de emergência.
              </p>
              <p className="text-preto/80 leading-relaxed mb-6">
                Com produção 100% nacional, a ERCA orgulha-se de ser uma empresa
                que contribui directamente para a segurança e soberania
                alimentar do país, empregando trabalhadores militares treinados
                e utilizando ingredientes seleccionados para garantir o melhor
                desempenho no terreno.
              </p>
              <p className="text-preto/80 leading-relaxed">
                Hoje, somos referência no fornecimento de rações operacionais,
                atendendo não apenas as Forças Armadas, mas também missões
                humanitárias, operações de resgate e situações de catástrofe em
                todo o território nacional.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden h-96"
            >
              <img
                src="/images/about/Asset 1.png"
                alt="ERCA"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-preto mb-4">
              Nossa Direcção
            </h2>
            <p className="text-cinza-escuro max-w-2xl mx-auto">
              Conheça a liderança que impulsiona a ERCA.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-10 items-center md:grid-cols-[300px_1fr]">
              <PCASlider />

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-preto mb-1">
                  Titilson Dias
                </h3>
                <p className="text-verde font-semibold mb-4">
                  Presidente do Conselho de Administração (PCA)
                </p>
                <p className="text-preto/80 leading-relaxed mb-4">
                  Com mais de 12 anos de experiência na produção de rações de
                  combate e gestão de segurança alimentar, Titilson Dias lidera
                  a ERCA com visão estratégica e compromisso com a excelência. A
                  sua trajectória inclui a implementação de sistemas de
                  qualidade ISO 22000 e HACCP, e o desenvolvimento de soluções
                  nutricionais adaptadas às exigências das Forças Armadas
                  Angolanas.
                </p>
                <div className="flex items-center gap-2 text-preto/70">
                  <span className="text-lg">📞</span>
                  <span>+244 926 757 823</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cinza">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                titulo: "Missão",
                descricao:
                  "Produzir e fornecer rações de combate e kits alimentares de excelência, garantindo a nutrição e o desempenho dos nossos militares e a segurança alimentar em missões críticas.",
              },
              {
                titulo: "Visão",
                descricao:
                  "Ser a principal referência em soluções alimentares operacionais em Angola e no continente africano, reconhecida pela qualidade, inovação e compromisso com a pátria.",
              },
              {
                titulo: "Valores",
                descricao:
                  "Patriotismo, disciplina, qualidade, inovação, responsabilidade social e compromisso com a vida e a segurança alimentar dos que servem a nação.",
              },
            ].map((item) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-8 shadow-sm border border-cinza"
              >
                <h3 className="text-xl font-bold text-azul mb-4">
                  {item.titulo}
                </h3>
                <p className="text-preto/80 leading-relaxed">
                  {item.descricao}
                </p>
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
              {
                titulo: "ISO 22000",
                desc: "Sistema de Gestão de Segurança Alimentar",
              },
              {
                titulo: "HACCP",
                desc: "Análise de Perigos e Controlo de Pontos Críticos",
              },
              {
                titulo: "Food Safety",
                desc: "Padrões rigorosos de segurança alimentar",
              },
              {
                titulo: "Produção Militar",
                desc: "Elaborado por trabalhadores militares treinados",
              },
            ].map((selo) => (
              <div
                key={selo.titulo}
                className="rounded-xl border border-cinza bg-cinza p-6 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-azul/10">
                  <span className="text-2xl text-azul">✓</span>
                </div>
                <h3 className="font-semibold text-preto mb-1">{selo.titulo}</h3>
                <p className="text-sm text-cinza-escuro">{selo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-azul">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-white font-bold italic">
            "{CONTATO.slogan}"
          </p>
        </div>
      </section>
    </>
  );
}
