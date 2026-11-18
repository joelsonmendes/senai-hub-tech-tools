# SENAI HUB TECH TOOLS V9 — React + Firebase

## Execução
1. `npm install`
2. Copie `.env.example` para `.env.local` (ou configure as seis variáveis VITE_ na Vercel).
3. `npm run dev` para desenvolvimento ou `npm run build` para produção.
4. Na Vercel, importe o repositório, framework **Vite**, build `npm run build`, diretório `dist`.
5. No Firebase Authentication > Settings > Authorized domains, inclua o domínio exato da implantação Vercel. Não é necessário alterar o domínio do MOBILOG.

## Banco
- Coleção `ferramentas`: documentos com `nome`, `categoria`, `descricao`, `url`, `publicado` (boolean), `destaque` (boolean).
- Coleção `administradores`: documento cujo ID é o UID da conta; `ativo: true` e `papel: "admin"`.
- Publique regras seguras equivalentes ao arquivo `firestore.rules`. O arquivo é referência: **não** é publicado automaticamente.
- Consultas públicas usam `where('publicado','==',true)`; administrador pode ler todos os documentos.

## Limitações
- O QR Code é salvo somente no navegador local, não sincronizado pelo Firebase.
- Cursos, trilhas, laboratórios e projetos são páginas demonstrativas sem cadastro remoto.
- Os links de ferramentas são externos; a autenticação do portal não protege esses aplicativos.
- Não compartilhe senhas nem credenciais de conta de serviço. A API key Web do Firebase não é uma credencial de administrador.
- Esta versão ainda precisa de testes com login real e regras publicadas antes de uso em produção.
