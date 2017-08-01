function formatMoney (money, length) {
  money = '' + money
  return money.substring(0, money.indexOf('.') + length + 1)
}
console.log(formatMoney(1.2323123, 2))
