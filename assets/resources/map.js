let circles = document.querySelectorAll('.circle__hover');
let popups = document.querySelectorAll('.logistics__popup');
let map = document.querySelector('.logistics__map--svg');

function closePopups() {
    popups.forEach(function (item) {
        item.classList.remove('active')
    })
}

map.addEventListener('click', function (event) {
    if (!event.target.parentNode.parentNode.classList.contains('circle__hover') && !event.target.parentNode.classList.contains('circle__hover') && !event.target.classList.contains('circle__hover')) {
        closePopups();
    }
})

circles.forEach(function (item) {
    item.addEventListener('click', function () {
        closePopups();
        let popupId = item.getAttribute("data-popup");
        document.getElementById(popupId).classList.add('active');
    })
})

