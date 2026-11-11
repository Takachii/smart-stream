const COUNTRY_LIST = ["MA","TN","DZ","ES","FR","BE"]

export async function getCountryFromAPI() {

    const result = [];

    try {

        const response = await fetch("https://iptv-org.github.io/api/countries.json");

        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        for (const object of data) {
            for (const value of COUNTRY_LIST) {
                if (value === object.code) 
                    result.push(object);
            }
        }

        return result;

    } catch (error) {
        console.log(error)
    } finally {

    }

}

export async function getChannesFromCountryAPI(CODE) {

    try {

        const response = await fetch("https://6af352bbd2377d6c3704e947.mockapi.io/api/v1/channels");

        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);

        const result = await response.json();
        const data = result.filter(value => {
            return value.countryCode === CODE
        })

        return data;

    } catch (error) {
        console.log(error)
    }

}