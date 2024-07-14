function contactPage() {
    const contact = document.createElement('div');
    contact.classList.add('container');

    const unorderedList = document.createElement('ul');
    contact.appendChild(unorderedList);
    
    for (const content of ['linkedIn', 'github', 'hackerrank', 'twitter']){
        const list = document.createElement('li');
        list.textContent = content;
        unorderedList.appendChild(list);
    }

    return contact;
}

export {
    contactPage
}