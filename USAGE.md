# Como Usar o Projeto 🚀

Este tutorial explica como executar o **Portal de Notícias** localmente e como rodar os testes com **Vitest UI**.

## Pré-requisitos

- Node.js (v18+ recomendado)
- npm
- Git (para clonar o repositório)

## Passo 1: Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/portal-noticias-react.git
cd portal-noticias-react
```

## Passo 2: Instalar dependências

```bash
npm install
```

## Passo 3: Executar o projeto

```bash
npm run dev
```

O terminal mostrará um endereço, geralmente `http://localhost:5173`, onde você pode abrir o portal no navegador.

## Passo 4: Executar os testes (Vitest)

```bash
npm run test
```

Para abrir a interface do **Vitest UI** e visualizar os testes de forma interativa:

```bash
npm run test:ui
```

Depois abra o endereço indicado no terminal para ver a interface dos testes no navegador.

---

💡 **Dica:** Como o projeto usa **LocalStorage**, os dados de curtidas e comentários ficam salvos no navegador. Para resetar, limpe os dados do site no seu browser.