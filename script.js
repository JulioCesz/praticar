const items = [
  {
    id: 0,
    nome: "gastly",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    quantidade: 0,
  },
  {
    id: 1,
    nome: "haunter",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    quantidade: 0,
  },
  {
    id: 2,
    nome: "gengar",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    quantidade: 0,
  },
];

inicializarloja = () => {
  let containerProdutos = document.getElementById("produtos");
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

inicializarCarrinho = () => {
  let containerProdutos = document.getElementById("carrinho");
  items.map((val) => {
    if(val.quantidade > 0)

    containerCarrinho.innerHTML +=
      `
      <p>`+val.nome` | quantidade: `.quantidade`</p>
      <hr>
      
      `;
  });
};


      adicionarCarrinho = () => {
        console.log(items);
      }

        let links = document.getElementsByTagName(`a`);

        for(let i = 0; i < links.length; i++){
          links[i].addEventListener("onclick",function(){
            let key = this.getAttribute('key');
            items[key].quantidade++;
            adicionarCarrinho();
            
            
        
          })
        }
         