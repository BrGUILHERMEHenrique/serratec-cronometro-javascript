let cronometro = (function (){
    let cronoParado = true;
    let hh = 0;
    let mm = 0;
    let ss = 0;
    let intervalo = 1000;
    let cron;
    function iniciar(){
        if(cronoParado){
            cronoParado = false;
            cron = setInterval(() =>{
            tempo();
            }, intervalo);  
        }
    }


    function parar(){
        clearInterval(cron);
        cronoParado = true;

    }

    function zerar(){
        hh = 0;
        mm = 0;
        ss = 0;
        clearInterval(cron);
        cronoParado = true;

        document.getElementById('temporizador').innerText = '00:00:00';

    }

    function tempo(){
        ss++

        if(ss == 59){
            ss = 0;
            mm++
        }

        if(mm == 59){
            mm = 0;
            hh++
        }

        let format = (hh < 10 ? '0' + hh: hh)+ ':' +(mm < 10 ? '0' + mm: mm)+ ':' +(ss < 10 ? '0' + ss: ss);

        document.getElementById('temporizador').innerText = format;

        return {
            format
        }

    }

    return{
    iniciar,
    parar,
    zerar
    }
})()
