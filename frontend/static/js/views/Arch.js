import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("IE School Deisgn & Arhitecture");
    }

    async getHtml() {
        return `
            <h1> Welcome to IE School of Design & Architecture!</h1>
            <p>
                You can explore our different bachelors: <br>
            </p>
            <p>
                Bachelor in Design <br>
                Bachelor in Architecture <br>
            </p>

        `;
    }
}