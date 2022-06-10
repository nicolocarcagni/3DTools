function step(){
    let se = document.getElementById('se').value;
    let sc = document.getElementById('sc').value;
    let sr = document.getElementById('sr').value;
    if(se == "" || sc == "" || sr == ""){
        alert("Compila tutti i campi.")
    }
    stp = (se * sc) / sr;
    document.getElementById('result').innerHTML = stp.toFixed(2);
}

function flusso(){
    let fi = document.getElementById('fi').value;
    let spi = document.getElementById('spi').value;
    let spm = document.getElementById('spm').value;
    if(fi == "" || spi == "" || spm == ""){
        alert("Compila tutti i campi.")
    }
    fls = (fi * spi) / spm;
    lyr = 10000 / fls;
    document.getElementById('result').innerHTML = "Nuovo valore fusso: " + fls.toFixed(2);
    document.getElementById('result0').innerHTML = "Valore 1° layer: " + lyr.toFixed(2);
}