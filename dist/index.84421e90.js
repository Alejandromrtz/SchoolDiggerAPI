async function t(t){try{let e=`https://api.schooldigger.com/v2.0/autocomplete/schools?q=${t}&returnCount=5&appID=6e029654&appKey=4e7338563e078d735216af6d5970d6a9`,o=await fetch(e),n=await o.json();console.log(n),function(t){let e=document.getElementById("schoolTableBody");for(let o of(e.innerHTML="",t)){let t=document.createElement("tr");t.innerHTML=`
            <td>${o.schoolName}</td>
            <td>${o.city}, ${o.state} ${o.zip}</td>
            <td>${o.schoolLevel}</td>
            <td>${o.lowGrade} - ${o.highGrade}</td>
            <td>${o.rank} out of ${o.rankOf}, ${o.rankStars} stars</td>
        `,e.appendChild(t)}}(n.schoolMatches)}catch(t){console.log("There was an error",t)}}document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("searchButton");e.addEventListener("click",()=>{let e=document.getElementById("locationInput"),o=e.value;t(o)})});//# sourceMappingURL=index.84421e90.js.map

//# sourceMappingURL=index.84421e90.js.map
