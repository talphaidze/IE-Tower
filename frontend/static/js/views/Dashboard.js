import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1> Welcome to IE University!</h1>
            <p>
                You can explore our different schools: <br>
            </p>
            <p>
                <a href="/iescitech" data-link>IE School of Science and Technology</a> <br>
                <a href="/iebusiness" data-link>IE Business School</a> <br>
                <a href="/iearch" data-link>IE School of Design & Architecture</a> <br>
                <a href="/ielaw" data-link>IE Law School</a>
            </p>

        `;
    }
}