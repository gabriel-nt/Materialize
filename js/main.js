$(document).ready(function(){
	$('.sidenav').sidenav();
  $('.slider').slider({
      height:500 
      //Pode definir diversos atributos, como altura, tempo de transição de imagens.
      //A documentação disponibilica diversos métodos 
  });
  $('.parallax').parallax();
  $('.fixed-action-btn').floatingActionButton();
  $('input#input_nome,input#input_email, textarea#textarea').characterCounter();
  $('.datepicker').datepicker({
      i18n: {
	    today: 'Hoje',
	    clear: 'Limpar',
	    cancel: 'Cancelar',
	    done: 'Ok',
	    nextMonth: 'Próximo mês',
	    previousMonth: 'Mês anterior',
	    weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
	    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
	    weekdays: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
	    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
	    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
		  }
    });
    $('.timepicker').timepicker({
    	i18n: {
            cancel: 'Cancelar',
            clear: 'Limpar',
            done: 'Ok'
        },
        twelveHour : false, // 12 horas, usa AM/PM
        autoclose: false  //Fecha o timepicker automaticamente apos selecionar a hora
      });
    $('.dropdown-trigger').dropdown({
      container: document.body,
      constrainWidth: true,
      coverTrigger:false
    });
    $('.materialboxed').materialbox();
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy({
      scrollOffset:100,
    });
    $('.collapsible').collapsible();
    });


    