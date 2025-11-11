// ======= TEMPLATES =======

// Template da Home
function homeTemplate() {
  return `
    <section class="hero">
      <div class="container">
        <h1>Bem-vindo ao Mundo dos Animes</h1>
        <p>Explore os melhores animes com informações, imagens e detalhes de cada série.</p>
      </div>
    </section>

    <div class="cards">
        <div class="card">
            <img src="img/onepiece.jpg" alt="One Piece">
            <h3>One Piece</h3>
            <div class="tag">Ação</div>
            <div class="tag">Aventura</div>
            <a href="#" class="btn" id="link-onepiece-card">Ver Mais</a>
        </div>

        <div class="card">
            <img src="img/naruto.jpg" alt="Naruto">
            <h3>Naruto</h3>
            <div class="tag">Ação</div>
            <div class="tag">Shounen</div>
            <a href="#" class="btn" id="link-naruto-card">Ver Mais</a>
        </div>

        <div class="card">
            <img src="img/kimetsu.jpg" alt="Kimetsu no Yaiba">
            <h3>Kimetsu no Yaiba</h3>
            <div class="tag">Ação</div>
            <div class="tag">Fantasia</div>
            <a href="#" class="btn" id="link-kimetsu-card">Ver Mais</a>
        </div>

        <div class="card">
            <img src="img/fullmetal.jpg" alt="Fullmetal Alchemist">
            <h3>Fullmetal Alchemist</h3>
            <div class="tag">Ação</div>
            <div class="tag">Aventura</div>
            <a href="#" class="btn" id="link-fullmetal-card">Ver Mais</a>
        </div>
    </div>
  `;
}

// Template Sobre
function sobreTemplate() {
  return `
    <section>
      <h1>Sobre o Site</h1>
      <p>O <strong>Mundo dos Animes</strong> é um projeto desenvolvido para celebrar os principais animes que marcaram gerações, como One Piece, Naruto, Kimetsu no Yaiba e Fullmetal Alchemist.</p>
      <p>A proposta é apresentar informações, curiosidades e homenagear personagens e histórias que inspiram fãs ao redor do mundo.</p>

      <h2>🎯 Objetivos</h2>
      <ul>
        <li>Unir fãs da cultura otaku e geek;</li>
        <li>Compartilhar informações de forma simples e visual;</li>
        <li>Servir como projeto acadêmico para aprendizado.</li>
      </ul>
    </section>
  `;
}

// Template Contato
function contatoTemplate() {
  return `
    <section>
      <h1>Contato</h1>
      <form id="form-contato">
        <label>Nome: <input type="text" id="nome" /></label><br />
        <label>Email: <input type="email" id="email" /></label><br />
        <button type="submit">Enviar</button>
        <div id="mensagemErro"></div>
      </form>
    </section>
  `;
}

// Templates detalhados dos Animes
function onePieceTemplate() {
  return `
    <div class="card-detail">
      <h1>One Piece</h1>
      <img src="img/onepiece.jpg" alt="One Piece">
      <h2>História e Criação</h2>
      <p>One Piece foi criado por Eiichiro Oda, que começou como assistente de mangakás antes de lançar a série em dezembro de 1997 na revista Weekly Shōnen Jump. Antes disso, Oda publicou dois one‑shots sob o título “Romance Dawn”, que serviram como protótipo para o universo de One Piece. Ele se inspirou em piratas clássicos, mitologia de exploração, e obras como Vickie o Viking, além de combinar humor, aventura e drama para criar um mundo vasto e interconectado. O mangá rapidamente ganhou popularidade no Japão e internacionalmente, tornando‑se um dos maiores sucessos da história dos quadrinhos.</p>

      <h2>Curiosidades</h2>
      <ul>
        <li>O mangá detém o recorde do Guinness World Records de “mais cópias publicadas para uma mesma série por um único autor”.</li>
        <li>Até 2022, mais de 500 milhões de cópias foram impressas em mais de 60 países.</li>
        <li>O primeiro volume teve uma tiragem inicial recorde de mais de 3 milhões de cópias, cenário raro para mangás.</li>
        <li>A obra combina arcos de história que tipicamente começam em uma ilha nova e encerram nela, criando uma estrutura episódica dentro de uma saga maior.</li>
        <li>Eiichiro Oda costuma inserir “Easter eggs” e enigmas que ele mesmo já planeja há décadas.</li>
      </ul>

      <h2>Informações</h2>
      <ul>
        <li>Autor: Eiichiro Oda</li>
        <li>Gênero: Aventura, Fantasia, Ação</li>
        <li>Estreia: 1999</li>
        <li>Estúdio: Toei Animation</li>
      </ul>
    </div>
  `;
}

