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
  var containerProdutos = document.getElementById("produtos");
  items.map((val) => {
    //TODO : refatorar para usar template literals
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    containerProdutos.innerHTML +=
      `
                <div class= "produtos-single">
                <img src="` +
      val.img +
      `" />
                <p>` +
      val.nome +
      `</p>
                <a href="` +
      val.id +
      `">Adicionar ao carrinho<a/>
                <div/>
            `;
  });
};

window.onload = inicializarloja;
