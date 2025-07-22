import removeZeroWidthSpaces from "./removeZeroWidthSpaces";

describe('removeZeroWidthSpaces', () => {
    test('return string with zero-width space removed', () => {
        // Arrange
        const example1 = 'This is an example of text that has a zero-width space.\n\n&amp;#x200B;\n\n';
        const example2 = 'And here is a second example \n\n&amp;#x200B;\n\nof a string with a zero-width space.';

        // Act
        const result1 = removeZeroWidthSpaces(example1);
        const result2 = removeZeroWidthSpaces(example2);

        // Assert
        expect(result1).toBe('This is an example of text that has a zero-width space.\n\n\n\n');
        expect(result2).toBe('And here is a second example \n\n\n\nof a string with a zero-width space.');
    });

    test('return string as it because there is no zero-width space to remove', () => {
        // Arrange
        const example = 'This example does not have a zero-width space in it.'

        // Act
        const result = removeZeroWidthSpaces(example);

        // Assert
        expect(result).toBe('This example does not have a zero-width space in it.');
    })
});
