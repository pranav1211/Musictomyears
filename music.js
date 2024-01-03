const audioElements = document.querySelectorAll('.audio-element');
let currentlyPlaying = null;

let mcplay = document.querySelector('.mcplay')
let mcpause = document.querySelector('.mcpause')
let shuffleon = document.querySelector('.shuffleon');
let shuffleoff = document.querySelector('.shuffleoff');
var nextsong = document.querySelector(".nextsong");

var songid;
var songnumber;
var getsong;
var newsongnumber;
var songduration;

var totalcheck = '0';

var replaybut = document.querySelector('.replaybutt') //replay off
var replayplaylist = document.querySelector('.replayplaylistt') // repeat on
var replayonesong = document.querySelector('.replayonesong') // repeat on
var mindiv = document.querySelector('#minuter'); // minute div
var secdiv = document.querySelector('#seconder');   // second div

shuffleon.addEventListener('click', () => {
    shuffleon.style.visibility = 'hidden'
    shuffleoff.style.visibility = 'visible';
});
shuffleoff.addEventListener('click', () => {
    shuffleon.style.visibility = 'visible'
    shuffleoff.style.visibility = 'hidden';
});

var noofsongs;

var minuter = 0; // goes in the minute div
var secondr = 1; //goes in the second div

// getting the number of songs for control purposses
fetch('musicdata.json')
    .then(response => response.json())
    .then(data => {
        noofsongs = data['number of songs'];
        console.log(noofsongs);
    })
    .catch(error => console.error('Error reading JSON:', error));

