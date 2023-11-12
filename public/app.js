document.querySelector("#toggle_dark_mode")
    .addEventListener("click", function (e) {
        e.preventDefault();

    let output=    document.querySelector('html').classList.toggle("dark");
         if (output) {
            localStorage.setItem("theme",'dark');;
         } else {
            localStorage.removeItem("theme");
         }
    }, false);




// load save preference dark more or not 

if (localStorage.theme === 'dark' || ('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add("dark")
} else {
    document.documentElement.classList.remove("dark")
}