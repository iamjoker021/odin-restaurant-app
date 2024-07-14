function menuPage() {
    const menu = document.createElement('div');
    menu.classList.add('container');

    const unorderedList = document.createElement('ul');
    menu.appendChild(unorderedList);
    
    for (const content of ['this some contenet', 'to fill the list', 'a demo Menu section', 'with no styles']){
        const list = document.createElement('li');
        list.textContent = content;
        unorderedList.appendChild(list);
    }

    return menu;
}

export {
    menuPage
}