function a (data, name) {
  console.log(name)
  let str = ''
  for (var key in data) {
    if (typeof data[key] === 'object') {
      str += a(data[key], key)
    } else if (!name) {
      str += `${key}=${data[key]}&`
    } else {
      str += `${name}[${key}]=${data[key]}&`
    }
  }
  if (name) {
    return str
  } else {
    return str.slice(0, -1)
  }
}
const data = {
  'url': '/CaiyuPartner/invest/partner/10',
  'data': {
    'uid': '1c8091d23c104502b51bd9d0961d1705'
  }

}

console.log(a(data))
