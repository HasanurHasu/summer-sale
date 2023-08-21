let total = 0;

function getPrice(data) {

    const itemEntry = document.getElementById('calculation-entry');
    const itemTittleName = data.childNodes[3].childNodes[3].innerText;
    const count = itemEntry.childElementCount;
    const p = document.createElement('p');
    p.innerText = `${count + 1}. ${itemTittleName}`;
    p.classList.add('entry-item', 'text-xl', 'font-medium');
    itemEntry.appendChild(p);

    const itemPriceString = data.childNodes[3].childNodes[5].childNodes[1].innerText;
    const itemPrice = parseFloat(itemPriceString);
    total = total + itemPrice;

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
        purchaseBtn.removeAttribute('disabled');
    }

}



function couponCodeApply() {
    const couponField = document.getElementById('coupon-field');
    const couponCode = couponField.value;
    if (couponCode !== 'SELL200') {
        alert("Invalid coupon code try again");
    }
    if (total >= 200 && couponCode == 'SELL200') {
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

function modalClickToReset() {
    total = 0;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = '00.00';

    const discount = document.getElementById('discount');
    discount.innerText = '00.00';

    const totalDiscount = document.getElementById('total-discount');
    totalDiscount.innerText = '00.00';

    const itemEntry = document.querySelectorAll('.entry-item');
    for (item of itemEntry) {
        item.remove();
    }

    const purchaseBtn = document.getElementById('purchase-btn');
    purchaseBtn.classList.add('bg-gray-500');
    purchaseBtn.setAttribute('disabled', "");

    const couponBtn = document.getElementById('btn-coupon');
    couponBtn.classList.add('bg-gray-500');
    couponBtn.setAttribute('disabled', '');

    const couponField = document.getElementById('coupon-field');
    couponField.setAttribute('disabled', '');
    couponField.value = '';
}
