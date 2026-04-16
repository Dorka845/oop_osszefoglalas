import { ViewElement } from './viewElement.js';

class ClassA extends ViewElement {
    constructor() {
        super('classA');
        this.div.innerText = 'ClassADiv';
    }
}

export {ClassA}