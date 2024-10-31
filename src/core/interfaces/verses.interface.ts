export interface IVerses {
    book: string;
    verses: IVerse[];
}

export interface IVerse {
    chapter: string;
    verse: string;
    text: string;
    colors: string[];
    textColor: string;
}