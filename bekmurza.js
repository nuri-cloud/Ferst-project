const api_url = 'https://randomuser.me/api/'

const imgEl = document.querySelector('img')
const btn = document.querySelector('.button')
const text = document.querySelector('.text')
const btns = document.querySelectorAll('button')

let userlnfo={}


async function getRandomUser() {
    const response = await fetch(api_url)
    const userData = await response.json()

    console.log(userData);
    renderUser(userData.results[0])

    
}


getRandomUser()

function renderUser(user ={}){
    imgEl.src = user.picture.large
    userlnfo = user
}
    


btn.addEventListener('click', getRandomUser)




btns.forEach( (btn, index ) => {
    btn.addEventListener('mouseenter' ,  () => {
        if(index === 0 ) {
            text.innerHTML = `
            Hello my name is  <h4>${userlnfo.email}</h4>
            `

        }else if (index === 1 ){
            text.innerHTML = `
            Hello my name is <h4>${userlnfo.name.first + userlnfo.name.last } </h4>
            `
            
        }else if (index === 2 ){
            const  d = new Date(userlnfo.dob.date)
            text.innerHTML = `
             Hello birthday is <h4>/${d.getDate()}/${d.getFullYear()} </h4>
             `
            
        }else if (index === 3){
            const a = new street
        }
    } )
})


