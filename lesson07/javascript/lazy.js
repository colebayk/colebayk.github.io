
let parade = new IntersectionObserver((name, parade) => { 
    name.forEach(items => {
    if(items.isIntersecting){
        items.target.src = items.target.dataset.src;
        items.target.removeAttribute('data-src');
        parade.unobserve(items.target);
    }
    });
}, {rootMargin: "0px 0px -100px 0px"});

// make a list of all images with a data source and send that list to myObserver
document.querySelectorAll('img[data-src]').forEach(img => {parade.observe(img)});