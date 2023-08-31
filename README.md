<body>
    <h1>Projeto Next.js para Geração de Consultas SQL a partir de Perguntas em Linguagem Natural</h1>
    <p>Este é um projeto que utiliza a linguagem natural para gerar consultas SQL e recuperar informações de um banco de dados com base em um schema predefinido. Com essa abordagem, você pode fazer perguntas em linguagem humana e obter consultas SQL correspondentes, o que facilita a interação com o banco de dados de maneira mais intuitiva.</p>
    <h2>Funcionalidades</h2>
    <ul>
        <li>Geração de consultas SQL a partir de perguntas em linguagem natural.</li>
        <li>Suporte a diferentes tipos de consultas, como listagem, contagem e filtragem.</li>
        <li>Interface amigável usando o framework Next.js.</li>
        <li>Integração com banco de dados (você precisará fornecer sua própria API key).</li>
    </ul>
    <h2>Pré-requisitos</h2>
    <p>Antes de começar, você precisará das seguintes ferramentas instaladas em sua máquina:</p>
    <ul>
        <li>Node.js</li>
        <li>Yarn (opcionalmente, você pode usar npm)</li>
    </ul>
    <h2>Instalação</h2>
    <ol>
        <li>Clone este repositório para o seu ambiente local:</li>
    </ol>
    <code>git clone https://https://github.com/BernardoGelain/SQL_com_IA.git</code>
    <ol start="2">
        <li>Navegue até o diretório do projeto:</li>
    </ol>
    <code>cd projeto-next-sql</code>
    <ol start="3">
        <li>Instale as dependências usando Yarn:</li>
    </ol>
    <code>yarn install</code>
    <h2>Configuração</h2>
    <ol>
        <li>Na raiz do projeto, crie um arquivo chamado <code>.env.local</code>.</li>
        <li>Dentro do arquivo <code>.env.local</code>, adicione sua API key:</li>
    </ol>
    <code>API_KEY=SUA_API_KEY_AQUI</code>
    <p><strong>Certifique-se de nunca compartilhar sua API key publicamente!</strong></p>
    <h2>Uso</h2>
    <ol>
        <li>Inicie o servidor de desenvolvimento:</li>
    </ol>
    <code>yarn dev</code>
    <ol start="2">
        <li>Abra o navegador e acesse <a href="http://localhost:3000">http://localhost:3000</a> para acessar a interface do projeto.</li>
        <li>Digite uma pergunta em linguagem natural com base no schema predefinido. Por exemplo: "Liste-me as pessoas com pelo menos 5 tweets."</li>
        <li>A interface irá gerar automaticamente a consulta SQL correspondente e exibir os resultados recuperados do banco de dados (simulado para fins deste projeto).</li>
    </ol>
    <h2>Schema e Customização</h2>
    <p>O projeto utiliza um schema predefinido para gerar consultas SQL. Caso você queira adicionar mais tabelas, campos ou tipos de consultas, você precisará atualizar o schema e a lógica correspondente no código.</p>
    <h2>Contribuição</h2>
    <p>Contribuições são bem-vindas! Se você deseja adicionar novos recursos, resolver problemas ou melhorar a interface, sinta-se à vontade para fazer um fork do repositório e criar um pull request.</p>
    <h2>Licença</h2>
    <p>Este projeto está licenciado sob a <a href="LICENSE">MIT License</a>.</p>
    <hr>
    <p>Esperamos que este guia tenha fornecido todas as informações necessárias para configurar, executar e interagir com o projeto Next.js de geração de consultas SQL a partir de perguntas em linguagem natural. Se você tiver alguma dúvida ou enfrentar problemas, não hesite em entrar em contato conosco.</p>
    <p>Divirta-se explorando e interagindo com seu banco de dados usando perguntas em linguagem natural!</p>
