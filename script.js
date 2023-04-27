document.body.innerHTML = `
<div class="flex align-items-center" id="wrapper">
        <h1 id="heading">Nationalize of Name</h1>
        <div class="text-sm passage">
            Have you ever wondered if a Name of could reveal something about nationality?
            lets try nationality of a name!
        </div>
        <input type="text" id="search" placeholder="Enter a Name" >
        <button type="submit"  id="btn" class="btn " >Go!</button><br>
        <h6 id="text2"> Name Related Top Two Countries And Their Probabilities Are</h6><br>
        <div class="d-flex flex-row" id="result">
          
        </div>
    </div>`;

let search = document.getElementById("search");
let result = document.getElementById("result");
let searchBtn = document.querySelector("#btn");

searchBtn.addEventListener("click", async () => {
    let value = document.getElementById("search").value;




    if (value.length == 0 || value.includes(" ")) {
        alert("Please a name without any space");
    }
    else {
        try {
            let data = await fetch(`https://api.nationalize.io/?name=${value}`);
            let ans = await data.json();
            console.log(ans);
            result.innerHTML = "";
            for (var i = 0; i < 2; i++) {
                result.innerHTML += `
            <div id="content">
                <div class="p-2" >
                    <h1 id="flexHead">Top-${i + 1}</h1>
                <div class="p-2" >
                    <h4 id="CountryId">country-id= ${ans.country[i].country_id}</h4>
                    <h6 id="probability">probability=${((ans.country[i].probability)*100).toFixed(2)}%</h6>
                </div>
            </div>
            `;

            }
        }
        catch {
            console.log(error);
        }
    }
});


