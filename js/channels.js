import { getChannesFromCountryAPI } from "./api.js"

export function requestRenderChannels(data) {
    return `
        <li id="${data.id}" data-channel="${data.name}">
            <div class="flex items-center gap-4 bg-black/40 hover:bg-black/20 transition duration-300 px-2 py-1 rounded-md cursor-pointer">
                <img class="h-13" src="assets/images/test.png" alt="channel-logo">
                <p class="text-white font-semibold">${data.channelNumber}</p>
                <p class="text-white font-semibold">${data.name}</p>
            </div>
        </li>
    `
}

export function loadChannelEvents() {

    const ul_channels = document.getElementById("list-channels");
    ul_channels.addEventListener("click", async (event) => {

        const listItem = event.target.closest("li");
        if (listItem && listItem.id) {

            const channelsObject = await getChannesFromCountryAPI();
            if (!channelsObject) return false;

            const selectedChannelObject = channelsObject.filter(channel => { return channel.id === listItem.id });
            if (!selectedChannelObject) return false;

            const channel_preview = document.getElementById("channel-preview");
            const streamUrl = selectedChannelObject[0].streamUrl;

            channel_preview.src = streamUrl;
            channel_preview.addEventListener("loadedmetadata", () => {
                channel_preview.play();
            });

            if (selectedChannelObject[0].epg)  {

                const list_epg = document.getElementById("list-epg");
                if (list_epg) {
                    list_epg.innerHTML = "";
                    list_epg.innerHTML = `
                        <li>
                            <div class="shadow-xl">
                                <h1 class="text-white text-2xl font-semibold">${selectedChannelObject[0].epg.currentProgram} | ${selectedChannelObject[0].name}</h1>
                                <p class="text-gray-400">Start Time: ${selectedChannelObject[0].epg.startTime} End Time: ${selectedChannelObject[0].epg.endTime} | ${selectedChannelObject[0].epg.progressPercentage}%</p>
                            </div>
                        </li>
                    `
                }

            }

        }

    })

    const search_channels = document.getElementById("search-channels");
    search_channels.addEventListener("input", () => {
       
        const containers_channels = document.querySelectorAll("[data-channel]");
        if (!containers_channels) return false;

        const searchValue = search_channels.value || "";
        containers_channels.forEach(element => {

            element.classList.remove("hidden");

            if (!element.dataset.channel.toLowerCase().trim().includes(searchValue.toLowerCase().trim()))
                element.classList.add("hidden");

        })
    })

}