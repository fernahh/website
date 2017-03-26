import Head from 'next/head'
import Article from '../../layouts/article'
import Link from '../../components/link'
import P from '../../components/paragraph'
import { Snippet, Code } from '../../components/highlight'

export default () => (
  <Article title="Acessando propriedades de objetos JavaScript" date="22/02/2017">
    <Head>
      <title>Acessando propriedades de objetos JavaScript</title>
      <meta name="description"
        content="Como garantir que uma propriedade de um objeto estará
        definida quando você precisar dela? Esse artigo mostra as várias formas
        de fazer isso, através condicionais, bibliotecas e conceitos de
        programação funcional."
      />
    </Head>
    <P>
      O JavaScript, como várias linguagens, funciona com um único
      fluxo de execução. Isso quer dizer que dadas as instruções,
      elas serão executadas em ordem e de forma contínua. Caso
      algo quebre no meio do caminho, a execução é interrompida.
      Isso pode nos ocasionar momentos desastrosos. No browser, a
      execução do JavaScript é compartilhada com a renderização do
      layout.
    </P>

    <P>
      Para saber mais sobre fluxo de execução em JavaScript,
      sugiro que leia <Link href="https://tableless.com.br/fluxo-de-execucao-assincrono-em-javascript-callbacks/">esse artigo do @jcemer no Tableless.</Link>
    </P>

    <P>
      Uma forma de quebrar a execução, é tentar acessar a
      propriedade de algum valor que não é definido. Isso irá
      quebrar o fluxo de execução, e dependendo da posição em que
      está sendo executado, pode deixar o usuário sem experiência
      alguma.
    </P>

    <Snippet language="javascript">{`  const obj = {}
  obj.x.y // TypeError: Cannot read property 'y' of undefined`}</Snippet>

    <P>
      Parece fácil prever erros como esse, mas é bem comum
      precisarmos consultar um valor que é definido de forma
      assíncrona. Além disso, em aplicações complexas não temos
      garantia sobre todas suas informações. Para evitar erros
      como esse, geralmente verificamos propriedade a propriedade:
    </P>

    <Snippet language="javascript">{`  const obj = {}

  if (obj && obj.x && obj.x.y)
    return obj.x.y // undefined`}</Snippet>

    <P>
      O problema com esssa abordagem é que dependendo do nível de
      nesting, mais ilegível nosso código fica.
    </P>

    <h2>Optional Chaining</h2>

    <P>
      Existe uma proposta de especificação do ECMAScript para
      resolver esse problema. Ela se chama <Link href="https://claudepache.github.io/es-optional-chaining/">
        Optional Chaining</Link>. Em resumo, a proposta diz
      que o operador <Code>?.</Code> pode ser usado para verificar
      se um valor existe e evitar uma quebra de fluxo.
    </P>

    <P>
      Usando nosso exemplo, podemos verificar se <Code>x</Code>
      existe através do operador <em>optional chaining</em>.
    </P>

    <Snippet language="javascript">{`  const obj = {}
  return obj.x?.y // undefined`}</Snippet>

    <P>
      É bom lembrar que essa proposta ainda está em
      <Code>state 0</Code>, e não é recomendada para uso.
    </P>

    <P>
      Outras linguagens, em <em>Ruby</em> e <em>C#</em>, já possuem
      essa feauture. O <em>Ruby on Rails</em>, possui um método chamado
      <Code>try()</Code>, que também possui esse objetivo.
    </P>

    <h2>Try method</h2>

    <P>
      O <Code>try()</Code> method, que o Rails dispõe, pode ser usado para
      consultar valores públicos de um objeto. Caso ele não exista, é
      retornado <Code>nil</Code>. Outra característica é que ele pode ser
      “chained” <em>(quem não lembra da jQuery nesse momento?):</em>
    </P>

    <Snippet language="ruby">{`  @obj.try(x).try(y)`}</Snippet>

    <P>
      Outra feature mais interessante, é que você pode usar bloco e seus
      parâmetros, passando esses valores para um método que pode existir ou não:
    </P>

    <Snippet language="ruby">{`  @posts.try(:each_slice, 2) do |a, b|
    # ...
  end`}</Snippet>

    <h3>try.js</h3>

    <P>
      Inspirado por esse método, decidi implementar algo parecido em JavaScript.
      Publiquei a implementação em uma pequena biblioteca no NPM. Caso queira
      ver o código, <Link href="https://github.com/fernahh/try.js">está no Github</Link>.
    </P>

    <P>
      Não há nada de mágico e inovador, a biblioteca serve apenas para momentos
      em que não podemos garantir o <em>path</em> de um objeto. Seguindo nosso
      exemplo, ao invés de varrer propriedade a propriedade, podemos passar o
      <em>path</em> como parâmetro para a função:
    </P>

    <Snippet language="javascript">{`  const obj = {}
  tryjs(obj, 'y.x') // undefined`}</Snippet>

    <P>Também é possível executar uma função e passar parâmetros pra ela:</P>

    <Snippet language="javascript">{`  // sem try.js
  const obj = {
    sayHello: () => 'Hello'
  }

  if (obj && (typeof obj.sayHello === 'function')
    return obj.sayHello() // 'Hello'

  // com try.js
  const obj = {
    sayHello: () => 'Hello'
  }
  tryjs(obj, 'sayHello') // 'Hello'

  // com parâmetros
  const obj = {
    add: (x, y) => x + y
  }
  tryjs(obj, 'add', [1, 2]) // 3`}</Snippet>

    <P>
      Quando tive a ideia da biblioteca, fui trocar uma ideia com meu
      amigo <Link href="https://twitter.com/rodrigowillrich">@rodrigowillrich</Link>.
      Na ocasião, ele me mostrou algumas implementações que resolvem esse
      problema e são elas que vamos ver agora.
    </P>

    <h2>Lodash e Ramda</h2>

    <P>
      A <Link href="https://lodash.com/">Lodash</Link> possui uma função
      chamada <Code>_.get()</Code>, que faz a consulta de um valor e retorna um
      valor <em>default</em> caso ele não exista.
    </P>

    <Snippet>{`  const obj = {}
  _.get(obj, 'x.y', 1) // 1`}</Snippet>

    <P>
      O <Link href="http://ramdajs.com">Ramda</Link> também possui uma
      função que pode ser usada pra esse caso. A sintax é o contrário da
      implementação da Lodash:
    </P>

    <Snippet>{`  const obj = {}
  R.prop('x', obj) // undefined`}</Snippet>

    <P>
      Existem outros milhões de funções do Ramda, outras bem parecidas que podem
      ser usadas também, dependendo do problema que você precisa resolver.
    </P>

    <h2>Lenses</h2>

    <P>
      Lenses é um conceito da Programação Funcional. De forma simplória,
      podemos dizer que lenses são <em>getters/setters</em> funcionais. Isso tem
      tudo a ver com o assunto desse artigo, onde tentamos acessar propriedades
      de objetos. Uma implementação simples, seria algo como:
    </P>

    <Snippet>{`  const lens = (getter, setter) => {
    return ({
      get: obj => getter(obj),
      set: (val, obj) => setter(va  l, obj),
    })
  }`}</Snippet>

    <P>
      Essa função, <em>lens()</em> irá nos retornar um objeto com função
      de <em>get</em> e <em>set</em>. Feito isso, podemos acessar e mudar valor
      de objetos sem precisar <strong>"mutar"</strong> nosso objeto nativo. Isso
      faz bastante sentido quando lidamos com imutabilidade. No exemplo abaixo,
      o objeto R representa o <Link href="http://ramdajs.com">Ramda</Link>.
    </P>

    <Snippet>{`  const lens = (getter, setter) => {
    return ({
      get: obj => getter(obj),
      set: (val, obj) => setter(val, obj),
    })
  }
  const view = (lens, obj) => lens.get(obj)
  const set = (lens, val, obj) => lens.set(val, obj)

  const obj = { x: 1 }
  const xLens = lens(R.prop('x'), R.assoc('x'))

  const newObj = set(xLens, 3, obj)
  newObj.x // return 3
  obj.x // return 1`}</Snippet>

    <P>
      Essa explicação é extramamente básica. Sugiro que para se aprofundar no
      assunto, dê uma lida no artigo do
      @sharifsbeat, <Link href="https://medium.com/javascript-inside/an-introduction-into-lenses-in-javascript-e494948d1ea5">A Introduction into Lenses
        in JavaScript</Link> onde há outras links e referências.
    </P>

    <h2>Conclusão</h2>

    <P>
      Acessar e como acessar propriedades em JavaScript já possui várias
      soluções. O interessante aqui é acompanhar e saber qual vai ser a
      implementação que o futuro da linguagem irá seguir. Como outras inúmeras
      features, acesso a propriedades de objetos pode fazer parte de um marco
      importante para o JavaScript, onde saberemos se ele continuará
      características funcionais ou OOP.
    </P>
  </Article>
)
