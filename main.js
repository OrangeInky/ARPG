function tab (tab) {
    document.getElementById("Map").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}

var load = function() {
    tab();
}