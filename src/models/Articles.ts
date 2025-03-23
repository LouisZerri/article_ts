import axios from "axios";

export class Articles {
    public id: number;
    public title: string;
    public description: string;

    public constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public static async fetchArticles(): Promise<Articles[]> {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            const limitedArticles = response.data.slice(0, 10);

            // On crée les objets Articles à partir des données récupérées
            return limitedArticles.map((data: { id: number; title: string; body: string }) => {
                return new Articles(data.id, data.title, data.body);
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des articles :", error);
            return [];
        }
    }

    public displayArticles(): string {
        return `<div style="
            border: 2px solid #333; 
            border-radius: 10px; 
            padding: 20px;
            margin: 20px;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2); 
            background-color: #f9f9f9;
            font-family: Arial, sans-serif;">
            <h1 style="color: #007BFF; font-size: 24px; margin-bottom: 10px;">Article n° ${this.id}</h1>
            <h3 style="color: #333; font-size: 20px; margin-bottom: 10px;">${this.title}</h3>
            <p style="color: #555; font-size: 16px; line-height: 1.5;">${this.description}</p>
        </div>`;
    }
}
