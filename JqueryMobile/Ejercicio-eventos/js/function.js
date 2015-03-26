$("#elegir").on( "click", function() {

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

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

var arr = ["Margherita", "Napoli","Prosciutto", "Prosciutto + Funghi","Tonno","Frankfurt","Pepperoni","Funghi","4 formaggi","Bolognesa","Vegetariana","Parmigiana","Barbakoa","Brava","4 stagioni","Boscaiola","diFreddy","Per Tutti","Potrue","Difranky","Mama Mia","Berezia","Carbonara","Siciliana","Tropikala","Pesto"];
shuffle(arr);
console.log(arr);
console.log(arr[0]);
$( "#decision" ).text(arr[0]);

  });


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
