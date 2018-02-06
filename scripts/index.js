$(document).ready(function() {

      //MENU ICON BY HTML5 CANVAS
      // var canvas = document.querySelector('canvas'); //$('canvas');
      var icon = document.getElementById('icon');
      var c = icon.getContext('2d');

//MENU ICON
      c.transform(0.85,0,0,0.85,0,0)

      c.beginPath();
      c.moveTo(30, 11);
      c.lineTo(20, 21);
      c.lineTo(30, 31);
      c.lineTo(40, 21);
      c.lineTo(30, 11);
      c.lineWidth=2;
      c.strokeStyle = 'black';
      c.fillStyle='white';
      c.fill();
      c.stroke();

      c.beginPath();
      c.moveTo(43, 23);
      c.lineTo(33, 33);
      c.lineTo(43, 43);
      c.lineTo(53, 33);
      c.lineTo(43, 23);
      // c.strokeStyle = 'grey';
      c.fill();
      c.stroke();

      // c.fillRect(25, 25, 50, 50);
      c.beginPath();
      c.moveTo(17, 23);
      c.lineTo(7, 33);
      c.lineTo(17, 43);
      c.lineTo(27, 33);
      c.lineTo(17, 23);
      c.fill();
      c.stroke();

      c.beginPath();
      c.moveTo(30, 35);
      c.lineTo(20, 45);
      c.lineTo(30, 55);
      c.lineTo(40, 45);
      c.lineTo(30, 35);
      c.fill();
      c.stroke();

// //MISLUKTE CB
//             c.beginPath();
//             c.moveTo(30, 11);
//             c.lineTo(40, 21);
//             c.lineTo(30, 31);
//             c.lineWidth=2;
//             c.strokeStyle = 'black';
//             c.stroke();
//
//
//             c.beginPath();
//             c.moveTo(17, 23);
//             c.lineTo(7, 33);
//             c.lineTo(17, 43);
//             c.stroke();
//
//             c.beginPath();
//             c.moveTo(30, 55);
//             c.lineTo(40, 45);
//             c.lineTo(30, 35);
//             c.stroke();
//
//             c.beginPath();
//             c.moveTo(25, 10);
//             c.lineTo(25, 45);
//             c.lineTo(25, 55);
//             c.stroke();

//cb
            // c.beginPath();
            // c.moveTo(30, 11);
            // c.lineTo(40, 21);
            // c.lineTo(30, 31);
            // c.lineWidth=2;
            // c.strokeStyle = 'black';
            // c.stroke();
            //
            // c.transform(2,0,0,2,0,0)
            //
            // c.beginPath();
            // c.moveTo(17, 8);
            // c.lineTo(7, 18);
            // c.lineTo(17, 28);
            // c.lineWidth = 2;
            // c.strokeStyle = 'black';
            // c.stroke();
            //
            // c.beginPath();
            // c.moveTo(22, 8);
            // c.lineTo(22, 28);
            // c.lineTo(32, 18);
            // c.lineTo(22, 18);
            // c.lineTo(22, 8);
            // c.lineTo(32, 18);
            // c.stroke();

            // c.transform(2,0,0,2,0,0)
            //
            // c.beginPath();
            // c.moveTo(17, 8);
            // c.lineTo(7, 18);
            // c.lineTo(17, 28);
            // c.lineWidth = 2;
            // c.strokeStyle = 'black';
            // c.stroke();
            //
            // c.beginPath();
            // c.moveTo(22, 8);
            // c.lineTo(22, 28);
            // c.lineTo(29, 21);
            // c.lineTo(22, 18);
            // c.lineTo(22, 8);
            // c.lineTo(29, 15);
            // c.lineTo(22, 18);
            // c.stroke();

            // c.transform(2,0,0,2,0,0)
            //
            // c.beginPath();
            // c.moveTo(17, 8);
            // c.lineTo(7, 18);
            // c.lineTo(17, 28);
            // c.lineWidth = 2;
            // c.strokeStyle = 'black';
            // c.stroke();
            //
            // c.beginPath();
            // c.moveTo(22, 8);
            // c.lineTo(22, 28);
            // c.lineTo(29, 22);
            // c.lineTo(22, 18);
            // c.lineTo(22, 8);
            // c.lineTo(29, 13);
            // c.lineTo(22, 18);
            // c.stroke();

//LEFTTOPSIDE
      var leftTopSide = document.getElementById('leftTopSide');
      var l = leftTopSide.getContext('2d');
      var middle = $(window).width() / 2;
      //MENU ICON

      l.beginPath();
      l.moveTo(middle, 0);
      l.lineTo(middle, 245);
      l.lineTo(0, 245);
      l.lineTo(0, 0);
      l.lineTo(middle,0);


      l.lineWidth=2;
      l.strokeStyle = 'black';
      l.fillStyle='grey';
      l.fill();
      // l.stroke();


      //PAGE SLIDE SETTINGS

      $('#homePage').on("swipeleft", function() {
        $('#leftPage, #homePage, #rightPage').addClass('showRightPage');
        $('#leftPage, #homePage, #rightPage').removeClass('showHomePage');
      });

      $('#rightPage').on("swiperight", function() {
        $('#leftPage, #homePage, #rightPage').addClass('showHomePage');
        $('#leftPage, #homePage, #rightPage').removeClass('showRightPage');
      });

      $('#homePage').on("swiperight", function() {
        $('#leftPage, #homePage, #rightPage').addClass('showLeftPage');
        $('#leftPage, #homePage, #rightPage').removeClass('showHomePage');
      });

      $('#leftPage').on("swipeleft", function() {
        $('#leftPage, #homePage, #rightPage').addClass('showHomePage');
        $('#leftPage, #homePage, #rightPage').removeClass('showLeftPage');
      });

      // $(window).on("swiperight", function() {
      //     // $('#leftPage, #homePage, #rightPage').addClass('pageSlideRight');
      //     $('article').addClass('pageSlideRight');
      //     var x = $('article').css('-webkit-transform');
      //     alert(x)
      // });





      //SET SQUARE RIGHT FOR THE START POSITION OF THE WINDOW //suddenly seems unnecessary
      // $('.squareLittle').eq(0).css({"top": "-" + $(window).scrollTop()});
      var st = $(this).scrollTop();
      var op = 1 - (st * 0.01);
      var scaleDown = 0.9 -(st/1000);
      var scrollTransform = 'rotate(45deg) scale(' + scaleDown  + ')';
      $('.squareLittle:first-child').animate({'top': '-' + st, 'opacity' : op}, 0);
      $('.squareLittle:nth-child(2)').animate({'left': '-' + st, 'opacity' : op}, 0);
      $('.squareLittle:nth-child(3)').animate({'right': '-' + st, 'opacity' : op}, 0);
      $('.squareLittle:nth-child(4)').animate({'bottom': '-' + st, 'opacity' : op}, 0);
      $('#squareBig').css({'transform' : scrollTransform, '-webkit-transform' : scrollTransform, '-moz-transform' : scrollTransform, '-ms-transform' : scrollTransform, '-o-transform' : scrollTransform});




      var lastScrollTop = 0;

      $(window).on("scroll", function(event){
         var st = $(this).scrollTop();
         // var op = 1 - (st * 0.01);
         var opMin = 1 - (st * 0.02);
         var opPlus = st * 0.01;
         var scaleDown = 0.9 -(st/1000);
         var scrollTransform = 'rotate(45deg) scale(' + scaleDown  + ')';
         var marginInfo = 190 / st;


         // var squareTop = $('.squareLittle').eq(0).offset().top;
         // var squareBottom = squareTop + $('.squareLittle').eq(0).height(); //300
         // alert(st);//40 per downarrow, key or click // 728 per click on scrollarea // unknown on drag scrollbar
         if(st < 190){  //on this point it is out of the window

                  $('.squareLittle:first-child').animate({'top': '-' + st, 'opacity' : opMin}, 0);
                  $('.squareLittle:nth-child(2)').animate({'left': '-' + st, 'opacity' : opMin}, 0);
                  $('.squareLittle:nth-child(3)').animate({'right': '-' + st, 'opacity' : opMin}, 0);
                  $('.squareLittle:nth-child(4)').animate({'bottom': '-' + st, 'opacity' : opMin}, 0);

                  $('#menuIcon').animate({'opacity' : opPlus}, 0);
                  $('#logobar').animate({'opacity' : opMin}, 0);                  
                  $('#whois').animate({'opacity' : opPlus, 'marginTop' :  marginInfo}, 0);


                  // if (st > 25){
                  //   $('#whois').animate({'opacity' : 1, 'marginTop' :  0}, 1500);
                  // }

                  if(st < 120){
                    $('#squareBig').css({'transform' : scrollTransform, '-webkit-transform' : scrollTransform, '-moz-transform' : scrollTransform, '-ms-transform' : scrollTransform, '-o-transform' : scrollTransform});
                  }

                  if(st < 10){
                    $('.squareLittle').css({'border' : '1px solid transparent'});
                  } else{
                      $('.squareLittle').css({'border' : 'none'});
                  }

           lastScrollTop = st;
         }

      });

});
