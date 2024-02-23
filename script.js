
        let url="http://universities.hipolabs.com/search?name="; 
        let btn=document.querySelector("button");
        let list=document.querySelector("#list");
        btn.addEventListener("click",async()=>{
            let country= document.querySelector("input").value;  
           let colArr=await getCountry(country);
           show(colArr); 

        })
        function show(colArr){
            for(col of colArr){
                console.log(col.name); 
                let li=document.createElement("li");
                li.innerText=col.name;

                list.appendChild(li);
                
            }
        }
       async function getCountry(country) {
           try{
            let res=await axios.get(url+country);
              return res.data;
           } 
           catch(err){
            console.log(err); 
           }
        }
        getCountry();
