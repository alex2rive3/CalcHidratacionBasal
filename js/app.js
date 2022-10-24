//variables que sera utilizados 
let volumenDiario = 0;
let peso = 0;
let mantenimineto=0;
let volumenMayores30kg2=0;
let volumenMayores30kg1=0;
let SuperficieCorporal =0;
let contenedor;
let calcular = document.getElementById("calcular");
//funcion para realizar los calculos de la hidratacion basal
function calcularHidratacionBasal() {
    //recuoeramos el valor que tine el imput
    peso = document.getElementById("peso").value;
    //preparamos el lugar en donde vamos a hacer un iinerhtml con la respuesta de los calculos
    contenedor = document.getElementById('resultado');

    if (peso<=0) {
        console.log("el peso no puede ser 0 kg o menos")
    }else if(peso >= 1 && peso<=10){
        volumenDiario = peso*100;
        mantenimineto = volumenDiario/24;
        contenedor.innerHTML = "<p>"+volumenDiario + ' <span class="medida">cc</span> '+Math.round(mantenimineto)+' <span class="medida"> cc/hr </span>  '+Math.round(mantenimineto*1.5)+'<span class="medida"> cc/hr</span></p>';
    }else if(peso >=11 && peso <=20){
        volumenDiario = 1000 + (peso-10)*50;
        mantenimineto = volumenDiario/24;
        contenedor.innerHTML = "<p>"+volumenDiario + ' <span class="medida">cc</span> '+Math.round(mantenimineto)+' <span class="medida"> cc/hr </span>  '+Math.round(mantenimineto*1.5)+'<span class="medida"> cc/hr</span></p>';
    }else if(peso >=21 && peso <=30){
        volumenDiario = 1500+((peso-20)*20);
        mantenimineto = volumenDiario/24;
        contenedor.innerHTML = "<p>"+volumenDiario + ' <span class="medida">cc</span> '+Math.round(mantenimineto)+' <span class="medida"> cc/hr </span>  '+Math.round(mantenimineto*1.5)+'<span class="medida"> cc/hr</span></p>';
    }else if (peso>=31){
        SuperficieCorporal = ( (peso * 4) + 7) / (peso + 90);
        volumenMayores30kg1 = SuperficieCorporal *1500;
        volumenMayores30kg2 = SuperficieCorporal *2000;
        contenedor.innerHTML ="<p>SC*1500: "+Math.round(volumenMayores30kg1)+ '<span class="medida"> cc/hr</span> <br>SC*2000: '+Math.round(volumenMayores30kg2)+'<span class="medida"> cc/hr</span></p>';
    }
}
