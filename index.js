document.addEventListener("DOMContentLoaded", function () {
    function yayyayyay() {
        const gifdiv = document.getElementById("gif-container");
        const textid = document.getElementById("text");

        textid.innerHTML = 'Yippee! I am so happy :) ... <br> BTW I know you tried saying no'

        gifdiv.innerHTML = `
            <div class="tenor-gif-embed" data-postid="18059553370350307210" data-share-method="host" data-aspect-ratio="0.563333" data-width="100%">
            <a href="https://tenor.com/view/cat-dance-dancing-cat-chinese-dancing-cat-funny-cat-meme-cat-gif-18059553370350307210">Cat Dance Dancing Cat GIF</a>
            from <a href="https://tenor.com/search/cat+dance-gifs">Cat Dance GIFs</a>
            </div> 
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        `;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://tenor.com/embed.js';
        gifdiv.appendChild(script);
    
        document.getElementById("yesbutton").style.display = "none";
        document.getElementById("nobutton").style.display = "none";

        startLightShow();
    }

    function startLightShow() {
        const body = document.body;
        const colors = ["#FF6347", "#7FFFD4", "#FFD700", "#00FA9A", "#FF1493", "#4B0082", "#FFD700"];
        let currColor = 0;

        const interval = setInterval(function() {
            body.style.backgroundColor = colors[currColor];
            currColor = (currColor + 1) % colors.length
        }, 300);

        setTimeout(function() {
            clearInterval(interval);
        }, 10000);
    }

    function movenobutton() {
        const noButton = document.getElementById("nobutton");

        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

    
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;


        noButton.style.position = 'absolute';
    
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    document.getElementById("yesbutton").onclick = yayyayyay;
    document.getElementById("nobutton").addEventListener("mouseover", movenobutton);
  });