let video = ["bF5phi-pWhE", "N8fKYnsBqhY", "Jf_7JED-Gp4", "K6G_clfRX5U"];

function addDestination(newArr) {
  //console.log("clicked");
  let destinationcard = document.createElement("div");
  destinationcard.classList.add("video");
  let indexcard = document.getElementsByClassName("Indexcard")[0];
  let destinationRowContents = `
  <div class="videos">
  <h1>Interesting facts</h1>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/${newArr}"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
</div>`;
  destinationcard.innerHTML = destinationRowContents;
  indexcard.append(destinationcard);
}

let exploreButton1 = document.getElementById("exploreBtn1");

exploreButton1.addEventListener("click", addDestination([video[0]]));

let exploreButton2 = document.getElementById("exploreBtn2");

exploreButton1.addEventListener("click", addDestination([video[1]]));

let exploreButton3 = document.getElementById("exploreBtn3");

exploreButton1.addEventListener("click", addDestination([video[2]]));

let exploreButton4 = document.getElementById("exploreBtn4");

exploreButton1.addEventListener("click", addDestination([video[3]]));
