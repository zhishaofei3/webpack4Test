import _ from 'lodash'
import './vendors'
import image from './image.jpg'
import './style.css'
import {cube} from './math.js'

console.log(process.env.NODE_ENV)

function component() {
  const element = document.createElement('div')
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')
  return element
}

document.body.appendChild(component())
let img = document.createElement('img')
img.src = image
document.body.appendChild(img)
