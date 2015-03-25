$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $("#pizzas").on("swiperight", desplazarse);
    // Callback function references the event target and adds the 'swipe' class to it
    function desplazarse(event) {
        $.mobile.changePage("#pagina2", {
            transition: "slide",
            changeHash: false
        });
    }

    $("#pizzas").on("swipeleft", desplazarsel);
    // Callback function references the event target and adds the 'swipe' class to it
    function desplazarsel(event) {
        $.mobile.changePage("#pagina3", {
            transition: "slide",
            changeHash: false
        });
    }

    $("#pagin2").on("swipeleft", desplazarsel);
    // Callback function references the event target and adds the 'swipe' class to it
    function desplazarsel(event) {
        $.mobile.changePage("#pizzas", {
            transition: "slide",
            changeHash: false
        });
    }

    $("#pagin2").on("swiperight", desplazarser);
    // Callback function references the event target and adds the 'swipe' class to it
    function desplazarser(event) {
        $.mobile.changePage("#pagina3", {
            transition: "slide",
            changeHash: false
        });
    }

    $("#pagin3").on("swipeleft", desplazarsel);
    // Callback function references the event target and adds the 'swipe' class to it
    function desplazarsel(event) {
        $.mobile.changePage("#pagina2", {
            transition: "slide",
            changeHash: false
        });
    }

    $("#pagin3").on("swiperight", desplazarser);
    // Callback function references the event target and adds the 'swipe' class to it
    function desplazarser(event) {
        $.mobile.changePage("#pizzas", {
            transition: "slide",
            changeHash: false
        });
    }
});



$("[data-role='collapsible']").collapsible({

    collapse: function (event, ui) {
        $(this).children().next().slideUp(350);
    },
    expand: function (event, ui) {
        $(this).children().next().hide();
        $(this).children().next().slideDown(350);
    }

});
