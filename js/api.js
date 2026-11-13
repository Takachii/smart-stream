let CHANNELS = [];

export async function getCountryFromAPI() {

    try {

        const response = await fetch("https://iptv-org.github.io/api/countries.json");

        if (!response.ok) {
            let message = `Failed to fetch category country (Status: ${response.status})`;

            if (response.status === 404) {
                message = "The requested category country could not be found.";
            } else if (response.status === 500) {
                message = "The API server encountered an internal error. Please try again later.";
            }

            throw new Error(message);
        }

        const data = await response.json();
        const result = data.filter(country => { return country.code === "MA" || country.code === "TN" || country.code === "FR" || country.code === "ES" || country.code === "BE" || country.code === "QA" })
        return result;

    } catch (error) {

        const text_error = document.getElementById("text-error");
        if (!text_error) return false;
        text_error.textContent = error;
        text_error.classList.remove("text-white")
        text_error.classList.add("text-red-500")

    }

}

export async function getChannesFromCountryAPI() {

    if (CHANNELS.length > 0) return CHANNELS;

    try {

        const response = await fetch("https://6af352bbd2377d6c3704e947.mockapi.io/api/v1/channels");

        if (!response.ok) {
            
            let message = `Failed to fetch category channels (Status: ${response.status})`;

            if (response.status === 404) {
                message = "The requested category channels could not be found.";
            } else if (response.status === 500) {
                message = "The API server encountered an internal error. Please try again later.";
            }

            throw new Error(message);

        }

        const data = await response.json();
        CHANNELS = [...data];

        return CHANNELS;

    } catch (error) {
        
        const text_error = document.getElementById("text-error");
        if (!text_error) return false;
        text_error.textContent = error;
        text_error.classList.remove("text-white")
        text_error.classList.add("text-red-500")

    }

}