// Function as a constructor
// function PlayListSong(song_id, song_name, song_url, song_img) {
//     this.song_id = song_id;
//     this.song_name = song_name;
//     this.song_url = song_url;
//     this.song_img = song_img;
// }

class PlayListSong {
    constructor(song_id, song_name, song_url, song_img) {
        this.song_id = song_id;
        this.song_name = song_name;
        this.song_url = song_url;
        this.song_img = song_img;
    }
}

let playListObj = {
    playList : [],
    addSong : function(id, s_name, url, img) {
        var obj = new PlayListSong(id, s_name, url, img);
        this.playList.push(obj);
        console.log(this.playList);
    },
    deleteSong : function() {

    }
}