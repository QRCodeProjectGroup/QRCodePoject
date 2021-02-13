import $ from 'jquery';

$('#cardTitle').on('click', function (e) {
    console.log(this.hash)
       if (this.hash !== '') {
         e.preventDefault();
    
         const hash = this.hash;
    
         $('html, body')
           .animate({
             scrollTop: $(hash).offset().top
           },800);
       }
     });