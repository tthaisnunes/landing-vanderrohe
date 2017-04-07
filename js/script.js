//make the carousel change on swipe on mobile
$(".carousel").on("swipeleft",function(){
	$(this).carousel('next');
});
$(".carousel").on("swiperight",function(){
	$(this).carousel('prev');
});


//change the image acording with the blueprint selected
$('.item-modal').on('click', function() {
    ga('send', 'pageview', 'open-blueprint-img');
    var src = $(this).attr('data-image');

    if ($(window).width() > '768') {
        var b = "-desk";
        var position = 24;
        var src = src.substr(0, position) + b + src.substr(position);
    } 

    $('#modalBlueprint img').attr('src' , src);
});


 //apply active class on hover of item modal
 $('.item-blueprint').hover(function(event) {
 	acitveItemModal($(this));
 });

 function acitveItemModal(e) {
 	e.find('.call-modal').toggleClass('active');
 }


 //show tel and email on click of button
 $('.tel-off').on('click', function() {
 	$(this).hide();
 	$('.tel-on').show();
    ga('send', 'pageview', 'show-tel');
 });
 $('.email-off').on('click', function() {
 	$(this).hide();
 	$('.email-on').show();
    ga('send', 'pageview', 'show-email');
 });


 var form = $("#form-header");

 //form validation
 $("#form-header").validate({
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true
        }
    },
    messages: {
        name: "Favor preencher seu nome",
        email: {
            required: "Favor preencher seu e-mail",
            email: "Favor preencher com um e-mail válido"
        },
        phone: {
            required: "Favor preencher seu telefone"
        }
    }
});


 var form2 = $('#form-email');

 //form validation
 $("#form-email").validate({
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true
        }
    },
    messages: {
        name: "Favor preencher seu nome",
        email: {
            required: "Favor preencher seu e-mail",
            email: "Favor preencher com um e-mail válido"
        },
        phone: {
            required: "Favor preencher seu telefone"
        }
    }
});


//mask on tel
$("input[name=phone]").mask("(00) 0000-00000");



function sendForm(f){
    var fill = 0;
    var nome = document[f].name.value;
    var email = document[f].email.value;
    var phone = document[f].phone.value;
    
    if (form.valid()) {
        $.ajax({
            type: 'POST',
            url: 'http://www.perplan.com.br/FaleConosco/SendEmail',
            data: { 'name':nome, 'phone':phone, 'email':email, 'message':'Contato LP Van Der Rohe' },
            //dataType: "json",
            success: function(result) {
                $('#modal-sucesso').modal('show');
                $('form input').val("");
                ga('send', 'pageview', 'send-form-contato');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
              $('#modal-error').modal('show');
              $('form input').val("");
              ga('send', 'pageview', 'erro-form-contato');
          }
      });
    } 
    return false;
}




function sendForm2(f){
    var fill = 0;
    var nome = document[f].name.value;
    var email = document[f].email.value;
    var phone = document[f].phone.value;
    
    if (form2.valid()) {
        $.ajax({
            type: 'POST',
            url: 'http://www.perplan.com.br/FaleConosco/SendEmail',
            data: { 'name':nome, 'phone':phone, 'email':email, 'message':'Contato LP Van Der Rohe' },
            //dataType: "json",
            success: function(result) {
                $('#modal-sucesso').modal('show');
                $('form input').val("");
                ga('send', 'pageview', 'send-form-contato');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
              $('#modal-error').modal('show');
              $('form input').val("");
              ga('send', 'pageview', 'erro-form-contato');
          }
      });
    } 
    return false;
}
