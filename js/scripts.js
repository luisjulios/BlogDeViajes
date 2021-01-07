$(function(){
  'use strict';

  $('#nav').show();

  /*
  var proximosViajes = ['Londres', 'Valencia', 'Barcelona', 'Paris', 'Madrid', 'Milán'];

  $.each(proximosViajes, function(i,v) {
    if(i == 0) {
      $('aside').append('<h2>Próximos Viajes</h2>');
    }
    $('aside').append('<li>' + v + '</li>');
  });

  var viajesPorFecha = {
    primero: 'Londres',
    segundo: 'Valencia',
    tercero: 'Madrid',
    cuarto: 'Paris',
    quinto: 'Milán'
  };

  $.each(viajesPorFecha, function(i, v) {
    $('aside').append('<li>' + i + ' - ' + v + '</li>');
  });

  $('header img').on('click', cargarAjax);
  function cargarAjax() {
    $.ajax('promociones.html', {
      success: agregarContenido,
      type: 'GET',
      datatype: 'text'
    });
  };
  function agregarContenido(data, status, jqxhr){
    $('aside').html(data);
    console.log(status);
  };

  $('aside').load('promociones.html');

  $('header img').on('click', cargarAjax);
  function cargarAjax() {
    $.ajax('promociones.txt', {
      success: agregarContenido,
      type: 'GET',
      datatype: 'text'
    });
  };
  function agregarContenido(data, status, jqxhr){
    $('aside').text(data);
    console.log(status);
  };

  $('header img').click(function() {
    $('main article:first').slideUp(1000)
  });
  $('aside').click(function() {
    $('main article').slideDown(1000)
  });

  $('main article img').on('mouseenter', aumentarImagen);
  $('main article img').on('mouseleave', disminuirImagen);
  function aumentarImagen(){
    $(this).animate({'width': '3500px'});
  };
  function disminuirImagen(){
    $(this).animate({'width': '350px'});
  };
  
  $('header img').on('click', function() {
    $(this).animate({'width': '2000px'}, 10000);
  });

  $('header img').on('click', function() {
    $(this).css({'width': '5000px'});
  });
  $('main article h2').on('mouseenter', function() {
    $(this).css({'color': '#db008d'});
  });
  $('main article h2').on('mouseleave', function() {
    $(this).css({'color': '#00b8e4'});
  });
  
  $('main article:first img').on('mouseenter', function() {
    $(this).attr('src', 'img/imagen_2.jpg');
  });
  $('main article:first img').on('mouseleave', function() {
    $(this).attr('src', 'img/imagen_1.jpg');
  });

  $('main').on({
    click:function() {
      $(this).addClass('fondorojo activo');
    }, mouseenter: function() {
      $(this).addClass('fondorojo');
    }, mouseleave: function() {
      $(this).addClass('activo');
    }
  });

  $('header img').addClass('activo');
  $('.navegacion-principal').show();
  //$('.navegacion-principal a:first').addClass('activo');
  $('.navegacion-principal a').on('click', function(e) {
    $('.navegacion-principal a').removeClass('activo');
    e.preventDefault();
    $(this).addClass('activo');
  });

  $('header').on('mouseenter', function() {
    $('.navegacion-principal').show();
  });
  $('.barra').on('mouseleave', function() {
    $('.navegacion-principal').hide();
  });

  $('header img').on('mouseenter', function() {
    console.log('Sobre el logo');
  });
  $('header img').on('mouseleave', function() {
    console.log('Fuera del logo');
  });

  $('header img').on('click', function() {
    $(this).remove();
  });

  $('header img').on('click', function() {
    console.log('Has hecho click en el logo')
  });

  $('main article:first').remove();

  var copia = $('main article:last').clone();
  $('main').append(copia);
  var copia = $('main article:last').clone();
  $('main').prepend(copia);

  var copia = $('main article:last').clone();
  $(copia).appendTo('main');
  var copia = $('main article:last').clone();
  $(copia).prependTo('main');
*/


});