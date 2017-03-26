import Head from 'next/head'
import Article from '../../layouts/article'
import Link from '../../components/link'
import { Snippet, Code } from '../../components/highlight'

export default () => (
  <Article title="Estado em components web" date="16/03/2017">
    <Head>
      <title>Estado em components web</title>
      <meta name="description"
        content="Antes de querer frameworks como React e Angular2, você precisa
        aprender sobre estado de componentes. Esse artigo busca mostrar a
        evolução desse paradigma e mostrando o que são stateful e stateless
        components."
      />
    </Head>

    <p>
      Nunca se falou tanto em componentes para a web como no último ano.
      O <Link href="https://facebook.github.io/react/">React</Link>, biblioteca
      que tem como objetivo facilitar o desenvolvimento de aplicações com
      componentes, se tornou líder de mercado. Outros frameworks surgiram com a
      mesma finalidade, e até mesmo a
      versão <Link href="https://docs.angularjs.org/guide/component">1.x do AngularJS</Link> dá
      suporte ao padrão de desenvolvimento baseado em componentes.
    </p>

    <p>
      Vamos ver aqui um dos principais conceitos que precisamos saber quando
      vamos desenvolver algo dessa forma, <strong>stateful</strong> e
      <strong>stateless components</strong>.
    </p>

    <h2>Os conceitos</h2>

    <p>
      Toda aplicação tem um estado. Através dele, temos acesso a informações que
      podem ser lidas e modificadas, dependendo do paradigma em que a aplicação
      foi escrita.
    </p>

    <p>
      Quando falamos de componentes, eles podem ter seus próprios estados ou
      somente fazer leitura do estado de outro componente. Sendo assim,
      classificamos eles de duas formas: <strong>stateful</strong> e
      <strong>stateless.</strong>
    </p>

    <h3>Stateful</h3>

    <p>
      Chamamos algo de stateful quando ele possui informações sobre o estado da
      aplicação, além de poder modificá-lo, sabendo quais foram as mudanças no
      passado, presente e (as vezes) as futuras.
      Podemos exemplificar isso através de uma função impura:
    </p>

    <Snippet language="javascript">{`  // estado.
  const position = 1;

  // função impura: tem acesso há um
  // estado que não faz parte de seu
  // escopo.
  const increment = () => position + 1;

  increment(); // retorna 2.`}</Snippet>

    <h3>Stateless</h3>

    <p>
      Diferentemente de algo stateful, quando temos aplicações, funções ou
      componentes stateless, sabemos que ele não tem informação sobre o estado.
      Sendo assim, o termo stateless nos diz que um determido instrumento não
      muta o estado de algo, assim temos a previsiblidade de que dada uma
      entrada, teremos sempre a mesma saída.
    </p>

      <Snippet language="javascript">{`  // estado.
  const position = 1;

  // função pura: ao invés de ter
  // ter acesso ao estado, ela
  // recebe o estado como parâmetro.
  const increment = p => p + 1;

  increment(); // retorna 2.`}</Snippet>

    <h2>Componentes na era pré-React</h2>

    <p>
      O tópico <em>componentes</em> não é novo. Há muito tempo o mercado exigia
      produtividade maior no desenvolvimento de produtos web. Antes mesmo da era
      dos frameworks, já tínhamos tentativas de resolver esse problema.
    </p>

    <p>
      A primeira grande biblioteca que tentou reutilizar código a fim de
      agilizar o desenvolvimento front-end foi a <Link href="https://jqueryui.com/">jQueryUI</Link>.
      Ela tem suas soluções baseadas em JavaScript. Porém, com a evolução do CSS,
      novos frameworks surgiram sem o uso pesado de script. O primeiro e sem
      dúvidas mais popular, foi o <Link href="http://getbootstrap.com/">Bootstrap</Link>.
    </p>

    <h3>Bootstrap</h3>

    <p>
      Apesar de não ser pioneiro, podemos dizer que o Bootstrap foi quem
      popularizou a ideia de componentes para a web. Reza a lenda que
      <em>1% da web já foi desenvolvida com esse framework</em>. Caso você já
      tenha sacado a diferença dos conceitos, já deve saber que os componentes
      do Bootstrap são exclusivamente <strong>stateless</strong>. Isso porque
      eles não guardam e nem podem mudar o estado da aplicação (ao menos se você
      forçar isso, rs).
    </p>

    <p>
      O ponto negativo de componentes agnósticos a frameworks, como o Bootstrap,
      é que para “plugá-los” a sua aplicação, você deverá fazer um <em>wrapper</em>
      para controle de estados. É por esse motivo que existem forks de outros f
      rameworks como <Link href="https://material.angularjs.org/latest/">AngularMaterial</Link> ou <Link href="https://react-bootstrap.github.io/">React-Bootstrap</Link>.
      No caso do AngularMaterial, os componentes são escritos com diretivas.
    </p>

    <h3>Diretivas do AngularJS</h3>

    <p>
      As diretivas do Angular 1.x popularizaram os chamados <em>custom components</em>.
      Através delas podemos inserir comportamento em um elemento do DOM,
      controlando ele e seus filhos. Caso você nunca tenha tido contato com
      diretivas, sugiro que dê uma <Link href="https://docs.angularjs.org/guide/directive">lida na documentação</Link>.
    </p>

    <p>
      De forma resumida, podemos dizer que uma diretiva nada mais é que uma
      marcação em um elemento HTML que será interpretada pelo Angular. A sacada
      boa que o framework teve foi basear-se nas ideias da especificação dos <Link href="https://www.w3.org/wiki/WebComponents/">Web Components</Link>.
      Tanto que um dos maiores interessados nessa especificação era o Google,
      dono do AngularJS.
    </p>

    <p>
      Para entendermos melhor, vamos ver um exemplo na prática. Abaixo temos uma
      diretiva que representa um componente de alerta.
    </p>

    <p data-height="265" data-theme-id="0" data-slug-hash="zNGoyM" data-default-tab="css,result" data-user="lfernahh" data-embed-version="2" data-pen-title="Alert Directive" className="codepen">See the Pen <a href="http://codepen.io/lfernahh/pen/zNGoyM/">Alert Directive</a> by Luiz Fernando Rodrigues (<a href="http://codepen.io/lfernahh">@lfernahh</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

    <p>
      Essa diretiva é stateless. Porém, o controle do estado da aplicação pode
      ser facilmente violado através do <Code>$scope</Code> e <Code>$rootScope</Code>.
      Ambos os valores dão acesso a outros escopos da aplicação, o que pode ser
      perigoso se você não tiver um bom controle em seu código.
    </p>

    <p>
      É recomendado que quando você for escrever um componente usando uma diretiva, sempre deixe o escopo dela isolado através de um objeto literal:</p>

      <Snippet language="javascript">{`  angular
    .module('alert', [])
    .directive('uiAlert', function() {
      return {
        scope: {},
        template: '<div ng-transclude></div>',
        transclude: true
      };
    });`}</Snippet>

    <p>
      Mesmo assim, você ainda pode emitir eventos ou ler informações para
      o <code>$rootScope,</code> acessar e mudar o estado de escopo de cima
      através do <code>$scope.$parent</code> . Essa liberdade existe por causa
      da natureza do framework, que ficou bastante conhecido pela estrutura MV*
      e o famoso <em>two-way data binding</em>.
    </p>

    <p>
      Escolhas e liberdades como essa são as maiores críticas que o Angular
      recebe. Isso acontence porque a <strong>divisão de responsabilidades</strong>
      dele é fácilmente burlável. Não é difícil encontrar projetos que possuem
      lógica de negócio em diretivas, o que muita vezes a torna stateful, quando
      como boa prática ela deveria <strong>apenas manipular o DOM</strong>.
    </p>

    <p>
      Pensando em resolver esse problema, na versão 1.5, foi introduzido
      o <Link href="https://docs.angularjs.org/guide/component"><strong>component method</strong></Link>,
      e é sobre ele que vamos falar agora.
    </p>

    <h2>Component Method do AngularJS</h2>

    <p>
      Segundo a própria <Link href="https://docs.angularjs.org/guide/component">documentação do Angular</Link>,
      o <code>angular.component()</code> é um tipo especial de diretiva. Ele nos
      dá mais controle, e agora sabemos definitivamente quando algo deve ser
      stateless ou stateful. É importante lembrar que esse método não substitui
      o papel das diretivas. Pelo contrário, ele é até mais restritivo e serve
      para criarmos uma aplicação baseada em componentes.
    </p>

    <p>
      A grande vantagem do método <Code>component()</Code> é permitir que uma
      aplicação seja <em>one-way dataflow</em>, sem o uso de <Code>$scope</Code>,
      <Code>$rootScope</Code> e afins. Além disso, a app ficará mais próxima de
      paradigmas do Angular2.
    </p>

    <p>
      Para exemplificar, vamos ver o exemplo abaixo. Nesse caso, o alerta deve
      desaparecer quando digitado a string <code>angular</code> no input disponível.
    </p>

    <p data-height="265" data-theme-id="dark" data-slug-hash="RKPoyw" data-default-tab="js,result" data-user="lfernahh" data-embed-version="2" data-pen-title="Angular Component App" className="codepen">See the Pen <a href="http://codepen.io/lfernahh/pen/RKPoyw/">Angular Component App</a> by Luiz Fernando Rodrigues (<a href="http://codepen.io/lfernahh">@lfernahh</a>) on <a href="http://codepen.io">CodePen</a>.</p>

    <p>
      Perceba que quem mantém o estado é o componente mais externo, que é stateful.
      O componente de input diz ao seu pai qual o valor digitado no campo, e o
      pai irá alterar o estado da aplicação, fazendo com que o alerta desapareça.
    </p>

    <p>
      O <Code>angular.component()</Code>
      possui <Link href="https://toddmotto.com/angular-1-5-lifecycle-hooks">lifecycle hooks</Link> que
      foram inspirados pelo React, a biblioteca que tem como objetivo criar uma
      app baseada nessa estrutura de componentes.
    </p>

    <h2>React Component</h2>

    <p>
      De forma simples, componentes React podem ser representados por uma função
      (ou classe) que recebe parâmetros (props) e retorna um markup através do
      método <Code>render()</Code> . Para exemplificar, vamos desenvolver nosso
      componente de alerta usando uma função pura e renderizá-lo através do React.
    </p>

    <p data-height="265" data-theme-id="dark" data-slug-hash="VPKjKd" data-default-tab="js,result" data-user="lfernahh" data-embed-version="2" data-pen-title="React Alert Component" className="codepen">See the Pen <a href="http://codepen.io/lfernahh/pen/VPKjKd/">React Alert Component</a> by Luiz Fernando Rodrigues (<a href="http://codepen.io/lfernahh">@lfernahh</a>) on <a href="http://codepen.io">CodePen</a>.</p>

    <p>
      A diferença entre usar uma função para definir componentes ao invés de
      extender a classe <Code>React.Component</Code> , é que extendendo a classe
      (ou usando o helper method <Code>React.createClass()</Code>) temos acesso
      aos chamados "<Link href="https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle">lifecycle methods</Link>".
      Através deles temos acesso sobre quando um componente será montando ou
      quando ele já está montando.
    </p>

    <p>
      Agora que já sabemos, resumidamente, como funcionam implementações de
      componentes com React e AngularJS, vamos entender os conceitos stateful e
      stateless aplicados a componentes.
    </p>

    <h2>Stateless Component</h2>

    <p>
      Componentes stateless dizem <strong>como as coisas se parecem</strong>,
      ou seja, ele não mantém estado e nem pode alterá-lo. Suas responsabilidades
      são renderizar informações e emitir eventos para um componente stateful,
      que será responsável por manter o estado.
    </p>

    <h2>Stateful Component</h2>

    <p>
      Em março de 2015, <Link href="https://twitter.com/dan_abramov">Dan Abramov</Link> escreveu
      um artigo chamado <Link href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.emwiglqtn">Presentional and Container Components</Link>,
      que até hoje é usado como referência para explicar esse assunto. Na ocasião,
      ele divide componentes nessas duas categorias, que também são conhecidas
      com os termos <em>fat</em> e <em>skinny</em>, <em>smart</em> e <em>dumb</em>
      e o que ficou denotado, <em>stateful</em> e <em>stateless.</em>
    </p>

    <p>
      Abramov classifica <em>container components</em> (stateful) com uma série
      de items. Levando eles em consideração, podemos dizer que um componente
      stateful diz <strong>como as coisas funcionam</strong>, isso é: mantendo o
      estado e passando ele para outros componentes. Seu componente stateful será
      responsável por guardar o estado, fazer requisições ajax e compor uma parte
      de sua app. Na prática, um componente stateful é representado por
      componentes como <Code>AppContainer</Code> ,<Code>NewsContainer</Code>
      ou <Code>UsersList</Code>.
    </p>

    <p>
      Vejamos o exemplo abaixo:
    </p>

    <p data-height="265" data-theme-id="dark" data-slug-hash="mRrRzY" data-default-tab="js,result" data-user="lfernahh" data-embed-version="2" data-pen-title="React FrameworksContainer " className="codepen">See the Pen <a href="http://codepen.io/lfernahh/pen/mRrRzY/">React FrameworksContainer </a> by Luiz Fernando Rodrigues (<a href="http://codepen.io/lfernahh">@lfernahh</a>) on <a href="http://codepen.io">CodePen</a>.</p>

    <p>
      Perceba que componente <Code>FrameworksContainer</Code> é quem possui o
      estado e passa o conteúdo para seu filho <Code>FrameworkItem</Code>, que é
      stateless.
    </p>

    <h2>Conclusão</h2>

    <p>
      Esses dois conceitos são os primeiros assuntos que você deve aprender ao
      começar a estudar frameworks que provem uma API para desenvolvimento de
      aplicações baseadas em componentes. Eles são o ponto de participa para
       concepção de conceitos que se tornaram absolutos em 2016 e serão fortemente
       cobrados pelo mercado em 2017. A partir da racionalização do estado em
       componentes para a web, React, Angular2, programação funcional e outros
       termos começam a fazer sentido em meio a tanta informação.
     </p>

    <p>
      Espero ter ajudado!
    </p>
  </Article>
)
