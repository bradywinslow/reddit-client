import { formatDistance } from "date-fns";

// Convert date/time Reddit post created to time elapsed since post created
export default function convertUtcToTimeElapsed(time?: number) {
    if (!time) return ''; // return an empty string if time is undefined
    
    const currentDate = new Date(0);
    const timeElapsed = formatDistance(currentDate.setUTCSeconds(time), Date.now(), { addSuffix: true});
    return timeElapsed;
}
