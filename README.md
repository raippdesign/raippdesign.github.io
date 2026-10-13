# raipp · Home

Site estático, sem build. Suba o conteúdo desta pasta na raiz do repositório.

## Arquivos
- `index.html` página principal
- `support.js` runtime da página (obrigatório)
- `cursor.js`, `field.js` cursor e malha animada
- `assets/` logo e fotos

## Vídeo
Coloque `hub-VP.mov` dentro de `assets/` (ou `assets/hub-VP.mp4`, que carrega mais rápido). O arquivo tem mais de 25 MB: suba pelo Git (não pelo upload do navegador) ou use Git LFS se passar de 100 MB.

## GitHub Pages
Settings → Pages → Deploy from a branch → `main` / `(root)`.
Domínio próprio: adicione um arquivo `CNAME` com `www.raipp.com.br`.

Para testar localmente use um servidor (`npx serve .` ou `python3 -m http.server`), não abra o arquivo direto pelo `file://`.
