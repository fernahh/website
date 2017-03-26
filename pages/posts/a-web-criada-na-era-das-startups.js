import Head from 'next/head'
import Article from '../../layouts/article'
import Blockquote from '../../components/blockquote'
import Link from '../../components/link'
import P from '../../components/paragraph'
import { Snippet, Code } from '../../components/highlight'

export default () => (
  <Article title="A web criada na era das startups" date="20/03/2016">
    <Head>
      <title>A web criada na era das startups</title>
      <meta name="description"
        content="Eu curto startups. Acredito fortemente na economia criativa
        para mudar o mundo. Mas nem todo projeto precisa ser uma startup."
      />
    </Head>

    <P>
      Eu curto startups. Acredito fortemente na economia criativa para mudar o
      mundo. Mas nem todo projeto precisa ser uma startup.
    </P>

    <P>
      Pensando nisso, esses dias me peguei imaginando se o projeto <em><Link href="https://www.w3.org/Proposal.html">WWW</Link></em> tivesse
      sido criado por um empreendedor dos últimos dez anos, na era das startups.
      Será que estaríamos em um estágio parecido com o atual?
    </P>

    <P>
      <strong>Imaginamos o seguinte cenário</strong>: 2016. Um cara de 35 anos,
      chamado <Link href="https://www.w3.org/People/Berners-Lee/">Tim Berners-Lee</Link>.
      Há mais ou menos 10 anos ele vem trabalhando em pesquisas para tonar o
      compartilhamento de informações mais acessível. Ao invés de publicar um
      artigo explicando a ideia, Berners-Lee opta por mostrá-la a investidores.
      Obviamente, o projeto despertou interesse de algumas aceleradoras. Porém,
      todas questionavam a forma de monetizar e lucrar com o projeto <em>WWW</em>.
      Diversas ideias surgiram, como cobrança de assinatura por acesso, ou que
      para cada clique em um hyperlink um anúncio abriria junto (tipo <Link href="https://thepiratebay.se/">PirateBay</Link>),
      entre outras bizarrices. O importante era <strong>lucrar</strong> com projeto.
    </P>

    <P>
      Se esse cenário fosse real, provavelmente Tim Berners-Lee seria um dos
      empreendedores mais conhecidos do mundo. Daria entrevistas explicando como
      era sua rotina para ser mais produtivo. Compraria outras empresas e
      estaria na lista de mais influentes da Forbes. Porém, a web como
      conhecemos hoje não existiria. Grandes e-commerces não existiriam e
      provavelmente nem a era das startups existiria.
    </P>

    <P>
      Caso você não saiba, existiu um projeto concorrente chamado <Link href="https://pt.wikipedia.org/wiki/HyperCard">HyperCard</Link>,
      que funcionava apenas no Mac OS. Logicamente, fracassou.
    </P>

    <P>
      A web só é o que é porque ela não é proprietária e funciona mesmo se você
      for pobre ou rico, branco ou negro, homem ou mulher.
    </P>

    <Blockquote>
      A web foi revolucionária porque ela é pública e inclusiva.
    </Blockquote>

    <P>
      Nem tudo precisa gerar valor em dinheiro pra fazer sentido.
      Nem tudo precisa ser uma startup.
    </P>
  </Article>
)
