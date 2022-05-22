let nonActiveArrow = document.querySelector("#non-active-arrow");
nonActiveArrow.addEventListener("click", () =>{
    console.log(screen.width);
    if (screen.width > 699)
    {
        document.querySelector("#share-menu").classList.toggle("hidden");
        document.querySelector("#share-menu").classList.toggle("show");
    }
    else 
    {
        document.querySelector("#share-menu").classList.remove("hidden");
        document.querySelector("#share-menu").classList.add("show");
        document.querySelector("#author-menu").classList.add("hidden");    
        document.querySelector("#author-menu").classList.remove("show");
    }
})
let activeArrow = document.querySelector("#active-arrow");
activeArrow.addEventListener("click", () =>{
    document.querySelector("#share-menu").classList.add("hidden");
    document.querySelector("#share-menu").classList.remove("show");
    document.querySelector("#author-menu").classList.remove("hidden");    
    document.querySelector("#author-menu").classList.add("show");     
})

