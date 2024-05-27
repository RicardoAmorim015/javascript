document.addEventListener('DOMContentLoaded',()=> {
const notaInput  = document.getElementById('nota-input');
const calculateButton  = document.getElementById('calculate-button');
const addButton = document.getElementById('add-button')
const notasDiv  = document.getElementById('notas');
const mediaDiv  = document.getElementById('media');

let notas = [];


const adicionarNota = () => {
  const nota = parseFloat(notaInput.value);
    if (isNotaValida(nota)){
      notas.push(nota)
      notaInput.value = '';
      exibirNotas();
    }else{
      alert('Valor invalido! Insira uma nota de 0 a 10')
    }
}



const isNotaValida = (nota) => {
  return !isNaN(nota) && nota >= 0 && nota <= 10; 
}



const exibirNotas = () => {
  notasDiv.innerHTML = `<span>Notas:${notas.join(', ')}</span>`;

} 

const exibirMedia = () =>{
  media = notas.length;
  alert(`${media}`);
}

addButton.addEventListener('click', adicionarNota);
calculateButton.addEventListener('click', exibirMedia);










}
)