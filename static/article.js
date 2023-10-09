class dataScroll {
	districtName = document.querySelectorAll('.article-container .districtName')
	constructor() {
		this.init()
	}
	init() {
		this.initDom()
		this.initScroll()
	}
	initDom() {
		var districtName = this.districtName
		var directoryDom = document.querySelector('.directory #category ul')
		let Listdom = "";
		districtName.forEach(item => {
			let linkClass = item.querySelector(".data-tab")
			Listdom += `<li><a data-tab=${item.getAttribute('data-tab')}><div>${linkClass.innerHTML}</div></a></li>`
		})
		directoryDom.innerHTML = Listdom
		var Alist = directoryDom.querySelectorAll("li a")
		Alist.forEach(el => {
			el.addEventListener('click', function(e) {
				let aClick = e.target.getAttribute("data-tab")
				districtName.forEach(targetNode => {
					if (targetNode.getAttribute('data-tab') === e.target.getAttribute(
							"data-tab")) {
						targetNode.scrollIntoView({
							behavior: "smooth",
							block: "start",
							inline: "start",
						});
					}
				})
			})
		})
	}
	initScroll() {
		window.addEventListener("scroll", (e) => {
			var scroll = document.documentElement.scrollTop || document.body.scrollTop;
			var sections = this.districtName
			for (var i = sections.length - 1; i >= 0; i--) {
				if (parseInt(scroll) >= Math.ceil(sections[i].offsetTop) - 20) {
					this.activeLoadScroll(sections[i].getAttribute('data-tab'))
					return
				}
			}
		})
	}
	activeLoadScroll(sections) {
		var categoryDomA = document.querySelectorAll('.directory #category ul li a')
		categoryDomA.forEach(item => {
			if (item.getAttribute('data-tab') == sections) {
				item.className = "active"
			} else {
				item.className = ""
			}
		})
	}
}
new dataScroll()
