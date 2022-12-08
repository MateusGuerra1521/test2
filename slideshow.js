'use strict';

const images = [
    { 'id': '1', 'url':'../images/sla.jpg'},
    { 'id': '2', 'url':'../images/emocinal.jpg'},
    { 'id': '3', 'url':'../images/Saúde Social.jpg'},
    { 'id': '4', 'url':'../images/familiar.jpg'},
    { 'id': '5', 'url':'../images/profissional.jpg'},
    { 'id': '6', 'url':'../images/esp.jpg'},
]

const containeritems = document.querySelector('#container-items');


const loadimages = (images, container ) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'
        </div>`
           
    })



}


loadimages( images, containeritems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containeritems.appendChild(items[0]);
    items = document.querySelectorAll('.item');

}

const next = () => {
    const lastitem = items [items.length - 1];
    containeritems.insertBefore( lastitem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)



