const temaBotao = document.querySelector(".botao-tema");
const rotuloBotao = document.querySelector(".rotulo-tema");
const root = document.documentElement;

temaBotao.addEventListener("click", ()=> {
    const temaAtual = root.getAttribute("data-theme");

    const novoTema = temaAtual === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", novoTema);
    
    rotuloBotao.textContent = novoTema === "dark" ? "Modo claro" : "Modo escuro";
}); 