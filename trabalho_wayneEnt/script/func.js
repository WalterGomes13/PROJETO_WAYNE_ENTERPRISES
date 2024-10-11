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
          inform.innerHTML = `<div id="imgArma"><img src="${armaFoto[0].src}" alt="" srcset=""></div><button id='closeBtn'>X</button><div id="nomeArma"><span>${armaName[0].innerText}</span></div><div id="descricaoArma"><p>${armaText[0].innerText}</p></div>`;
          inform.style.display = 'flex';

          inform.querySelector('#closeBtn').addEventListener('click',()=>{
            inform.style.display = 'none';
          })
          break;
  
        case 1:
          inform.innerHTML = '';
          inform.innerHTML = `<div id="imgArma"><img src="${armaFoto[1].src}" alt="" srcset=""></div><button id='closeBtn'>X</button><div id="nomeArma"><span>${armaName[1].innerText}</span></div><div id="descricaoArma"><p>${armaText[1].innerText}</p></div>`;
          inform.style.display = 'flex';

          inform.querySelector('#closeBtn').addEventListener('click',()=>{
            inform.style.display = 'none';
          })
          break;
  
        case 2:
          inform.innerHTML = '';
          inform.innerHTML = `<div id="imgArma"><img src="${armaFoto[2].src}" alt="" srcset=""></div><button id='closeBtn'>X</button><div id="nomeArma"><span>${armaName[2].innerText}</span></div><div id="descricaoArma"><p>${armaText[2].innerText}</p></div>`
          inform.style.display = 'flex';

          inform.querySelector('#closeBtn').addEventListener('click',()=>{
            inform.style.display = 'none';
          })
          break;
  
        case 3:
          inform.innerHTML = '';
          inform.innerHTML = `<div id="imgArma"><img src="${armaFoto[3].src}" alt="" srcset=""></div><button id='closeBtn'>X</button><div id="nomeArma"><span>${armaName[3].innerText}</span></div><div id="descricaoArma"><p>${armaText[3].innerText}</p></div>`
          inform.style.display = 'flex';

          inform.querySelector('#closeBtn').addEventListener('click',()=>{
            inform.style.display = 'none';
          })
          break;
  
        default:
          console.log("Nenhum botão correspondente");
          break;
      }
    });
  });