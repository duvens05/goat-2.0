const form = document.querySelector('#form1')
const sneakerscontainer = document.querySelector('#sneakercollection')

const baseURL = `http://localhost:4004`

const sneakersCallback = ({ data: sneakers }) => displaysneakers(sneakers)
const errCallback = err => console.log(err)

const getAllSneakers = () => axios.get(baseURL+"/api/sneakers").then(sneakersCallback).catch(errCallback)
const createsneaker = body => axios.post(baseURL+"/api/sellsneakers", body).then(sneakersCallback).catch(errCallback,)

function submitHandler(e) {
    e.preventDefault()
    console.log("hello")
    let sneakername = document.getElementById('sneakername')
    let price = document.getElementById('price')
    let imageURL = document.getElementById('img')

    const body = {
        sneakername: sneakername.value,
        price: price.value, 
        imageURL: imageURL.value
    }

    createsneaker(body)

    sneakername.value = ''
    price.value = ''
    imageURL.value = ''
}



function createsneakerCard(sneaker) {
    const sneakersCard = document.createElement('div')
    sneakersCard.classList.add('sneaker-card')

    sneakersCard.innerHTML = `<img alt='shoe cover image' src=${sneaker.imageURL} class="shoe-cover-image"/>
    <p class="name1">${sneaker.name}</p>
    <p class="shoe-price">$${sneaker.price}</p>
     
    `;


    sneakerscontainer.appendChild(sneakersCard)
}


function displaysneakers(arr) {
    sneakerscontainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createsneakerCard(arr[i])
    }
}

form.addEventListener('submit',submitHandler)

getAllSneakers()
