let switchNav = document.getElementById("switch");
let dropdown1 =document.getElementById("dd1");
let dropdown2 = document.getElementById("dd2");
let boton = document.getElementById("botoncito");
let mode = localStorage.getItem("Mode");

//Modo predeterminado (seleccionado previamente)
if(mode != null){
    if(mode == "dark"){
        document.body.className = "darkMode"
        switchNav.className = "navbar navbar-dark navbar-expand-lg"
        dropdown1.className = "dropdown-menu dropdown-menu-dark"
        dropdown2.className = "dropdown-menu dropdown-menu-dark"
        boton.innerText = "Light Mode";
    }
}
else{
    mode = "light";
}


boton.onclick = () => {
    if(mode=="light"){
        document.body.className = "darkMode";
        switchNav.classList.remove("bg-light");
        switchNav.classList.add("navbar-dark");
        dropdown1.classList.add("dropdown-menu-dark");
        dropdown2.classList.add("dropdown-menu-dark");
        boton.innerText = "Light Mode";
        mode = "dark";
    } 
    else{
        document.body.className = "lightMode";
        switchNav.classList.remove("navbar-dark");
        dropdown1.classList.remove("dropdown-menu-dark");
        dropdown2.classList.remove("dropdown-menu-dark");
        boton.innerText = "Dark Mode";
        mode = "light";        
    }
    localStorage.setItem("Mode",mode)
}
