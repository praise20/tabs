const btns= document.querySelectorAll(".tab-btn");
const articles= document.querySelectorAll(".content");
const about= document.querySelector(".about");

about.addEventListener('click',function(e){
    const id= e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        articles.forEach(function(content){
            content.classList.remove('active');
        })
        const element= document.getElementById(id);
        element.classList.add('active');
    }
})