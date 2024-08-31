// import { subredditData } from "./subredditData";

// Generate random number between 0 and 16
function randomNumberGenerator() {
    return Math.floor((Math.random() * 17));
}
// Generate 5 random numbers between 0 and 16 with no overlap
function generateFiveRandomNumbers() {
    let randomNumbers: number[] = [];

    while (randomNumbers.length < 5) {
        // Generate random number x
        let x = randomNumberGenerator(); 
        // Check if x has already been added to randomNumbers array
        if (randomNumbers.includes(x)) {
            // If x already included in randomNumbers array, generate a new random number
            x = randomNumberGenerator();
        } else{
            // If x not included in randomNumbers array, add it
            randomNumbers.push(x);
        }
    }
    return randomNumbers;
}

console.log(generateFiveRandomNumbers());

// Use random number generator to decide which subreddits to fetch data from
// Fetch data from subreddits and store in an array
// Sort data based on time posted starting with most recent

export default async function getHomePageData() {
    let homePageData = [];
    
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
