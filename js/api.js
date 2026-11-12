let CHANNELS = [];

export async function getCountryFromAPI() {

    try {

        const response = await fetch("https://iptv-org.github.io/api/countries.json");

        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        const result = data.filter(country => { return country.code === "MA" || country.code === "TN" || country.code === "FR" || country.code === "ES" || country.code === "BE" || country.code === "QA" })
        return result;

    } catch (error) {
        console.log(error)
    } finally {

    }

}

export async function getChannesFromCountryAPI() {

    if (CHANNELS.length > 0) return CHANNELS;

    try {

        const response = await fetch("https://6af352bbd2377d6c3704e947.mockapi.io/api/v1/channels");

        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        CHANNELS = [...data];

        return CHANNELS;

    } catch (error) {
        console.log(error)
    }

}