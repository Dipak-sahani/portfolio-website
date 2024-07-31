const activepage = window.location.pathname;
const tags = document.querySelectorAll('.nav-tag');
tags.forEach(element => {
    
    if(element.href.includes(`${activepage}`)){
        element.classList.add('active');
    }
});

function showSidebar(){
    const  sidebar = document.querySelector(".sidebar");
    sidebar.style.display ='flex'
    
}
function hidesidebar(){
    const  sidebar = document.querySelector(".sidebar");
    sidebar.style.display ='none'
    
}