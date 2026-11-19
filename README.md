# SENAI HUB TECH TOOLS V10 — React + Firebase

## O que mudou
- Preservada a identidade cinematográfica preta e laranja.
- Cadastro administrativo agora aceita `iconeUrl` (URL HTTPS opcional).
- Catálogo tenta exibir `iconeUrl`, depois `/favicon.ico` da ferramenta e, se falhar, ícone vetorial da categoria. **A detecção de manifestos PWA não está implementada**; isso exige um serviço servidor com validação de URLs.
- Manifesto e ícones PWA adicionados. Para instalação, publicar em HTTPS.
- QR Code continua armazenado apenas no navegador do administrador; não é sincronizado com o Firestore.

## Execução
`npm install` e `npm run dev`. Para Vercel: Framework Vite, build `npm run build`, output `dist`.

## Firebase
Projeto `senai-hub-tech-tools`. Usa configuração pública do Firebase já existente. O acesso administrativo é conferido na coleção `administradores`, documento com UID e campos `ativo:true`, `papel:'admin'`. Não substitua as regras de segurança do Firestore por regras abertas.

## Limites e segurança
- Ícone externo é carregado diretamente pelo navegador. Sites que não publicam favicon.ico exibem o ícone da categoria.
- Upload de imagem ao Firebase Storage, inspeção automática de manifestos e QR Code compartilhado exigem backend/Storage e regras próprias; não são recursos desta versão.
- A autenticação e as regras devem ser testadas no projeto real antes de publicar como versão definitiva.
- Não altera o banco MOBILOG.
