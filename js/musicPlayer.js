//TO DO :
//        add next,
//            maybe add List of soursec
exports.myPlayer = function () {
    // body...
        var sidenav = document.getElementById('sidenav');
        var audioDiv = document.createElement("div");
            audioDiv.setAttribute('id',"playerStuff");
            sidenav.appendChild(audioDiv);

        //Will not be shown
        var track = document.createElement('audio');
            track.setAttribute('id',"music");
            track.setAttribute('autoplay', 'autoplay');
            //track.setAttribute('controls', 'controls');

        //Will not be shown
        var src = document.createElement("source");
            src.setAttribute('src',"media/GorillazCHORUSREMIX.mp4");
            src.setAttribute('type',"audio/mpeg");
            track.appendChild(src);

        //Will be shown
        skeleton();
        audioDiv.appendChild(track);

    function skeleton() {
          // body...

                let audioplayerDiv = document.createElement('div');
                    audioplayerDiv.setAttribute('id','audioplayer');
                    //!!! Very Important bug!
                    //works only if visible so the time could be taken!
                    //audioplayerDiv.setAttribute('class',"hide");

                    audioDiv.appendChild(audioplayerDiv);

                let invisibleButNeeded = document.createElement('div');
                    invisibleButNeeded.setAttribute("id","centeredAudioPlayer");

                let bton = document.createElement('button');
                    bton.setAttribute("id","prevButton");
                    invisibleButNeeded.appendChild(bton);

                    bton = document.createElement('button');
                    bton.setAttribute("id","pButton");
                    bton.setAttribute("class","pause"); // when autoplay --> class pause!
                    invisibleButNeeded.appendChild(bton);

                let timelineDiv = document.createElement('div');
                    timelineDiv.setAttribute('id','timeline');
                    let playheadDiv = document.createElement('div');
                        playheadDiv.setAttribute("id","playhead");
                    timelineDiv.appendChild(playheadDiv);
                    invisibleButNeeded.appendChild(timelineDiv);

                    bton = document.createElement('button');
                    bton.setAttribute("id","nextButton");
                    invisibleButNeeded.appendChild(bton);

                    bton = document.createElement('button');
                    bton.setAttribute("id","volumeBTN");
                    let inpVolume = document.createElement('input');
                        inpVolume.setAttribute("id","volumeBar");
                        inpVolume.setAttribute("type","range");
                        inpVolume.setAttribute("value","0.5");
                        inpVolume.setAttribute("min","0");
                        inpVolume.setAttribute("max","1");
                        inpVolume.setAttribute("step","0.01");
                    document.body.appendChild(inpVolume);
                        inpVolume.setAttribute("display","none");
                    //invisibleButNeeded.appendChild(inpVolume);
                        $(inpVolume).hide();

                    //bton.appendChild(inpVolume);
                    invisibleButNeeded.appendChild(bton);

                audioplayerDiv.appendChild(invisibleButNeeded);


    };

    var music = document.getElementById('music'); // id for audio element
        var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
        var pButton = document.getElementById('pButton'); // play button
        var playhead = document.getElementById('playhead'); // playhead
        var timeline = document.getElementById('timeline'); // timeline

        // timeline width adjusted for playhead
        //Bug-fix -- TO DO0
        $( window ).resize(function() {
          timeUpdate();
        });

        //var  timelineWidth = $(timeline).width();//timeline.getBoundingClientRect.left - timeline.getBoundingClientRect.right;
        //var timelineWidth = timeline.getBoundingClientRect.left - timeline.getBoundingClientRect.right;
        //Bug-fix
        document.getElementById('audioplayer').setAttribute('class',"hide");
        // play button event listenter
        pButton.addEventListener("click", play);

        // timeupdate event listener
        music.addEventListener("timeupdate", timeUpdate, false);

        // makes timeline clickable
        timeline.addEventListener("click", function(event) {
            moveplayhead(event);
            music.currentTime = duration * clickPercent(event);// (x * 0.50) gives double number
        }, false);

        // returns click as decimal (.77) % of the total timelineWidth
        function clickPercent(event) {
            return (event.clientX - getPosition(timeline)) / ($(timeline).width() -18); //  / timelineWidth pointX -
        }

        // makes playhead draggable
        playhead.addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);

        // Boolean value so that audio position is updated only when the playhead is released
        var onplayhead = false;

        // mouseDown EventListener
        function mouseDown() {
            onplayhead = true;
            window.addEventListener('mousemove', moveplayhead, true);
            music.removeEventListener('timeupdate', timeUpdate, false);
        }

        // mouseUp EventListener
        // getting input from all mouse clicks
        function mouseUp(event) {
            if (onplayhead === true) {
                moveplayhead(event);
                window.removeEventListener('mousemove', moveplayhead, true);
                // change current time
                music.currentTime = duration * clickPercent(event);
                music.addEventListener('timeupdate', timeUpdate, false);
            }
            onplayhead = false;
        }
        // mousemove EventListener
        // Moves playhead as user drags
        function moveplayhead(event) {
            var newMargLeft = event.clientX - getPosition(timeline);

            if (newMargLeft >= 0 && newMargLeft <= ($(timeline).width() -18) ) { // <= timelineWidth
                playhead.style.marginLeft = newMargLeft + "px";
            }
            if (newMargLeft < 0) {
                playhead.style.marginLeft = "0px";
            }
            if (newMargLeft > ($(timeline).width() -18) ) { // > timelineWidth
                playhead.style.marginLeft = ($(timeline).width() -18) + "px"; // = timelineWidth
            }
        }

        // timeUpdate
        // Synchronizes playhead position with current point in audio
        function timeUpdate() {
            var playPercent = ($(timeline).width() -18) * (music.currentTime / duration); // = timelineWidth
            playhead.style.marginLeft = playPercent + "px";
            if (music.currentTime == duration) {
                pButton.className = "";
                pButton.className = "play";
            }
        }

        //Play and Pause
        function play() {
            // start music
            if (music.paused) {
                music.play();
                // remove play, add pause
                pButton.className = "";
                pButton.className = "pause";
            } else { // pause music
                music.pause();
                // remove pause, add play
                pButton.className = "";
                pButton.className = "play";
            }
        }

        // Gets audio file duration
        music.addEventListener("canplaythrough", function() {
            duration = music.duration;
        }, false);

        // getPosition
        // Returns elements left position relative to top-left of viewport
        function getPosition(el) {
            return el.getBoundingClientRect().left;
        }

        var volumeBTN = document.getElementById('volumeBTN');
        var volumeBar = document.getElementById('volumeBar');
        //  console.log(volumeBar.style.height); not visible property

            /** bottom: 0;
                right: 0;
                width: 300px;
                */
            $(volumeBTN).click(function () {

              if(volumeBar.style.display === "none"){
                  let xy = $(volumeBTN).offset();
                  volumeBar.style.left = (xy.left + ($(volumeBTN).width()/ 2)) + "px";
                  volumeBar.style.top = (xy.top - 100) + "px";
                  $(volumeBar).show();
                  //music.volume = volumeBar.value;

                } else {
                  $(volumeBar).hide();
                }
              }
            );

};
