let txts = document.querySelectorAll("#container > div");
txts.forEach(div => {
    div.addEventListener("click", (event) => {      
        let page = event.target.querySelector(".page");
        
        if(page.innerHTML == "Browse VW Collection")
        {
            console.log("page 1");
            // put all your logic to show the right page
                document.querySelector("#pagetwo > div").style.display = "flex";
           
        }
        else
        {
            console.log("page another");
        }

        txts.forEach(t => {
            t.style.fontSize = "3vw";
        })
    })
})
