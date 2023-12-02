window.addEventListener("load", loadSongs);

var audioPlayer;
function loadSongs() {
    let songsList = document.querySelector("#songs-list");
    audioPlayer = document.querySelector("#audio");
    allSongs.forEach(function(obj) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.setAttribute("src",obj.s_img);
        img.className = "w-100";
        let heading = document.createElement("h5");
        heading.innerText = obj.s_name;
        let para = document.createElement("p");
        para.innerText = obj.s_singer;
        let playBtn = document.createElement("button");
        playBtn.innerText = "Play";
        playBtn.className = "btn btn-danger me-4";
        playBtn.setAttribute("title", obj.s_id);
        playBtn.addEventListener("click", playSong);

        let playListBtn = document.createElement("button");
        playListBtn.innerText = "Add to playlist";
        playListBtn.className = "btn btn-primary";
        playListBtn.setAttribute("title", obj.s_id);
        playListBtn.addEventListener("click", addSong);

        li.appendChild(img);
        li.appendChild(heading);
        li.appendChild(para);
        li.appendChild(playBtn);
        li.appendChild(playListBtn);

        songsList.append(li);
    });
}

function playSong() {
    let song_id = this.title;
    let resultArr = allSongs.filter(function(obj) {
        return obj.s_id == song_id;
    });
    let songUrl = resultArr[0].s_url;
    audioPlayer.src = songUrl;
    audioPlayer.play();
    document.querySelector("#current-song").innerText = resultArr[0].s_name;
}

function addSong() {
    let song_id = this.title;
    let resultArr = allSongs.filter(function(obj) {
        return obj.s_id == song_id;
    });
    playListObj.addSong(resultArr[0].s_id, resultArr[0].s_name, resultArr[0].s_url, resultArr[0].s_img);
}

function showPlayList() {
    
}