function a (data, name) {
  let str = ''
  for (var key in data) {
    if (typeof data[key] === 'object') {
      str += a(data[key], key)
    } else if (!name) {
      str += `${key}=${data[key]}&`
    } else {
      str += `name[${key}]=${data[key]}&`
    }
  }
  if (name) {
    return str
  } else {
    return str.slice(0, -1)
  }
}
const data = {
  'url': '/CaiyuPartner/api/v1/invest/platform/valid',
  'data': {
    'pid': '47'
  }
}
console.log(a(data))
