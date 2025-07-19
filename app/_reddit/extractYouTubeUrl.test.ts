import extractYouTubeUrl from "./extractYouTubeUrl";

describe('extractYouTubeUrl', () => {
    test('return undefined if no YouTube video included in subreddit post', () => {
        // Arrange & Act
        const input = 'https://v.redd.it/b4omunriwfdf1/DASH_1080.mp4?source=fallback';

        // Assert
        expect(extractYouTubeUrl(input)).toBeUndefined();
    });

    test('', () => {
        // Arrange
        const input1 = 'https://www.youtube.com/embed/ItwgUesXsqs?feature=oembed';
        const input2 = 'https://www.youtube.com/embed/qsT08n_96p4?feature=oembed';
        const input3 = 'https://www.youtube.com/embed/XSRWDr4pUZ0?feature=oembed';

        // Act
        const result1 = extractYouTubeUrl(input1);
        const result2 = extractYouTubeUrl(input2);
        const result3 = extractYouTubeUrl(input3);

        // Assert
        expect(result1).toMatch('ItwgUesXsqs');
        expect(result2).toMatch('qsT08n_96p4');
        expect(result3).toMatch('XSRWDr4pUZ0');
    });
});
