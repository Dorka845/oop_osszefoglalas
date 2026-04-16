import { NavigationBar } from './navigationbar.js';
import { ClassA } from './classA.js';
import { ClassB } from './classB.js';

const navbar = new NavigationBar();

const classA = new ClassA();
const classB = new ClassB();

navbar.addViewElement('Class A oldala', classA);
navbar.addViewElement('Class B oldala', classB);