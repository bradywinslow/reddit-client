import isExternalLink from '../_reddit/isExternalLink';

describe('isExternalLink', () => {
    test('return true if url is an external link'), () => {
        // Arrange
        const postUrl1 = '';
        const postUrl2 = '';
        const postUrl3 = '';

        // Act
        const result1 = isExternalLink(postUrl1);
        const result2 = isExternalLink(postUrl2);
        const result3 = isExternalLink(postUrl3);

        // Assert
        expect(result1).toBeTruthy;
        expect(result2).toBeFalsy;
        expect(result3).toBeTruthy;

    };
});




/*
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
*/
