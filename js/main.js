$(document).ready( () => {
    $('.mode').on('click', () => {
        if ($('body').css.backgroundColor == '#111') {
            console.log('yes')
            $('body').css({'background-color': '#f7f7f7'})
        }else {
            $('body').css({'background-color':'#000'})
        }
    })

})

