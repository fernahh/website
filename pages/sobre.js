import Head from 'next/head'
import Article from '../layouts/article'
import Heading from '../components/heading'
import Link from '../components/link'

export default () => (
  <Article>
    <Head>
      <title>Sobre | @fernahh</title>
    </Head>
    <Heading>Sobre</Heading>

    <p>
      E aí, tudo certo?
    </p>

    <p>
      Me chamo Luiz Fernando Rodrigues, mais conhecido como <em>"Fernahh"</em>.
    </p>

    <p>
      Nasci em Sobradinho, interior do Rio Grande do Sul. Morei cinco anos em
      Canela, onde me formei em Análise e Desenvolvimento de Sistemas,
      pela <Link href="http://www.ucs.br/site" title="Site da Universidade de Caxias do Sul">
      Universidade de Caxias do Sul</Link>.
    </p>

    <p>
      Trabalho e vivo da web desde 2010. Já contribui com projetos escritos em
      PHP, Ruby e JavaScript. Além disso, busco compartilhar meus conhecimentos
      através de palestras, artigos e projetos open source.
    </p>

    <p>
      Atualmente trabalho como engenheiro de software
      na <Link href="https://contaazul.com/" title="Site da ContaAzul">ContaAzul</Link>,
      com o principal foco em desenvolvimento front-end.
    </p>

    <p>
      Se quiser entrar em contato, podemos conversar através do
      e-mail <Link href="mailto:fernahh@gmail.com" title="fernahh@gmail.com">fernahh@gmail.com</Link>.
    </p>
  </Article>
)
