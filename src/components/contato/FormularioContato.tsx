import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiPaperAirplane } from 'react-icons/hi'
import { HiMapPin } from 'react-icons/hi2'
import { CONTATO } from '../../constants/contato'

interface FormData {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

interface FormErrors {
  nome?: string
  email?: string
  assunto?: string
  mensagem?: string
}

export default function FormularioContato() {
  const [form, setForm] = useState<FormData>({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })
  const [erros, setErros] = useState<FormErrors>({})
  const [enviado, setEnviado] = useState(false)

  function validar(): boolean {
    const novosErros: FormErrors = {}

    if (!form.nome.trim()) novosErros.nome = 'Nome é obrigatório'
    if (!form.email.trim()) {
      novosErros.email = 'Email é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      novosErros.email = 'Email inválido'
    }
    if (!form.assunto.trim()) novosErros.assunto = 'Assunto é obrigatório'
    if (!form.mensagem.trim()) {
      novosErros.mensagem = 'Mensagem é obrigatória'
    }

    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validar()) {
      setEnviado(true)
      setForm({ nome: '', email: '', assunto: '', mensagem: '' })
      setTimeout(() => setEnviado(false), 5000)
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (erros[name as keyof FormErrors]) {
      setErros((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-preto mb-4">
            Fale Connosco
          </h2>
          <p className="text-cinza-escuro max-w-2xl mx-auto">
            Estamos prontos para atender às suas necessidades.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-preto/80 mb-1">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                value={form.nome}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-azul ${
                  erros.nome ? 'border-red-400 bg-red-50' : 'border-cinza'
                }`}
              />
              {erros.nome && (
                <p className="mt-1 text-xs text-red-500">{erros.nome}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-preto/80 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-azul ${
                  erros.email ? 'border-red-400 bg-red-50' : 'border-cinza'
                }`}
              />
              {erros.email && (
                <p className="mt-1 text-xs text-red-500">{erros.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="assunto" className="block text-sm font-medium text-preto/80 mb-1">
                Assunto
              </label>
              <input
                id="assunto"
                name="assunto"
                type="text"
                value={form.assunto}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-azul ${
                  erros.assunto ? 'border-red-400 bg-red-50' : 'border-cinza'
                }`}
              />
              {erros.assunto && (
                <p className="mt-1 text-xs text-red-500">{erros.assunto}</p>
              )}
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-preto/80 mb-1">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                value={form.mensagem}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-azul resize-none ${
                  erros.mensagem ? 'border-red-400 bg-red-50' : 'border-cinza'
                }`}
              />
              {erros.mensagem && (
                <p className="mt-1 text-xs text-red-500">{erros.mensagem}</p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-azul text-white px-6 py-3 rounded-lg font-semibold hover:bg-azul/80 transition-colors"
            >
              <HiPaperAirplane size={16} />
              Enviar Mensagem
            </button>

            {enviado && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-azul text-sm font-medium"
              >
                Mensagem enviada com sucesso! Entraremos em contacto.
              </motion.p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-xl bg-cinza p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-azul/10 text-azul flex-shrink-0">
                  <HiPhone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-preto mb-1">Telefones</h4>
                  {CONTATO.telefones.map((tel) => (
                    <p key={tel} className="text-sm text-cinza-escuro">{tel}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-azul/10 text-azul flex-shrink-0">
                  <HiMail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-preto mb-1">Email</h4>
                  <a
                    href={`mailto:${CONTATO.email}`}
                    className="text-sm text-cinza-escuro hover:text-azul"
                  >
                    {CONTATO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-azul/10 text-azul flex-shrink-0">
                  <HiMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-preto mb-1">Endereço</h4>
                  <p className="text-sm text-cinza-escuro">{CONTATO.endereco}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-cinza h-64 bg-cinza flex items-center justify-center">
              <div className="text-center text-cinza-escuro">
                <HiMapPin size={32} className="mx-auto mb-2" />
                <p className="text-sm">Mapa integrado</p>
                <p className="text-xs">{CONTATO.endereco}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
