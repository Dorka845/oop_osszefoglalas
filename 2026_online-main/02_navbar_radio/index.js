import {NavigationBar} from './NavigationBar.js';
import {ClassA} from './ClassA.js';
import {ClassB} from './ClassB.js';

const navbar = new NavigationBar();

const classA = new ClassA();
classA.appendTo(document.body);

const classB = new ClassB();
classB.appendTo(document.body);

navbar.addViewElement('ClassA oldala', classA);
navbar.addViewElement('ClassB oldala', classB);