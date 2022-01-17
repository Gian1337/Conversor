



function convertir() {
    let valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").html=valor
    let de=document.getElementById("de").value;
    let a=document.getElementById("a").value;
    let dolar= 101.88;
    let euro= 115.21;
    let real= 18.37;
    let gbp= 139.73;
    let chf= 112.23;
    let dkk= 15.69;
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
    //Peso a GBP
    else if(de==1&&a==5){
        resultado=valor/gbp;
    }
    //GBP a Peso
    else if(de==5&&a==1){
        resultado=valor*gbp
    }
    //GBP a Dolar
    else if(de==5&&a==2){
        resultado=valor*(gbp/dolar);
    }
    //Dolar a GPB
    else if(de==2&&a==5){
        resultado=valor*(dolar/gbp);
    }
    //GBP a Euro
    else if(de==5&&a==3){
        resultado=valor*(gbp/euro);
    }
    //Euro a GBP
    else if(de==3&&a==5){
        resultado=valor*(euro/gbp);
    }
    //GBP a Real
    else if(de==5&&a==4){
        resultado=valor*(gbp/real);
    }
    //Real a GBP
    else if(de==4&&a==5){
        resultado=valor*(real/gbp);
    }
    //Peso a CHF
    else if(de==1&&a==6){
        resultado=valor/chf;
    }
    //CHF a Peso
    else if(de==6&&a==1){
        resultado=valor*chf;
    }
    //CHF a Dolar
    else if(de==6&&a==2){
        resultado=valor*(chf/dolar);
    }
    //Dolar a CHF
    else if(de==2&&a==6){
        resultado=valor*(dolar/chf);
    }
    //CHF a Euro
    else if(de==6&&a==3){
        resultado=valor*(chf/euro);
    }
    //Euro a CHF
    else if(de==3&&a==6){
        resultado=valor*(euro/chf);
    }
    //CHF a Real
    else if(de==6&&a==4){
        resultado=valor*(chf/real);
    }
    //Real a CHF
    else if(de==4&&a==6){
        resultado=valor*(real/chf);
    }
    //CHF a GBP
    else if(de==6&&a==5){
        resultado=valor*(chf/gbp);
    }
    //GBP a CHF
    else if(de==5&&a==6){
        resultado=valor*(gbp/chf);
    }
    //Peso a DKK
    else if(de==1&&a==7){
        resultado=valor/dkk;
    }
    //DKK a Peso
    else if(de==7&&a==1){
        resultado=valor*dkk
    }
    //DKK a Dolar
    else if(de==7&&a==2){
        resultado= valor*(dkk/dolar);
    }
    //Dolar a DKK
    else if(de==2&&a==7){
        resultado=valor*(dolar/dkk);
    }
    //DKK a Euro
    else if(de==7&&a==3){
        resultado=valor*(dkk/euro);
    }
    //Euro a DKK
    else if(de==3&&a==7){
        resultado=valor*(euro/dkk);
    }
    //DKK a Real
    else if(de==7&&a==4){
        resultado=valor*(dkk/real);
    }
    //Real a DKK
    else if(de==4&&a==7){
        resultado=valor*(real/dkk);
    }
    //DKK a GBP
    else if(de==7&&a==5){
        resultado=valor*(dkk/gbp);
    }
    //GBP a DKK
    else if(de==5&&a==7){
        resultado=valor*(gbp/dkk);
    }
    //DKK a CHF
    else if(de==7&&a==6){
        resultado=valor*(dkk/chf);
    }
    //CHF a DKK
    else if(de==6&&a==7){
        resultado=valor*(chf/dkk);
    }
    //MISMA MONEDA
    else{
        resultado=valor;
    }

    document.getElementById("resultado").innerHTML= "Resultado: $"+resultado.toFixed(4);
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


//AJAX POST

function enviarForm() {
    let mail = $("#btnForm").value;

    $.ajax({
        type:"post",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: mail,
        success:function () {
            $("#mensaje").html("Gracias por suscribirte!");
            $("#mensaje").fadeIn(2000).fadeOut(2000);
            
        }
    });
}
