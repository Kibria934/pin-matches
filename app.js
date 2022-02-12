
// Pluse -Minuse cmmon function??
function updateProduct(product,price,isIncreasing) {
        const productInput = document.getElementById(product+'-number');
        let productNumber = productInput.value;
        if (isIncreasing) {
                productInput.value =(parseInt(productNumber) + 1);
        }
        else if(productNumber> 0){
                productInput.value = (parseInt(productNumber) - 1);
        }
        productNumber = productInput.value;
        // Case total update//
        const productTotal = document.getElementById(product+'-total');
        let productTotalText = productTotal.innerText;
        productTotal.innerText = productNumber * price;
        // Calculate total;
        calculateTotal()
}
// Calculate function//
function calculateTotal() {
        const phoneNumber = document.getElementById('phone-total');
        phoneNumberValue = phoneNumber.innerText;
        const caseNumber = document.getElementById('case-total');
        caseNumberValue = caseNumber.innerText;
        // Sub total calculate//
        const sum = parseFloat(phoneNumber.innerText) + parseFloat(caseNumber.innerText);
        const subTotal = document.getElementById('sub-total');
        const subTotalText = subTotal.innerText;
        subTotal.innerText = sum;
        //Tax total calculate//
        let taxAmount = document.getElementById("text-amount");
        let taxAmountText = taxAmount.innerText;
        let taxTotal = subTotal.innerText / 10;
        taxAmount.innerText = taxTotal;
        // Total amount calculate//
        const totalPrice = document.getElementById('total-price');
        const totalAmountTex = totalPrice.innerText;
        const grandTotalPrice = parseFloat(subTotal.innerText )+ parseFloat(taxAmount.innerText);
        totalPrice.innerText = grandTotalPrice;
}
//   Tax total function//
function taxCalculate() {
        
        
        const taxTotal = parseFloat(taxAmountText) * 10 ;
}

// ----------- Phone click handler adding-----
// Pluse click handler //
document.getElementById('phone-pluse').addEventListener('click', function () {
        updateProduct('phone', 1219, true);
})
// Minuse click handler //
document.getElementById('phone-minuse').addEventListener('click', function () {
        updateProduct('phone',1219,false);
})



// ---------Case click handler adding---------
// pluse click handler//
document.getElementById('case-pluse').addEventListener('click', function () {
        updateProduct('case',59, true);
})
// Minuse click handler//
document.getElementById('case-minuse').addEventListener('click', function () {
        updateProduct('case',59, false);
})