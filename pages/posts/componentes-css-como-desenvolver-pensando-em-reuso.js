import Head from 'next/head'
import Article from '../../layouts/article'
import Blockquote from '../../components/blockquote'
import CodePen from '../../components/code-pen'
import Link from '../../components/link'
import Image from '../../components/image'
import P from '../../components/paragraph'
import { Snippet, Code } from '../../components/highlight'

export default () => (
  <Article title="Componentes CSS: como desenvolver pensando em reuso" date="15/02/2016">
    <Head>
      <title>Componentes CSS: como desenvolver pensando em reuso</title>
      <meta name="description"
        content="Cada vez mais precisamos de aplicações dinâmicas e
        modularizadas. E como criar componentes encapsulados em uma linguagem
        onde tudo é global? Veremos aqui paradigmas e aprender como desenvolver
        CSS escalável em tempos de módulos JavaScript e Web Components."
      />
    </Head>

    <P>
      A palavra <em>"componente"</em> nunca foi tão usada na web como nos
      últimos meses. Na era de bem-sucedidos <em>frameworks</em> e bibliotecas
      como <Link href="https://facebook.github.io/react/">React</Link> e <Link href="https://angular.io/">Angular2</Link>,
      que se baseiam nesse conceito, é cada vez mais necessário investir tempo
      em como arquitetar nosso CSS. A velha e boa técnica de <em>dividir para
      conquistar</em> mais do que nunca nos é uma boa opção.
    </P>

    <P>
      Para definir um componente, ele deve ser <strong>auto-suficiente</strong>,
      capaz de <strong>encapsular</strong> funcionalidades e permitir uma <strong>API de acesso</strong>.
      Pensando do ponto de vista de um seletor CSS, vamos exemplificar com um
      componente de botão:
    </P>

    <Snippet language="css">{`  .Button {
    display: block;
    max-width: 300px;
    background-color: black;
    color: white;
  }`}</Snippet>

    <P>
      Levando em conta a definição literal, podemos dizer que esse componente é
      auto-suficiente, afinal, se usarmos somente ele teremos um estilo de botão.
      Porém, não temos uma API de acesso bem definida, com entrada e saída.
      Problemas como esse são comuns e inevitáveis com CSS puro. Eles são ainda
      mais frequentes quando precisamos lidar com aplicações complexas.
    </P>

    <P>
      Uma das formas encontradas para contornar nossos problemas com CSS foram <Link href="http://tableless.com.br/oocss-smacss-bem-dry-css-afinal-como-escrever-css/">metodologias de escrita</Link>,
      como BEM, OOCSS, SMACSS e DRYCSS. Mesmo assim, elas são facilmente
      burláveis, afinal não há como controlarmos algo em uma linguagem que não
      nos lança exceção.
    </P>

    <P>
      Antes de continuar a leitura, recomendo que entenda como funciona a <Link href="http://tableless.com.br/afinal-como-usar-heranca-no-css/">especificidade de seletores e henraça em CSS</Link>.
    </P>

    <h2>Escopo global, <em>refactoring</em> e estados</h2>

    <P>
      Se pudéssemos elencar três problemas sérios com nossas queridas folhas de
      estilo, podemos dizer que são: escopo global, difícil de refatorar e
      custoso para lidar com estados.
    </P>

    <P>
      <em>Escopo Global</em> é de longe algo que sabemos que é ruim. Se você
      visitar a página sobre <Link href="http://www.w3schools.com/js/js_best_practices.asp">boas práticas JavaScript no w3fools</Link>,
      irá ver que funções e variáveis globais são ruins. Com CSS não é diferente.
      O problema é que quando pensamos em uma página <em>web</em>, logo
      imaginamos uma árvore. Porém, se levarmos em conta o <Link href="https://www.w3.org/TR/2013/WD-cssom-20131205/">CSSOM</Link>,
      veremos que todos os seletores fazem parte do mesmo escopo:
    </P>

    <Image alt="escopo global de seletores" src="http://i.imgur.com/8xNFR7c.jpg?1"></Image>

    <P>
      Isso é a cascata. Um seletor filho sempre irá herdar os estilos do pai.
      Por anos convivemos com ela e aprendemos a tirar proveito disso. O <Link href="http://getbootstrap.com/">Bootstrap</Link>, <em>framework</em> CSS
      mais bem sucedido até então, faz uso bem inteligente do efeito cascata.
      Porém, em um cenário que desejamos encapsular funcionalidades, o efeito
      cascata pode ser um grande inimigo. Voltando ao nosso componente de botão,
      vamos entender porque a cascata pode ser prejudicial há um componente.
    </P>

    <P>
      Vamos analisar o exemplo abaixo:
    </P>

    <CodePen id="EPMYMy" name="Alert Compment" tab="Result" />

    <P>
      Nosso componente <Code>.Button</Code> herdou o estilo da propriedade <Code>text-transform</Code> do
      componente <Code>.Dropdown</Code> e seus filhos. Dessa forma podemos
      provar que o componentes com CSS puro não encapsulam estilo, afinal eles
      "vazam" para outros componentes de nossa página.
    </P>

    <P>
      O segundo problema que temos com CSS é <em>refactoring</em>. Através
      do <Link href="http://httparchive.org/">httparchive.org</Link> podemos analisar
      que as folhas de estilo só crescem. Em cinco anos, pulamos de arquivos de
      10kb para 80kb. Obviamente precisamos levar todo o contexto do crescimento
      da web, mas também devemos ser sinceros e admitir que é sempre mais fácil
      adicionar uma nova regra ao refatorar algo antigo. Quem nunca adicionou
      uma nova regra ao <em>markup</em> ao invés de refatorar o que existe que
      atire a primeira pedra.
    </P>

    <P>
      Uma das soluções nativas para resolver o problema com escopo de seletores
      é o <Link href="https://www.w3.org/TR/shadow-dom/">Shadow DOM</Link>.
      Resumidamente, ele nada mais é uma API que nos permite criar elementos de
      DOM <strong>independentes</strong> e <strong>isolados</strong> do restante
      da página, ou seja, uma DOM isolada dentro da própria DOM.
    </P>

    <P>
      As vantagens dessa abordagem é que faz parte de um pequeno grupo de
      tecnologias que possuimos para isolar marcação, comportamento e estilo.
      Além disso, componentes criados com Shadow DOM podem receber parâmetros.
      Porém, nem tudo é perfeito. O isolamento de escopo que nos permite
      criar <em>widgets</em> como a tag <Code>video</Code> e <Code>audio</Code>,
      é prejudicional falando de estilo. Isso porque a cada Shadow DOM, sua
      página perde o estilo. Por final, sem contar
      que <Link href="http://caniuse.com/#feat=shadowdom">não funciona no IE/Edge, Firefox e Safari</Link> e
      não resolve problemas com estado.
    </P>

    <P>
      Falando em estado, esse parece ser nosso grande desafio.
      No <em>JavaScript</em> estamos carecas de saber que é custoso manipularmos o <em>DOM</em>.
      Quando lidamos com estado, é isso que precisamos fazer: <strong>adicionar
      e remover estilo dependendo do estado de nosso componente</strong>.
      Pensando em resolver esse problema, na <Link href="https://www.youtube.com/watch?v=NoaxsCi13yQ">CSSConf</Link> de
      2015, <Link href="https://twitter.com/colinmegill">Colin Megill</Link> apresentou
      uma palestra com um nome polêmico: <strong>Inline Styles are About to Kill CSS</strong>.
      Recomendo você assistir, no mínimo você ficará em choque com o turbilhão
      de informações ou irá achar que o cara é maluco. Enfim, essa <em>talk</em> foi
      importante no ponto de levantar diversas discussões na comunidade <em>web</em> sobre
      a tal "morte das folhas de estilo".
    </P>

    <P>
      <Link href="https://facebook.github.io/react/tips/inline-styles.html">Inline Styles</Link> surgiu
      com o React, que por sinal é a biblioteca que melhor lida com estados na
      atualidade. Desse ponto de vista, faz muito sentido, afinal a performance
      será bem melhor, temos regras encapsuladas e faz todo sentido quando
      lidamos com visualização de dados. Porém temos outros problemas,
      principalmente porque não há como cachear estilo <em>inline</em>.
    </P>

    <P>
      Ainda antes dessa palestra do Megill, um dos engenheiros do <Link href="https://facebook.github.io/">Facebook</Link>,
      <Link href="http://blog.vjeux.com/">Christopher Chedeau</Link> cutucou
      diretamente em nossas feridas, principalmente no slide abaixo:
    </P>

    <Image alt="CSS Problems" src="http://i.imgur.com/wBw0LL2.jpg?1" />

    <P>
      Esse slide foi tão importante que, provavelmente, irá mudar nossa forma de
      estilizar com CSS. Uma das formas disponíveis que surgiram são os <Link href="https://github.com/css-modules/css-modules">CSS Modules</Link>.
    </P>

    <h2>CSS Modules: o futuro passa por aqui</h2>

    <P>
      Desde a revolução dos pré-processadores, não tivemos nenhuma grande
      iniciativa que nos fizesse repensar nossa forma de escrever CSS. Mas isso
      pode mudar quando falamos de CSS Modules.
    </P>

    <P>
      Resumidamente, podemos definir essa tecnologia como <strong>folhas de
      estilo que possuem escopo local</strong>. Aqui já podemos concluir que
      precisamos de uma tarefa de <em>build</em>, pois CSS Modules não funcionam
      nativamente.
    </P>

    <P>
      Na prática, supomos um cenário com nosso mesmo componente de botão:
    </P>

    <Snippet language="css">{`  /* components/button.css */
  .Button {
    display: block;
    max-width: 300px;
    background-color: black;
    color: white;
  }

  .danger {
    background-color: red;
  }`}</Snippet>

    <P>
      Para usar esse componente, precisaremos importar esse módulo em um componente JavaScript:
    </P>

    <Snippet language="javascript">{`  // components/button.js
  import button from './button.css';

  buttonElem.outerHTML = '<button class=$\{button.danger}>Enviar</button>'
`}</Snippet>

    <P>
      Nossos <em>output</em> de CSS será como no <em>snippet</em> a seguir:
    </P>

    <Snippet language="css">{`  .components_Button__danger__abc5436-WEds_EeIra {
    display: block;
    max-width: 300px;
    background-color: red;
    color: white;
  }`}</Snippet>

    <P>
      Através desse breve <em>overview</em> podemos notar que há uma mudança
      de <em>workflow</em> na forma de desenvolvermos CSS. O nome gerado
      no <em>output</em> nos leva a conclusão que precisamos de <Code>sourcemaps</Code>
      para <em>debugging</em>. Além disso, você deve estar se perguntando:
    </P>

    <Blockquote>
      "Ok, até aqui tudo entendi, mas como faço para usar herança?"
    </Blockquote>

    <P>
      Podemos definir regras globais com CSS Modules, através da declaração com
      a seguinte sintaxe:
    </P>

    <Snippet language="css">{`  :global(.Button) {
    display: block;
    max-width: 300px;
    background-color: red;
    color: white;
  }`}</Snippet>

    <P>
      Isso quer dizer que o módulo <Code>.Button</Code> estará disponível para
      todos os módulos de nossa aplicação. Além disso temos a <em>keyword</em> <Code>composes</Code>,
      que receberá um módulo. Se você já captou a ideia, deverá ter percebido que
      funciona parecido com o <Code>@extend</Code> do Sass.
    </P>

    <Snippet language="css">{`  .Button_group {
    composes: button from '../componentes/button.css';
  }`}</Snippet>

    <P>
      Além disso também podemos gerenciar dependências de componentes através
      de <Link href="http://www.2ality.com/2014/09/es6-modules-final.html">módulos <em>JavaScript</em></Link>.
    </P>

    <h2>Conclusão</h2>

    <P>
      Até os mais puristas (me incluo nesse grupo) precisam dar o braço a torcer
      e aceitar que apenas HTML, CSS e JavaScript não são mais suficientes para
      desenvolvermos aplicações ricas. A <em>web</em> evoluiu a um nível que
      necessita de ferramentas auxiliares no dia-a-dia do
      desenvolvedor <em>front-end</em>. <strong>CSS Modules é mais uma delas</strong>.
    </P>

    <P>Precisamos testar, arriscar e utilizar isso em nossos produtos. Apenas
      dessa forma poderemos dizer se algo irá nos servir ou não.
    </P>

    <P>
      Ah, e pra não esquecer, <strong>sempre aposte em ideias e iniciativas da comunidade</strong>.
    </P>
  </Article>
)
