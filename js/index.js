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
    var tiempo_entre_img = 1000;  
    var tiempo_mostrar = 2000;
    var tiempo_inicio_anim = 1000;
    var cambio = $("#cambio");

    var imagenes  =$(".imagenes");
    var temporizador_imagenes = 0;
    var count_imagenes = 0; 

    var beep = $("#beep")[0];
    beep.volume = 0.3;

    // eventos
    imagenes.on("click",cambiarImagen);

    imagenes_play.on("click",function(){
        cambio.show();
        clearInterval(temporizador_imagenes);
        temporizador_imagenes = setInterval(moverImagenes,4000);
    });

    panel1_logo.on("click",function(){
        clearInterval(temporizador_imagenes);
        count_imagenes = 0;
        var imagen = imagenes[0].attributes.imagen.value;
        cambio.attr("src",imagen);
        ocultarSecciones();
        desactivarIconos();
        panel1.removeClass("active");
        seccion_auxiliar.fadeIn(2000);
        seccion_imagen_fondo.fadeIn(2000);
    });
    
    icono_ubicacion.hover(function(){
        beep.pause();
        beep.play()
        span_ubicacion.fadeIn(200);
    },function(){
        if(item_activo != "ubicacion"){
            span_ubicacion.hide(500);
        }
    });

    icono_ubicacion.on("click",function(){
        item_activo = "ubicacion";
        activarIconos();
    });

    icono_imagenes.hover(function(){
        span_imagenes.fadeIn(200);
        beep.pause();
        beep.play();
    },function(){
        if(item_activo != "imagenes"){
            span_imagenes.fadeOut(500);
        } 
    });

    icono_imagenes.on("click",function(){
        item_activo = "imagenes";
        activarIconos();
        activarSecciones();
    });

    icono_planos.hover(function(){
        span_planos.fadeIn(200);
        beep.pause();
        beep.play();
    },function(){
        if(item_activo != "planos"){
            span_planos.fadeOut(500);
        }
    });

    icono_planos.on("click",function(){
        item_activo = "planos";
        activarIconos();
        activarSecciones();
    });

    planos.on("click",function(){
        seccion_planos2.fadeIn(2000);
    });

    // funciones
    function ocultarSecciones(){
        seccion_auxiliar.hide();
        seccion_ubicacion1.hide();
        seccion_ubicacion2.hide();
        seccion_imagenes1.hide();
        seccion_imagenes2.hide();
        seccion_planos1.hide();
        seccion_planos2.hide();
        seccion_imagen_fondo.hide();
    }

    function activarSecciones(){
        switch(item_activo){
            case "ubicacion":
                seccion_ubicacion1.fadeIn(1000);
                seccion_ubicacion2.fadeIn(1000);
                break;
            case "imagenes":
                seccion_imagenes1.fadeIn(1000);
                seccion_imagenes2.fadeIn(1000);
                break;
            case "planos":
                seccion_planos1.fadeIn(1000);
                break;
        }
    }

    function activarIconos(){
        desactivarIconos();
        activarPanel1();
        switch(item_activo){
            case "ubicacion":
                icono_ubicacion.addClass("active");
                span_ubicacion.fadeIn(200);
                break;
            case "imagenes":
                icono_imagenes.addClass("active");
                span_imagenes.fadeIn(200);
                break;
            case "planos":
                icono_planos.addClass("active")
                span_planos.fadeIn(200);
                break;
        }
    }

    function desactivarIconos(){
        icono_ubicacion.removeClass("active");
        icono_imagenes.removeClass("active");
        icono_planos.removeClass("active");

        item_activo == "ubicacion " ? span_ubicacion.fadeOut(200) : span_ubicacion.fadeOut(500);
        item_activo == "imagenes " ? span_imagenes.fadeOut(200) : span_imagenes.fadeOut(500);
        item_activo == "planos " ? span_planos.fadeOut(200) : span_planos.fadeOut(500);
    }

    function activarPanel1(){
        ocultarSecciones();
        panel1.removeClass("active");
        panel1.addClass("active");
        t = setTimeout(function(){
            activarSecciones();
        },1000);

    }

    function cambiarImagen(){
        clearInterval(temporizador_imagenes);
        var imagen = $(this).attr("imagen");
        cambio.attr("src",imagen);
        cambio.show();
    }

    function moverImagenes(){
        cambio.hide(); 
        var imagen = imagenes[count_imagenes].attributes.imagen.value;
        cambio.attr("src",imagen);
        count_imagenes = (count_imagenes + 1) % imagenes.length;  
        cambio.fadeIn(1200);
    }

});