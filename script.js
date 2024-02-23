
    //     let url="http://universities.hipolabs.com/search?name="; 
    //     let btn=document.querySelector("button");
    //     let list=document.querySelector("#list");
    //     btn.addEventListener("click",async()=>{
    //         let country= document.querySelector("input").value;  
    //        let colArr=await getCountry(country);
    //        show(colArr); 

    //     })
    //     function show(colArr){
    //         for(col of colArr){
    //             console.log(col.name); 
    //             let li=document.createElement("li");
    //             li.innerText=col.name;

    //             list.appendChild(li);
                
    //         }
    //     }
    //    async function getCountry(country) {
    //        try{
    //         let res=await axios.get(url+country);
    //           return res.data;
    //        } 
    //        catch(err){
    //         console.log(err); 
    //        }
    //     }
    //     getCountry();
    const url = "http://universities.hipolabs.com/search?name=";
    const btn = document.querySelector("button");
    const list = document.querySelector("#list");
    
    btn.addEventListener("click", async () => {
        const country = document.querySelector("input").value;
        const colArr = await getCountry(country);
        show(colArr);
    });
    
    function show(colArr) {
        list.innerHTML = ""; // Clear existing list items
        colArr.forEach(col => {
            console.log(col.name);
            const li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
        });
    }
    
    async function getCountry(country) {
        try {
            const res = await axios.get(url + country);
            return res.data;
        } catch (err) {
            console.log(err);
            return []; // Return empty array in case of error
        }
    }
    