var plays = document.querySelectorAll('.play')
var pauses = document.querySelectorAll('.pause')

const audioElements = document.querySelectorAll('.audio-element');
let currentlyPlaying = null;

audioElements.forEach(audio => {
    var replaybut = document.querySelector('.replaybutt')
    var replaystopbut = document.querySelector('.replaystopbutt')
    replaybut.addEventListener('click', () => {
        audio.loop = true;
    });
    replaystopbut.addEventListener('click', () => {
        audio.loop = false;
    });
    audio.addEventListener('ended', () => {
        if (audio.loop == true) {
            audio.load();
            
        }
    });
    audio.addEventListener('play', () => {

        if (currentlyPlaying !== null && currentlyPlaying !== audio) {
            currentlyPlaying.pause();
            min = 1;
            sec = 0;
            audio.currentTime = 0;


        }
        currentlyPlaying = audio;
        const fileName = audio.getAttribute('data-file-name');
        document.getElementById("titletrack").innerHTML = `${fileName}`;
        const artfileName = audio.getAttribute('data-file-artist');
        document.getElementById("trackartist").innerHTML = `${artfileName}`;

        //counter
        var duration = audio.duration;
        duration = Math.trunc(duration);
        var minutes;
        var seconds;
        if (duration > 60) {
            var ntime = duration / 60;
            minutes = Math.trunc(ntime)
            seconds = duration - (minutes * 60)
            if (seconds <= 9) {
                seconds = "0" + minutes;
            }
        }
    });
    var min = 1;
    var sec = 1;
    var intervalid1;
    var intervalid2;
    audio.addEventListener('play', () => {


        function timeer() {
            if (sec < 10) {
                if (min == 1) {
                    document.getElementById("seconder").innerHTML = "00:0" + sec;
                    sec++;
                }
                else {
                    document.getElementById("seconder").innerHTML = ":0" + sec;
                    sec++;
                }
            }
            else {

                if (min == 1) {
                    document.getElementById("seconder").innerHTML = "00:" + sec;
                    sec++;
                }
                else {
                    document.getElementById("seconder").innerHTML = ":" + sec;
                    sec++;
                }
            }
            if (sec == 60) {
                sec = 0;
            }

        }
        function minuter() {

            document.getElementById("minuter").innerHTML = "0" + min;
            min++;

        }
        intervalid1 = setInterval(timeer, 1000)
        intervalid2 = setInterval(minuter, 60000)
    });


    audio.addEventListener('pause', () => {
        clearInterval(intervalid1);
        clearInterval(intervalid2);

    });


});



/////////////////////////////////////////////////////////////////
var p1 = document.getElementById("t1")
var p2 = document.getElementById("t2")
var p3 = document.getElementById("t3")
//////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////
var p5 = document.getElementById('t5')
var razpl = document.querySelector('.razpl');
var razpa = document.querySelector('.razpa');

document.querySelector('.razpl').addEventListener('click', () => {
    p5.play();
    razpl.style.visibility = 'hidden';
    razpa.style.visibility = 'visible';
});
document.querySelector('.razpa').addEventListener('click', () => {
    p5.pause();
    razpl.style.visibility = 'visible';
    razpa.style.visibility = 'hidden';
});
////////////////////////////////////////////////////////////////////////
var p6 = document.getElementById('t6')
var slgpl = document.querySelector('.slgpl');
var slgpa = document.querySelector('.slgpa');

document.querySelector('.slgpl').addEventListener('click', () => {
    p6.play();
    slgpl.style.visibility = 'hidden';
    slgpa.style.visibility = 'visible';
});
document.querySelector('.slgpa').addEventListener('click', () => {
    p6.pause();
    slgpl.style.visibility = 'visible';
    slgpa.style.visibility = 'hidden';
});
////////////////////////////////////////////////////////////////////
var p7 = document.getElementById('t7')
var fltdvpl = document.querySelector('.fltdvpl');
var fltdvpa = document.querySelector('.fltdvpa');

document.querySelector('.fltdvpl').addEventListener('click', () => {
    p7.play();
    fltdvpl.style.visibility = 'hidden';
    fltdvpa.style.visibility = 'visible';
});
document.querySelector('.fltdvpa').addEventListener('click', () => {
    p7.pause();
    fltdvpl.style.visibility = 'visible';
    fltdvpa.style.visibility = 'hidden';
});
////////////////////////////////////////////////////////////////////
var p8 = document.getElementById('t8')
var oltagpl = document.querySelector('.oltagpl');
var oltagpa = document.querySelector('.oltagpa');

document.querySelector('.oltagpl').addEventListener('click', () => {
    p8.play();
    oltagpl.style.visibility = 'hidden';
    oltagpa.style.visibility = 'visible';
});
document.querySelector('.oltagpa').addEventListener('click', () => {
    p8.pause();
    oltagpl.style.visibility = 'visible';
    oltagpa.style.visibility = 'hidden';
});
////////////////////////////////////////////////////////////////////
var p9 = document.getElementById('t9')
var wsgmpl = document.querySelector('.wsgmpl');
var wsgmpa = document.querySelector('.wsgmpa');

document.querySelector('.wsgmpl').addEventListener('click', () => {
    p9.play();
    wsgmpl.style.visibility = 'hidden';
    wsgmpa.style.visibility = 'visible';
});
document.querySelector('.wsgmpa').addEventListener('click', () => {
    p9.pause();
    wsgmpl.style.visibility = 'visible';
    wsgmpa.style.visibility = 'hidden';
});
////////////////////////////////////////////

