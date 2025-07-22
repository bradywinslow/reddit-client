// Checks if url field is an external link
export default function isExternalLink(postUrl: string) {
    if (
        postUrl.includes('https://') &&
        !postUrl.includes('redditmedia.com') &&
        !postUrl.includes('.reddit.com') &&
        !postUrl.includes('.redd.it')
    ) {
        return true;
    } else {
        return false;
    }
}
