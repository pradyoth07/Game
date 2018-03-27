


export class Game {
    MyQuotes: string[] = [
        "Great minds think alike, but ...",
        "Axis of Evil",
        "There are two extremes"
    ];
    Players: User[] = [
        { Name: 'Moshe' }
    ];
    Picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1080-600.jpg';
    PlayedQuotes: Quote[] = [
        { Text: "Great minds think alike, but ...", PlayerName:'Moshe', Chosen: false }
    ];
}

export class User {
    Name: string;
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}