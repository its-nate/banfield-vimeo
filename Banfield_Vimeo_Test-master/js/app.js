const videos = [
  {
    id: "player1",
    videoID: "489171333",
  },
  {
    id: "player2",
    videoID: "489152985",
  },
  {
    id: "player3",
    videoID: "489171233",
  },
  {
    id: "player4",
    videoID: "489171263",
  },
  {
    id: "player5",
    videoID: "489171276",
  },
  {
    id: "player6",
    videoID: "489171325",
  },
];

// create player objects
let players = [];

async function createPlayers(videos) {
  for (let i = 0; i < videos.length; i++) {
    players.push(new Vimeo.Player(videos[i].id));
  }
}

function hideButtons() {
  for (let i = 0; i < videos.length; i++) {
    let el = document.getElementById(videos[i].videoID);
    el.style.display = "none";
    let hideMe = document.getElementById("hide-me");
    hideMe.style.display = "none";
  }
}

function showButtons(i) {
  let el = document.getElementById(videos[i].videoID);
  el.style.display = "block";
}

// when video ends
function createPlayerListeners() {
  for (let i = 0; i < players.length; i++) {
    players[i].on("ended", function () {
      console.log("played the video:" + i);
      showButtons(i);
    });
  }
}

createPlayers(videos).then(createPlayerListeners()).then(hideButtons());
