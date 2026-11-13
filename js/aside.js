export function loadAsideEvents() {
    
    const aside_element = document.getElementById("aside-country");
    if (aside_element) {
        aside_element.addEventListener("click", (event) => {
            if (event.currentTarget === event.target)
                aside_element.classList.add("hidden");
        })
    }

    const img_aside_element = document.getElementById("img-aside-country");
    if (img_aside_element) {
        img_aside_element.addEventListener("click", () => {
            if (!aside_element) return false;
            aside_element.classList.toggle("hidden");
        })
    }

    const btn_aside_element = document.getElementById("btn-close-aside");
    if (btn_aside_element) {
        btn_aside_element.addEventListener("click", () => {
            if (!aside_element) return false;
            aside_element.classList.toggle("hidden");
        })
    }

    return true;

}