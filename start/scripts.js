console.log('connected');

// TRACK THE CURRENT MOUSE POSITION AND ASSIGN A CUSOM PROPERTY
window.addEventListener('mousemove', (e) => {
    const posY = e.clientY + 'px';
    const posX = e.clientX + 'px';
    // console.log(posX, posY);

    document.body.style.setProperty('--x', posX);
    document.body.style.setProperty('--y', posY);

});

// CREATE REUSABLE LOGIC FOR CURSORS
const cursorEl = document.querySelector('.cursor');
function setCursor(value){
    cursorEl.setAttribute('data-type', value);
};
function resetCursor(){
    cursorEl.setAttribute('data-type', 'default');
};

// CHANGE THE CURSOR TYPE WHEN AN ELEMENT CONTAINS THE DATA-CURSOR ATTRIBUTE
const cursorItems = document.querySelectorAll('[data-cursor');
cursorItems.forEach(item => {
    const cursorValue = item.getAttribute('data-cursor');
    console.log(cursorValue);

    item.addEventListener('mouseover', () => { setCursor(cursorValue); });
    item.addEventListener('mouseleave', () => { resetCursor(); });

});

