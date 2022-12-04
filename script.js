let val = document.getElementById('in')
let disp = document.getElementById('displaybrd')
let cr = document.getElementById('criteria')
let comp = document.getElementById('write')
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
  comp.innerHTML= "less than"
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
  comp.innerHTML= "more than"
  let b = num.filter((m) => { return m > c })
  disp.innerHTML = b
}