const formatPrice = (price: number) => {
  const priceNumber = Number(price)
  const formattedPrice =
    priceNumber >= 0 ? `$${priceNumber.toFixed(2)}` : `-$${Math.abs(priceNumber).toFixed(2)}`
  const parts = formattedPrice.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export default formatPrice
