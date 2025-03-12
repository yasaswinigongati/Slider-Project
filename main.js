let next=document.querySelector('.next')
let prev=document.querySelector('.prev')

next.addEventListener('click',function(){
    let items=document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click',function(){
    let items=document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length-1])
})

/* assumed the next, prev variables and 
select the whole class of both next, prev and create ba funtion fot both of them seperately
in item class what vare the components and slide them too.front and back. and append() that
indicate from start 0 index to last index. however the prepend() indicate that last index to 
first index it travel and lide each of them......... */
