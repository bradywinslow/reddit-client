/* export default async function getSubredditData({ params }: { params: { page: string } }) {
    const res = await fetch(`http://localhost:3000/${params.page}`);
    const data = await res.json();
    return data.data;
} */


/* export default async function getSubredditData(page: { params: { page: string; }; }) {
    const res = await fetch(`https://www.reddit.com/r/${page}.json`);
    const data = await res.json();
    return data;
} */

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
