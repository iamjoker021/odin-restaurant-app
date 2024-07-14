import { homePage } from './home';
import { menuPage } from './menu'
import { contactPage } from './contact';
import './style.css';

function renderElement() {
    const result = contactPage();
    console.log(result);
    return result;
}

const container = document.querySelector('section.content');
container.appendChild(renderElement());