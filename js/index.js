$(function(){
    // variables
    var icono_ubicacion = $("#icono-ubicacion");
    var span_ubicacion = $("#span_ubicacion");
    var icono_imagenes = $("#icono_imagenes");
    var span_imagenes = $("#span_imagenes");
    var icono_planos = $("#icono-planos");
    var span_planos = $("#span_planos");
    var item_activo = "";
    var panel1 = $("#panel1");
    var panel12 = $("#panel12");

    var panel2 = $("#panel2");
    var panel3 = $("#panel3");
    var seccion_auxiliar = $("#seccion_auxiliar");
    var seccion_ubicacion1 = $("#seccion_ubicacion1");
    var seccion_ubicacion2 = $("#seccion_ubicacion2");
    var seccion_imagenes1 = $("#seccion_imagenes1");
    var seccion_imagenes2 = $("#seccion_imagenes2");

    var seccion_imagen_fondo = $("#seccion_imagen_fondo");
    var seccion_planos1 = $("#seccion_planos1");
    var seccion_planos2 = $("#seccion_planos2");
    var planos = $("#planos li");
    var panel1_logo = $("#panel1_logo");

    var imagenes_play = $("#imagenes_play");
    var tiempo_ocultar = 1000;  
    var tiempo_entre_img = 4000;  
    var tiempo_mostrar = 3000;
    var tiempo_inicio_anim = 4000;
    var cambio = $("#cambio");  
    var cambio1 = $("#cambio1");  
    var cambio2 = $("#cambio2");  
    var cambio3 = $("#cambio3");  
    var cambio4 = $("#cambio4"); 
    var cambio5 = $("#cambio5");  
 
  
    
  
  

    span_ubicacion.hide();
    span_imagenes.hide();
    span_planos.hide();
    seccion_ubicacion1.hide();   
    seccion_ubicacion2.hide();
    panel2.hide();
    panel3.hide();
    seccion_auxiliar.hide();
    seccion_ubicacion1.hide();
    seccion_ubicacion2.hide();
    seccion_imagenes1.hide();
    seccion_imagenes2.hide();
    seccion_imagen_fondo.hide();
    seccion_planos1.hide();
    seccion_planos2.hide();
    cambio1.hide();
    cambio2.hide();
    cambio3.hide();
    cambio4.hide();
    cambio5.hide();




    // eventos
  imagenes_play.on("click",function(){
        cambio.hide();
        animacion();


    });

    panel1_logo.on("click",function(){
        ocultarSecciones();
        desactivarIconos();
        panel1.removeClass("active");
        seccion_auxiliar.fadeIn();
        seccion_imagen_fondo.fadeIn();
    });
    
    icono_ubicacion.hover(function(){
        span_ubicacion.fadeIn(200,function(){

        });

    },function(){
        if(item_activo != "ubicacion"){
            span_ubicacion.hide(500,function(){

            });
        }
    });

    icono_ubicacion.on("click",function(){
        item_activo = "ubicacion";
        activarIconos();

        activarSecciones();
    });

    icono_imagenes.hover(function(){
        span_imagenes.fadeIn(200,function(){
            span_imagenes.fadeIn();
        });
    },function(){
        if(item_activo != "imagenes"){
            span_imagenes.hide(500,function(){
                span_imagenes.hide();
            });
        }
    });

    icono_imagenes.on("click",function(){
        item_activo = "imagenes";
        activarIconos();
        activarSecciones();
    });

    icono_planos.hover(function(){
        span_planos.fadeIn(200,function(){
            span_planos.fadeIn();
        });
    },function(){
        if(item_activo != "planos"){
            span_planos.hide(500,function(){
                span_planos.hide();
            });
        }
    });

    icono_planos.on("click",function(){
        item_activo = "planos";

        activarIconos();
        activarSecciones()

    });

    planos.on("click",function(){
        seccion_planos2.fadeIn();
    });

    // funciones


     function animacion() { 
  
        // Mostramos la foto 1  
        cambio1.fadeIn(tiempo_mostrar); 
 
        // Cuando pasen otros 3000 milisegundos, ocultamos la foto 1 y mostramos la foto 2  
        setTimeout(function() {  
            // Ocultamos la foto 1  

            cambio1.fadeOut(tiempo_ocultar);  
            // Mostramos la foto 2  
            cambio2.fadeIn(tiempo_mostrar);  
        }, tiempo_entre_img);  
  
        // Cuando pasen otros 3000 milisegundos, ocultamos la foto 2 y mostramos la foto 3  
        setTimeout(function() {  
            // Ocultamos la foto 2  
            cambio2.fadeOut(tiempo_ocultar);  
            // Mostramos la foto 3  
            cambio3.fadeIn(tiempo_mostrar);  
        }, tiempo_entre_img * 2); 

        setTimeout(function() {  
            // Ocultamos la foto 3  
            cambio3.fadeOut(tiempo_ocultar);  
            // Mostramos la foto 4  
            cambio4.fadeIn(tiempo_mostrar);  
        }, tiempo_entre_img * 3); 

         setTimeout(function() {  
            // Ocultamos la foto 4  
            cambio4.fadeOut(tiempo_ocultar);  
            // Mostramos la foto 5  
            cambio5.fadeIn(tiempo_mostrar);  
        }, tiempo_entre_img * 4);   
  
        // Cuando pasen otros 3000 milisegundos, ocultamos la foto 3 y volvemos a iniciar la animación  
        setTimeout(function() {  
            // Ocultamos la foto 3  
            $cambio5.fadeOut(tiempo_ocultar);  
            // Iniciamos otra vez la animación  
            animacion();  
        }, tiempo_inicio_anim); 

        
    } 

    function ocultarSecciones(){
seccion_ubicacion1.hide();   
     seccion_ubicacion2.hide();
        seccion_auxiliar.hide();
        seccion_imagenes1.hide();
        seccion_imagenes2.hide();
        seccion_planos1.hide();
        seccion_planos2.hide();
        seccion_imagen_fondo.hide();
    }

    function activarSecciones(){
        ocultarSecciones();
        switch(item_activo){
            case "ubicacion":
         
            seccion_ubicacion1.fadeIn();
              seccion_ubicacion2.fadeIn("slow");
              break;
            case "imagenes":
                seccion_imagenes1.fadeIn();
                seccion_imagenes2.fadeIn();
                break;
            case "planos":
                seccion_planos1.fadeIn();
                break;
        }
    }

    function activarIconos(){
        desactivarIconos();
        activarPanel1();
        switch(item_activo){
            case "ubicacion":
                icono_ubicacion.addClass("active");
                span_ubicacion.fadeIn();

                break;
            case "imagenes":
                icono_imagenes.addClass("active");
                span_imagenes.fadeIn();
                break;
            case "planos":
                icono_planos.addClass("active")
                span_planos.fadeIn();
                break;
        }
    }

    function desactivarIconos(){
        icono_ubicacion.removeClass("active");
        icono_imagenes.removeClass("active");
        icono_planos.removeClass("active");

        span_ubicacion.hide();
        span_imagenes.hide();
        span_planos.hide();
    }

    function activarPanel1(){
        panel1.removeClass("active");
        panel1.addClass("active");
    }

});