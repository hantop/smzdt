export function toUrlQuery (data, name) {
  let str = ''
  for (var key in data) {
    if (typeof data[key] === 'object') {
      str += toUrlQuery(data[key], key)
    } else if (!name) {
      str += `${key}=${data[key]}&`
    } else {
      str += `name[${key}]=${data[key]}&`
    }
  }
  if (name) {
    return str
  } else {
    return encodeURI(str.slice(0, -1))
  }
}
