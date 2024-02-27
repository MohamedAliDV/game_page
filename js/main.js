$(document).ready( () => {

    // form validation 
    const all_input = $('input');
    const send_btn = $('.send-btn');

    send_btn.on('click', () => {
        for(let i = 0 ; i < all_input.length ; i++) {
            console.log(all_input[i].value.length);
        }
    })

})

