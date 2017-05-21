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


    // eventos
    
    panel1_logo.on("click",function(){
        ocultarSecciones();
        desactivarIconos();
        panel1.removeClass("active");
        seccion_auxiliar.removeClass("hidden");
        seccion_imagen_fondo.removeClass("hidden");
    });
    
    icono_ubicacion.hover(function(){
        span_ubicacion.fadeIn(200,function(){
            span_ubicacion.removeClass("hidden");
        });

    },function(){
        if(item_activo != "ubicacion"){
            span_ubicacion.fadeOut(500,function(){
                span_ubicacion.addClass("hidden");
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
            span_imagenes.removeClass("hidden");
        });
    },function(){
        if(item_activo != "imagenes"){
            span_imagenes.fadeOut(500,function(){
                span_imagenes.addClass("hidden");
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
            span_planos.removeClass("hidden");
        });
    },function(){
        if(item_activo != "planos"){
            span_planos.fadeOut(500,function(){
                span_planos.addClass("hidden");
            });
        }
    });

    icono_planos.on("click",function(){
        item_activo = "planos";

        activarIconos();
        activarSecciones()

    });

    planos.on("click",function(){
        seccion_planos2.removeClass("hidden");
    });

    // funciones

    function ocultarSecciones(){
        seccion_auxiliar.addClass("hidden");
        seccion_ubicacion1.addClass("hidden");
        seccion_ubicacion2.addClass("hidden");
        seccion_imagenes1.addClass("hidden");
        seccion_imagenes2.addClass("hidden");
        seccion_planos1.addClass("hidden");
        seccion_planos2.addClass("hidden");
        seccion_imagen_fondo.addClass("hidden");
    }

    function activarSecciones(){
        ocultarSecciones();
        switch(item_activo){
            case "ubicacion":
                seccion_ubicacion1.removeClass("hidden");
                seccion_ubicacion2.removeClass("hidden");
                break;
            case "imagenes":
                seccion_imagenes1.removeClass("hidden");
                seccion_imagenes2.removeClass("hidden");
                break;
            case "planos":
                seccion_planos1.removeClass("hidden");
                break;
        }
    }

    function activarIconos(){
        desactivarIconos();
        activarPanel1();
        switch(item_activo){
            case "ubicacion":
                icono_ubicacion.addClass("active");
                span_ubicacion.removeClass("hidden");
                break;
            case "imagenes":
                icono_imagenes.addClass("active");
                span_imagenes.removeClass("hidden");
                break;
            case "planos":
                icono_planos.addClass("active")
                span_planos.removeClass("hidden");
                break;
        }
    }

    function desactivarIconos(){
        icono_ubicacion.removeClass("active");
        icono_imagenes.removeClass("active");
        icono_planos.removeClass("active");

        span_ubicacion.addClass("hidden");
        span_imagenes.addClass("hidden");
        span_planos.addClass("hidden");
    }

    function activarPanel1(){
        panel1.removeClass("active");
        panel1.addClass("active");
    }

});