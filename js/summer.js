function getElementValue(elementID) {
    const element = document.getElementById(elementID);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

function setValueTotal(elementID, value) {
    const totalValueElement = document.getElementById(elementID);
    totalValueElement.innerText = value;
}

function addToEntryElement(text){
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.innerText = `${count+1}. ${text}`;
    p.classList.add('text-2xl', 'font-medium')
    calculationEntry.appendChild(p);
}




document.getElementById('kitchenware-one').addEventListener('click', function () {
    const kitchenwareOneValue = getElementValue('kitchenware-one-value');

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + kitchenwareOneValue;

    setValueTotal('total-price', totalPrice);

    addToEntryElement('K. Accessories');
})

document.getElementById('kitchenware-two').addEventListener('click', function () {
    const kitchenwareTwoValue = getElementValue('kitchenware-two-value')

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + kitchenwareTwoValue;

    setValueTotal('total-price', totalPrice)

    addToEntryElement('Home Cooker');

})

document.getElementById('home-cooker').addEventListener('click', function () {
    const homeCookerValue = getElementValue('home-cooker-price')

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + homeCookerValue;

    setValueTotal('total-price', totalPrice)

    addToEntryElement('Home Cooker');
})

document.getElementById('sports-cap').addEventListener('click', function () {
    const sportsCapValue = getElementValue('sports-cap-price')

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + sportsCapValue;

    setValueTotal('total-price', totalPrice)

    addToEntryElement('Sports Back Cap');

})

document.getElementById('jersey').addEventListener('click', function () {
    const jerseyValue = getElementValue('jersey-price')

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + jerseyValue;

    setValueTotal('total-price', totalPrice)

    addToEntryElement('Full Jersey Set');
})

document.getElementById('cates').addEventListener('click', function () {
    const catesValue = getElementValue('cates-price')

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + catesValue;

    setValueTotal('total-price', totalPrice)

    addToEntryElement('Sports cates');
})



console.log(document.getElementById('total-price').innerText);;


