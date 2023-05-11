export let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

export function addTouchClass() {
	if (isMobile.any()) document.body.classList.add('_touch');
}

export function burgerInit() {
	const iconMenu = document.querySelector('.header__menu-icon');
	if (iconMenu) {
		const menuBody = document.querySelector('.header__menu');
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
		});
	}
}

export function dropdownFilter(){
	const selectBtn = document.querySelector(".select-btn"), items = document.querySelectorAll(".checkbox");

	selectBtn.addEventListener("click", () => {
		selectBtn.classList.toggle("_open")
	})

	items.forEach(item => {
		item.addEventListener("click", () => {
			item.classList.toggle("_checked");
		})
	})

}





