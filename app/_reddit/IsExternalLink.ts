// Checks if url field is an external link
export default function IsExternalLink(postUrl: string) {
    if (
        postUrl.includes('https://') &&
        !postUrl.endsWith('.jpg') &&
        !postUrl.endsWith('.png') &&
        !postUrl.includes('.reddit.com') &&
        !postUrl.includes('.redd.it') &&
        !postUrl.includes('.youtube.com') &&
        !postUrl.includes('.youtu.be')
    ) {
        return true;
    } else {
        return false;
    }
}