function narutoTemplate() {
  return `
    <div class="card-detail">
      <h1>Naruto</h1>
      <img src="img/naruto.jpg" alt="Naruto">
      <h2>História e Criação</h2>
      <p>Naruto foi criado por Masashi Kishimoto e começou sua publicação como mangá em 1999 na Weekly Shōnen Jump. Antes disso, Kishimoto havia desenvolvido um one‑shot em 1995 chamado Karakuri, e em 1997 um outro protótipo com um garoto que se transformava em raposa, que serviu como base para Naruto. Ele decidiu ambientar a história em um mundo de ninjas, incorporando mitologia japonesa, bestas com caudas e elementos de superação pessoal, rejeição e amizade. A narrativa segue o jovem ninja Naruto Uzumaki, que busca se tornar Hokage e obter reconhecimento, enquanto enfrenta inimigos, forma laços e cresce como pessoa.</p>

      <h2>Curiosidades</h2>
      <ul>
        <li>O conceito inicial de Naruto envolvia um garoto cozinheiro ninja, antes de mudar para a temática de ninjas clássicos.</li>
        <li>A franquia continua ativa com Boruto: Naruto Next Generations, mesmo após o fim do mangá original.</li>
        <li>O autor incorporou elementos de sua própria vida e sentimento de “querer ser reconhecido” no personagem principal.</li>
        <li>Naruto popularizou muitos conceitos de foklore ninja para o público ocidental, como o chakra, jutsus e bestas com caudas.</li>
      </ul>

      <h2>Informações</h2>
      <ul>
        <li>Autor: Masashi Kishimoto</li>
        <li>Gênero: Ação, Aventura, Ninja</li>
        <li>Estreia: 2002</li>
        <li>Estúdio: Studio Pierrot</li>
      </ul>
    </div>
  `;
}

function kimetsuTemplate() {
  return `
    <div class="card-detail">
      <h1>Kimetsu no Yaiba</h1>
      <img src="img/kimetsu.jpg" alt="Kimetsu no Yaiba">
      <h2>História e Criação</h2>
      <p>Kimetsu no Yaiba, também chamado Demon Slayer, foi criado por Koyoharu Gotouge e começou a ser serializado em 15 de fevereiro de 2016 na revista Weekly Shōnen Jump. O autor havia trabalhado em one‑shots como Kagarigari em 2013, que apresentavam caçadores de criaturas sobrenaturais, e refinou a ideia até apresentar Tanjiro Kamado como protagonista e Nezuko como irmã‑demônio.</p>

      <h2>Curiosidades</h2>
      <ul>
        <li>O primeiro filme da franquia que adapta um arco do mangá bateu recordes de bilheteria no Japão, superando até filmes do Studio Ghibli.</li>
        <li>Gotouge adaptou o título original de “Kisatsu no Yaiba” para “Kimetsu no Yaiba” para evitar o uso excessivo da palavra “matar” (殺) no título.</li>
        <li>A produção do anime priorizou animação de alta qualidade, resultando em cenas memoráveis e popularização massiva fora do Japão.</li>
      </ul>

      <h2>Informações</h2>
      <ul>
        <li>Autor: Koyoharu Gotouge</li>
        <li>Gênero: Ação, Fantasia, Sobrenatural</li>
        <li>Estreia: 2019</li>
        <li>Estúdio: Ufotable</li>
      </ul>
    </div>
  `;
}

