var dates = [
  new Date(1509176498803),
  new Date('Sat Oct 29 2017 10:41:30 GMT+0300 (EEST)'),
  new Date('Sat Oct 5'),
  new Date('12/12/10'),
  new Date('5/4/2016'),
  new Date(99, 1, 23, 10, 11, 40, 150)
]

sessionStorage.setItem('dates', JSON.stringify(dates))

var sorted = JSON.parse(sessionStorage.getItem('dates')).sort().reverse()

localStorage.setItem('dates', JSON.stringify(sorted))
