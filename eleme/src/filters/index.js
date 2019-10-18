import Vue from 'vue'
Vue.filter('money', (money) => {
  if (money && money != null) {
    money = String(money)
    let left = money.split('.')[0]
    let right = money.split('.')[1]
    right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00'
    let temp = left.split('').reverse().join('').match(/(\d{1,3})/g)
    return (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + right
  } else if (money === 0) {
    return '0.00'
  } else {
    return ''
  }
})
Vue.filter('phone', (phone) => {
  return phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
})
