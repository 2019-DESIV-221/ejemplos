(function(){
  const App = {
    htmlElements: {
      form: document.querySelector('.laboratorio__form__js'),
      input: document.querySelector('.laboratorio__input__js')
    },
    init: function(){
      App.bindEvents();
    },
    bindEvents: function(){
      App.htmlElements.form.addEventListener('submit', App.events.onFormSubmit)
    },
    events: {
      onFormSubmit: function(e){
        e.preventDefault();
        const number = App.htmlElements.input.value
        if(!number){
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No se permite que la N este vacía!',
          });
          return
        }
        if(App.utils.isPalindrome(number)){
          const numberInBinary = parseInt(number).toString(2);
          if(App.utils.isPalindrome(numberInBinary)){
              Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'El número es palíndromo de doble base',
                showConfirmButton: false,
                timer: 1500
              })
          }
        }
      }
    },
    utils: {
      isPalindrome: function(s){
        return s === s.split("").reverse().join("")
      }
    }
  }
  App.init();
})();