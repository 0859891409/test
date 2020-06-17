// document.addEventListener("DOMContentLoadsd",function(){
//           var btn_menu = document.getElementsByClassName('btn-menu');
//           var nav_links = document.getElementsByClassName('nav-links');

//           btn_menu.onclick = function(){
//                     console.log("da kich dc");
                    
//                     nav_links.toggle('.nav_link-active');
//           }
// },false);
$(document).ready(function () {
          $('.btn-menu').click(function(){
              $('.nav-links').toggleClass('nav-links-active');
          })
})