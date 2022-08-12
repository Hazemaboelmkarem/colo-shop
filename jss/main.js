var sec = 60
var min = 59
setInterval( counter1 , 1000)
function counter1 () {
	if(sec > 0){
		sec--
		if (sec / 1 == 0 ) {
			sec = 60
			min--		
			document.getElementById('min').innerHTML = (min)	
		}
		document.getElementById('sec').innerHTML = (sec)	
	}
}
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  });