export function getRandomWidthAndHeight(maxWidth: number = 100, maxHeight: number = 100): string {
    const randomWidth = Math.floor(Math.random() * (maxWidth + 1));
    const randomHeight = Math.floor(Math.random() * (maxHeight + 1));
    return `${randomWidth}% ${randomHeight}%`;
}
