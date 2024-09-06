import { subredditData } from "./subredditData";

// Generate random number between 0 and 16
function randomNumberGenerator() {
    return Math.floor((Math.random() * 17));
}
// Generate 3 random numbers between 0 and 16 with no overlap
function generateFiveRandomNumbers() {
    let randomNumbers: number[] = [];

    while (randomNumbers.length < 3) {
        // Generate random number x
        let x = randomNumberGenerator(); 
        // Check if x has already been added to randomNumbers array
        if (randomNumbers.includes(x)) {
            // If x already included in randomNumbers array, generate new random number and assign to x
            x = randomNumberGenerator();
        } else{
            // If x not included in randomNumbers array, add it
            randomNumbers.push(x);
        }
    }
    return randomNumbers;
}

// Use random number generator to decide which subreddits to fetch data from
function subredditsToDisplayOnHomePage() {
    let subRedditsToDisplayArray = [];
    let x = generateFiveRandomNumbers();
    
    for (let i = 0; i < x.length; i++) {
        subRedditsToDisplayArray.push(subredditData[x[i]]);
    }
    return subRedditsToDisplayArray;
}

// API call
async function getHomePageData({ params }: { params: { page: string } }) {
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

export { subredditsToDisplayOnHomePage, getHomePageData };
