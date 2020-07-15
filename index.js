let cronometro = (function (){
    //váriaveis de declaração de hora, minuto, segundo, estado do cronometro,intervalo de tempo que será usado e o própria cornometro para receber a função de tempo
    let temporizador = document.getElementById('temporizador');
    let cronoParado = true;
    let intervalo = 1000;
    let cron;
    //função de iniciar que chama a função tempo usando um intervalo ná determinado para executa-la
    function iniciar(){ 
        if(cronoParado){
            cronoParado = false;//declara que quando iniada essa função o conometro não está mais parado
            cron = setInterval(() =>{//chama a função de tempo usando o intervalo determinado
            estaticas.tempo();
            }, intervalo);  
        }
    }
    function parar(){
        clearInterval(cron);
        cronoParado = true;

    }

    function zerar(){
        estaticas.hh = 0;
        estaticas.mm = 0;
        estaticas.ss = 0;
        clearInterval(cron);
        cronoParado = true;

        temporizador.innerText = '00:00:00';

    }

    return{
    iniciar,
    parar,
    zerar
    }

})()

let estaticas = (function(){
    let hh = 0;
    let mm = 0;
    let ss = 0;
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

        temporizador.innerText = format;

        return {
            format
        }

    }
    return {tempo}
})()
