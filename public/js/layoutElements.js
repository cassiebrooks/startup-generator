/*-------------------------*/
/* HERO */

var hero__backgroundImage,
    hero__title,
    hero__tagline,
    hero__callToAction; // optional

var hero = `<div class="hero" style="background-image: url('` + hero__backgroundImage + `');">
  <h1 class="hero__title">` + hero__title + `</h1>
  <h2 class="hero__tagline">` + hero__tagline + `</h2>
</div>`;


/*-------------------------*/
/* TEAM MEMBER */

var member__name,
    member__image,
    member__position,
    member__description; // optional

var member = `<div class="member">
  <img class="member__img" src="` + member__img + `" />
  <h5 class="member__name">` + member__name + `</h5>
  <p class="member__position">` + member__position + `</p>`;

if(member__description) {
  member += `<p class="member__description">` + member__description + `</p>`;
}
member += `</div>`;


/*-------------------------*/
/* SERVICE */

var service__title,
    service__description,
    service__img, // optional
    service__iconClass; // optional

var service = `<div class="service">
  <img class="service__img" src="` + service__img + `" />
  <h3 class="service__title">` + service__title + `</h3>
  <p class="service__description">` + service__description + `</p>`;

if(service__img) service += `<img class="service__img" src="` + service__img + `" />`;
if(service__iconClass) service += `<i class="fa ` + service__iconClass + `></i>`;
service += `</div>`;


/*-------------------------*/
/* REVIEW */

var review_text,
    review__author,
    review__company,
    review__date, // optional
    review__image; // optional

var review = `<div class="review">
  <p class="review__text">` + review__text + `</p>
  <p class="review__author">` + review__author + `</p>
  <p class="review__company">` + review__company + `</p>`;

if(review__date) review += `<p class="review__date">` + review__date + `</p>`;
if(review__img) review += `<img class="review__img" src="` + review__img + `" />`;
}
review += `</div>`;


/*-------------------------*/
/* NAVITEM */

var navItem__linkDestinationID,
    navItem__linkText;

var navItem = `<li class="nav__item">
  <a class="nav__link" href="#` + NavItem__linkDestinationID + `">` + navItem__linkText + `</a>
</li>`;


/*-------------------------*/
/* FOOTER */
var footer__social, // optional
    footer__copyright; // optional

var footer = `<footer class="footer">
  <div class="footer__social">
    <i class="fa fa-facebook"></i>
    <i class="fa fa-twitter"></i>
    <i class="fa fa-linkedin"></i>
    <i class="fa fa-youtube"></i>
    <i class="fa fa-instagram"></i>
  </div>
  <div class="footer__copyright">
    ` + footer__copyright + `
  </div>
</footer>`;