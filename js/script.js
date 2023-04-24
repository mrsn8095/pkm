var swiper = new Swiper(".slide-content",{
	slidesPerView: 3, 
	spaceBetween: 30, 
	slidesPerGroup: 3, 
	loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
	loopFillGroupWithBlank: true,
	pagination: {
		el: "swiper-pagination",
		clickable: true,},
	navigation: {
		nextEl: "swiper-button-next",
		prevEl: "swiper-button-prev",},});