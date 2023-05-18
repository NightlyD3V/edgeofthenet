class Weather extends HTMLElement {
    constructor() { 
        super()
    }   

    connectedCallback() {   
        this.innerHTML = `
            <style>
                .weather {
                    font-family: 'Roboto', sans-serif;
                    font-size: 1rem;
                }
            </style>
            <div class="weather">
                <div class="weather__temp"></div>
            </div>
        `
        this.temp = this.querySelector('.weather__temp')
        this.updateWeather()
        // setInterval(() => this.updateWeather(), 10000)    
    }

    updateWeather() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=LONDON,uk&APPID=8b754b97cc0f00fe814de7768087a2c2')
            .then(response => response.json())
            .then(data => {
                this.temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`
            })
    }
}

customElements.define('weather-component', Weather)