# SENAI HUB TECH TOOLS — React V7

Interface React/Vite inspirada na referência cinematográfica preta e laranja aprovada.

## Executar

```bash
npm install
npm run dev
```

Para publicar na Vercel: importe o repositório, escolha **Vite**, `npm run build` e diretório de saída `dist`.

## Situação funcional

- Catálogo responsivo, busca, filtros e cards interativos.
- MEGA TEST PRO com URL informada pelo usuário.
- Cadastro, edição, exclusão, visibilidade e QR Code em **demonstração local** via `localStorage`.
- Nenhum login administrativo real: **não usar como administração de produção**.
- Nenhum Firebase conectado. A autenticação segura, as regras de Firestore, a sincronização dos cadastros e o PWA instalável serão adicionados em etapa posterior.
- As demais ferramentas ilustradas na referência não foram cadastradas sem links confirmados.

## Firebase futuro

Projeto identificado: `senai-hub-tech-tools`. Não incluir chaves privadas de contas de serviço no frontend. Proteger escritas com Firebase Authentication e regras Firestore vinculadas a administradores autorizados. Não modificar Supabase MOBILOG.

## Identidade visual

Hero com recorte de imagem conceitual criada para a prévia; substituir por fotografia institucional licenciada/autorizada antes de publicação oficial. O logotipo atual é tipográfico e não substitui a marca oficial do SENAI HUB.
