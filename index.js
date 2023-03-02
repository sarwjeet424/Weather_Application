<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <style>
       
        body{
            background-color: rgb(162, 162, 218);
        }
        #box{
            display: flex;
            width: 80%;
            margin: auto;           
            margin-top: 50px;
        }
        #container{
            width: 40%;
            margin: auto;
            height: 400px;
            text-align: center;
            background-color: white;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        #container1{
            width: 50%;
            margin: auto;
            height: 400px;
            /* text-align: center; */
        }
        #input{
            display: flex;
            width: 25%;
            margin: auto;
            gap:20px;
            
        }
        h1{
            text-align: center;
            color: rgb(207, 79, 28)
        }
        input{
            height: 25px;
            border: 0px;
        }
        button{
            padding:6px 12px 6px 12px;
            border:0px;
            border-radius: 3px;
        }
        button:hover{
            background-color: blue;
            color:white;
            border:0px;
            border-radius: 3px;
        }
    </style>
</head>
<body style="background-image: url(https://images.unsplash.com/photo-1591804227855-d6fe0b648d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60);
background-size:cover ;
background-repeat: no-repeat;">
    <h1>Today's Weather Report</h1>
    <div id="input">
        <input placeholder="Enter Your City" id="city" type="text">
        <button onclick="myname()">Submit</button>
    </div>
    <div id="box">
        <div id="container"></div>
        <div id="container1">
            <iframe width="600" 
            height="500"
            id="gmap_canvas"
            frameborder="0" 
            scrolling="no" 
            marginheight="0"
            marginwidth="0">
          </iframe>
        </div>
    </div>
    
</body>
</html>

<script>

    const apikey = "605ba52e9e5fae23205272c320372255"
//    async function myname(){

//     var city =document.querySelector("#city").value

//     let url= "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey

//     let res= await fetch(url)

//     let data = await res.json()
//     append(data)
//     console.log(data)
     
//     }

//     function append(data){
//         let container=document.getElementById("container")
//         container.innerHTML=null;
//         let h3=document.createElement("h3")
//         h3.innerText=data.name;
//         let p1=document.createElement("p")
//         p1.innerText=`Current temp: ${Math.round(data.main.temp-273)} °C`;
//         let p2=document.createElement("p")
//         p2.innerText=`Max. temp: ${Math.round(data.main.temp_max-273)} °C`;
//         let p3=document.createElement("p")
//         p3.innerText=`Min. temp: ${Math.round(data.main.temp_min-273)} °C`;
//         container.append(h3,p1,p2,p3)
        
//     }


//     function getLocationWeather(data){

//         let iframe= document.getElementById("gmap_canvas")
//         iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

//         navigator.geolocation.getCurrentPosition(success);
//         function success(position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         console.log(latitude);
//         console.log(longitude);
//   }
// }

   async function myname(){

    var city =document.querySelector("#city").value

    let url= "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey

    let res= await fetch(url)

    let data = await res.json()
    append(data)
    console.log(data)
     
    }

    function append(data){
        let container=document.getElementById("container")
        container.innerHTML=null;
        let h3=document.createElement("h3")
        h3.innerText=data.name;
        let p1=document.createElement("p")
        p1.innerText=`Current temp: ${Math.round(data.main.temp-273)} °C`;
        let p2=document.createElement("p")
        p2.innerText=`Max. temp: ${Math.round(data.main.temp_max-273)} °C`;
        let p3=document.createElement("p")
        p3.innerText=`Min. temp: ${Math.round(data.main.temp_min-273)} °C`;
        let p4=document.createElement("p")
        p4.innerText=`Sunset: ${data.sys.sunrise}`
        let p5=document.createElement("p")
        p5.innerText=`Sunset: ${data.sys.sunset}`
        let p6=document.createElement("p")
        p6.innerText=`Wind: ${data.wind.speed}`
        let p8=document.createElement("p")
        p8.innerText=`Degree: ${data.wind.deg}`
        let p7=document.createElement("p")
        p7.innerText=`Cloud-all: ${data.clouds.all}`
        container.append(h3,p1,p2,p3,p4,p5,p6,p8,p7)

        let iframe= document.getElementById("gmap_canvas")
        iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

        
    }

</script>
