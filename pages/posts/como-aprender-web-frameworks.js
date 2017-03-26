import Head from 'next/head'
import Article from '../../layouts/article'
import Link from '../../components/link'
import P from '../../components/paragraph'
import HR from '../../components/hr'

export default () => (
  <Article title="Como aprender web frameworks" date="26/06/2016">
    <Head>
      <title>Como aprender web frameworks</title>
      <meta name="description"
        content="Tradução do artigo How to learn web frameworks, que fala sobre
        a pressão do mercado em busca de desenvolvedores júnior que sejam
        especialistas em web frameworks, como React, Angular e Rails."
      />
    </Head>

    <P>
      Eu converso com desenvolvedores que estão começando. Também converso com
      recrutadores. Os primeiros sentem muita pressão dos segundos para entrar
      no mercado dominando algum framework específico. React, Rails, o que for.
      Em primeiro lugar, recrutadores não devem colocar essa pressão, porque bons
      desenvolvedores podem aprender e bons recrutadores podem inspirá-los a
      isso. É irracional esperar que desenvolvedores que estão iniciando suas
      carreiras saibam frameworks que resolvem problemas que eles ainda não
      conhecem. Eles vão ter muitas dificuldades a cada passo do aprendizado
      e mesmo assim nunca irão aprender de verdade.
    </P>

    <P>
      Se você é desenvolvedor que está começando e acha que precisa aprender
      React, MEAN, ou qualquer outra stack, eu sugiro que você dê um passo para
      trás. É irracional você buscar aprender um framework que resolve problemas
      que você nunca viu antes.
    </P>

    <P>
      Em vez disso, procure entender o propósito do framework. No caso do React:
      uma biblioteca JavaScript para criação de interfaces complexas com um
      virtual DOM e um fluxo de dados unidirecional. Isso parece resolver algo
      que você já fez? Veja os exemplos na homepage do projeto. A sua reação foi
      <em>"uau, isso resolve o problema que eu tived"</em>? Se a resposta for
      não, você vai ter dificuldade para aprender. Os exemplos são instrutivos:
      desenvolver um app de lista de tarefas no front-end parece difícil? Você
      já tentou? Tente. Tente usando uma tecnologia que você já domina. Tente
      fazer bom o suficiente para você usar. Ele vai ficar difícil. Olhe para o
      React de novo, e provavelmente ele vai fazer sentido. Em seguida, tente
      desenvolver de novo, só que agora com React, comparando sua experiência.
    </P>

    <P>
      Se você acha que precisa aprender Rails, você sabe o que o ele faz? É um
      framework para aplicações web. Isso soa usual pra você? Você já tentou
      desenvolver uma aplicação web antes? É difícil. Tente. Veja se você
      consegue montar um simples servidor web com Ruby ou qualquer outra
      linguagem que você saiba. Você consegue fazer o servidor responder a uma
      requisição GET? E uma requisição POST? Você consegue fazer sua aplicação
      armazenar o conteúdo de uma requisição em um banco de dados? Se você
      conseguir e achar isso tedioso, procure usar um framework simples que faça
      tarefas repetitivas pra você, como o Sinatra. Continue desenvolvendo até
      achar sua solução ruim, e você irá olhar para o Rails de novo. Se ele
      ainda não fizer sentido, continue desenvolvendo até sua aplicação ser <em>realmente</em> ruim.
    </P>

    <P>
      Eu realmente nunca tinha aprendido frameworks JS antes de ter passado por
      problemas em aplicações baseadas em requisições AJAX apenas com jQuery. Eu
      nunca tinha achado o Rails realmente útil, construí um servidor apenas com
      Node, e senti a dor de tentar escalar um servidor em uma aplicação web.
    </P>

    <P>
      Frameworks não existem para impressionar as pessoas ou deixar a vida delas
      mais difíceis. Pessoas os usam porque tem problemas. Se você quiser aprender
      um framework, ele deve ajudar a resolver o seu problema.
    </P>

    <P>
      Se estiver olhando para "aprenda Railsd" ou "aprenda Angulard" como um
      problema, então você terá dificuldade para começar a aprender e vai ser
      difícil saber se você está progredindo. Você pode rever esse problema como
      "aprender a desenvolver interfaces complexas e interativasd" ou "aprender
      como desenvolver aplicações webd", em seguida, o framework passará a ser
      uma ferramenta para resolver o seu problema, e aprender não será uma tarefa
      difícil, será uma descoberta.
    </P>

    <HR />

    <P>
      <em>Esse texto é uma tradução do artigo <Link href="https://medium.com/shopify-ux/how-to-learn-web-frameworks-9d447cb71e68">"How to learn web frameworksd"</Link>,
      da <Link href="https://medium.com/u/48287abd8420">Tessa Thornton</Link>.</em>
    </P>
  </Article>
)
