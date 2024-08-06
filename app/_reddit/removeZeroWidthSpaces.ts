// Replace any zero-width spaces returned from the Markdown as blank strings.
export default function removeZeroWidthSpaces(text: string) {
    return text.replace(/&amp;#x200B;/g, '');
};
