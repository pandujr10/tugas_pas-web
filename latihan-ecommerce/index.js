var Btnclick = document.querySelectorAll('.btn-action')
var listGroup = document.querySelectorAll('.list-group-item')
var cardGroup = document.querySelectorAll('.card-group')

Btnclick.forEach(element => {
    element.addEventListener('click', () => {

        // hapus class active ketika di click
        listGroup.forEach(item => {
            item.classList.remove('active');
        })

        Btnclick.forEach(item => {
            item.classList.remove('text-white');
        })

        element.classList.add('text-white')


        // menambahkan class active ke parentclass btn
        element.parentElement.classList.add('active')

        if(element.classList[3] == 'adidas') {
            cardGroup[0].classList.add('card-active')
            cardGroup[1].classList.remove('card-active')
            cardGroup[2].classList.remove('card-active')
        }
        else if(element.classList[3] == 'nike') {
            cardGroup[0].classList.remove('card-active')
            cardGroup[1].classList.add('card-active')
            cardGroup[2].classList.remove('card-active')
        }
        else {
            cardGroup[0].classList.remove('card-active')
            cardGroup[1].classList.remove('card-active')
            cardGroup[2].classList.add('card-active')
        }

    })
});