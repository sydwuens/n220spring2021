// global variables 
let clickedCard = null;
let preventClick = false;

// mouse interaction, function that excecutes when the divs are clicked 
function onCardClicked(event) {
const target = event.currentTarget;


if(
// prevent click if the card has already been clicked
    preventClick ||
    target === clickedCard || 
    target.className.includes(' done')
    ){
    return;
}

target.className = target.className
        .replace('color-hidden', '')
        .trim();
        target.className += ' done';

if(!clickedCard){
    //if card has not been clicked, keep track and display color
    clickedCard = target;
} else if (clickedCard){
    preventClick = true;
    //if you have already clicked a card, check if the second card matches the first card
    if(
        // if the same card is clicked twice don't change anything
        clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')
        ){
        console.log('EQUAL');
        preventClick = true;
        console.log('NOT equal');
        // flips cards back over if they don't match
        setTimeout(() => {
            clickedCard.className = clickedCard.className.replace(' done', '').trim() + 'color-hidden';

            target.className = target.className.replace(' done', '').trim() + 'color-hidden';
        
            clickedCard = null;
            preventClick = false;

        }, 2000);
    } else{
    clickedCard = null;
    preventClick = false;
    }
}
}
