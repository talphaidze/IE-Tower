import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("IE Business School");
    }

    async getHtml() {
        return `
            <h1> Welcome to IE Business School!</h1>
            <p>
                You can explore our programs: <br>
            </p>
            <p>
                Bachelor in Business Administration <br>
                MBA <br>
                EMBA<br>
                Tech MBA
            </p>

        `;
    }
}