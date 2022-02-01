export class HttpClient {
    public static apiKey: string = 'fced4ea393524a4d871cbcd4c9859db5';
    public static baseURL: string = 'https://api.rawg.io/api/games';
    static async getGames(page?: number) {
        let url = this.baseURL + "?key=" + this.apiKey;
        url += "&page=" + (page ? page : "1");
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }
}