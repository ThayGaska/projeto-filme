let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de comédia?");
  campoAventura = createCheckbox("Gosta de romance?");
}

function draw() {
  background("red");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(60);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Enola Holmes";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "A vida é bela";          
        } else{
         return "Como estrelas na terra";
        }
      } else {
        if (gostaDeFantasia) {
          return "Matilda";
        } else {
          return "A caminho da lua";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Hilda e o rei da montanha";
    } else {
      return "Extraordinário";
    }
  }
}
