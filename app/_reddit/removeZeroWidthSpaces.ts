// Replace any zero-width spaces returned from the Markdown as blank strings.
export default function removeZeroWidthSpaces(postText: string) {
    return postText.replace(/&amp;#x200B;/g, '');
};
