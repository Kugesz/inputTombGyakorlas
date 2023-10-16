let tomb = []

window.onload = function () {
    document.getElementById("tombInputButton")
    .addEventListener("click", function(){

        let tombBemenet = document.getElementById("tombInput").value;

        if(tombBemenet == ""){document.getElementById("hiba").textContent = "Az érték nem megfelelő!"; return;}
        else {document.getElementById("hiba").textContent = ""}

        tomb = tombBemenet.split(" ");
        console.log(tomb);

        document.getElementById("gombok").innerHTML = ``;
        Kiiras();
    })
}

function Kiiras(){
    let htmlString = ``
    tomb.forEach(element => {
        htmlString += `<div class="col-2 d-flex justify-content-center align-items-center">
                        <h2>${element}</h2>
                       </div>`
    });

    console.log(htmlString);
    document.getElementById("tarolo").innerHTML = htmlString;
}