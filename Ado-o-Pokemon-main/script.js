const pokemons = {
  bulbasaur: {
    nome: "Bulbasaur",
    tipo: "Planta / Venenoso",
    idade: "2 anos",
    habilidade: "Overgrow",
    personalidade: "Calmo, leal e adora tomar sol.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  charmander: {
    nome: "Charmander",
    tipo: "Fogo",
    idade: "3 anos",
    habilidade: "Blaze",
    personalidade: "Curioso, energético e adora desafios.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  squirtle: {
    nome: "Squirtle",
    tipo: "Água",
    idade: "1 ano",
    habilidade: "Torrent",
    personalidade: "Brincalhão, protetor e ama nadar.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
};

function mostrarDetalhes(nome) {
  const p = pokemons[nome];
  const detalhes = document.getElementById("detalhes");
  detalhes.innerHTML = `
    <h2>${p.nome}</h2>
    <img src="${p.imagem}" alt="${p.nome}" />
    <p><strong>Tipo:</strong> ${p.tipo}</p>
    <p><strong>Idade:</strong> ${p.idade}</p>
    <p><strong>Habilidade:</strong> ${p.habilidade}</p>
    <p><strong>Personalidade:</strong> ${p.personalidade}</p>
    <button onclick="alert('Você escolheu adotar ${p.nome}!')">Confirmar Adoção</button>
  `;
  detalhes.classList.remove("hidden");
}
