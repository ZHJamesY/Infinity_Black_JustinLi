document.addEventListener('DOMContentLoaded', function() {

    // pop up image
    const images = document.querySelectorAll('.images img');
    const popUpCloseBtn = document.querySelector('#popUpCloseBtn');
    const popUpImage = document.querySelector('#popUpImage');
    const images_popup = document.querySelector('.images_popup');

    images.forEach(img => {
        img.addEventListener('click', function() {
            if(img.classList.contains('pop1'))
            {
                popUpImage.src = "./materials/img/pop1.jpg"
                images_popup.style.display = 'block';
            }
            else if(img.classList.contains('pop2'))
            {
                popUpImage.src = "./materials/img/card2.jpg"
                images_popup.style.display = 'block';

            }
            else if(img.classList.contains('pop3'))
            {
                popUpImage.src = "./materials/img/card3.jpg"
                images_popup.style.display = 'block';

            }
            else if(img.classList.contains('pop4'))
            {
                popUpImage.src = "./materials/img/card4.jpg"
                images_popup.style.display = 'block';
            }
            else if(img.classList.contains('pop5'))
            {
                popUpImage.src = "./materials/img/card5.jpg"
                images_popup.style.display = 'block';
            }
            else if(img.classList.contains('pop6'))
            {
                popUpImage.src = "./materials/img/card6.jpg"
                images_popup.style.display = 'block';
            }
        });
    });

    popUpCloseBtn.addEventListener('click', function() {
        images_popup.style.display = 'none';
    });


    // hamburger
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.hamburger_sidebar');
    const sidebarCloseBtn = document.querySelector('#sidebarCloseBtn');

    dropbtn.addEventListener('click', function(event) {
        // Prevent the click event from bubbling up to the document level
        event.stopPropagation();

        if (dropdownContent.style.display == 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    sidebarCloseBtn.addEventListener('click', function(){
        dropdownContent.style.display = 'none';
    });

    document.addEventListener('click', function(event) {
        if (!dropdownContent.contains(event.target) && event.target !== dropbtn) {
            dropdownContent.style.display = 'none';
        }
    });

});

