const hora = new Date().getHours();
let saudacao;
if(hora <12){
    saudacao = "Bom dia";
} else if(hora <18){
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite";
}
document.querySelector("#saudacao").textContent = saudacao;

const habilidades =["Gosto de ler livros de diferentes universos", "Gosto de assistir animes", "Atividades ao ar livre: trilhas, caminhadas", "Gosto de viajar para conhecer novos lugares e conhecer diferentes culturas", "Busco sempre aprender novas habilidades e línguagens"];
const lista=document.querySelector("#interesses");
for (const habilidade of habilidades){
    lista.innerHTML += `<li>${habilidade}</li>`;
}

const projetos = [
    { titulo: "Monitoria Educação do Campo", categoria: "Educação", descricao: "Construção de material didático" },
    { titulo: "Projeto de Divulgação Científica", categoria: "Ciência", descricao: "Organização de eventos e palestras para popularizar a ciência" },
    { titulo: "Projeto de Extensão Universitária", categoria: "Extensão", descricao: "Atividades de extensão voltadas para a comunidade local" }
];

const cards= document.querySelector("#cards");
function mostrarProjetos(filtro) {
    cards.innerHTML ="";
    for(const projeto of projetos) {
        if (filtro==="Todos" || projeto.categoria === filtro) {
            cards.innerHTML += `
                <article class="card">
                    <small>${projeto.categoria}</small>
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </article>`;
        }
    }
}

for (const botao of document.querySelectorAll(".filtro")) {
    botao.addEventListener("click", function() {
        mostrarProjetos(botao.dataset.filtro);    
    });
}

const tema = document.querySelector("#tema");
tema.addEventListener("click", function() {
    document.body.classList.toggle("claro");
    if (document.body.classList.contains("claro")) {
        localStorage.setItem("tema", "claro");
    } else {
        localStorage.setItem("tema", "escuro");
    }
});

if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro");
}