var p10 = document.getElementById('t10')
var TBSApl = document.querySelector('.TBSApl');
var TBSApa = document.querySelector('.TBSApa');

document.querySelector('.TBSApl').addEventListener('click', () => {
    p10.play();
    TBSApl.style.visibility = 'hidden';
    TBSApa.style.visibility = 'visible';
});
document.querySelector('.TBSApa').addEventListener('click', () => {
    p10.pause();
    TBSApl.style.visibility = 'visible';
    TBSApa.style.visibility = 'hidden';
});
////////////////////////////////////////////

var p11 = document.getElementById('t11')
var BBSpl = document.querySelector('.BBSpl');
var BBSpa = document.querySelector('.BBSpa');

document.querySelector('.BBSpl').addEventListener('click', () => {
    p11.play();
    BBSpl.style.visibility = 'hidden';
    BBSpa.style.visibility = 'visible';
});
document.querySelector('.BBSpa').addEventListener('click', () => {
    p11.pause();
    BBSpl.style.visibility = 'visible';
    BBSpa.style.visibility = 'hidden';
});
////////////////////////////////////////////

var p12 = document.getElementById('t12')
var ATBpl = document.querySelector('.ATBpl');
var ATBpa = document.querySelector('.ATBpa');

document.querySelector('.ATBpl').addEventListener('click', () => {
    p12.play();
    ATBpl.style.visibility = 'hidden';
    ATBpa.style.visibility = 'visible';
});
document.querySelector('.ATBpa').addEventListener('click', () => {
    p12.pause();
    ATBpl.style.visibility = 'visible';
    ATBpa.style.visibility = 'hidden';
});

////////////////////////////////////////////

var p13 = document.getElementById('t13')
var KMCpl = document.querySelector('.KMCpl');
var KMCpa = document.querySelector('.KMCpa');

document.querySelector('.KMCpl').addEventListener('click', () => {
    p13.play();
    KMCpl.style.visibility = 'hidden';
    KMCpa.style.visibility = 'visible';
});
document.querySelector('.KMCpa').addEventListener('click', () => {
    p13.pause();
    KMCpl.style.visibility = 'visible';
    KMCpa.style.visibility = 'hidden';
});
////////////////////////////////////////////

var p14 = document.getElementById('t14')
var MTKLpl = document.querySelector('.MTKLpl');
var MTKLpa = document.querySelector('.MTKLpa');

document.querySelector('.MTKLpl').addEventListener('click', () => {
    p14.play();
    MTKLpl.style.visibility = 'hidden';
    MTKLpa.style.visibility = 'visible';
});
document.querySelector('.MTKLpa').addEventListener('click', () => {
    p14.pause();
    MTKLpl.style.visibility = 'visible';
    MTKLpa.style.visibility = 'hidden';
});
////////////////////////////////////////////

var p15 = document.getElementById('t15')
var CDRGpl = document.querySelector('.CDRGpl');
var CDRGpa = document.querySelector('.CDRGpa');

document.querySelector('.CDRGpl').addEventListener('click', () => {
    p15.play();
    CDRGpl.style.visibility = 'hidden';
    CDRGpa.style.visibility = 'visible';
});
document.querySelector('.CDRGpa').addEventListener('click', () => {
    p15.pause();
    CDRGpl.style.visibility = 'visible';
    CDRGpa.style.visibility = 'hidden';
});
////////////////////////////////////////////

var p16 = document.getElementById('t16')
var WOTWSSpl = document.querySelector('.WOTWSSpl');
var WOTWSSpa = document.querySelector('.WOTWSSpa');

document.querySelector('.WOTWSSpl').addEventListener('click', () => {
    p16.play();
    WOTWSSpl.style.visibility = 'hidden';
    WOTWSSpa.style.visibility = 'visible';
});
document.querySelector('.WOTWSSpa').addEventListener('click', () => {
    p16.pause();
    WOTWSSpl.style.visibility = 'visible';
    WOTWSSpa.style.visibility = 'hidden';
});
////////////////////////////////////////////

var p17 = document.getElementById('t17')
var WWWYApl = document.querySelector('.WWWYApl');
var WWWYApa = document.querySelector('.WWWYApa');

document.querySelector('.WWWYApl').addEventListener('click', () => {
    p17.play();
    WWWYApl.style.visibility = 'hidden';
    WWWYApa.style.visibility = 'visible';
});
document.querySelector('.WWWYApa').addEventListener('click', () => {
    p17.pause();
    WWWYApl.style.visibility = 'visible';
    WWWYApa.style.visibility = 'hidden';
});
////////////////////////////////////////////

var p18 = document.getElementById('t18')
var LtDOBMAPSSpl = document.querySelector('.LtDOBMAPSSpl');
var LtDOBMAPSSpa = document.querySelector('.LtDOBMAPSSpa');

document.querySelector('.LtDOBMAPSSpl').addEventListener('click', () => {
    p18.play();
    LtDOBMAPSSpl.style.visibility = 'hidden';
    LtDOBMAPSSpa.style.visibility = 'visible';
});
document.querySelector('.LtDOBMAPSSpa').addEventListener('click', () => {
    p18.pause();
    LtDOBMAPSSpl.style.visibility = 'visible';
    LtDOBMAPSSpa.style.visibility = 'hidden';
});