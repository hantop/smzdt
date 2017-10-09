function getParam() {
  var paramStr = location.search.substr(1)
  var reg = /([^&=]+)=([\w\W]*?)(&|$|#)/g
  var obj = {}
  while ((result = reg.exec(paramStr)) != null) {
    obj[result[1]] = result[2]
  }
  return obj;
}
var p
var uid = getParam().uid
var pid = getParam().pid
switch (pid) {
  case '47':
    p = '爱钱进'
    break;
  case '4':
    p = '宜人贷'
    break;
  case '225':
    p = '51人品'
    break;
  case '10':
    p = 'ppmoney'
    break;
  case '271':
    p = '钱保姆'
    break;
  case '6072':
    p = '玖富钱包'
    break;

}
var pop = document.querySelector('.pop')
var mid = document
var span = pop.querySelector('span')
var btn = pop.querySelector('.submit')
var tel = pop.querySelector('input')
var err = pop.querySelector('.err')
mid.addEventListener('click', function (e) {
  if (e.target.classList.contains('xjoin')) {
    mask().show()
    var className = pop.getAttribute('class')
    className = className.replace('hide', '') + 'show'
    pop.className = className
    document.body.style.overflow = 'hidden'
    return false
  }
})
span.addEventListener('click', function (e) {
  var className = pop.getAttribute('class')
  className = className.replace('show', '') + 'hide'
  pop.className = className
  document.body.style.overflow = 'auto'
})
btn.addEventListener('click', function () {
  if (!(/^1[34578]\d{9}$/.test(tel.value))) {
    err.style.visibility = 'visible'
  } else {
    $.ajax({
      type: "POST",
      url: '/forward.php',
      data: {
        'url': '/CaiyuPartner/api/v1/invest/register',
        'data': {
          'pid': pid,
          'mobile': tel.value,
          'uid': uid
        }
      },
      dataType: "json",
      success: function (res) {
        if (res.status == 0) {
          location.href = 'https://m.iqianjin.com/event/20160516.jsp?utmSource=5200'
        } else {
          err.style.visibility = 'visible'
          err.innerHTML = res.errorMsg
        }
      }
    })
  }
})
tel.addEventListener('focus', function () {
  err.style.visibility = 'hidden'
})
$('.toPrize').on('click', function () {
  location.href = 'prize.html?uid=' + uid + '&pid=' + pid

})
$('.toShare').on('click', function () {
  location.href = 'https://sns.91caiyu.com/index.php?app=h5&mod=topic&act=index&name=' + encodeURIComponent(p + '奖励') + '&uid=' + uid
})
function mask() {
  console.log(1)
  var box = document.createDocumentFragment()
  var mask = document.createElement('div')
  mask.style.height = '100%'
  mask.style.width = '100%'
  mask.style.backgroundColor = 'rgba(0,0,0,0.5)'
  mask.style.position = 'fixed'
  mask.style.zIndex = '89'
  mask.style.height = '100%'
  mask.addEventListener('touchmove', function (e) {
    e.preventDefault();
  }, false);
  this.show = function () {
    console.log(2)
    mask.style.display = 'block'
  }()
  this.show = function () {
    mask.style.display = 'none'
  }()
  box.appendChild(mask)
  document.body.appendChild(box)
  return this
}