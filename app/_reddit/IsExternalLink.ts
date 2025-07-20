// Checks if url field is an external link
export default function isExternalLink(postUrl: string) {
    if (
        postUrl.includes('https://') &&
        !postUrl.endsWith('.jpg') &&
        !postUrl.endsWith('.png') &&
        !postUrl.includes('.reddit.com') &&
        !postUrl.includes('.redd.it')
    ) {
        return true;
    } else {
        return false;
    }
}
