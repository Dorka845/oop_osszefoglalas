import {ParentViewElementClass} from "./parentViewElementClass.js";

class ClassB extends ParentViewElementClass {
    constructor() {
        super('childB');

        const body = document.createElement("div");
        body.innerText = "ChildB";

        this.div.appendChild(body);
    }
}

export {ClassB}