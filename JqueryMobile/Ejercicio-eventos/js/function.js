$("#elegir").on("click", function () {

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    var arr = ["Margherita", "Napoli", "Prosciutto", "Prosciutto + Funghi", "Tonno", "Frankfurt", "Pepperoni", "Funghi", "4 formaggi", "Bolognesa", "Vegetariana", "Parmigiana", "Barbakoa", "Brava", "4 stagioni", "Boscaiola", "diFreddy", "Per Tutti", "Potrue", "Difranky", "Mama Mia", "Berezia", "Carbonara", "Siciliana", "Tropikala", "Pesto"];
    shuffle(arr);
    //console.log(arr);
    //console.log(arr[0]);
    $("#decision").text("Pizza: " + arr[0]);

});

$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $("#pizzas").on("swipeleft", swiperleftindex);

    // Callback function references the event target and adds the 'swipe' class to it
    function swiperleftindex(event) {
        event.preventDefault();
        $.mobile.changePage("#pagina2", {
            transition: "slide",
            changeHash: false
        });
    }
});

$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $("#pizzas").on("swiperight", swiperrightindex);

    // Callback function references the event target and adds the 'swipe' class to it
    function swiperrightindex(event) {
        event.preventDefault();
        $.mobile.changePage("#pagina3", {
            transition: "slide",
            changeHash: false
        });
    }
});


$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $("#pagina2").on("swipeleft", swiperleftpagina2);

    // Callback function references the event target and adds the 'swipe' class to it
    function swiperleftpagina2(event) {
        event.preventDefault();
        $.mobile.changePage("#pagina3", {
            transition: "slide",
            changeHash: false
        });
    }
});

$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $("#pagina2").on("swiperight", swiperrightpagina2);

    // Callback function references the event target and adds the 'swipe' class to it
    function swiperrightpagina2(event) {
        event.preventDefault();
        $.mobile.changePage("#pizzas", {
            transition: "slide",
            changeHash: false
        });
    }
});


$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $("#pagina3").on("swipeleft", swiperlefpagina3);

    // Callback function references the event target and adds the 'swipe' class to it
    function swiperlefpagina3(event) {
        event.preventDefault();
        $.mobile.changePage("#pizzas", {
            transition: "slide",
            changeHash: false
        });
    }
});

$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $("#pagina3").on("swiperight", swiperrightpagina3);

    // Callback function references the event target and adds the 'swipe' class to it
    function swiperrightpagina3(event) {
        event.preventDefault();
        $.mobile.changePage("#pagina2", {
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

$("#elegir").click(function () {
    $("#aleatorio").removeClass("hidden");
});
