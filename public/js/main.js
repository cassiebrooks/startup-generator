function getRandomInt() {
  return Math.floor(Math.random()*89998) + 10000;
}

// TODO
noLayouts = 3;

$('#newSite').on('click', function() {
  window.location.replace("/" + getRandomInt());
});

console.log("Seed: " + seed);





/******************************/
/*      GENERATION STUFF      */
/******************************/

// Set pseudo-random seed
Math.seedrandom(seed);


function generateStartupName(seed) {
  return "Hype";
}
var startupName = generateStartupName(seed);
console.log(startupName);


function pickLayout(seed, noLayouts) {
  // return random layout ID based on seed
  // ~~ truncates to negative-safe whole number
  return ~~(seed%(noLayouts-1)) + 1;
}
var layoutID = pickLayout(seed, noLayouts);
console.log(layoutID);

var logo = function generateLogo(seed, startupName) {
  // is text-based?
  // is icon?
  // is both?
  // return
  //     <div class="logo"></div>
  // containing an <img class="logo__img" />
  // or a <span class="logo_text"></span>
  return "yay";
}

function generateTagline(seed, startupName) {
  return "For all your " + startupName + " needs";
}


function generateNav(seed) {
  // exists?
  return "<p>[NAV]</p>"
}

function generateHero(seed, startupName, layoutID) {
  var hero__backgroundImage = "https://source.unsplash.com/category/nature/1600x800";
  var hero__title = startupName;
  var hero__tagline = generateTagline(seed, startupName);
  var hero__callToAction; // optional; TODO

  var hero = `<div class="hero layout-` + layoutID + `" style="background-image: url('` + hero__backgroundImage + `');">
    <h1 class="hero__title">` + hero__title + `</h1>
    <h2 class="hero__tagline">` + hero__tagline + `</h2>
  </div>`;
  // TODO: CTA

  return hero;
}

function generateServices(seed, startupName, layoutID) {
  return "<p>[SERVICES]</p>";
}

function generateTeam(seed, startupName, layoutID) {
  return "<p>[TEAM]</p>";
}

function generateAsSeenOn(seed, layoutID) {
  return "<p>[AS SEEN ON]</p>";
}

function generateReviews(seed, startupName, layoutID) {
  return "<p>[REVIEWS]</p>";
}

function generateFreeTrialBanner(seed, startupName, layoutID) {
  return "<p>[FREE TRIAL BANNER]</p>";
}

function generateFooter(seed, startupName, layoutID) {
  return "<p>[FOOTER]</p>";
}


var siteHTML = function generateSiteHTML(seed, startupName, logo, layoutID) {
  var html = generateNav(seed, layoutID)
           + generateHero(seed, startupName, layoutID)
           + generateServices(seed, startupName, layoutID)
           + generateTeam(seed, startupName, layoutID)
           + generateAsSeenOn(seed, layoutID)
           + generateReviews(seed, startupName, layoutID)
           + generateFreeTrialBanner(seed, startupName, layoutID)
           + generateFooter(seed, startupName, layoutID);
  return html;
}


// Set layout
$('#page').html(siteHTML);


