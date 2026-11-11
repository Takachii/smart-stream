export function requestRenderChannels(data) {
    return `
        <li>
            <div class="flex items-center gap-4 bg-black/40 hover:bg-black/20 transition duration-300 px-2 py-1 rounded-md cursor-pointer">
                <img class="h-13" src="assets/images/test.png" alt="channel-logo">
                <p class="text-white font-semibold">${data.channelNumber}</p>
                <p class="text-white font-semibold">${data.name}</p>
            </div>
        </li>
    `
}