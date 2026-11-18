# SENAI HUB TECH TOOLS V9.1 — correção de tela preta

## Causa provável
A V9 exigia variáveis VITE_FIREBASE_* antes de iniciar o Firebase. Quando ausentes, o React podia falhar na inicialização e exibir uma tela escura sem interface. Além disso, abrir `index.html` diretamente como arquivo local **não executa** um projeto React/Vite.

## Correções
- Firebase Web inicializado com a configuração pública do projeto `senai-hub-tech-tools` já fornecida (variáveis de ambiente opcionais para substituição).
- Tela de erro visível para falhas de renderização React, em vez de tela preta silenciosa.
- Mantidos o catálogo Firestore, Authentication, o painel de administração, o menu e o estilo preto e laranja.
- Sem acesso ou alterações ao banco MOBILOG.

## Executar
1. Instale Node.js 20+.
2. Na pasta do projeto, execute `npm install` e `npm run dev`.
3. Abra o endereço exibido pelo Vite no navegador.

## Publicar na Vercel
Importe o repositório ou envie o projeto; framework Vite; build `npm run build`; diretório de saída `dist`. O arquivo `index.html` na raiz é o ponto de entrada do Vite, não deve ser aberto diretamente sem compilação.

## Firebase
A configuração Web do Firebase é pública, mas regras de segurança do Firestore precisam estar publicadas. Autorize o domínio de produção no Firebase Authentication. O documento `administradores/<UID>` deve conter `ativo: true` e `papel: "admin"`. O catálogo lê `ferramentas` com filtro `publicado == true` para usuários públicos.

## Estado de validação
A instalação npm e o build não puderam ser concluídos neste ambiente (tempo limite na instalação). É necessário executar `npm run build` no seu ambiente ou na Vercel e validar o login e leitura do Firestore. Não afirmar que a correção foi testada em produção.
