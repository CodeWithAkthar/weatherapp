async function apifetch() {
  const city = document.getElementById("cityname");
  const cityname = city.value;
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=8aec589c93c1ea3ae07fca17ff078d75`;
  try {
    const data = await fetch(API);
    const jsondata = await data.json();
    console.log(jsondata);

    const temp = jsondata.main.temp;
    const wind = jsondata.wind.speed;
    const humidity = jsondata.main.humidity;
    const place = jsondata.name;
    const weather = jsondata.weather[0].main;
    console.log(temp);
    console.log(wind);
    console.log(humidity);
    console.log(weather);
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img2").style.display = "flex";

    document.getElementById("cloud").style.display = "none";
    document.getElementById("cloud").style.display = "none";
    document.getElementById("clear").style.display = "none";
    document.getElementById("drizzle").style.display = "none";
    document.getElementById("mist").style.display = "none";
    document.getElementById("snow").style.display = "none";


    if (weather === "Rain") {
      document.getElementById("cloud").style.display = "block";  
    } else if (weather === "Clouds") {
      document.getElementById("cloud").style.display = "block";
    } else if (weather === "Clear") {
      document.getElementById("clear").style.display = "block";
    } else if (weather === "Drizzle") {
      document.getElementById("drizzle").style.display = "block";
    } else if (weather === "Mist") {
      document.getElementById("mist").style.display = "block";
    } else if(weather === "Snow") {
      document.getElementById("snow").style.display = "block";
    }

    document.getElementById("temp").innerHTML = temp;
    document.getElementById("place").innerHTML = place;
    document.getElementById("wind").innerHTML = "Wind:" + wind;
    document.getElementById("humidity").innerHTML = "humidity:" + humidity;
  } catch (err) {
    console.log("moonji");
  }
}
