



function convertir() {
    let valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").html=valor
    let de=document.getElementById("de").value;
    let a=document.getElementById("a").value;
    let dolar= 101.88;
    let euro= 115.21;
    let real= 18.37;
    let resultado= 0;

    //PESO A USD
    if(de==1&&a==2)
    {
        resultado=valor/dolar;
    }
    //Peso a EURO
    else if(de==1&&a==3){
        resultado=valor/euro;
    }
    //USD a Peso
    else if(de==2&&a==1){
        resultado=valor*dolar;
    }
    //USD a Euro
    else if(de==2&&a==3){
        resultado=valor*(dolar/euro);
    }
    //Euro a Peso
    else if(de==3&&a==1){
        resultado=valor*euro;
    }
    //Euro a Dolar
    else if(de==3&&a==2){
        resultado=valor*(euro/dolar);
    }
    //Peso a Real
    else if(de==1&&a==4){
        resultado=valor/real;
    }
    //Real a Peso
    else if(de==4&&a==1){
        resultado=valor*real;
    }
    //USD a Real
    else if(de==2&&a==4){
        resultado=valor*(dolar/real);
    }
    //Real a USD
    else if(de==4&&a==2){
        resultado=valor*(real/dolar);
    }
    //Real a Euro
    else if(de==4&&a==3){
        resultado=valor*(real/euro);
    }
    //Euro a Real
    else if(de==3&&a==4){
        resultado=valor*(euro/real);
    }
    //MISMA MONEDA
    else{
        resultado=valor;
    }

    document.getElementById("resultado").innerHTML= "Resultado: $"+resultado.toFixed(2);



    
}

// Popover Bienvenida
$(document).ready(function() {

    $(".toast").toast("show");
    
});

//Popovers Ayuda

let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})