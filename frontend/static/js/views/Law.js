import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("IE Law School");
    }

    async getHtml() {
        return `
            <h1> Welcome to IE Law School!</h1>
            <p>
                You can explore our different bachelors: <br>
            </p>
            <p>
                Bachelor in Law <br>
                Bachelor in Philosophy, Politics, Law & Economics (PPLE)<br>
            </p>

        `;
    }
}