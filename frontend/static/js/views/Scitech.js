import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("IE School of Science & Technology");
    }

    async getHtml() {
        return `
            <h1> Welcome to IE School of Science & Technology!</h1>
            <p>
                You can explore our different bachelors: <br>
            </p>
            <p>
                Bachelor in Computer Science & AI <br>
                Bachelor in Applied Mathematics <br>
                Bachelor in Business and Data Analytics<br>
                Bachelor in Data Science<br>
            </p>

        `;
    }
}
