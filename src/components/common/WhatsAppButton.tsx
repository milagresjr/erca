import { BsWhatsapp } from 'react-icons/bs'
import { CONTATO } from '../../constants/contato'

export default function WhatsAppButton() {
  return (
    <a
      href={CONTATO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label="Fale connosco pelo WhatsApp"
    >
      <BsWhatsapp size={28} />
    </a>
  )
}
