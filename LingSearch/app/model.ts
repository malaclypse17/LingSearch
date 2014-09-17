module Model {
    export class LingDoc {
        id: number;
        title: string;
        donor: string;
        description: string;
        author: string;
        year: number;
        language: string;
        city: string;
        url: string;
        fullFile: string;
        croppedFile: string;
        illustrations: string;
        titlePage: string;
        titlepageThumbnail: string;
        tags: Array<number>;
        constructor() {
            this.title = "";
            this.language = "Svenska";
            this.illustrations = "Inga illustrationer";
        }
    }

    export class Tag {
        id: number;
        name: string;
    }
}