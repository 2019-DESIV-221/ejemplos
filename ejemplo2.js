(function(){
  var App = {
    htmlElements: {
      calcularInput: document.getElementById('calcular-input'),
      calcularBtn: document.getElementById('calcular-btn'),
    },
    init: function(){
      App.bindEvents();
    },
    bindEvents: function(){
      App.htmlElements.calcularBtn.addEventListener('click', App.events.onCalcularBtnClick)
    },
    events: {
      onCalcularBtnClick: function(event){
        const n = parseInt(App.htmlElements.calcularInput.value);
        let accum1 = accum2 = 0;
        const mat = [];
        for(let i = 0; i < n; i += 1){
          mat.push([]);
          for(let j = 0; j < n; j += 1){
            const aleatorio = Math.floor(Math.random() * 10 + 1);
            if(i === j) accum1 += aleatorio;
            if((i + j) === (n - 1)) accum2 += aleatorio;
            mat[i].push(aleatorio);
          }
        }
        console.log(mat);
        console.log(accum1);
        console.log(accum2);
      }
    }
  }
  App.init();
})();