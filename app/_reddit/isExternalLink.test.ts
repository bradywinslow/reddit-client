import isExternalLink from '../_reddit/isExternalLink';

describe('isExternalLink', () => {
    test('return true if url is an external link --> does not include redditmedia.com, reddit.com or redd.it', () => {
        // Arrange
        const postUrl = 'https://www.warframe.com/android';

        // Act
        const result = isExternalLink(postUrl);

        // Assert
        expect(result).toBeTruthy;
    });

    test('return false if url includes redditmedia.com', () => {
        // Arrange
        const postUrl = 'https://a.thumbs.redditmedia.com/EjPHYBAuXmAVfwh8EUaDGoDLZNDNuRW3zdDM7zW_YD4.jpg';

        // Act
        const result = isExternalLink(postUrl);

        // Assert
        expect(result).toBeFalsy;
    });

    test('return false if url includes reddit.com', () => {
        // Arrange
        const postUrl = 'https://www.reddit.com/gallery/1m5v6q9';

        // Act
        const result = isExternalLink(postUrl);
        // Assert
        expect(result).toBeFalsy;
    });

    test('return false if url includes redd.it', () => {
        // Arrange
        const postUrl = 'https://v.redd.it/ztqqm9p5caef1/DASH_1080.mp4?source=fallback';

        // Act
        const result = isExternalLink(postUrl);

        // Assert
        expect(result).toBeFalsy;
    });
});
