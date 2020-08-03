const img_top1 = document.querySelector('.bg-top1'),
	img_top2 = document.querySelector('.bg-top2'),
	img_top3 = document.querySelector('.bg-top3'),
	img_bottom1 = document.querySelector('.bg-bottom1'),
	img_bottom2 = document.querySelector('.bg-bottom2'),
	breakpoint = matchMedia('(min-width: 991px)')

const changeSize = (mql) => {
	if (mql.matches) {
		img_top1.removeAttribute('src', './img/bg-section-top-mobile-1.svg')
		img_top1.setAttribute('src', './img/bg-section-top-desktop-1.svg')
		img_top2.removeAttribute('src', './img/bg-section-top-mobile-2.svg')
		img_top2.setAttribute('src', './img/bg-section-top-desktop-2.svg')
		img_top3.removeAttribute('src', './img/bg-footer-top-mobile.svg')
      img_top3.setAttribute('src', './img//bg-footer-top-desktop.svg')
      img_bottom1.removeAttribute('src','./img/bg-section-bottom-mobile-1.svg')
      img_bottom1.setAttribute('src','./img/bg-section-bottom-desktop-1.svg')
      img_bottom2.removeAttribute('src','./img/bg-section-bottom-mobile-2.svg')
      img_bottom2.setAttribute('src','./img/bg-section-bottom-desktop-2.svg')
	} else {
		img_top1.removeAttribute('src', './img/bg-section-top-desktop-1.svg')
		img_top1.setAttribute('src', './img/bg-section-top-mobile-1.svg')
		img_top2.removeAttribute('src', './img/bg-section-top-desktop-2.svg')
		img_top2.setAttribute('src', './img/bg-section-top-mobile-2.svg')
		img_top3.removeAttribute('src', './img/bg-footer-top-desktop.svg')
      img_top3.setAttribute('src', './img/bg-footer-top-mobile.svg')
      img_bottom1.removeAttribute('src','./img/bg-section-bottom-desktop-1.svg')
      img_bottom1.setAttribute('src','./img/bg-section-bottom-mobile-1.svg')
      img_bottom2.removeAttribute('src','./img/bg-section-bottom-desktop-2.svg')
      img_bottom2.setAttribute('src','./img/bg-section-bottom-mobile-2.svg')
	}
}
breakpoint.addListener(changeSize)
changeSize(breakpoint)
