function hitungluas() { 
    var sisiluas = document.getElementById("sisi-luas").value;

    var style = document.getElementsByClassName("result-luas");
    console.log(style);
    document.getElementById("output-luas").innerHTML = '<span>'+sisiluas+'</span>';
}