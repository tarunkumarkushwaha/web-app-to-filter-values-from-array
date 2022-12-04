let val = document.getElementById('in')
let disp = document.getElementById('displaybrd')
let cr = document.getElementById('criteria')
let a
let c
let arr = []
const lessthan = () => {
  a = val.value
  for (x in a) {
    arr.push(a[x])
  }
  let num = arr.map((str) => {
    return parseInt(str);
  });
  c = + cr.value
  let b = num.filter((m) => { return m < c })
  disp.innerHTML = b
}
const morethan = () => {
  a = val.value
  for (x in a) {
    arr.push(a[x])
  }
  let num = arr.map((str) => {
    return parseInt(str);
  });
  c = + cr.value
  let b = num.filter((m) => { return m > c })
  disp.innerHTML = b
}