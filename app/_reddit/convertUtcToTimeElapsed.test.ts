import convertUtcToTimeElapsed from './convertUtcToTimeElapsed';

describe('convertUtcToTimeElapsed', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });
    
    test('return an empty string if time is undefined', () => {
        // Arrange & Act
        const convertedTime = convertUtcToTimeElapsed();

        // Assert
        expect(convertedTime).toBe('');
    });

    test('return an empty string if time is zero', () => {
        // Arrange & Act
        const convertedTime = convertUtcToTimeElapsed(0);

        // Assert
        expect(convertedTime).toBe('');
    });
    
    test('returns less than a minute ago', () => {
        // Arrange
        const mockNow = new Date('2025-01-01T00:00:25Z'); // 25 seconds
        jest.setSystemTime(mockNow);
        
        // Act
        const twentyFiveSecondsAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(twentyFiveSecondsAgo);

        // Assert
        expect(result).toBe('less than a minute ago');

    });

    test('returns 13 minutes ago', () => {
        // Arrange
        const mockNow = new Date('2025-01-01T00:13:00Z'); // 13 minutes
        jest.setSystemTime(mockNow);
        
        // Act
        const thirteenMinutesAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(thirteenMinutesAgo);

        // Assert
        expect(result).toBe('13 minutes ago');
    });

    test('returns about 1 hour ago', () => {
        // Arrange
        const mockNow = new Date('2025-01-01T01:00:00Z'); // 1 hour
        jest.setSystemTime(mockNow);
        
        // Act
        const oneHourAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(oneHourAgo);

        // Assert
        expect(result).toBe('about 1 hour ago');
    });

    test('returns about 4 hours ago', () => {
        // Arrange
        const mockNow = new Date('2025-01-01T04:00:00Z'); // 4 hours
        jest.setSystemTime(mockNow);
        
        // Act
        const fourHoursAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(fourHoursAgo);

        // Assert
        expect(result).toBe('about 4 hours ago');
    });

    test('returns 1 day ago', () => {
        // Arrange
        const mockNow = new Date('2025-01-02T01:00:00Z'); // 25 hours
        jest.setSystemTime(mockNow);
        
        // Act
        const oneDayAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(oneDayAgo);

        // Assert
        expect(result).toBe('1 day ago');
    });

    test('returns 17 day ago', () => {
        // Arrange
        const mockNow = new Date('2025-01-18T00:00:00Z'); // 17 days
        jest.setSystemTime(mockNow);
        
        // Act
        const seventeenDaysAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(seventeenDaysAgo);

        // Assert
        expect(result).toBe('17 days ago');
    });

    test('returns about 1 month ago', () => {
        // Arrange
        const mockNow = new Date('2025-02-03T00:00:00Z'); // 1 month, 3 days
        jest.setSystemTime(mockNow);
        
        // Act
        const oneMonthAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(oneMonthAgo);

        // Assert
        expect(result).toBe('about 1 month ago');
    });

    test('returns 7 months ago', () => {
        // Arrange
        const mockNow = new Date('2025-08-01T00:00:00Z'); // 7 months
        jest.setSystemTime(mockNow);
        
        // Act
        const sevenMonthsAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(sevenMonthsAgo);

        // Assert
        expect(result).toBe('7 months ago');
    });

    test('returns about 1 year ago', () => {
        // Arrange
        const mockNow = new Date('2026-01-01T00:00:00Z'); // 1 year
        jest.setSystemTime(mockNow);
        
        // Act
        const oneYearAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(oneYearAgo);

        // Assert
        expect(result).toBe('about 1 year ago');
    });

    test('returns almost 2 years ago', () => {
        // Arrange
        const mockNow = new Date('2026-11-01T00:00:00Z'); // 1 year, 10 months
        jest.setSystemTime(mockNow);
        
        // Act
        const twoYearsAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(twoYearsAgo);

        // Assert
        expect(result).toBe('almost 2 years ago');
    });

    test('returns about 3 years ago', () => {
        // Arrange
        const mockNow = new Date('2028-01-01T00:00:00Z'); // 3 years
        jest.setSystemTime(mockNow);
        
        // Act
        const threeYearsAgo = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000);
        const result = convertUtcToTimeElapsed(threeYearsAgo);

        // Assert
        expect(result).toBe('about 3 years ago');
    });

})
