// add any item in object
const item = {
    gems: ['diamond','pearl','ruby','sapphire','emerald','alexandrite','oriental catseye'] ,
    accessories: ['ring','pendant','anklet','bracelet','earring','brooch','locket'],
}; 
// random number 0 --> num
const randomIndex = num => Math.floor(Math.random() * num);
// array that gather text
let text = [];
// random item and sent text to array
for(let keys in item) {
    let idex = randomIndex(item[keys].length);
    switch (keys) {
        case 'gems':
            text.push('Your lucky gemstone is ' + item[keys][idex] + '.');
            break;
        case 'accessories':
            text.push('We offer ' + item[keys][idex] + ' for you.');           
            break;
    
        default:
            text.push('Item not found');
            break;
    }
};
// formatted array and print to console
const formattedText = text => {
    let newText = text.join('\n');
    console.log(newText);
}

formattedText(text);