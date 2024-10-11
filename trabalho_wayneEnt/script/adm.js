const inform = document.getElementById('inform');
const armas = Array.from(document.getElementsByClassName('arma'));
const armaFoto = document.getElementsByClassName('armaFoto');
const armaText = document.getElementsByClassName('armaText');
const armaName = document.getElementsByClassName('armaName');

armas.forEach((arma, index) => {
    arma.addEventListener('click', () => {
      
      switch (index) {
        case 0:
          inform.innerHTML = '';
          inform.innerHTML = `<div id="imgArma"><img src="${armaFoto[0].src}" alt="" srcset=""></div><button id='closeBtn'>X</button><div id="nomeArma"><span>${armaName[0].innerText}</span></div><div id="descricaoArma"><p>${armaText[0].innerText}</p></div><div class="qtd"><button class="decrement">-</button><span class="quantidade">0</span><button class="increment">+</button></div>`;
          inform.style.display = 'flex';

          inform.querySelector('#closeBtn').addEventListener('click',()=>{
            inform.style.display = 'none';
          });

          const qtd = inform.querySelector('.qtd')
          const decrementButton = qtd.querySelector('.decrement');
          const incrementButton = qtd.querySelector('.increment');
          const quantidadeSpan = qtd.querySelector('.quantidade');
          let quantidade = 0;  
  
          incrementButton.addEventListener('click', () => {
              quantidade++;
              quantidadeSpan.innerText = quantidade;
          });
  
          decrementButton.addEventListener('click', () => {
              if (quantidade > 0) {
              quantidade--;
              }
              quantidadeSpan.innerText = quantidade;
          });
          
          break;
  
        case 1:
          inform.innerHTML = '';
          inform.innerHTML = `<div id="imgArma"><img src="${armaFoto[1].src}" alt="" srcset=""></div><button id='closeBtn'>X</button><div id="nomeArma"><span>${armaName[1].innerText}</span></div><div id="descricaoArma"><p>${armaText[1].innerText}</p></div><div class="qtd"><button class="decrement">-</button><span class="quantidade">0</span><button class="increment">+</button></div>`;
          inform.style.display = 'flex';

          inform.querySelector('#closeBtn').addEventListener('click',()=>{
            inform.style.display = 'none';
          });
          
          const qtd2 = inform.querySelector('.qtd')
          const decrementButton2 = qtd2.querySelector('.decrement');
          const incrementButton2 = qtd2.querySelector('.increment');
          const quantidadeSpan2 = qtd2.querySelector('.quantidade');
          let quantidade2 = 0;  
  
          incrementButton2.addEventListener('click', () => {
              quantidade2++;
              quantidadeSpan2.innerText = quantidade2;
          });
  
          decrementButton2.addEventListener('click', () => {
              if (quantidade2 > 0) {
              quantidade2--;
              }
              quantidadeSpan2.innerText = quantidade2;
          });

          break;
  
        case 2:
          inform.innerHTML = '';
          inform.innerHTML = `<div id="imgArma"><img src="${armaFoto[2].src}" alt="" srcset=""></div><button id='closeBtn'>X</button><div id="nomeArma"><span>${armaName[2].innerText}</span></div><div id="descricaoArma"><p>${armaText[2].innerText}</p></div><div class="qtd"><button class="decrement">-</button><span class="quantidade">0</span><button class="increment">+</button></div>`;
          inform.style.display = 'flex';

          inform.querySelector('#closeBtn').addEventListener('click',()=>{
            inform.style.display = 'none';
          });

          const qtd3 = inform.querySelector('.qtd')
          const decrementButton3 = qtd3.querySelector('.decrement');
          const incrementButton3 = qtd3.querySelector('.increment');
          const quantidadeSpan3 = qtd3.querySelector('.quantidade');
          let quantidade3 = 0;  
  
          incrementButton3.addEventListener('click', () => {
              quantidade3++;
              quantidadeSpan3.innerText = quantidade3;
          });
  
          decrementButton3.addEventListener('click', () => {
              if (quantidade3 > 0) {
              quantidade2--;
              }
              quantidadeSpan3.innerText = quantidade3;
          });

          break;
  
        case 3:
          inform.innerHTML = '';
          inform.innerHTML = `<div id="imgArma"><img src="${armaFoto[3].src}" alt="" srcset=""></div><button id='closeBtn'>X</button><div id="nomeArma"><span>${armaName[3].innerText}</span></div><div id="descricaoArma"><p>${armaText[3].innerText}</p></div><div class="qtd"><button class="decrement">-</button><span class="quantidade">0</span><button class="increment">+</button></div>`;
          inform.style.display = 'flex';

          inform.querySelector('#closeBtn').addEventListener('click',()=>{
            inform.style.display = 'none';
          });

          const qtd4 = inform.querySelector('.qtd')
          const decrementButton4 = qtd4.querySelector('.decrement');
          const incrementButton4 = qtd4.querySelector('.increment');
          const quantidadeSpan4 = qtd4.querySelector('.quantidade');
          let quantidade4 = 0;  
  
          incrementButton4.addEventListener('click', () => {
              quantidade4++;
              quantidadeSpan4.innerText = quantidade4;
          });
  
          decrementButton4.addEventListener('click', () => {
              if (quantidade4 > 0) {
              quantidade4--;
              }
              quantidadeSpan4.innerText = quantidade4;
          });

          break;
  
        default:
          console.log("Nenhum botão correspondente");
          break;
      }
    });
  });

