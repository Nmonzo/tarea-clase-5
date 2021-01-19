    document.querySelector('#calculartiempo').onclick = function (){
        let hora1 = Number(document.querySelector("#horas1").value);
        let hora2 = Number(document.querySelector("#horas2").value);
        let hora3 = Number(document.querySelector("#horas3").value);
        let hora4 = Number(document.querySelector("#horas4").value);
        let hora5 = Number(document.querySelector("#horas5").value);
    
        let minuto1 = Number(document.querySelector("#minutos1").value);
        let minuto2 = Number(document.querySelector("#minutos2").value);
        let minuto3 = Number(document.querySelector("#minutos3").value);
        let minuto4 = Number(document.querySelector("#minutos4").value);
        let minuto5 = Number(document.querySelector("#minutos5").value);
        
        let segundo1 = Number(document.querySelector("#segundos1").value);
        let segundo2 = Number(document.querySelector("#segundos2").value);
        let segundo3 = Number(document.querySelector("#segundos3").value);
        let segundo4 = Number(document.querySelector("#segundos4").value);
        let segundo5 = Number(document.querySelector("#segundos5").value);

        let horasTotales = hora1 + hora2 + hora3 + hora4 + hora5
        let minutosTotales = minuto1 + minuto2 + minuto3 + minuto4 + minuto5
        let segundosTotales = segundo1 + segundo2 + segundo3 + segundo4 + segundo5

        let tiempoTotal = horasTotales ('horas') + minutosTotales ('minutos') + segundosTotales ('segundos') 

    document.querySelector('#tiempototal') = tiempoTotal
        return false;
}
