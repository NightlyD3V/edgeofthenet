class Messages extends HTMLElement {
    constructor() {
        super()
        this.html = ""
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .wrapper {
                    width: 100%;
                    margin: 0 auto;
                }
                .messages {
                    background-color: rgba(255, 255, 255, 0.435); 
                    backdrop-filter: blur(3px);
                    width: 300px;
                    margin: 0 auto;
                    padding: 25px;
                }
                .input {
                    position: absolute; 
                    top: 200px;
                    width: 90%;
                    padding: 5px;
                    border-radius: 5px;
                    background-color: whitesmoke;
                }
            </style>
            <div class="wrapper">
                <div class="messages"></div>
                <div class="messages"></div>
                <div class="messages"></div>
                <form class="form">
                    <input type="text" class="input"></input>
                </form>
            </div>
        `
        this.messages = this.querySelector('.messages')
        this.sendRequest() // Get inital data
        this.sendMessageForm = this.querySelector(".form")
        this.sendMessageForm.addEventListener("submit", (e) => {
            e.preventDefault()
            console.log(e)
            const message = e.target[0].value
            console.log(message)
            this.sendData(JSON.stringify({'field1': String(message)}))

        })
        // Fake Polling (Should alternatively use web sockets)
        // setInterval(() => this.sendRequest(), 10000)  
    }

    async sendRequest() {
        const res = await fetch('https://eager-mewing-fairy.glitch.me/messages')
        const message = await res.json();
        const message_bubbles = document.querySelectorAll(".messages")
        const message_bubbles_arr = Array.from(message_bubbles)
        console.log(message_bubbles)
        message_bubbles_arr.map((arr, index=0) => {
            message.Messages.map((message) => {
                if(message != undefined) {
                    console.log("Messasge", Object.values(message)[index])
                    arr.innerHTML = (Object.values(message)[index])
                } 
            })
        })
        // Need to instance another message div 
        // message.Messages.map((e) => {this.messages.innerHTML = Object.values(e)})
        // message.Messages.map((e) => console.log(e))
        // console.log(message)
    }
    async sendData(data) {
        const res = await fetch('https://eager-mewing-fairy.glitch.me/messages', {
            method: "POST",
            mode: "cors",
            cache: "no-cache", 
            credentials: "same-origin",
            headers: {
                "Content-Type": 'application/json'
            },
            body: data
        })
        console.log(data)
        console.log(res.clone().json())
        this.sendRequest()
        return res.clone().json()
    }
}

customElements.define('messages-component', Messages)