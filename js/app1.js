window.addEventListener('load', function() {
    $('.back').click(function() {
        //districtResult = $(this).text(); 
        window.location.href = '../index.html';
        console.log('hola');// ver como tomar esta variable
      }); 
// por defecto oculta pasajero y operadores

      //$('.pasajero').addClass('ocultar');
      //$('.operadores').addClass('ocultar');

      //$('.conductor-title').addClass('activado');
      //$('.pasajero-title').addClass('desactivado');
      //$('.operadores-title').addClass('desactivado');

//mostrar y ocultar
      
    $('.pasajero-title').click(function(){
      $('.pasajero').removeClass('ocultar')
      $('.conductor').addClass('ocultar');
      $('.operadores').addClass('ocultar');
      
      $('.conductor-title').addClass('desactivado');
      $('.pasajero-title').addClass('activado');
      $('.pasajero-title').removeClass('desactivado');
      $('.operadores-title').addClass('desactivado');
    }) 

    $('.operadores-title').click(function(){
      $('.operadores').removeClass('ocultar')
      $('.conductor').addClass('ocultar');
      $('.pasajero').addClass('ocultar');

      $('.conductor-title').addClass('desactivado');
      $('.pasajero-title').addClass('desactivado');
      $('.operadores-title').addClass('activado');
      $('.operadores-title').removeClass('desactivado');
    })

    $('.conductor-title').click(function(){
      $('.conductor').removeClass('ocultar')
      $('.pasajero').addClass('ocultar');
      $('.operadores').addClass('ocultar');

      $('.conductor-title').addClass('activado');
      $('.conductor-title').removeClass('desactivado');
      $('.pasajero-title').addClass('desactivado');
      $('.operadores-title').addClass('desactivado');
    })

  });