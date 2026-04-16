import { ViewElement } from './viewElement.js';

class ClassB extends ViewElement {
    constructor() {
        super('classB');
        this.div.innerText = 'ClassBDiv';
    }
}

export {ClassB}