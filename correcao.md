#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Incorreto
Nota: 0,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Correto
Nota: 1,00

#Criterio5 — Props entre componentes
Incorreto
Nota: 0,00

#Criterio6 — Navegação + detalhes com axios
Parcialmente correto
Nota: 0,50

#Criterio7 — Comentários explicativos nos pontos principais
Incorreto
Nota: 0,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Parcialmente correto
Nota: 0,50

#Criterio10 — Deploy na Vercel
Correto
Nota: 1,00

Subtotal critérios: 6,00

#Extra1 — Loading e erro
Não conquistado
Nota extra: +0,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Não conquistado
Nota extra: +0,00

#Extra3 — Busca/filtro por texto
Não conquistado
Nota extra: +0,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 0,00
Extras conquistados: nenhum

Subtotal com extras (teto 10,00): 6,00
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum

Zeramento por IA: não

Total final: 6,00

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** tentativa MockAPI em `app/details/id/page.js` (`https://6abc410ab2118ed7abb9a6d6.mockapi.io/:endpoint` — URL inválida).  
**Caminho base do app Next:** raiz (`next` 16.4.0). **Observação:** `axios` é importado no detalhe, mas **não** está em `package.json`.

**Critério 1 — Projeto Next.js:** `package.json` com `next`; App Router (`app/layout.tsx`, `app/page.js`).

**Critério 2 — Lista com axios:** `app/page.js` só monta 6 formulários locais (nome/email/telefone etc.); não há listagem de API com axios na home.

**Critério 3 — useState e useEffect:** `useState` funcional nos componentes; `useEffect` + axios em `app/details/id/page.js`.

**Critério 4 — 6 componentes:** `componente1.js` … `componente6.js` em `app/componentes/`.

**Critério 5 — Props:** componentes isolados, sem receber props do pai.

**Critério 6 — Detalhes + axios + navegação:** existe `app/details/id/page.js` (pasta estática `id`, não `[id]`) com `axios.get`, sem `Link`/`useRouter` a partir da lista. Parcial.

**Critério 7 — Comentários:** ausência relevante de comentários explicativos.

**Critério 8 — Commits:** 10 commits na `main`.

**Critério 9 — README / deploy link:** `README.md` vazio (0 bytes) — sem instruções nem URL. Há evidência de integração Git↔Vercel (deployments no GitHub: ambiente `Production – checkpoint-5-webdev-1-espz`) → **Parcial** (reavaliação).

**Critério 10 — Deploy Vercel:** reavaliado com `gitDeploymentsKnown=true`. Há deployments Vercel conectados ao repositório (`FernandoEijiT/checkpoint-5-webdev-1ESPZ`); previews apontam para `*.vercel.app` (ex.: `checkpoint-5-webdev-1-espz-epj0er013-fernando-eiji.vercel.app`, com Deployment Protection/SSO). **Correto** pela conexão git-deploy comprovada.

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Não conquistado (+0,00). Sem UI de loading/erro.
**Extra 2 — Hooks avançados:** Não conquistado (+0,00). Sem `useMemo`/`useCallback`/`useRef`.
**Extra 3 — Busca/filtro:** Não conquistado (+0,00). Inputs locais não filtram lista de API.
**Extra 4 — localStorage:** Não conquistado (+0,00). Sem cache.
**Resumo extras:** nenhum (+0,00); total com extras 6,00.

**Penalizações:** nenhuma (`participantes.md` presente com Alexandre Jardim, Fernando Eiji e Enzo Dias).
**Sinalizadores anti-cola / IA:** nenhum.

---

## CONTEXTO GIT
- **remote:** `https://github.com/FernandoEijiT/checkpoint-5-webdev-1ESPZ`
- **branch avaliada:** `main`
- **commits (10):** de `0526d2d` Feat: git inicial até `b63fcae` fix: corrigindo erros de sintaxe
- **autores:** 10 Fernando `<fer.eiji@gmail.com>`
- **contagem usada no Critério 8:** 10
- **Vercel (reavaliação):** 8 deployments GitHub/Vercel (git-connected); status recente `failure` nos builds, mas ambiente Vercel existente
