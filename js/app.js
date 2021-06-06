// routes 
const routes = {
    '/': home,
    '/cart': cart,
    '/profile': profile
};

// adding content to the root div element
const rootDiv = document.querySelector(".grid-container");
rootDiv.innerHTML = routes[window.location.pathname];

// onNavigate function which should navigate using routes and window
const onNavigate = (pathname) =>{
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
         );
    rootDiv.innerHTML = routes[pathname];
}