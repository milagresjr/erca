import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, CONTATO } from '../../constants/contato'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-verde shadow-lg shadow-verde/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/logo/logotipo.jpg-removebg.png"
            alt="ERCA"
            className="h-14 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="relative px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={CONTATO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-laranja text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-laranja/80 transition-colors"
          >
            <BsWhatsapp size={16} />
            Solicitar Orçamento
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
          aria-label="Abrir menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-verde/95 border-t border-white/10"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <a
                href={CONTATO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-laranja hover:bg-white/10"
              >
                <BsWhatsapp size={16} />
                Solicitar Orçamento
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
