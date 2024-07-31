export default function removeZeroWidthSpaces(postText: string) {
    // Replace any zero-width spaces returned from the Markdown as blank strings.
    return postText.replace(/&amp;#x200B;/g, '');
};
