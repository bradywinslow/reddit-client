const retrieveAndroidGamingData = async () => {
    const urlToFetch = 'https://www.reddit.com/r/AndroidGaming.json';

    try {
        const response = await fetch(urlToFetch, {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Request failed.');
            return null;
        }
    } catch(error) {
        console.error('Error during API call: ', error);
    }
};
