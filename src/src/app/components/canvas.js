const c = document.querySelector("#canvas")
const setUpCanvas = () => {
    const ctx = c.getContext("2d");
    c.width = c.clientWidth;
    c.height = c.clientHeight;
    window.addEventListener("resize", () => {
        c.width = c.clientWidth;
        c.height = c.clientHeight;
    })
    // Define the rainfall parameters
    const dropCount = 100; 
    const speedRange = { min: 1, max: 3 }
    const lengthRange = { min: 10, max: 30 }
    const color = "#00FF00"

    // Initialize the raindrops
    let raindrops = [];
    for (let i = 0; i < dropCount; i++) {
      raindrops.push({
        x: Math.random() * canvas.width, // Random X position
        y: Math.random() * canvas.height, // Random Y position
        length: Math.random() * (lengthRange.max - lengthRange.min) + lengthRange.min, // Random length
        speed: Math.random() * (speedRange.max - speedRange.min) + speedRange.min, // Random speed
      });
    }

    function drawRaindrop(raindrop) {
      ctx.beginPath()
      ctx.moveTo(raindrop.x, raindrop.y)
      ctx.lineTo(raindrop.x, raindrop.y + raindrop.length)
      ctx.strokeStyle = color
      ctx.lineWidth = 2;
      ctx.stroke()
    }
    function animate() {
      ctx.clearRect(0, 0, c.width, c.height);

      for (let i = 0; i < dropCount; i++) {
        const raindrop = raindrops[i];

        raindrop.y += raindrop.speed;

        if (raindrop.y > c.height) {
          raindrop.y = 0;
        }

        drawRaindrop(raindrop);
      }

      requestAnimationFrame(animate);
    }

    // Start the animation
    animate();
}
setUpCanvas();