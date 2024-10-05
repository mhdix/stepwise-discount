function calculateDiscount (price) {
    if(price < 100 + 10) return 'no discount'
    let discount = Math.floor((price - 100) / 10) * 3;
    if(discount > 25 ) return discount = 25
    return discount
}
console.log()