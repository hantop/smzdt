export function toUrlQuery (data, name) {
  let str = ''
  for (var key in data) {
    if (typeof data[key] === 'object') {
      str += toUrlQuery(data[key], key)
    } else if (!name) {
      str += `${key}=${data[key]}&`
    } else {
      str += `${name}[${key}]=${data[key]}&`
    }
  }
  if (name) {
    return str
  } else {
    return encodeURI(str.slice(0, -1))
  }
}

export function formatMoney (money, length) {
  money = '' + money
  const dot = money.indexOf('.')
  if (!dot) return
  return money.substring(0, dot + length + 1)
}
