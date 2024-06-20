// Animated brand menu

const menuButton = document.getElementsByClassName('brand_drop')[0]
const menuElements = document.getElementsByClassName('brand_drop')
if (menuElements.length > 0) {

  const brandMenu = document.getElementsByClassName('navbrand-menu')[0]
  let menuOn = false

  const slideDown = elem => {
    elem.style.height = menuOn ? `1px` : `${elem.scrollHeight}px`
  }

  menuButton.addEventListener("click", function (e) {
    e.preventDefault()
    slideDown(brandMenu)
    menuOn = !menuOn
  })

}

// Highlight section menu via URL

const thisUrl = window.location.pathname;
const urlArr = thisUrl.split("/")
const section = urlArr[1] // home-audio
const sectionLink = document.getElementById(section+"-link")
console.log(sectionLink)
if(sectionLink) {
  sectionLink.classList.add("scv-highlight") // add border
}



// Highlight corresponding attachment entry

//const thisMarker = document.getElementById('marker').addEventListener("click", displayDate);

const displayDate = () => {
  console.log(thisMarker)
}

// Halt searches with less than 2 characters
const productSearch = document.getElementById('views-exposed-form-algolia-page-1')
const searchBox = document.getElementById('edit-term')
const searchField = document.getElementsByName('term')
console.log(searchField)
if (productSearch) {
  productSearch.onsubmit = e => {
    e.preventDefault()
    const searchQuery = event.target[0].value
    console.log(searchQuery + ' ' + searchQuery.length)
    if (searchQuery.length < 2) {
      searchField[0].classList.add('is-invalid')
    } else {
      console.log('search seems fine')
      productSearch.submit()
    }
  }
}
