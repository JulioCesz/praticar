const items = [
  {
    id: 0,
    nome: "gastly",
    img: "gengar.jpg",
    quantidade: 0,
  },
  {
    id: 1,
    nome: "haunter",
    img: "gengar.jpg",
    quantidade: 0,
  },
  {
    id: 2,
    nome: "gengar",
    img: "gengar.jpg",
    quantidade: 0,
  },
];

inicializarloja = () => {
  let containerProdutos = document.getElementById("produtos");
  items.map((val) => {
    containerProdutos.innerHTML += `<div class="produtos-single">
          <img src="${val.img}" />
          <p>${val.nome}</p>
        <a href="${val.id}">
          Adicionar ao carrinho
        <a/>
      <div/>
            `;
  });
};

window.onload = inicializarloja;
