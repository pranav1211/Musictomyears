
var plays = document.querySelectorAll('.play-circle-img')
var pauses = document.querySelectorAll('.pause-circle-img')

const audioElements = document.querySelectorAll('.audio-element');
let currentlyPlaying = null;



audioElements.forEach(audio => {

    var duration;
    var minuter = 0; // goes in the inute div
    var secondr = 1; //goes in the second div
    var mindiv = document.querySelector('#minuter');
    var secdiv = document.querySelector('#seconder');
    var intervalid1;
    var replaybut = document.querySelector('.replaybutt')
    var replaystopbut = document.querySelector('.replaystopbutt')
    let loopit;
    var songid = audio.getAttribute('song-id');
    let pauseid = "." + songid + "pa";
    let pause = document.querySelector(pauseid);
    let playid = "." + songid + "pl";
    let play = document.querySelector(playid);
    let idd = audio.getAttribute('id');
    idd = "#" + idd;
    let iddd = document.querySelector(idd);

    audio.addEventListener('play', () => {



        if (currentlyPlaying !== null && currentlyPlaying !== audio) {
            currentlyPlaying.pause();
            minuter = 1;
            secondr = 1;
            mindiv.innerHTML = "0:";
            audio.currentTime = 0;

        }

        currentlyPlaying = audio;
        const fileName = audio.getAttribute('data-file-name');
        document.getElementById("titletrack").innerHTML = `${fileName}`;
        const artfileName = audio.getAttribute('data-file-artist');
        document.getElementById("trackartist").innerHTML = `${artfileName}`;


        ///////// counter

        function forsecond() {

            if (secondr == 60) {
                secondr = 0;
                minuter++;
                mindiv.innerHTML = minuter + ":";
            }
            if (secondr < 10) {
                secdiv.innerHTML = "0" + secondr;
                secondr++;
            }
            else {
                secdiv.innerHTML = secondr;
                secondr++;
            }
        }
        intervalid1 = setInterval(forsecond, 1000);
    });

    audio.addEventListener('pause', () => {
        clearInterval(intervalid1);
    });


    replaybut.addEventListener('click', () => {
        replaybut.style.visibility = 'hidden'
        replaystopbut.style.visibility = 'visible';
        loopit = true;
    });
    replaystopbut.addEventListener('click', () => {
        replaybut.style.visibility = 'visible'
        replaystopbut.style.visibility = 'hidden';
        loopit = false;
    });

    audio.addEventListener('ended', () => {

        if (loopit == true) {
            iddd.play();

        }
        else {
            pause.style.visibility = 'hidden';
            play.style.visibility = 'visible';
        }
        minuter = 1;
        secondr = 0;
    });


});



/////////////////////////////////////////////////////////////////
var p1 = document.getElementById("t1")
var spl = document.querySelector('.showerpl')
var spa = document.querySelector('.showerpa')

document.querySelector('.showerpl').addEventListener("click", () => {
    p1.play();
    spl.style.visibility = 'hidden';
    spa.style.visibility = 'visible';
});
document.querySelector('.showerpa').addEventListener("click", () => {
    p1.pause();
    spl.style.visibility = 'visible';
    spa.style.visibility = 'hidden';
});

//////////////////////////////////////////////////////
var p2 = document.getElementById("t2")
var cptupl = document.querySelector('.cptupl')
var cptupa = document.querySelector('.cptupa')

document.querySelector('.cptupl').addEventListener('click', () => {
    p2.play();
    cptupl.style.visibility = 'hidden';
    cptupa.style.visibility = 'visible';
});
document.querySelector('.cptupa').addEventListener("click", () => {
    p2.pause();
    cptupl.style.visibility = 'visible';
    cptupa.style.visibility = 'hidden';
});

//////////////////////////////////////////////////////
var p3 = document.getElementById("t3")
var solrpl = document.querySelector('.solrpl');
var solrpa = document.querySelector('.solrpa');

document.querySelector('.solrpl').addEventListener('click', () => {
    p3.play();
    solrpl.style.visibility = 'hidden';
    solrpa.style.visibility = 'visible';
});
document.querySelector('.solrpa').addEventListener('click', () => {
    p3.pause();
    solrpl.style.visibility = 'visible';
    solrpa.style.visibility = 'hidden';
});
////////////////////////////////////////////////////////
var p4 = document.getElementById('t4')
var sfttrarlpl = document.querySelector('.sfttrarlpl');
var sfttrarlpa = document.querySelector('.sfttrarlpa');

document.querySelector('.sfttrarlpl').addEventListener('click', () => {
    p4.play();
    sfttrarlpl.style.visibility = 'hidden';
    sfttrarlpa.style.visibility = 'visible';
});
document.querySelector('.sfttrarlpa').addEventListener('click', () => {
    p4.pause();
    sfttrarlpl.style.visibility = 'visible';
    sfttrarlpa.style.visibility = 'hidden';
});
