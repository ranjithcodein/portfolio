var typed= new Typed(".text",{
    strings : ["Full Stack Developer", "Web Developer", "Software Enthusiast"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
{
        document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault();

            alert("Thank you! Your message has been submitted successfully.");
            document.getElementById("contact-form").reset();
        })};


    document.addEventListener('DOMContentLoaded',() => {
    const canvas=document.getElementById('matrix');

    const ctx=canvas.getContext('2d');

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    const katakana='アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums='0123456789';
    const symbols='!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    const alphabet=katakana+latin+nums+symbols;

    const fontSize=16;
    const columns=canvas.width/fontSize;

    const rainDrops=[];

    for (let x = 0; x < columns; x++){
        rainDrops[x]=1;
   }

    const draw =() =>{
    ctx.fillStyle='rgba(3, 2, 4, 0.92)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle='#00ff41';
    ctx.font=fontSize+'px monospace';

    for (let i=0; i<rainDrops.length;i++){
        const text=alphabet.charAt(Math.floor(Math.random()*alphabet.length));
        ctx.fillText(text,i *fontSize,rainDrops[i]*fontSize);
        if(rainDrops[i]* fontSize>canvas.height && Math.random()>0.975){
        rainDrops[i]=0;
        }
           rainDrops[i]++;
    }
};


  setInterval(draw, 30);

  // Update canvas size on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});