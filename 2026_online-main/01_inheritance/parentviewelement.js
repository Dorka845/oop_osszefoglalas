class ParentViewElementClass{
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        this.#id = id;
        this.#div = document.createElement("div");
        this.#div.classList.add('card');

        const head = document.createElement('div');

        head.classList.add('head');
        head.innerText = "id:" + id;
        this.#div.appendChild(head);
    }

    /**
     * 
     * @returns {HTMLDivElement}
     */
    get div() {
        return this.#div;
    }

    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent) {
        parent.appendChild(this.#div);
    }
}

export {ParentViewElementClass}