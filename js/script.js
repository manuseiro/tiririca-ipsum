/*TEXTO BASE*/
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
/*GERAR TEXTO*/
function geraText() {
  const paragraphs = document.getElementById("paragraphs").value;
  let text = "";
  for (let i = 0; i < paragraphs; i++) {
    text += geraParagraph() + "\n\n";
  }
  document.getElementById("gera-Text").value = text;
}
/*GERAR PARAGRAPH*/
function geraParagraph() {
  const sentences = Math.floor(Math.random() * 5) + 3;
  let paragraph = "";
  for (let i = 0; i < sentences; i++) {
    paragraph += baseText[Math.floor(Math.random() * baseText.length)] + " ";
  }
  return paragraph;
}
/*BOTAO DE COPIA TEXTO*/
function copyText() {
  const textarea = document.getElementById("gera-Text");
  const copyButton = document.getElementById("copy-button");
  textarea.select();
  navigator.clipboard.writeText(textarea.value);

}
/*TITULO DA ABA DO NAVEGADOR*/
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Volta condenado, infeliz. Cão do Inferno. Nojento!";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});