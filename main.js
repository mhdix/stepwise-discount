function calculateDiscount (price) {
    const discountPerPrice = 10
    const minPrice = 100
    const discountSteps = 3
    const maxDiscount = 25

    if(price < minPrice + discountPerPrice) return 'no discount'
    let discount = Math.floor((price - minPrice) / discountPerPrice) * discountSteps;
    if(discount > maxDiscount )  {
        discount = maxDiscount
        return discount + '%'
        
    }
    return discount + '%'
}
console.log(calculateDiscount(150))