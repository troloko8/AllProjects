const addInfo = document.querySelector('.recomendation__info')
const btn = document.querySelector('.recomendation__btn')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  addInfo.style.opacity = 1
})

console.log(addInfo.innerHTML.split(' '))
console.log(addInfo.innerHTML)

const newArr = addInfo.innerHTML.split(' ').filter((el) => {
  if (el !== '') {
    return el
  }
})
addInfo.innerHTML = ''

for (let i = 0; i <= newArr.length; i++) {
  let el = document.createElement('span').innerHTML = `${newArr[i]} `
  el.style = `opacity: 0 ; trasition: ${0.1 * i + 0.1}s`
  addInfo.append(el)
}
