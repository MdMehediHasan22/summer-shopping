let totalPrice = 0;
function innerValueOfCard(prodValueId) {
    const productPriceElement = document.getElementById(prodValueId);
    const productPriceString = productPriceElement.innerText;
    const productPrice = parseFloat(productPriceString);
    return productPrice;
}

function getValueOfCard1() {
    const card1Price = innerValueOfCard('prod-1-price');
    accessElementInnerText('total-price', card1Price);
}
function getValueOfCard2() {
    const card2Price = innerValueOfCard('prod-2-price');
    accessElementInnerText('total-price', card2Price);
}
function getValueOfCard3() {
    const card3Price = innerValueOfCard('prod-3-price');
    accessElementInnerText('total-price', card3Price);
}
function getValueOfCard4() {
    const card4Price = innerValueOfCard('prod-4-price');
    accessElementInnerText('total-price', card4Price);
}
function getValueOfCard5() {
    const card5Price = innerValueOfCard('prod-5-price');
    accessElementInnerText('total-price', card5Price);
}
function getValueOfCard6() {
    const card6Price = innerValueOfCard('prod-6-price');
    accessElementInnerText('total-price', card6Price);
}
function getValueOfCard7() {
    const card7Price = innerValueOfCard('prod-7-price');
    accessElementInnerText('total-price', card7Price);
}
function getValueOfCard8() {
    const card8Price = innerValueOfCard('prod-8-price');
    accessElementInnerText('total-price', card8Price);
}
function getValueOfCard9() {
    const card9Price = innerValueOfCard('prod-9-price');
    accessElementInnerText('total-price', card9Price);
}

// total price calculation

function accessElementInnerText(elementId, cardPrice) {
    totalPrice += cardPrice;
    const element = document.getElementById(elementId);
    element.innerText = totalPrice;

    const purchaseButton = document.getElementById('btn-purchase');
    if (totalPrice > 0) {
        purchaseButton.removeAttribute('disabled');
    }
    else {
        purchaseButton.setAttribute('disabled', true);
    }
        if (totalPrice >= 200) {
            document.getElementById('coupon-field').addEventListener('keyup', function (event) {
                const text = event.target.value;
                const applyBtn = document.getElementById('btn-apply');
                if (text == 'SELL200') {
                    applyBtn.removeAttribute('disabled');
                }
                else {
                    applyBtn.setAttribute('disabled', true);
                }
            })
            document.getElementById('btn-apply').addEventListener('click', function () {
                const totalProductDiscount = totalPrice * 0.2;
                const totalDiscount = totalProductDiscount.toFixed(2);
                return discount('total-discount', totalDiscount, totalPrice);
            })

        }
    

}

function discount(discountId, totalDiscount, totalPrice) {
    const discountElement = document.getElementById(discountId);
    discountElement.innerText = totalDiscount;
    const afterDiscountElement = document.getElementById('after-discount-total');
    const afterDiscountTotal = totalPrice - totalDiscount;
    afterDiscountElement.innerText = afterDiscountTotal;
}




// go home button
function resetTotalFields() {
    document.getElementById('total-price').innerText = '0';
    document.getElementById('discount').innerText = '0';
    document.getElementById('total').innerText = '0';

    const modal = document.getElementById('purchase-modal');
    modal.style.display = 'none';
}

document.getElementById('go-home').addEventListener('click', resetTotalFields);
