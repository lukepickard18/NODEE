document.addEventListener("click", (event) => {

    if(event.target.matches(".page"))
    {
        let page = event.target;
        
        if(page.innerHTML == "Browse VW Collection")
        {
            console.log("page 1");
            // put all your logic to show the right page
            document.querySelector("#pagetwo > div").style.display = "grid"; 
            
        }
        else
        {
            console.log("page another");
        }
        let txts = document.querySelectorAll("#container > div");
        txts.forEach(t => {
            t.style.fontSize = "3vw";
        })
    }

});