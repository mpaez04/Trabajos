function Leer() {
    const peli = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx  
    const key='715231ca6e70405be13b1f6aecf48b74';
    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${peli}&appid=${key}&units=metric`
    buscar3(api_url);
}
/*
function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);

            const {Search=[]} = resultado;
            
            console.log(Search);
            document.getElementById("max").innerHTML='';

            Search.map((p)=>{
                document.getElementById("max").innerHTML+=`<div style="margin-top:10px;">
                         <img width='100%' src=${p.Poster} alt="No hay poster"></img>
            </div>`;
            })
      });


}

const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("max").innerHTML='';
        Search.map((p)=>{
                document.getElementById("max").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}    
*/
     
const buscar3=async(api_url)=>{

    const respuesta= await fetch(api_url); 
    const Search = await respuesta.json();
    console.log(respuesta.data);
    
    console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("actual").innerHTML='';
        document.getElementById("max").innerHTML='';
        document.getElementById("min").innerHTML='';
        document.getElementById("actual").innerHTML+=`<div style="margin-top:10px;">
                    </div>`;
        document.getElementById("max").innerHTML+=`<div style="margin-top:10px;">
                    </div>`;
        document.getElementById("min").innerHTML+=`<div style="margin-top:10px;">
                    </div>`;
                    document.getElementById("actual").innerText=Search.main.temp + "°C";
                    document.getElementById("max").innerText=Search.main.temp_max + "°C";
                    document.getElementById("min").innerText=Search.main.temp_min + "°C";
    }

}    
