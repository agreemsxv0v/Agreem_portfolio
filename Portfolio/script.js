const sideMenu= document.querySelector('#sideMenu');
const navbar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';

}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';

}

window.addEventListener('scroll',()=>{
    if(scrollY>50){
        navbar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/70','dark"bg-transparent')
    }else{
        navbar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/70','dark"bg-transparent');
    }

})

// -----------Light & Dark Mode------------
if(localStorage.theme ==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark');
}else{
    document.documentElement.classList.remove('dark');
}

function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
}

// --------------validating email----------------------
var emailField = document.getElementById("email-field");
function validateEmail(){
    if(!emailField.Value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        emailField.style.placeHolder = "Please Enter a valid Email-id";
        emailField.style.borderColor = "red";
    }
}