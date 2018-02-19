
window.onload = function(){
    cargarProvincias();
}

function cargarProvincias(){
    var xhttp = new XMLHttpRequest();
    var sLink = "https://raw.githubusercontent.com/dariosus/jsonProvincias/master/provincias.json"
    //xhttp.responseType = "json"
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var oProv = JSON.parse(this.responseText); //this.response 
            var cboProvincia = document.getElementById("cboProvincia");

            for(i=0;i<oProv.length;i++){
                var option = document.createElement("option");
                option.text = oProv[i].state;
                cboProvincia.add(option);
            }
        }
    };
    xhttp.open("GET", sLink, true);
    xhttp.send();
}

function btnCalcular_onClick(){
    var rImporte = parseFloat(document.getElementById("txtImporte").value);
    var rTaza = parseFloat(document.getElementById("txtTaza").value);

    if(isNaN(rImporte) || isNaN(rTaza)) return;

    document.getElementById("txtCuota").value = Cuota(rImporte,rTaza);
    document.getElementById("txtTotal").value = Total(rImporte,rTaza);
}

function Total(rImporte,rTaza){
    return (rImporte*(1+(rTaza/100))).toFixed(2);
}

function Cuota(rImporte,rTaza){
    return (Total(rImporte,rTaza)/12).toFixed(2);
}

function btnBorrar_onClick(){
    var oInput = document.getElementsByTagName("input")
    for(i=0;i<oInput.length;i++){
        oInput[i].value="";
    }
}
