/**
 * sessionStorage set 
 * sessionStorage get
 */
export const session_set = (key, value) => {
  if(typeof value === 'object') {
    value = JSON.stringify(value)
  }
  sessionStorage.setItem(key, value)
}

export const session_get = (key) => {
  let value = sessionStorage.getItem(key)
  if(/^\{|\[*\}\b|\]\b/.test(value)) {
    value = JSON.parse(value)
  }
  return value
}

/**
 * localStorage set 
 * localStorage get
 */
export const local_set = (key, value) => {
  if(typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const local_get = (key) => {
  let value = localStorage.getItem(key)
  if(/^\{|\[*\}\b|\]\b/.test(value)) {
    value = JSON.parse(value)
  }
  return value
}

export const local_get2JSON = (key) => {
  const data = localStorage.getItem(key)
  let value = null
  if(data) {
    try {
      value = JSON.parse(data)
      return value
    }catch (e) {
      console.log(e);
    }
  } else {
    return value
  }
}

export function formatDate(date, formatStr) {
  var str = formatStr
  var Week = ['日', '一', '二', '三', '四', '五', '六']

  str = str.replace(/yyyy|YYYY/, date.getFullYear())
  str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100))
  var month = date.getMonth() + 1
  str = str.replace(/MM/, month > 9 ? month.toString() : '0' + month)
  str = str.replace(/M/g, month)

  str = str.replace(/w|W/g, Week[date.getDay()])

  str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate())
  str = str.replace(/d|D/g, date.getDate())

  var hour = date.getHours()
  str = str.replace(/HH/, hour > 9 ? hour.toString() : '0' + hour)
  str = str.replace(/H/g, hour)

  str = str.replace(/A/g, hour >= 12 ? 'PM' : 'AM')
  str = str.replace(/Aa/g, hour >= 12 ? 'pm' : 'am')

  hour = hour > 12 ? hour % 12 : hour
  str = str.replace(/hh/, hour > 9 ? hour.toString() : '0' + hour)
  str = str.replace(/h/g, hour)

  str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes())
  str = str.replace(/m/g, date.getMinutes())
  str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds())
  str = str.replace(/s|S/g, date.getSeconds())

  return str
}

// 毫秒转小时
export function TimeToHours (time) {
  var hours = time / 1000 / 60 / 60 
  return hours.toFixed(1) + 'h'
}