const $ = document

const container = $.querySelector('.wrapper')
const inputElem = $.querySelector('input')
const button = $.querySelector('button')
const imgQrCode = $.querySelector('img')

button.addEventListener('click', () => {    

    let inputValue = inputElem.value.trim()

    if (inputValue) {

        button.innerHTML = 'Generating QR Code...'
        imgQrCode.setAttribute('src', `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`)

        imgQrCode.addEventListener('load', () => {
            container.classList.add('active')
            button.innerHTML = 'Generate QR Code'
        })

    }


})

inputElem.addEventListener('keyup', () => {

    if (!inputValue.value.trim()) {
        container.classList.remove('active')
    }

})