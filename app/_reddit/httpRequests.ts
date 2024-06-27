export default async function getSubredditData({ params }: { params: { page: string } }) {
    const urlToFetch = `https://www.reddit.com/r/${params.page}.json`;

    try {
        const response = await fetch(urlToFetch, {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Request failed with status: ', response.status);
            return null;
        }
    } catch(error) {
        console.error('Error during API call: ', error);
        return null;
    }
};
