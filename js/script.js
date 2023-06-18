// Array com o texto base
const baseText = [
"Essa música, eu tava cantando ali na cidade grande, Aí um soldado gostou tanto, Que me levou pra cantar na cadeia, Florentina é o nome dela",
"Florentina, Florentina, Florentina de Jesus, Não sei se tu me amas, Pra que tu me seduz?",
"Eu tava cantando e o soldado disse Rapaz, tu canta muito, bora cantar na cadeia? Chegou lá, me empurrou Aí tinha um loirão muito doido lá dentro.", 
"O loiro olhou pra mim e falou Qual é? Qual foi? Por que que é que tu tá nessa? Eu disse: Não, só porque eu tava cantando.",
"Florentina, Florentina, Florentina de Jesus, Não sei se tu me amas, Pra que tu me seduz?",
"Ele falou: Pode crer, meu, cala tua boca, Senão eu boto esses teus dentes pra dentro, Fiquei bem caladinho, quando foi no outro dia.",
"O dregolado falou: Quem é o cantor?, Eu disse: Pronto, Ele disse: Rapaz, você tá solto, Mas nunca mais cante esse negócio de",
"Florentina, Florentina, Florentina de Jesus, Não sei se tu me amas, Pra que tu me seduz?",
"Graças a Deus, Desde esse dia pra cá, Nunca mais eu cantei esse negócio de", "Florentina, Florentina, Florentina de Jesus, Não sei se tu me amas, Pra que tu me seduz?",
"Chega de tanta, Florentina, Florentina, Florentina de Jesus, Não sei se tu me amas, Pra que tu me seduz?",
"Isso é uma coisa que todo mundo abusa, Esse negócio de, Florentina, Florentina, Florentina de Jesus, Não sei se tu me amas, Pra que tu me seduz?",
"Eu num canto mais esse negócio de, Florentina, Florentina, Florentina de Jesus, Não sei se tu me amas, Pra que tu me seduz?",
"Agora eu já parei com esse negócio de, Florentina, Florentina, FloregeraTextntina de Jesus, Não sei se tu me amas, Pra que tu me seduz?",
"Eu quero é cegar do sovaco. Se eu cantar esse negócio de", "Florentina, Florentina, Florentina de Jesus, Não sei se tu me amas, Pra que tu me seduz?",
"Agora, eu vou cantar pra vocês. Uma música de Roberto Carlos que chama",
"Florentina, Florentina, Florentina de Jesus, Não sei se tu me amas", "Pra que tu me seduz? Florentina, Florentina de Jesus, Não sei se tu me amas, Pra que tu me seduz?"
];

// Gera o texto com base no número de parágrafos selecionado
function geraText() {
  const paragraphs = document.getElementById("paragraphs").value;
  const text = Array.from({ length: paragraphs }, () => geraParagraph()).join("\n\n");
  document.getElementById("gera-Text").value = text;
}

// Gera um parágrafo aleatório com base nas frases do texto base
function geraParagraph() {
  const sentences = Math.floor(Math.random() * 5) + 3;
  const paragraph = Array.from({ length: sentences }, () => getRandomElement(baseText)).join(" ");
  return paragraph;
}

// Retorna um elemento aleatório de um array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Copia o texto gerado para a área de transferência
function copyText() {
  const textarea = document.getElementById("gera-Text");
  textarea.select();
  document.execCommand("copy");
}

// Restaura o título da aba do navegador quando a janela está em foco
function restoreTitle() {
  document.title = docTitle;
}

// Título da aba do navegador
const docTitle = document.title;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    restoreTitle();
  } else {
    document.title = "Volta condenado, infeliz. Cão do Inferno. Nojento!";
  }
});
