# desafio-loomi

Instalação e Execução:
git clone https://github.com/joaomigueld3/desafio-loomi.git

Instale as dependências:
cd seu-repositorio
npm install

Configure as variáveis de ambiente:
Crie um arquivo '.env' seguindo o '.env.example'

Execute a aplicação:
npm run swagger
npm run dev

Backend da Aplicação
Funcionalidades:

1 - Autenticação
A aplicação possui um fluxo de autenticação, permitindo login com e-mail e senha. O e-mail é validado por meio do envio de um e-mail de confirmação.
Rota de Login, signin e refresh-token: Não requer autenticação.
Outras Rotas: Todas as outras rotas exigem autenticação.

2 - Permissionamento:
Usuário Cliente:
Pode criar uma conta.
Pode editar seus próprios dados.
Pode visualizar produtos.
Pode criar pedidos.

Usuário Admin:
Tem acesso irrestrito.
Pode criar conta.
Pode deletar/editar todos os usuários e clientes.
Pode gerenciar produtos.
Pode gerenciar pedidos.

CRUD de Clientes, Produtos, Pedidos

CRUD de Produtos:
Criar, Ler, Atualizar e Deletar produtos.
Detalhes incluem nome, descrição, preço e quantidade total.
Busca por Filtros Múltiplos:
Filtrar produtos por categorias, preços e disponibilidade.
Controle de Quantidade Disponível: Alterado a partir da confirmação de pedidos.

Gestão de Pedidos:
Atualização de Status de Pedidos; Exemplos de status: 'Em preparação', 'Despachado', 'Entregue'.
