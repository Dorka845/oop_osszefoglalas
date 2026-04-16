import { ViewElement } from './viewElement';

class ClassB extends ViewElement {
    constructor() {
        super('classB');
        this.div.textContent = 'ClassBDiv';
    }
}

export {ClassB}