audioElements.forEach(audio => {

    var intervalid1; // for the second
    let loopit = 'norepeat'; // to check if track should be looped

    audio.addEventListener('play', () => {


        //gets the id for the current audio playing
        songnumber = audio.getAttribute('id');
        newsongnumber = songnumber.charAt(1); // taking the number of the song
        newsongnumber = parseInt(newsongnumber);
        newsongnumber++;

        songid = "#t" + newsongnumber; // setting the id for the next song


        // music control pause button
        mcpause.addEventListener('click', () => {
            currentlyPlaying.pause();
            mcplay.style.visibility = 'visible';
            mcpause.style.visibility = 'hidden';
        });

        // music control play button
        mcplay.addEventListener('click', () => {
            currentlyPlaying.play();
            mcplay.style.visibility = 'hidden';
            mcpause.style.visibility = 'visible';
        });

        // to check if audio is playing or ended
        if (currentlyPlaying !== null && currentlyPlaying !== audio) {
            currentlyPlaying.pause();
            minuter = 0;
            secondr = 1;
            mindiv.innerHTML = "0:";
            audio.currentTime = 0;
        }
        // for displaying the attributes in the music control panel
        currentlyPlaying = audio;
        const fileName = audio.getAttribute('data-file-name');
        document.getElementById("titletrack").innerHTML = `${fileName}`;
        const artfileName = audio.getAttribute('data-file-artist');
        document.getElementById("trackartist").innerHTML = `${artfileName}`;


        // counter
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

    //pause

    audio.addEventListener('pause', () => {
        clearInterval(intervalid1);
    });

    // next song button
    nextsong.addEventListener('click', () => {
        if (noofsongs < newsongnumber) { // if the number of songs from json file is less than number that is used to get song id it means the end of playlist has been reached
            if (loopit == 'whole') {
                songid = "#t1"
                getsong = document.querySelector(songid);
                getsong.play();
                newsongnumber = 2;
            }
            else {
                audio.currentTime = 3000;
                mindiv.innerHTML = "0:";
                secdiv.innerHTML = "00"
                minuter = 0;
                secondr = 1;
            }
        }

        clearInterval(intervalid1);
        getsong = document.querySelector(songid);
        getsong.play();

        mcplay.style.visibility = 'hidden';
        mcpause.style.visibility = 'visible';

        minuter = 0;
        secondr = 1;
    });

    //replay

    replaybut.addEventListener('click', () => { // off
        replaybut.style.visibility = 'hidden'
        replayplaylist.style.visibility = 'visible';
        replayonesong.style.visibility = 'hidden'
        loopit = 'whole';
    });
    replayplaylist.addEventListener('click', () => { //on for playlist
        replaybut.style.visibility = 'hidden'
        replayplaylist.style.visibility = 'hidden';
        replayonesong.style.visibility = 'visible'
        loopit = 'onesong';
    });
    replayonesong.addEventListener('click', () => { // on for only one song
        replaybut.style.visibility = 'visible'
        replayplaylist.style.visibility = 'hidden';
        replayonesong.style.visibility = 'hidden'
        loopit = 'norepeat';
    });

    //on end to loop or not

    audio.addEventListener('ended', () => {


        minuter = 0;
        secondr = 1;

        if (loopit == 'onesong') {
            currentlyPlaying.play();
            minuter = 0;
            mindiv.innerHTML = "0:";
        }

        else if (loopit == "whole") {
            if (noofsongs < newsongnumber) {
                songid = "#t1"
                getsong = document.querySelector(songid);
                getsong.play();
                newsongnumber = 2;
            }
            else if (noofsongs >= newsongnumber) {
                newsongnumber = 2;
                newsongnumber = parseInt(newsongnumber);
                songid = "#t" + newsongnumber;
                getsong = document.querySelector(songid);
                getsong.play();
                newsongnumber++;
            }
        }
        else if (loopit == 'norepeat') {
            if (newsongnumber == (noofsongs + 1)) {
                mcplay.style.visibility = 'visible';
                mcpause.style.visibility = 'hidden';
            }
            else {
                mcplay.style.visibility = 'hidden';
                mcpause.style.visibility = 'visible';
                getsong = document.querySelector(songid);
                getsong.play();
            }
        }
    });
});




/////////////////////////////////////////////////////////////////
var p1 = document.getElementById("t1")
var bar0 = document.querySelector('.bar0')
var bar1 = document.querySelector('.bar1')
var bar2 = document.querySelector('.bar2')
document.querySelector('.showerbeckyg').addEventListener("click", () => {
    p1.play();
    p1.currentTime = 0;
    mcplay.style.visibility = 'hidden';
    mcpause.style.visibility = 'visible';
    mindiv.innerHTML = "0:";
    secdiv.innerHTML = "00"
    minuter = 0;
    secondr = 1;
    bar1.style.visibility = 'visible'
    musicbars.style.animation = 'bounce 4s ease infinite'
    musicbars.style.transformOrigin = 'bottom';
    bar1.style.marginLeft = '1.5%'
    bar2.style.marginLeft = '3%'
});
//////////////////////////////////////////////////////
var p2 = document.getElementById("t2")
document.querySelector('.confessions-part-2-usher').addEventListener('click', () => {
    p2.play();
    mcplay.style.visibility = 'hidden';
    mcpause.style.visibility = 'visible';
    mindiv.innerHTML = "0:";
    secdiv.innerHTML = "00"
    minuter = 0;
    secondr = 1; 
    
});
//////////////////////////////////////////////////////
var p3 = document.getElementById("t3")
document.querySelector('.seasons-of-love-rent').addEventListener('click', () => {
    p3.play();
    mcplay.style.visibility = 'hidden';
    mcpause.style.visibility = 'visible';
    mindiv.innerHTML = "0:";
    secdiv.innerHTML = "00"
    minuter = 0;
    secondr = 1;
    
});
////////////////////////////////////////////////////////
var p4 = document.getElementById('t4')
var checker4 = 1;
document.querySelector('.set-fire-to-the-rain-adele-royal-albert').addEventListener('click', () => {
    p4.play();
    mcplay.style.visibility = 'hidden';
    mcpause.style.visibility = 'visible';
    mindiv.innerHTML = "0:";
    secdiv.innerHTML = "00"
    minuter = 0;
    secondr = 1;
    
});

