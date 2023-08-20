let totalPriceValue = getElementValue('total-price');


document.getElementById('kitchenware-one').addEventListener('click', function () {
    const kitchenwareOneValue = getElementValue('kitchenware-one-value');

    totalPriceValue += kitchenwareOneValue;
        
    totalPrice.innerText = totalPriceValue;
})

document.getElementById('kitchenware-two').addEventListener('click', function(){
    const kitchenwareTwoValue = getElementValue('kitchenware-one-value')

    totalValue = kitchenwareTwoValue;

})


function getElementValue(elementID) {
    const element = document.getElementById(elementID);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}