import { ViewElement } from "./viewElement.js";

class NavigationBar {
    /**
     * @type {ViewElement[]}
     */
    #viewElementList = [];

    /**
     * @type {HTMLDivElement}
     */
    #buttonbar;

    /**
     * @type {HTMLDivElement}
     */
    #viewContainer;

    constructor() {
        const navbar = document.createElement('div');
        navbar.id = 'navbar';

        this.#buttonbar = document.createElement('div');
        this.#buttonbar.classList.add('buttonbar');

        this.#viewContainer = document.createElement('div');
        this.#viewContainer.innerText = 'Kattints valamelyik gombra!';

        navbar.appendChild(this.#buttonbar);
        navbar.appendChild(this.#viewContainer);
        document.body.appendChild(navbar);
    }

    /**
     * 
     * @param {string} label 
     * @param {ViewElement} viewElement
     * @returns {void}
     */
    addViewElement(label, viewElement) {
        this.#viewElementList.push(viewElement);

        const button = document.createElement('button');
        button.id = `button_${viewElement.id}`;
        button.textContent = label;

        button.addEventListener('click', () => {
            const activeButton = this.#buttonbar.querySelector('.active');
            if (activeButton) {
                activeButton.classList.remove('active');
            }
            button.classList.add('active');

            this.#viewContainer.innerText = '';
            viewElement.appendTo(this.#viewContainer);
        });

        this.#buttonbar.appendChild(button);
    }

    /**
     * 
     * @param {string} id
     * @returns {void} 
     */
    navigate(id) {
        document.getElementById(`button_${id}`).click();
    }
}

export {NavigationBar}