# Projeto React de Download de Jogos
Bem-vindo ao projeto de download de jogos desenvolvido em React! Este projeto permite que os usuários baixem jogos e desfrutem de uma experiência de navegação fácil e intuitiva. Se você é o proprietário do projeto e deseja adicionar mais jogos, este readme fornecerá as informações necessárias.

## Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina antes de começar. Você pode baixá-lo em nodejs.org.

## Instalação
1. Clone este repositório em sua máquina local:

~~~bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
~~~
2. Navegue até o diretório do projeto:
~~~bash
cd nome-do-projeto
~~~
3. Instale as dependências do projeto:
~~~bash
npm install
~~~

## Adicionando Novos Jogos
Se você deseja adicionar novos jogos ao projeto, siga estas etapas:

1. Abra o arquivo src/jogos.json.

2. Adicione um novo objeto ao array jogos, seguindo o formato existente. Certifique-se de incluir as propriedades necessárias, como "id", "nome", "descricao", "linkDownload" e "imagem". Exemplo:
~~~json
{
    "id": 15,
    "Nome": "Resident Evil Village",
    "Tipo": "Action",
    "Endereco da Imagem": "./img/trending8.png",
    "Classificacao": 4.7,
    "Eh destaque": "sim",
    "Eh novo": "nao",
    "Descricao": "",
    "Link para Download": "",
    "Screenshot 1": "",
    "Screenshot 2": "",
    "Screenshot 3": ""
}
~~~
3. Coloque a imagem do jogo em public/img/. Certifique-se de que o nome do arquivo da imagem corresponda ao especificado no campo "imagem" do objeto que você adicionou ao jogos.json.


## Colocando em Produção
Para colocar o projeto em produção, você pode seguir os seguintes passos:

1. Build do Projeto:

Execute o seguinte comando para criar uma versão de produção do seu aplicativo React:

~~~bash
npm run build
~~~
Isso criará uma pasta build no seu diretório do projeto.

2. Servir a Aplicação:

Você pode usar diversas ferramentas para servir a aplicação, como o serve. Instale-o globalmente com:

~~~bash
npm install -g serve
~~~
Em seguida, execute o seguinte comando na pasta build:
~~~bash
serve -s
~~~
Isso iniciará um servidor na porta padrão 5000.
3. Configurações Adicionais:

Certifique-se de configurar corretamente o servidor para tratar as rotas da sua aplicação, redirecionando qualquer solicitação para a página principal. Isso é necessário para garantir que as rotas do React funcionem corretamente.

4. Implementação:

Implemente sua aplicação em um servidor web ou em uma plataforma de hospedagem, como Netlify, Vercel, ou GitHub Pages, seguindo as instruções específicas da plataforma escolhida.

Caso necessite de auxílio, o desenvolvedor que fez esse site pode te auxiliar.

## Construído Com
React - Biblioteca JavaScript para criar interfaces de usuário.
JSON Server - Simula uma API REST a partir do arquivo jogos.json.
## Contribuindo
Se você encontrar problemas ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Divirta-se baixando e adicionando novos jogos ao seu projeto React de download de jogos!