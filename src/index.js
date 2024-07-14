import { homePage } from './home';
import { menuPage } from './menu'
import { contactPage } from './contact';
import './style.css';

function refreshContainer(element) {
    const container = document.querySelector('section.content');

    // Remove Existing Content
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Add New Content
    container.appendChild(element);
}

// Event Listener
document.querySelector('nav > ul').addEventListener('click', (e) => {
    const buttonValue = e.target.id;
    if (buttonValue === 'menu') {
        refreshContainer(menuPage());
    }
    else if (buttonValue === 'contact') {
        refreshContainer(contactPage());
    }
    else {
        refreshContainer(homePage());
    }
})

document.querySelector('button#home').click();