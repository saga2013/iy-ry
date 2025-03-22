const input = document.getElementById('input');
const btn = document.getElementById('btn');
const div = document.getElementById('div');
const main = document.getElementById('main');

const key = '4cf311f915d1e88f37b88f445af73cc5';

input.addEventListener('input', () => {
    const cityName = input.value.toLowerCase().trim();

    async function weather() {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
            const res = await fetch(url);
            const data = await res.json();

            const descrip = data.weather[0].main;
            const temp = Math.round(data.main.temp);
            const tempMax = Math.round(data.main.temp_max);
            const tempMin = Math.round(data.main.temp_min);

            let weatherImage = '';
            let backgroundColor = ''; 
            let gradient = ''; 

            switch (descrip.toLowerCase()) {
                case 'clouds':
                    weatherImage = '<img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-white-cartoon-clouds-clipart-png-image_5568114.jpg" alt="Clear sky" style="width: 200px;">';
                    backgroundColor = 'gray'; // Облачно
                    gradient = 'linear-gradient(229.56deg, #B0BEC5 26.99%, rgba(157, 82, 172, 0.7) 95.21%)';
                    break;
                case 'clear':
                    weatherImage = '<img src="https://cdn.vectorstock.com/i/1000v/62/16/sunny-sun-cartoon-vector-49816216.jpg" alt="Clear sky" style="width: 200px;">';
                    backgroundColor = '#FFD700'; 
                  
                    break;
                case 'rain':
                    weatherImage = '<img src="https://img.freepik.com/free-vector/rainy-cloud-sticker-white-background_1308-59851.jpg" alt="Rain" style="width: 200px;">';
                    backgroundColor = '#5C6BC0'; 
                  
                    break;
                case 'wind':
                    weatherImage = '<img src="https://i.pinimg.com/1200x/9b/5d/2d/9b5d2d36b05b38f5147e9a2ede23ea1c.jpg" alt="Wind" style="width: 200px;">';
                    backgroundColor = '#90CAF9';
                   
                    break;
                default:
                    weatherImage = '<img src="images/default-icon.png" alt="Unknown weather">';
                    backgroundColor = '#C1C1C1'; 
                  
                    break;
            }

            
            main.style.background = gradient;
            main.style.backgroundColor = backgroundColor; 

            div.innerHTML = `
                <h2> ${weatherImage} ${descrip}</h2>
                <h1>${temp}°</h1>
                <h1>${cityName}</h1>
                <h2>Max: ${tempMax}°C &nbsp;&nbsp; Min: ${tempMin}°C</h2>
            `;
        } catch (error) {
            console.log('Error:', error);
        }
    }

    if (cityName) {
        weather();
    }
});
