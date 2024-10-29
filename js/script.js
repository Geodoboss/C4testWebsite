function onLoad() {
    // collection of actions
    // create a reference to button
    const navbutton = document.querySelector("#nav-button")
    // create a reference to navigation
    const mainnav = document.querySelector("#main-nav")
    // console.log(navbutton,mainnav)
    navbutton.addEventListener('click', function() {
        if( mainnav.classList.contains('open') ) {
            mainnav.classList.remove('open')
        }
        else {
            mainnav.classList.add('open')
        }
    })
}
// waiting for document to load
window.addEventListener('load', onLoad )