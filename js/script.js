function hitungluas() { 

    var sisiluas = document.getElementById("sisi-luas").value;
    sisiluas = parseInt(sisiluas);
    var hasil = sisiluas * sisiluas;
    document.getElementById("output-luas").innerHTML = hasil;
    document.getElementById("perhitungan-luas").innerHTML = sisiluas;
    document.getElementById("perhitungan-luas2").innerHTML = sisiluas;
}