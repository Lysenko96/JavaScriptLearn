function selector() {
    var sel = document.getElementById('selector').selectedIndex;
    var options = document.getElementById('selector').options;
    alert("Select option: " + options[sel].text);
}