function homePage() {
    const home = document.createElement('div');
    home.classList.add('container');

    const img = new Image();
    img.src = "https://media.istockphoto.com/id/153525271/photo/hands-on-pizza-takeaway.jpg?s=1024x1024&w=is&k=20&c=GAmzn-oaUPFoinnHMFTplVHI1YiAdY07mDWHQ0QUOBI=";
    home.appendChild(img);

    const description = document.createElement('p');
    description.textContent = 'This a wonderfull restaraunt, and it grear wesite';
    home.appendChild(description);

    const someContent = document.createElement('p');
    someContent.textContent = 'Check out the Menu and Contact by navigaitng the Tabs above';
    home.appendChild(someContent);

    return home;
}

export {
    homePage
}