document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.images img');
    const popUpCloseBtn = document.querySelector('#popUpCloseBtn');
    const popUpImage = document.querySelector('#popUpImage');
    const images_popup = document.querySelector('.images_popup');


    images.forEach(img => {
        img.addEventListener('click', function() {
            if(img.classList.contains('pop1'))
            {
                images_popup.style.display = 'block';
            }
            else if(img.classList.contains('card2'))
            {
                console.log('card2 clicked');

            }
            else if(img.classList.contains('card3'))
            {
                console.log('card3 clicked');

            }
        });
    });

    popUpCloseBtn.addEventListener('click', function() {
        images_popup.style.display = 'none';
    });

});
