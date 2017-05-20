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

    // eventos
    icono_ubicacion.hover(function(){
        span_ubicacion.removeClass("hidden");
    },function(){
        if(item_activo != "ubicacion"){
            span_ubicacion.addClass("hidden");
        }
    });

    icono_ubicacion.on("click",function(){
        
        panel1.removeClass("active");
        
        seccion_ubicacion1.addClass("hidden");
        seccion_auxiliar.addClass("hidden");
        
        icono_ubicacion.addClass("active");
        icono_imagenes.removeClass("active");
        icono_planos.removeClass("active");

        span_imagenes.addClass("hidden");
        span_planos.addClass("hidden");        
        span_ubicacion.removeClass("hidden");

        item_activo = "ubicacion";

        panel1.addClass("active");
        seccion_ubicacion1.removeClass("hidden");

    });


    icono_imagenes.hover(function(){
        span_imagenes.removeClass("hidden");
    },function(){
        if(item_activo != "imagenes"){
            span_imagenes.addClass("hidden");
        }
    });

    icono_imagenes.on("click",function(){
        panel1.removeClass("active");
        
        
        icono_ubicacion.removeClass("active");
        icono_imagenes.addClass("active");
        icono_planos.removeClass("active");

        span_imagenes.removeClass("hidden");
        span_planos.addClass("hidden");        
        span_ubicacion.addClass("hidden");

        item_activo = "imagenes";

        panel1.addClass("active");

    });

    icono_planos.hover(function(){
        span_planos.removeClass("hidden");
    },function(){
        if(item_activo != "planos"){
            span_planos.addClass("hidden");
        }
    });

    icono_planos.on("click",function(){
        
        panel1.removeClass("active");
        
        icono_ubicacion.removeClass("active");
        icono_imagenes.removeClass("active");
        icono_planos.addClass("active");

        span_imagenes.addClass("hidden");
        span_planos.removeClass("hidden");        
        span_ubicacion.addClass("hidden");

        item_activo = "planos";
        
        panel1.addClass("active");
        
    });

    // funciones auxiliares


});