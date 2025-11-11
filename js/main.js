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
      <p>One Piece foi criado por Eiichiro Oda, que começou como assistente de mangakás antes de lançar a série em dezembro de 1997 na revista Weekly Shōnen Jump. Antes disso, Oda publicou dois one‑shots sob o título “Romance Dawn”, que serviram como protótipo para o universo de One Piece. Ele se inspirou em piratas clássicos, mitologia de exploração, e obras como Vickie o Viking, além de combinar humor, aventura e drama para criar um mundo vasto e interconectado. O mangá rapidamente ganhou popularidade no Japão e internacionalmente, tornando‑se um dos maiores sucessos da história dos quadrinhos. Ao longo dos anos, Oda expandiu o enredo com complexidade crescente, criando sagas, personagens numerosos e mistérios de longo prazo, como o “One Piece” em si e o “Século Perdido”. A franquia gerou adaptações em anime, filmes, jogos e até live‑action, solidificando seu impacto cultural global.</p>
      <h2>Curiosidades</h2>
      <ul>
        <li>O mangá detém o recorde do Guinness World Records de “mais cópias publicadas para uma mesma série por um único autor”.</li>
        <li>Até 2022, mais de 500 milhões de cópias foram impressas em mais de 60 países.</li>
        <li>O primeiro volume teve uma tiragem inicial recorde de mais de 3 milhões de cópias.</li>
        <li>A obra combina arcos de história que tipicamente começam em uma ilha nova e encerram nela.</li>
        <li>Eiichiro Oda costuma inserir “Easter eggs” e enigmas que ele mesmo já planeja há décadas.</li>
      </ul>
      <h2>Informações</h2>
      <ul>
        <li><strong>Autor:</strong> Eiichiro Oda</li>
        <li><strong>Gênero:</strong> Aventura, Fantasia, Ação</li>
        <li><strong>Estreia:</strong> 1999</li>
        <li><strong>Estúdio:</strong> Toei Animation</li>
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
      <p>Naruto foi criado por Masashi Kishimoto e começou sua publicação como mangá em 1999 na Weekly Shōnen Jump. Antes disso, Kishimoto havia desenvolvido um one‑shot em 1995 chamado Karakuri, e em 1997 um outro protótipo com um garoto que se transformava em raposa, que serviu como base para Naruto. Ele decidiu ambientar a história em um mundo de ninjas, incorporando mitologia japonesa, bestas com caudas e elementos de superação pessoal, rejeição e amizade. A narrativa segue o jovem ninja Naruto Uzumaki, que busca se tornar Hokage e obter reconhecimento, enquanto enfrenta inimigos, forma laços e cresce como pessoa. A obra evoluiu seu estilo, personagens e temas conforme avançava, alcançando enorme popularidade no Japão e no mundo, gerando anime, filmes, séries de continuação e produtos derivados.</p>
      <h2>Curiosidades</h2>
      <ul>
        <li>O conceito inicial de Naruto envolvia um garoto cozinheiro ninja.</li>
        <li>A franquia continua ativa com Boruto: Naruto Next Generations.</li>
        <li>O autor incorporou elementos de sua própria vida.</li>
        <li>Naruto popularizou conceitos de folklore ninja como chakra, jutsus e bestas com caudas.</li>
      </ul>
      <h2>Informações</h2>
      <ul>
        <li><strong>Autor:</strong> Masashi Kishimoto</li>
        <li><strong>Gênero:</strong> Ação, Aventura, Ninja</li>
        <li><strong>Estreia:</strong> 2002</li>
        <li><strong>Estúdio:</strong> Studio Pierrot</li>
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
      <p>Kimetsu no Yaiba, também chamado Demon Slayer, foi criado por Koyoharu Gotouge e começou a ser serializado em 15 de fevereiro de 2016 na revista Weekly Shōnen Jump. O autor havia trabalhado em one‑shots como Kagarigari em 2013, que apresentavam caçadores de criaturas sobrenaturais, e refinou a ideia até apresentar Tanjiro Kamado como protagonista e Nezuko como irmã‑demônio. A série combina ação, horror sobrenatural, folclore japonês e drama familiar, criando uma narrativa emocionalmente intensa. A trajetória de Gotouge mostra dedicação ao detalhe visual e à ambientação, o que resultou numa adaptação em anime pelo estúdio Ufotable com grande aclamação. Em pouco tempo, a franquia tornou‑se fenômeno global, ganhando filmes de enorme sucesso e ultrapassando centenas de milhões de cópias vendidas. A história termina em 2020 no mangá, mas segue ativa em outras mídias e continua a influenciar o gênero shōnen moderno.</p>
      <h2>Curiosidades</h2>
      <ul>
        <li>O primeiro filme da franquia bateu recordes de bilheteria no Japão.</li>
        <li>Gotouge adaptou o título original para evitar o uso excessivo da palavra “matar”.</li>
        <li>A produção priorizou animação de alta qualidade e popularização massiva.</li>
      </ul>
      <h2>Informações</h2>
      <ul>
        <li><strong>Autor:</strong> Koyoharu Gotouge</li>
        <li><strong>Gênero:</strong> Ação, Fantasia, Sobrenatural</li>
        <li><strong>Estreia:</strong> 2019</li>
        <li><strong>Estúdio:</strong> Ufotable</li>
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
      <p>Fullmetal Alchemist foi criado por Hiromu Arakawa e publicado entre 2001 e 2010, reunindo 27 volumes de mangá. Arakawa, que cresceu em uma fazenda em Hokkaido, pesquisou alquimia, Revolução Industrial europeia, temas de guerra, pobreza e moralidade para construir o mundo de FMA. A história segue os irmãos Edward e Alphonse Elric após um experimento alquímico que deu errado, enquanto buscam a Pedra Filosofal para recuperar seus corpos perdidos. Arakawa integrou conflitos humanos, dilemas éticos e estrutura de poder num enredo que vai além da típica aventura shōnen, explorando sacrifício, irmandade e redenção. O sucesso resultou em duas adaptações principais para anime, várias produções derivadas e presença duradoura no cânone dos animes. Fullmetal Alchemist permanece como uma obra de referência tanto em narrativa quanto em construção de mundo.</p>
      <h2>Curiosidades</h2>
      <ul>
        <li>Leitura de livros sobre alquimia e entrevistas com refugiados.</li>
        <li>Duas versões de anime: 2003 e Brotherhood 2009.</li>
        <li>O título é um jogo de palavras com “Hagane no Renkinjutsushi”.</li>
      </ul>
      <h2>Informações</h2>
      <ul>
        <li><strong>Autora:</strong> Hiromu Arakawa</li>
        <li><strong>Gênero:</strong> Ação, Fantasia, Drama</li>
        <li><strong>Estreia:</strong> 2003</li>
        <li><strong>Estúdio:</strong> Bones</li>
      </ul>
    </div>
  `;
}

// ======= SPA E EVENTOS =======

function attachMenuListeners() {
  document.getElementById('link-home').addEventListener('click', e => { e.preventDefault(); loadHome(); });
  document.getElementById('link-sobre').addEventListener('click', e => { e.preventDefault(); loadSobre(); });
  document.getElementById('link-contato').addEventListener('click', e => { e.preventDefault(); loadContato(); });
  document.getElementById('link-onepiece').addEventListener('click', e => { e.preventDefault(); loadOnePiece(); });
  document.getElementById('link-naruto').addEventListener('click', e => { e.preventDefault(); loadNaruto(); });
  document.getElementById('link-kimetsu').addEventListener('click', e => { e.preventDefault(); loadKimetsu(); });
  document.getElementById('link-fullmetal').addEventListener('click', e => { e.preventDefault(); loadFullmetal(); });
}

function attachCardListeners() {
  document.getElementById('link-onepiece-card').addEventListener('click', e => { e.preventDefault(); loadOnePiece(); });
  document.getElementById('link-naruto-card').addEventListener('click', e => { e.preventDefault(); loadNaruto(); });
  document.getElementById('link-kimetsu-card').addEventListener('click', e => { e.preventDefault(); loadKimetsu(); });
  document.getElementById('link-fullmetal-card').addEventListener('click', e => { e.preventDefault(); loadFullmetal(); });
}

// ======= FUNÇÕES DE LOAD =======
function loadHome() {
  root.innerHTML = homeTemplate();
  attachCardListeners();
  attachMenuListeners();
  localStorage.setItem('lastPage', 'home');
}

function loadSobre() {
  root.innerHTML = sobreTemplate();
  attachMenuListeners();
  localStorage.setItem('lastPage', 'sobre');
}

function loadContato() {
  root.innerHTML = contatoTemplate();
  attachFormListener();
  attachMenuListeners();
  localStorage.setItem('lastPage', 'contato');
}

function loadOnePiece() {
  root.innerHTML = onePieceTemplate();
  attachMenuListeners();
  localStorage.setItem('lastPage', 'onepiece');
}

function loadNaruto() {
  root.innerHTML = narutoTemplate();
  attachMenuListeners();
  localStorage.setItem('lastPage', 'naruto');
}

function loadKimetsu() {
  root.innerHTML = kimetsuTemplate();
  attachMenuListeners();
  localStorage.setItem('lastPage', 'kimetsu');
}

function loadFullmetal() {
  root.innerHTML = fullmetalTemplate();
  attachMenuListeners();
  localStorage.setItem('lastPage', 'fullmetal');
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
const lastPage = localStorage.getItem('lastPage');
switch(lastPage) {
  case 'sobre': loadSobre(); break;
  case 'contato': loadContato(); break;
  case 'onepiece': loadOnePiece(); break;
  case 'naruto': loadNaruto(); break;
  case 'kimetsu': loadKimetsu(); break;
  case 'fullmetal': loadFullmetal(); break;
  default: loadHome();
}
