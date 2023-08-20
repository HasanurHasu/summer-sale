


document.getElementById('kitchenware-one').addEventListener('click', function () {
    const kitchenwareOneValue = getElementValue('kitchenware-one-value');

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + kitchenwareOneValue;

    setValueTotal('total-price', totalPrice);
})

document.getElementById('kitchenware-two').addEventListener('click', function () {
    const kitchenwareTwoValue = getElementValue('kitchenware-two-value')

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + kitchenwareTwoValue;

    setValueTotal('total-price', totalPrice)

})

document.getElementById('home-cooker').addEventListener('click', function () {
    const homeCookerValue = getElementValue('home-cooker-price')

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + homeCookerValue;

    setValueTotal('total-price', totalPrice)

})

document.getElementById('sports-cap').addEventListener('click', function () {
    const sportsCapValue = getElementValue('sports-cap-price')

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + sportsCapValue;

    setValueTotal('total-price', totalPrice)

})

document.getElementById('jersey').addEventListener('click', function () {
    const jerseyValue = getElementValue('jersey-price')

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + jerseyValue;

    setValueTotal('total-price', totalPrice)

})

document.getElementById('cates').addEventListener('click', function () {
    const catesValue = getElementValue('cates-price')

    const totalPriceValue = getElementValue('total-price');
    const totalPrice = totalPriceValue + catesValue;

    setValueTotal('total-price', totalPrice)

})





function getElementValue(elementID) {
    const element = document.getElementById(elementID);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

function setValueTotal(elementID, value) {
    const totalValueElement = document.getElementById(elementID);
    totalValueElement.innerText = value.toFixed(2);
}