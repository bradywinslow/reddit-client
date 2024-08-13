// Extract YouTube URL if YouTube video is included in subreddit post
export default function extractYouTubeUrl(text: string) {
    const regex = /\/embed\/(.*?)\?/;
    const match = text?.match(regex);
    return match ? match[1] : undefined;
};
