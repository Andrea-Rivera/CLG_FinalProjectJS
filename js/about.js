////SLIDES/////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
let video = ["bF5phi-pWhE", "N8fKYnsBqhY", "Jf_7JED-Gp4", "K6G_clfRX5U"];

let videoJapan = document.getElementById("videoJapan");
//console.log(exploreButtons);
videoJapan.addEventListener("click", addDestination1);

function addDestination1() {
  //console.log("clicked");
  let destinationcard = document.createElement("div");
  destinationcard.classList.add("video");
  let indexcard = document.getElementsByClassName("videos")[0];
  let destinationRowContents = `
  <div class="video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[0]}"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
</div>`;
  destinationcard.innerHTML = destinationRowContents;
  indexcard.append(destinationcard);
}

let videoThailand = document.getElementById("videoThailand");
//console.log(exploreButtons);
videoThailand.addEventListener("click", addDestination2);

function addDestination2() {
  //console.log("clicked");
  let destinationcard = document.createElement("div");
  destinationcard.classList.add("video");
  let indexcard = document.getElementsByClassName("videos")[0];
  let destinationRowContents = `
  <div class="video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[1]}"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
</div>`;
  destinationcard.innerHTML = destinationRowContents;
  indexcard.append(destinationcard);
}

let videoGreece = document.getElementById("videoGreece");
//console.log(exploreButtons);
videoGreece.addEventListener("click", addDestination3);

function addDestination3() {
  //console.log("clicked");
  let destinationcard = document.createElement("div");
  destinationcard.classList.add("video");
  let indexcard = document.getElementsByClassName("videos")[0];
  let destinationRowContents = `
  <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[2]}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>`;
  destinationcard.innerHTML = destinationRowContents;
  indexcard.append(destinationcard);
}

let videoItaly = document.getElementById("videoItaly");
//console.log(exploreButtons);
videoItaly.addEventListener("click", addDestination);

function addDestination() {
  //console.log("clicked");
  let destinationcard = document.createElement("div");
  destinationcard.classList.add("video");
  let indexcard = document.getElementsByClassName("videos")[0];
  let destinationRowContents = `
  <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[3]}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>`;
  destinationcard.innerHTML = destinationRowContents;
  indexcard.append(destinationcard);
}
