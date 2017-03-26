import Head from 'next/head'
import Article from '../../layouts/article'
import Link from '../../components/link'
import P from '../../components/paragraph'
import { Code } from '../../components/highlight'

export default () => (
  <Article title="ES2015 não é mais opcional" date="04/09/2016">
    <Head>
      <title>ES2015 não é mais opcional</title>
      <meta name="description"
        content="Apesar de parecer muito tempo do release oficial do ES2015, o
        uso do padrão não é absoluto. Esse artigo busca mostrar os principais
        valores e razões para adotarmos de vez a versão oficial do JavaScript."
      />
    </Head>

    <P>Setembro de 2016. Há pouco mais de um ano saiu
      o <Link href="http://www.ecma-international.org/ecma-262/6.0/index.html">release oficial da 6ª edição do ECMAScript</Link> (ou
      ES6, como preferir). Apesar de parecer muito tempo, a adoção pelo padrão
      na comunidade JavaScript não é absoluto.
    </P>

    <P>
      <img alt="Choice, foto do Michael Endy" src="https://cdn-images-1.medium.com/max/800/1*5rhtsSpxx8iL1Gm8FnG0YA.jpeg" />
    </P>

    <P>
      A adoção a novas tecnologias na web sempre foram um tabu. As APIs do HTML5
      ainda são questionadas devido ao suporte dos browsers. Porém, a comunidade
      sempre buscou caminhos que facilitassem a vida do desenvolvedor sem deixar
      de suportar browsers mais antigos, afinal, a web nasceu para ser inclusiva.
      Foi assim que surgiram projetos fantásticos como <Link href="https://modernizr.com/">Modernizr </Link> e <Link href="http://html5please.com/">HTML5Please</Link>.
    </P>

    <P>
      Antes dos primeiros anúncios de novas features do ES2015 surgiram várias
      ferramentas que tentavam resolver problemas triviais que o JavaScript não
      resolvia. Podemos citar aqui duas tecnologias que mais se popularizaram
      com o mesmo propósito, <Link href="https://www.typescriptlang.org/">TypeScript</Link> e <Link href="http://coffeescript.org/">CoffeeScript</Link>.
      Além dessas, também surgiram inúmeros frameworks e bibliotecas que tem o mesmo objetivo:
      <strong>facilitar a vida do desenvolvedor JavaScript</strong>.
    </P>

    <P>
      Assim como aquele ditado que diz <em>"há males que vem para o bem"
      </em>, tenho a impressão que ocorreu o inverso na comunidade web. Novas
      tecnologias que vieram para "o bem" acabaram criando uma barreira enorme
      entre a adoção de novas tecnologias e desenvolvedores puristas. Infelizmente,
      nesse balaio enorme de bibliotecas e frameworks, colocaram junto a nova
      versão do ECMAScript. O que melhorou absurdamente os valores da linguagem
      acabou sendo encarado como um luxo. Porém, adotar o novo padrão do
      JavaScript não é sobre opção, é sobre permitir que seu produto tenha a
      possibilidade de um código mais legível, menos vulnerável a bugs e livre
      de hacks para contornar features básicas que qualquer linguagem de
      programação precise.
    </P>

    <P>
      Não vou mostrar e ensinar como cada feature da ES2015 funciona. Pra isso
      existem inúmeros posts e bibliografias ricas sobre o assunto. Mesmo assim,
      não posso deixar de citar algumas melhorias indispensáveis.
    </P>

    <h2>Hoisting, variáveis e funções</h2>

    <P>
      Simplicidade é uma das melhores características de que um código está bem
      escrito. Para ser simples, um código deve ser legível. Em contrapartida, a
      forma de declararmos variáveis em JavaScript sempre foi confusa. No
      ECMAScript 2015 a <em>keyword</em> <Code>var</Code> não faz mais sentido e
      já é considerada obsoleta por muitos autores. Vou explicar resumidamente o
      porquê.
    </P>

    <P>
      Como todo desenvolvedor JavaScript deve saber, toda função e variável são
      elevadas ao topo do escopo na hora da execução. Para corrigir esse
      comportamento em variáveis, o ES2015 introduziu outras duas formas de
      trabalharmos com valores, <Code>const</Code> e <Code>let</Code>. Ambos
      não são elevadas ao escopo superior e criam um novo escopo dentro de blocos
      condicionais ou laços.
    </P>

    <P>
      No caso de funções, além de ter sua declaração elevada, o seu corpo também
      é elevado. Mas o maior problema sempre foi o <Code>this</Code>. Ao usar
      funções como <em>callback</em>, o <Code>this</Code> sempre nos causou
      problema por não executar no contexto que imaginamos.
      Com <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow Functions</Link> a
      função executa no contexto do <Code>this</Code>, que é geralmente o que
      queremos. Na prática, podemos evitar hacks como <Code>var self = this</Code>.
    </P>

    <h2>Modularização</h2>

    <P>
      JavaScript nunca teve um sistema de módulos nativo. Para resolver esse
      problema foram criados diversos padrões para reutilização e
      manutenibilidade da nossa base de código. Além de padrões, também surgiram
      especificações robustas como AMD (popularizado pelo RequireJS) e CommonJS,
      que foi adotado pelo NodeJS.
    </P>

    <P>
      No ECMAScript 6 ganhamos um sistema de módulos nativo. Sem dúvidas é o
      maior ganho da linguagem nessa especificação. Além da sintaxe expressiva,
      módulos resolveram um dos principais problemas em aplicações JavaScript:
      gerenciamento de pacotes.
    </P>

    <P>
      Apesar do NPM ser um gerenciador de pacotes maduro, ele não é bala de
      prata para aplicações que não usam um sistema de módulos robusto. Para
      resolver esse problema usamos o Bower por muito tempo para gerenciar
      dependências front-end. Particularmente nunca vi sentido em usar dois
      gerenciadores de dependência em uma mesma aplicação, mas essa foi a forma
      com que resolvemos esse problema antes de 2015.
    </P>

    <P>
      Hoje em dia, usando um module loader como <Link href="https://webpack.github.io/">webpack</Link>,
      conseguimos suprir necessidades de aplicações JavaScript usando apenas NPM.
      Não é à toa que bibliotecas como <Link href="https://lodash.com/">lodash</Link> não
      tem versões oficiais no Bower.
    </P>

    <h2>Transpiladores não são um problema</h2>

    <P>
      Um dos argumentos mais usados por quem não quer aderir ao ES2015 são os
      transpiladores, em outras palavras, o <Link href="https://babeljs.io/">Babel</Link>.
      Porém,
      poucos devem saber que todas as engines modernas <Link href="https://twitter.com/_ericelliott/status/764628991831486465">compilam JavaScript para JavaScript
    </Link>. Ou seja, apesar de estranho, não existe mais JavaScript interpretado.
    </P>

    <P>
      Outra razão para apostar nossas fichas no Babel é observando repositórios
      de empresas que possuem grandes aplicações web, como <Link href="https://github.com/airbnb">Airbnb</Link>, <Link href="https://github.com/facebook/">Facebook</Link>, <Link href="https://github.com/Netflix">Netflix</Link> ou <Link href="https://github.com/spotify">Spotify</Link>. Se os produtos
      dessas empresas já resolvem seus problemas com ES2015, por que não
      resolveria o seu?
    </P>

    <h2>Conclusão</h2>

    <P>
      Ainda temos um longo caminho tratando-se de JavaScript. Faça benchmarks
      com outros desenvolvedores ou empresas que possuem produtos web e você
      poderá tirar suas próprias conclusões. Diferentemente das inúmeras
      bibliotecas e frameworks que não passam de <em>hypes</em>, a evolução do
      JavaScript resolve problemas do mundo real. Se você continuar escrevendo
      JavaScript como escrevíamos até 2015, você estará escrevendo código novo
      que será legado logo ali na frente… amanhã.
    </P>
  </Article>
)
