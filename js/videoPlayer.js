exports.myPlayer = function () {
    // body...


        var videoPl = document.createElement('video');
            videoPl.setAttribute('id',"video");
            //videoPl.setAttribute('autoplay', 'autoplay');
            videoPl.setAttribute('controls', 'controls');

            /*
        var src = document.createElement("source");
            src.setAttribute('src',"./media/small.mp4");
            src.setAttribute('type',"video/mp4");
            videoPl.appendChild(src);
            */

        //Will be shown
        //skeleton();

        //loadThisSource("./media/piano.mp3");
        //loadThisSource("./media/breakbot.mp3");
          return videoPl;
    function skeleton() {
          // body...

                let audioplayerDiv = document.createElement('div');
                    audioplayerDiv.setAttribute('id','audioplayer');
                    //!!! Very Important bug!
                    //works only if visible so the time could be taken!
                    //audioplayerDiv.setAttribute('class',"hide");

                    videoDiv.appendChild(audioplayerDiv);

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
                        inpVolume.style.width = "100px";
                        inpVolume.style.height = "8px";
                        inpVolume.style.zIndex = "5";

                        //inpVolume.style.background = "#3071a9";

                        inpVolume.setAttribute("type","range");
                        //inpVolume.defaultValue = 0.5;
                        inpVolume.setAttribute("min","0");
                        inpVolume.setAttribute("max","1");
                        inpVolume.setAttribute("step","0.01");
                      //inpVolume.setAttribute("orient","vertical");
                    document.body.appendChild(inpVolume);
                    //inpVolume.setAttribute("display","none");
                    //invisibleButNeeded.appendChild(inpVolume);
                        $(inpVolume).hide();

                    //bton.appendChild(inpVolume);
                    invisibleButNeeded.appendChild(bton);

                audioplayerDiv.appendChild(invisibleButNeeded);


    };

        var video = document.getElementById('video'); // id for audio element
        var duration = video.duration; // Duration of audio clip, calculated here for embedding purposes
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

        //Bug-fix for view
        document.getElementById('audioplayer').setAttribute('class',"hide");

        // play button event listenter
        pButton.addEventListener("click", play);

        // timeupdate event listener
        video.addEventListener("timeupdate", timeUpdate, false);// low Priority

        // makes timeline clickable
        timeline.addEventListener("click", function(event) {
            moveplayhead(event);
            video.currentTime = duration * clickPercent(event);// (x * 0.50) gives double number
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
            window.addEventListener('mousemove', moveplayhead, true);// stop you from using window
            video.removeEventListener('timeupdate', timeUpdate, false);
        }

        // mouseUp EventListener
        // getting input from all mouse clicks
        function mouseUp(event) {
            if (onplayhead === true) {
                moveplayhead(event);
                window.removeEventListener('mousemove', moveplayhead, true);//High priority
                // change current time
                video.currentTime = duration * clickPercent(event);
                video.addEventListener('timeupdate', timeUpdate, false); //lowerPriority
            }
            onplayhead = false;
        }
        // mousemove EventListener
        // Moves playhead as user drags
        function moveplayhead(event) {
            var newMargLeft = event.clientX - getPosition(timeline);// absolutX - div Start X

            if (newMargLeft >= 0 && newMargLeft <= ($(timeline).width() -18) ) { // <= timelineWidth
                playhead.style.marginLeft = newMargLeft + "px";
            }
            if (newMargLeft < 0) { // means start
                playhead.style.marginLeft = "0px";
            }
            if (newMargLeft > ($(timeline).width() -18) ) { // > timelineWidth, means end
                playhead.style.marginLeft = ($(timeline).width() -18) + "px"; // = timelineWidth
            }
        }

        // timeUpdate
        // Synchronizes playhead position with current point in audio
        function timeUpdate() {
            var playPercent = ($(timeline).width() -18) * (video.currentTime / duration); // = timelineWidth
            playhead.style.marginLeft = playPercent + "px";
            if (video.currentTime == duration) {
                pButton.className = "";
                pButton.className = "play";
            }
        }

        //Play and Pause
        function play() {
            // start video
            if (video.paused) {
                video.play();
                // remove play, add pause
                pButton.className = "";
                pButton.className = "pause";
            } else { // pause video
                video.pause();
                // remove pause, add play
                pButton.className = "";
                pButton.className = "play";
            }
        }

        // Gets audio file duration when buffered and checked!
        video.addEventListener("canplaythrough", function() {
            duration = video.duration;
        }, false); // lower priority

        // getPosition
        // Returns elements left position relative to top-left of viewport
        function getPosition(el) {
            return el.getBoundingClientRect().left;
        }

        var volumeBTN = document.getElementById('volumeBTN');
        var volumeBar = document.getElementById('volumeBar');
        //  console.log(volumeBar.style.height); not visible property
            volumeBar.defaultValue = 0.5;
            /** bottom: 0;
                right: 0;
                width: 300px;
                */
          $(volumeBTN).click(change_Volume);
          $('#nextButton').click(function () {
            change_track_next();
          });


          $("#prevButton").click(function () {
            change_track_prev();
          });

};

exports.loadNewSource = function (src) {
  let track = document.getElementById('video');
  //let tracksAll = ["./media/The-Jimi-Hendrix-Experience-The-Watchtower.mp3", "./media/breakbot.mp3","./media/piano.mp3","./media/GorillazCHORUSREMIX.mp4"];
      track.pause();
      let nameOfS = src;
      // check for repeat
      let cur=-1;
      for (let i =0; i<tracksAll.length; i++){
          if(nameOfS == tracksAll[i]){
            //console.log('Found' + i);
            cur = i;
          }
      }

      if(cur <0 ){ tracksAll.push(nameOfS); }
      let newSrc = document.createElement("source");
          newSrc.setAttribute("type", "audio/mpeg");
          newSrc.setAttribute("src", nameOfS);

      track.removeChild(track.childNodes[0]);
      track.appendChild(newSrc);
      track.load();
      track.play();

      // remove play, add pause
          pButton.className = "";
          pButton.className = "pause";
      /****************/
}

var change_Volume = function () {
  let volumeBar = document.getElementById('volumeBar');
  let volumeBTN = document.getElementById('volumeBTN');
  let video = document.getElementById('video');
  if(volumeBar.style.display === "none"){

      let xy = $(volumeBTN).offset();
      //transformed but not changed!!!!
      //$(volumeBar).offset({ top:(xy.top), left:(xy.left)});
      volumeBar.style.left  = (xy.left  - 50+ ($(volumeBTN).width()/ 2)) + "px";
      volumeBar.style.top = (xy.top -55) + "px";


      $(window).resize(function () {
          let xy = $(volumeBTN).offset()
          volumeBar.style.left = (xy.left - 50+ ($(volumeBTN).width()/ 2)) + "px";
          volumeBar.style.top = (xy.top -55) + "px";
      });

      $(volumeBar).slideToggle("slow");

      $(volumeBar).mousemove(function () {
        video.volume = volumeBar.value;
      });

    } else {
      $(volumeBar).slideToggle("slow");
    }
  }
