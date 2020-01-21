function myFunctionBereken() {
    var diameter = document.getElementById("input").value;
    var straal = (Math.PI * diameter).toFixed(2);
    document.getElementById("uitkomst").innerHTML = "De omtrek van de cirkel is " + straal;
}