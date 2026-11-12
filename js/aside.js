export function loadAsideEvents() {

    const aside_element = document.getElementById("aside-country");
    const img_aside_element = document.getElementById("img-aside-country");
    const btn_aside_element = document.getElementById("btn-close-aside");

    if (img_aside_element) {
        img_aside_element.addEventListener("click", () => {
            if (!aside_element) return false;
            aside_element.classList.toggle("hidden");
        })
    }

    if (btn_aside_element) {
        btn_aside_element.addEventListener("click", () => {
            if (!aside_element) return false;
            aside_element.classList.add("hidden");
        })
    }

    return true;

}