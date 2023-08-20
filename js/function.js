let total = 0;

function getPrice(data) {

    const itemEntry = document.getElementById('calculation-entry');
    const itemTittleName = data.childNodes[3].childNodes[3].innerText;
    const count = itemEntry.childElementCount;
    const p = document.createElement('p');
    p.innerText = `${count + 1}. ${itemTittleName}`;
    p.classList.add('text-2xl', 'font-medium')
    itemEntry.appendChild(p);
    console.log(itemTittleName);

    const itemPriceString = data.childNodes[3].childNodes[5].childNodes[1].innerText;
    const itemPrice = parseFloat(itemPriceString);
    total = total + itemPrice;
    console.log(total);

    setValueTotal('total-price', total);

    if (total >= 200) {
        const couponBtn = document.getElementById('btn-coupon');
        couponBtn.classList.remove('bg-gray-500');
        couponBtn.classList.add('bg-[#E527B2]');
        couponBtn.removeAttribute('disabled')

        const couponField = document.getElementById('coupon-field');
        couponField.removeAttribute('disabled');
    }

    if (total >= 0) {
        const purchaseBtn = document.getElementById('purchase-btn');
        purchaseBtn.classList.remove('bg-gray-500');
        purchaseBtn.classList.add('bg-[#E527B2]');
        purchaseBtn.removeAttribute('disabled')
    }

    if(total >= 200){
        const discounted = total * 0.2;
        const totalDiscounted = total - discounted;
        setValueTotal('discount', discounted);
        setValueTotal('total-discount', totalDiscounted);
    }


}


function setValueTotal(elementID, value) {
    const totalValueElement = document.getElementById(elementID);
    totalValueElement.innerText = value.toFixed(2);
}