function fullmetalTemplate() {
  return `
    <div class="card-detail">
      <h1>Fullmetal Alchemist</h1>
      <img src="img/fullmetal.jpg" alt="Fullmetal Alchemist">
      <h2>História e Criação</h2>
      <p>Fullmetal Alchemist foi criado por Hiromu Arakawa e publicado entre 2001 e 2010, reunindo 27 volumes de mangá. Arakawa pesquisou alquimia, Revolução Industrial europeia, temas de guerra, pobreza e moralidade para construir o mundo de FMA. A história segue os irmãos Edward e Alphonse Elric após um experimento alquímico que deu errado, enquanto buscam a Pedra Filosofal para recuperar seus corpos perdidos.</p>

      <h2>Curiosidades</h2>
      <ul>
        <li>A autora leu livros sobre alquimia e entrevistou refugiados, ex‑membros de yakuza e veteranos para integrar temas reais ao enredo.</li>
        <li>Foram produzidas duas versões de anime: uma em 2003 que diverge do mangá, e Fullmetal Alchemist: Brotherhood em 2009 que segue fielmente o mangá.</li>
        <li>O título “Fullmetal Alchemist” é um jogo de palavras com “Hagane no Renkinjutsushi” (Alquimista de Aço) e foi pensado para soar forte em inglês.</li>
      </ul>

      <h2>Informações</h2>
      <ul>
        <li>Autora: Hiromu Arakawa</li>
        <li>Gênero: Ação, Fantasia, Drama</li>
        <li>Estreia: 2003</li>
        <li>Estúdio: Bones</li>
      </ul>
    </div>
  `;
}

// ======= SPA E EVENTOS =======
const root = document.getElementById('root');

function loadHome() {
  root.innerHTML = homeTemplate();
  attachCardListeners();
  attachMenuListeners();
}

function attachMenuListeners() {
  document.getElementById('link-home').addEventListener('click', e => { e.preventDefault(); loadHome(); });
  document.getElementById('link-sobre').addEventListener('click', e => { e.preventDefault(); root.innerHTML = sobreTemplate(); attachMenuListeners(); });
  document.getElementById('link-contato').addEventListener('click', e => { e.preventDefault(); root.innerHTML = contatoTemplate(); attachFormListener(); attachMenuListeners(); });

  document.getElementById('link-onepiece').addEventListener('click', e => { e.preventDefault(); root.innerHTML = onePieceTemplate(); attachMenuListeners(); });
  document.getElementById('link-naruto').addEventListener('click', e => { e.preventDefault(); root.innerHTML = narutoTemplate(); attachMenuListeners(); });
  document.getElementById('link-kimetsu').addEventListener('click', e => { e.preventDefault(); root.innerHTML = kimetsuTemplate(); attachMenuListeners(); });
  document.getElementById('link-fullmetal').addEventListener('click', e => { e.preventDefault(); root.innerHTML = fullmetalTemplate(); attachMenuListeners(); });
}

function attachCardListeners() {
  document.getElementById('link-onepiece-card').addEventListener('click', e => { e.preventDefault(); root.innerHTML = onePieceTemplate(); attachMenuListeners(); });
  document.getElementById('link-naruto-card').addEventListener('click', e => { e.preventDefault(); root.innerHTML = narutoTemplate(); attachMenuListeners(); });
  document.getElementById('link-kimetsu-card').addEventListener('click', e => { e.preventDefault(); root.innerHTML = kimetsuTemplate(); attachMenuListeners(); });
  document.getElementById('link-fullmetal-card').addEventListener('click', e => { e.preventDefault(); root.innerHTML = fullmetalTemplate(); attachMenuListeners(); });
}

// ======= FORMULÁRIO =======
function attachFormListener() {
  const form = document.getElementById('form-contato');
  form.addEventListener('submit', ev => {
    ev.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    let mensagemErro = '';

    if (!nome) mensagemErro += 'Por favor, preencha o nome.<br />';
    if (!email || !validateEmail(email)) mensagemErro += 'Por favor, preencha um email válido.<br />';

    const divErro = document.getElementById('mensagemErro');

    if (mensagemErro) {
      divErro.innerHTML = mensagemErro;
      divErro.style.color = 'red';
    } else {
      divErro.innerHTML = '';
      alert('Formulário enviado com sucesso!');
      form.reset();
    }
  });
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// ======= INICIALIZAÇÃO =======
loadHome();
