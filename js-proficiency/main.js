
function changeText() {
    const footerText = 'This is the proper footer text';
    const headerText =  'This is the proper header text';
    this.headerEl = document.querySelector('h1');
    this.headerEl.textContent = headerText;
    this.footerEl = document.querySelector('footer p');
    this.footerEl.textContent = footerText;
}

const buttonHandler = {
    makeFirstChange: () => {
        // copy logic goes here
        const theFirstObject = document.querySelector('#theFirstObject');
        const target = document.querySelector('#target');
        const theFirstObjectCopy = theFirstObject.cloneNode();
        theFirstObjectCopy.setAttr('id', '');
        theFirstObjectCopy.classList.add("theFirstObject");
        target.appendChild(theFirstObjectCopy);
    },
    makeSecondChange: () => {
    
    },
    makeThirdChange: () => {
    }
}

const copyFirstObjectButton = document.querySelector('[data-id="copy-first-object"]');
copyFirstObjectButton.addEventListener('click', () => {
    buttonHandler.makeFirstChange();
});

changeText();
// let headerText;
// var footerText;