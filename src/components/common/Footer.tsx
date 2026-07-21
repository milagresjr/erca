import { CONTATO, NAV_LINKS } from '../../constants/contato'

export default function Footer() {
  return (
    <footer className="bg-preto text-cinza-escuro">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/logo/logo-branco-com-fundo-removebg-preview.png"
              alt="ERCA"
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Empresa de Rações de Combate de Angola. Alimentando quem protege a nação.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="text-sm text-cinza-escuro hover:text-verde transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contactos</h4>
            <ul className="space-y-2 text-sm">
              {CONTATO.telefones.map((tel) => (
                <li key={tel}>{tel}</li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTATO.email}`}
                  className="text-cinza-escuro hover:text-verde transition-colors"
                >
                  {CONTATO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Localização</h4>
            <p className="text-sm">{CONTATO.endereco}</p>
            <p className="text-sm mt-2">NIF: {CONTATO.nif}</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-azul/20 text-center">
          <p className="text-sm text-verde font-semibold mb-2">
            {CONTATO.slogan}
          </p>
          <p className="text-xs text-cinza-escuro">
            &copy; {new Date().getFullYear()} ERCA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
