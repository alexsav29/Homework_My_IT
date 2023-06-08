let img = document.querySelectorAll('.images img');

img.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        this.style.backgroundColor('rgb(255, 255, 255, .1)');
        this.style.cursor('pointer');
        this.style.opacity('0.5');
    
        console.log('Навели мышь на фото');
    });

})



//if ()

console.log(img);