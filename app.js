"use strict";
$(document).ready(function () {




$('h2').click(function (e) { 
    e.preventDefault();
    $('h2').html(1331);
});


$('.btn').click(function (e) { 
    e.preventDefault();
    let a = (a) => {
        for( let i = 1; i <= a ; i++)
        $('.col-md-12').append(`<h1>${i}</h1>`); 
    }
    a($('input').val())
})





let a = ['bugun','men',19,'oldum']
    for(let i = 0; i < a.length; i++){
        console.log(a[2])
    }












});