async function getPrayerTimes(){

    const prayerAPI = await fetch("https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5");
    const prayerDict = await prayerAPI.json();
    const apiData = prayerDict.data.timings;

    const cardDiv = document.getElementById("cards");

    for (let i in apiData){

        const cards = `
        <div class="card"> 
            <span class="prayer_name">${i}</span>
            <span class="prayer-time">${apiData[i]}</span>
        </div>
        `;

        cardDiv.innerHTML += cards;
    }
}

getPrayerTimes();



document.getElementById("infoBtn").addEventListener("click", getExtraInfo);


async function getExtraInfo(){

    let today = new Date();
    let date = today.toLocaleDateString("ar-EG");

    const weatherAPI = await fetch("https://api.open-meteo.com/v1/forecast?latitude=30.04&longitude=31.23&current_weather=true");
    const weatherData = await weatherAPI.json();

    let temp = weatherData.current_weather.temperature;

    document.getElementById("extraInfo").innerHTML =
        "📅 التاريخ: " + date + "<br>" +
        "🌡️ درجة الحرارة: " + temp + "°C";
}