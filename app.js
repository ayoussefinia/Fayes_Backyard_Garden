console.log('connected');

let imagesArray = [
  'https://i.imgur.com/sTORTn3.jpg', "https://i.imgur.com/NoGJmnX.jpg",'https://i.imgur.com/9QnPnP2.jpg', 'https://i.imgur.com/V0Tdml8.jpg', 'https://i.imgur.com/AEs0wQf.jpg', 'https://i.imgur.com/INT4p3B.jpg',
  'https://i.imgur.com/aNBs9AD.jpg', 'https://i.imgur.com/o3CW4Sm.jpg', 'https://i.imgur.com/ysdZ4qf.jpg',
  'https://i.imgur.com/EiRiE51.jpg', 'https://i.imgur.com/ZrdazRw.jpg', 'https://i.imgur.com/EvQiryd.jpg',
  'https://i.imgur.com/xWaOv0w.jpg', 'https://i.imgur.com/x3qnYG4.jpg', 'https://i.imgur.com/S7qNYgq.jpg',
  'https://i.imgur.com/xGlUYuy.jpg', 'https://i.imgur.com/MJGDGJk.jpg', 'https://i.imgur.com/LHBONqu.jpg', 
  'https://i.imgur.com/EHQfRZ9.jpg', 'https://i.imgur.com/uY2CoxJ.jpg', 'https://i.imgur.com/ORVAwys.jpg',
  'https://i.imgur.com/jCIG3BV.jpg', 'https://i.imgur.com/t1rCXWL.jpg', 'https://i.imgur.com/buDxq58.jpg',
  'https://i.imgur.com/rrKBkFr.jpg', 'https://i.imgur.com/RqGnZvo.jpg' ]


let counter = 1;

$(".shift-right").click(function() {
  if(counter < imagesArray.length - 2 ) {
    counter++;
    $('.image-carousel').attr('src', imagesArray[counter]);
    $('.image-carousel-left').attr('src', imagesArray[counter-1]);
    $('.image-carousel-right').attr('src', imagesArray[counter+1]);
  } else if (counter == imagesArray.length - 2) {
    counter++;
    $('.image-carousel').attr('src', imagesArray[counter]);
    $('.image-carousel-left').attr('src', imagesArray[counter-1]);
    $('.image-carousel-right').attr('src', imagesArray[0]);
  } else if (counter == imagesArray.length - 1) {
    counter = 0;
    $('.image-carousel').attr('src', imagesArray[counter]);
    $('.image-carousel-left').attr('src', imagesArray[imagesArray.length-1]);
    $('.image-carousel-right').attr('src', imagesArray[counter + 1]);
  }
  console.log("counter:::", counter);
});

 $('.shift-left').click(function() {
   if(counter > 1) {
      counter--;
      $('.image-carousel').attr('src', imagesArray[counter]);
      $('.image-carousel-left').attr('src', imagesArray[counter-1]);
      $('.image-carousel-right').attr('src', imagesArray[counter+1]);
   } else if (counter == 1) {
    counter--;
    $('.image-carousel').attr('src', imagesArray[counter]);
    $('.image-carousel-left').attr('src', imagesArray[imagesArray.length-1]);
    $('.image-carousel-right').attr('src', imagesArray[counter+1]);
   } else if (counter  == 0) {
     counter = imagesArray.length-1;
     $('.image-carousel').attr('src', imagesArray[counter]);
     $('.image-carousel-left').attr('src', imagesArray[counter-1]);
     $('.image-carousel-right').attr('src', imagesArray[0]);
   }

});