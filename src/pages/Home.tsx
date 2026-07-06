import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import Diferenciais from '../components/home/Diferenciais'
import Depoimentos from '../components/home/Depoimentos'
import ProdutosList from '../components/produtos/ProdutosList'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ERCA - Empresa de Rações de Combate de Angola</title>
        <meta
          name="description"
          content="ERCA - Referência em rações de combate e kits alimentares para as Forças Armadas, emergências e missões humanitárias em Angola."
        />
      </Helmet>
      <Hero />
      <Diferenciais />
      <ProdutosList />
      <Depoimentos />
    </>
  )
}
