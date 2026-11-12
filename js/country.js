import { getCountryFromAPI, getChannesFromCountryAPI } from "./api.js"
import { requestRenderChannels } from "./channels.js"

function requestRenderListCountry(data) {
    return `
        <li id="${data.code}" data-country="${data.name}">
            <div class="flex items-center gap-4 bg-black/40 hover:bg-black/20 px-2 py-1 cursor-pointer">
                <img class="h-13" src="https://flagsapi.com/${data.code}/flat/64.png" alt="channel-logo">
                <p class="text-white font-semibold">${data.name}</p>
            </div>
        </li>
    `
}

export async function loadListCountry() {

    const countryData = await getCountryFromAPI();

    const element_list = document.getElementById("list-country");
    if (!element_list) return false;

    countryData.forEach(value => {
        element_list.innerHTML += requestRenderListCountry(value);
    });

    element_list.addEventListener("click", async (event) => {

        const listItem = event.target.closest("li");

        if (listItem && listItem.id) {

            const list_channels = document.getElementById("list-channels");
            if (!list_channels) return false;

            const channels = await getChannesFromCountryAPI()
            if (!channels) return false;

            const result = channels.filter(code => { return code.countryCode === listItem.id})

            list_channels.innerHTML = "";
            result.forEach(data => list_channels.innerHTML += requestRenderChannels(data))

        }
    })

    const input_country_search = document.getElementById("input-search-country");
    if (!input_country_search) return false;

    const containers_country = document.querySelectorAll("[data-country]");
    if (!containers_country) return false;

    input_country_search.addEventListener("input", () => {
        const searchValue = input_country_search.value || "";
        containers_country.forEach(element => {

            element.classList.remove("hidden");

            if (!element.dataset.country.toLowerCase().trim().includes(searchValue.toLowerCase().trim()))
                element.classList.add("hidden");

        })
    })

}