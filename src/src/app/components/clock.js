class Clock extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .clock {
                    font-family: 'Roboto', sans-serif;
                    font-size: 1rem;
                }
            </style>
            <div class="clock">
                <div class="clock__time"></div>
            </div>
        `
        this.time = this.querySelector('.clock__time')
        this.updateClock()
        setInterval(() => this.updateClock(), 1000)    
    }

    updateClock() { 
        const date = new Date()
        let d = date.getDay()
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        let ampm = h >= 12 ? 'PM' : 'AM';
        switch(d){
            case 0: d = "Sun"; break
            case 1: d = "Mon"; break   
            case 2: d = "Tues"; break
            case 3: d = "Wed"; break 
            case 4: d = "Thurs"; break
            case 5: d = "Fri"; break
            case 6: d = "Sat"; break
        }
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        // if(h == 0) {
        //     h = 12;
        // }
        this.time.innerHTML = `${d} ${h}:${m}:${s} ${ampm}`
    }
}

customElements.define('clock-component', Clock)