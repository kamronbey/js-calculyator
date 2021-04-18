var screen = document.querySelector(`.input`);

document.querySelectorAll(`td`).forEach(function(td){
    td.addEventListener(`click` , function(e){
    var name = e.target.innerText;

    if (name == "C") {
        screen.value = "";
    } else if ( name == "=") {
        screen.value = eval(screen.value);
    } else {
        screen.value += name;
    }
    });
})