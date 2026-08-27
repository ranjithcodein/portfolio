var typed= new Typed(".text",{
    strings : ["Full Stack Developer", "Web Developer", "Software Enthusiast"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CONTACT FORM
       ========================= */

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you! Your message has been submitted successfully.");

            contactForm.reset();
        });
    }


    /* =========================
       MATRIX BACKGROUND
       ========================= */

    const canvas = document.getElementById("matrix");

    if (!canvas) {
        console.error("Matrix canvas with id='matrix' was not found.");
        return;
    }

    const ctx = canvas.getContext("2d");

    const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";

    const latin =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const nums =
        "0123456789";

    const symbols =
        "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    const alphabet = katakana + latin + nums + symbols;

    const fontSize = 16;

    let columns;
    let rainDrops = [];


    /* =========================
       SET CANVAS SIZE
       ========================= */

    function resizeCanvas() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        columns = Math.floor(canvas.width / fontSize);

        rainDrops = [];

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = Math.floor(
                Math.random() * canvas.height / fontSize
            );
        }
    }


    /* Initial size */
    resizeCanvas();


    /* =========================
       MATRIX DRAW
       ========================= */

    function draw() {

        ctx.fillStyle = "rgba(3, 2, 4, 0.92)";
        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.fillStyle = "#00ff41";
        ctx.font = fontSize + "px monospace";


        for (let i = 0; i < rainDrops.length; i++) {

            const text =
                alphabet.charAt(
                    Math.floor(
                        Math.random() * alphabet.length
                    )
                );

            ctx.fillText(
                text,
                i * fontSize,
                rainDrops[i] * fontSize
            );


            if (
                rainDrops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {
                rainDrops[i] = 0;
            }

            rainDrops[i]++;
        }
    }


    /* =========================
       START MATRIX
       ========================= */

    setInterval(draw, 30);


    /* =========================
       RESPONSIVE MATRIX
       ========================= */

    window.addEventListener("resize", resizeCanvas);

});