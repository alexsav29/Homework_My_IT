let img = document.querySelectorAll('.images img');

img.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'rgb(255, 255, 255, .1)';
        this.style.cursor = 'pointer';
        this.style.opacity = '1';
    
        console.log('Навели мышь на фото');
    });

});

img.forEach(function(element) {
    element.addEventListener('mouseout', function() {
        this.style.opacity = '0.5';
    
        console.log('Убрали мышь с фото');
    });

});



//if ()

console.log(img);
