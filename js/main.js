// const buttons = document.querySelectorAll('button')

// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         // e.target.classList.toggle('red')
//         if (e.target.classList.contains('red')){
//             e.target.classList.remove("red")
//         }else {
//             e.target.classList.add("red")
//             setTimeout(() => {
//                 e.target.classList.remove("red")
//             }, 100)
//         }
//
//     })
// })
// const wrapper =  document.querySelector('.wrapper')
//
// wrapper.addEventListener(('click'), (e) => {
//     if (e.target.tagName === 'BUTTON'){
//         e.target.classList.toggle('red')
//     }
//
// })
//
// const newBtn = document.createElement('button')
// newBtn.textContent = '8';
// wrapper.append(newBtn)

// const navbarContent = ['О НАС', 'КАТАЛОГ', 'НАШИ РАБОТЫ', 'КОНТАКТЫ']

const navbarContent = [
    {
        title: 'О НАС',
        link: 'about/'
    },
    {
        title: 'КАТАЛОГ',
        link: 'catalog/'
    },
    {
        title: 'НАШИ РАБОТЫ',
        link: 'works/'
    },
    {
        title: 'КОНТАКТЫ',
        link: 'contacts/'
    }
]


const navbar = document.querySelector('.navbar')

navbarContent.forEach(item => {
    const linkEl = document.createElement('a')
    linkEl.textContent = item.title
    linkEl.setAttribute('href', `/${item.link}`)
    linkEl.setAttribute('target','_blank')
    navbar.append(linkEl)
})

// for( let i = 0; i <= 100; i++ ) {
//     console.log(i)
// }

let myLet = 1;

// if(myLet) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// switch(myLet) {
//     case 4:
//         console.log('it is 4')
//         break;
//     case 1:
//         console.log('it is 1')
//         break;
//     default:
//         console.log('it not 4 or 1')
// }

// myLet === 1 ? console.log('true') : console.log('false')

// console.log(true  && true)
// //  1 * 1 = 1 0* 1= 0
// console.log(false || false)
// 1+0=1 0+0=0

// function myFunc(arg){
//     // console.log(arg)
//     // arg !== 40 && console.log(arg)
//
//
// }
//
// myFunc(40)

// const obj1 = {
//     name: 'Azim'
// }
//
// const obj2 = {...obj1}
// obj1.age = 22
//
// console.log(obj1)
// console.log(obj2)



























