let corona = document.getElementById('corona-Apl');


const view = () => {

     fetch('https://data.covid19india.org/data.json').then((res )=>{
        console.log("REs" , res)
         return res.json();
     }).then((data)=>{
            console.log("data",data.statewise);
         const view = data.statewise;

         view.forEach((state) => {
            corona.innerHTML += `<tr>
            <td class=" p-3 mx-auto">${state.state}</td>
            <td class=" p-3 mx-auto">${state.active}</td>
            <td class=" p-3 mx-auto">${state.lastupdatedtime}</td>
            <td class=" p-3 mx-auto">${state.confirmed}</td>
            <td class=" p-3 mx-auto">${state.deaths}</td>
         </tr>`
         });
     }).catch((Err)=>{
            console.log("Err",Err);
     })

}
view();

