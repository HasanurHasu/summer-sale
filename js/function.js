let total = 0;

function getPrice(data){
    const itemPriceString = data.childNodes[3].childNodes[5].childNodes[1].innerText;
    const itemPrice = parseFloat(itemPriceString);
    total = total + itemPrice;
    console.log(total);

    setValueTotal('total-price', total);
}


function setValueTotal(elementID, value) {
    const totalValueElement = document.getElementById(elementID);
    totalValueElement.innerText = value;
}

