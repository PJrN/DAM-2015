window.onload = function () {


        var video = document.getElementById("video");

        iniciar = document.getElementById("iniciar");
        iniciar.addEventListener('click', function (e) {
            video.play();
        }, false);


        pausar = document.getElementById("pausar");
        pausar.addEventListener('click', function (e) {
            video.pause();
        }, false);

        parar = document.getElementById("parar");
        parar.addEventListener('click', function (e) {
            video.pause();
            video.currentTime = 0;
        }, false);

        avanzar = document.getElementById("avanzar");
        avanzar.addEventListener('click', function (e) {
            video.currentTime = video.currentTime + 10;
        }, false);

        retroceder = document.getElementById("retroceder");
        retroceder.addEventListener('click', function (e) {
            if (video.currentTime >= 10) {
                video.currentTime = video.currentTime - 10;
            } else {
                video.currentTime = 0;
            }
        }, false);

        inicio = document.getElementById("inicio");
        inicio.addEventListener('click', function (e) {
            video.currentTime = 0;
        }, false);

        fin = document.getElementById("fin");
        fin.addEventListener('click', function (e) {
            var duracion = video.duration();
            console.log(duracion);
            video.currentTime = duracion;
        }, false);


        pantalla_completa = document.getElementById("pantalla_completa");
        pantalla_completa.addEventListener('click', function (e) {

            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { //firefox
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { //chrome
                video.webkitRequestFullscreen();
            }

        }, false);

        var volumen = document.getElementById("range");
        volumen.addEventListener('click', function (e) {
            //alert("has cambiado el volumen");
            volumenvalue = document.getElementById("range").value;
            //console.log(volumenvalue);
            video.volume = volumenvalue;
        }, false);

        var progressbar = document.getElementById("progressbar");
        progressbar.addEventListener('progress', function (e) {

            progressbar.value = Math.floor((video.currentTime * 100) / video.duration);
            console.log (progressbar.value);
            }, false);


        }
