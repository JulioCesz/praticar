const items = [
  {
    id: 0,
    nome: "gastly",
    img: "img.png",
    quantidade: 0,
  },
  {
    id: 1,
    nome: "haunter",
    img: "img.png",
    quantidade: 0,
  },
  {
    id: 2,
    nome: "gengar",
    img: "img.png",
    quantidade: 0,
  },
];

inicializarloja = () => {
  var containerProdutos = document.getElementById(`produtos`);
  items.map((val) => {
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
