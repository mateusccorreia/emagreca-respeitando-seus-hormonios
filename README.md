# Emagreça respeitando seus hormônios — Landing page

Landing page curta e altamente direcional para vender o e-book por R$ 9,90, construída com React + Vite + TypeScript + TailwindCSS.

## Stack
- React 19 + Vite + TypeScript
- TailwindCSS (animações via classes + IntersectionObserver)
- Sem bibliotecas de UI externas

## Rodando o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Ambiente de desenvolvimento com HMR:
   ```bash
   npm run dev
   ```
3. Build para produção:
   ```bash
   npm run build
   ```
4. Pré-visualização do build:
   ```bash
   npm run preview
   ```
5. Lint opcional:
   ```bash
   npm run lint
   ```

## Estrutura
- `src/App.tsx`: layout principal, seções e copy orientada à conversão.
- `src/components/CTAButton.tsx`: botão primário reutilizável com microinterações.
- `src/components/Section.tsx`: wrapper com animação de entrada baseada em IntersectionObserver.
- `src/hooks/useInView.ts`: hook para detecção de visibilidade.
- `src/index.css`: Tailwind + estilos globais (tipografia, gradiente base).

## Notas de design
- Paleta oficial aplicada conforme briefing (gradientes stone → emerald).
- CTA visível no hero, repetido apenas no final e sticky no mobile.
- Página curta (6–8 blocos), conteúdo escaneável com cards e bullets.
- Microinterações suaves: transições de entrada, hover em cards e botões.
