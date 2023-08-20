let total = 0;

function getPrice(data){
    
    const itemEntry = document.getElementById('calculation-entry');
    const itemTittleName = data.childNodes[3].childNodes[3].innerText;
    const count = itemEntry.childElementCount;
    const p = document.createElement('p');
    p.innerText = `${count+1}. ${itemTittleName}`;
    p.classList.add('text-2xl', 'font-medium')
    itemEntry.appendChild(p);
    console.log(itemTittleName);

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

