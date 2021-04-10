
function togglemenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const option = {day:"numeric", month: "numeric", year: "numeric", time:"numeric"};
document.getElementById("lastupdated").textContent = new Date().toLocaleString("en-us", option);

const today = new Date();
console.log(today);

const dayNumber = today.getDate();
console.log(dayNumber);





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