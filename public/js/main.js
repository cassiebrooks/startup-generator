function getRandomInt() {
  return Math.floor(Math.random()*89998) + 10000;
}

$('#newSite').on('click', function() {
  window.location.replace("/" + getRandomInt());
});

// TODO
noLayouts = 3;
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


function pickFont(seed, fontsArray) {
  return fontsArray[seed % fontsArray.length]; // pick a font based on seed
}

var bodyFontsArray = [
  "Open Sans",
  "Roboto",
  "Lato",
  "PT Sans",
  "Noto Sans",
  "Alegreya Sans",
  "Cabin"
];

var displayFontsArray = [
  "Open Sans",
  "Slabo 27px",
  "Montserrat",
  "Raleway",
  "Roboto Slab",
  "Merriweather",
  "Yanone Kaffeesatz",
  "Arvo",
  "Lato",
  "Bree Serif",
  "Pacifico",
  "Lobster Two",
  "Nixie One",
  "Catamaran",
  "Exo 2",
  "Lato"
];


function setFonts(displayFont, bodyFont) {
  var googleBodyFont = bodyFont.replace(" ", "+");
  var googleDisplayFont = displayFont.replace(" ", "+");

  $('head').append("<link href='https://fonts.googleapis.com/css?family=" + googleBodyFont + ":400,400italic,700,700italic|" + googleDisplayFont + "' rel='stylesheet' type='text/css'>");

  $('body').css('font-family', bodyFont);
  //$('h1, h2, h3, h4, h5, h6').css('font-family', displayFont);
}

//setFonts(displayFont, bodyFont);






function generateLogo(seed, startupName) {
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
  var subst = startupName;
  var taglines = ["STARTUPNAME for the web", "take your STARTUPNAME digital", "bring the power of STARTUPNAME to the web", "STARTUPNAME on the go", "STARTUPNAME, your way.", "the largest marketplace for STARTUPNAME", "STARTUPNAME, automated.", "the ultimate mobile app for STARTUPNAME", "the  STARTUPNAME  rating system", "quantify your STARTUPNAME ", "STARTUPNAME in the palm of your hand", "turn your STARTUPNAME into a a superpower", "STARTUPNAME mobile engagement platform", "STARTUPNAME just got better", "dare to STARTUPNAME" , "STARTUPNAME, for you and your team", "STARTUPNAME different.", "revolutionising the way people think about STARTUPNAME", "nobody knows STARTUPNAME better than us", "you'll never see STARTUPNAME the same again", "we're the last word in STARTUPNAME", "introducing STARTUPNAME online", "coherent STARTUPNAMEing", "the evolution of STARTUPNAME", "next-level  STARTUPNAMEing", "more STARTUPNAME than ever", "supercharge your STARTUPNAME"];
  var tagline = taglines[seed%taglines.length].replace(/STARTUPNAME/g, startupName.toLowerCase());  
  return tagline;
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
  var services = [];
  services[0] = "<div class='service'><i class='service--icon fa fa-gear'></i><div class='service--text'>This is the first service</div></div>";
  services[1] = "<div class='service'><i class='service--icon fa fa-space-shuttle'></i><div class='service--text'>What a lovely second service</div></div>";
  services[2] = "<div class='service'><i class='service--icon fa fa-trophy'></i><div class='service--text'>Third service yaay!</div></div>";

  var serviceHTML = "";

  for (var i=0; i<services.length; i++) {
    serviceHTML += services[i];
  }

  return serviceHTML;
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


function generateSiteHTML(seed, startupName, logo, layoutID) {
  var html = generateNav(seed, layoutID)
           + generateHero(seed, startupName, layoutID)
           + "<div class='services wrapper'>" + generateServices(seed, startupName, layoutID) + "</div>" +
           + generateTeam(seed, startupName, layoutID)
           + generateAsSeenOn(seed, layoutID)
           + generateReviews(seed, startupName, layoutID)
           + generateFreeTrialBanner(seed, startupName, layoutID)
           + generateFooter(seed, startupName, layoutID);
  return html;
}






var Website = function(seed, noLayouts, bodyFontsArray, displayFontsArray) {
  this.seed = seed;
  this.name = generateStartupName(seed);
  this.layout = pickLayout(seed, noLayouts);
  this.bodyFont = pickFont(seed, bodyFontsArray);
  this.displayFont = pickFont(seed, displayFontsArray);
  this.logo = generateLogo(seed, this.name);
  this.html = generateSiteHTML(seed, this.name, this.logo, this.layout);
};

var newSite = new Website(seed, noLayouts, bodyFontsArray, displayFontsArray);
$('#page').html(newSite.html);


