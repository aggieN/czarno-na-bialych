const hamburger = document.querySelector('.hamburger');
const piano = document.querySelector('.piano');

const btnArek = document.querySelector('.btn-arek');
const contentArek = document.querySelector('.about__content-arek');

const btnAneta = document.querySelector('.btn-aneta');
const contentAneta = document.querySelector('.about__content-aneta');

const btnHideArek = document.querySelector('.btn--is-hidden-arek');
const btnHideAneta = document.querySelector('.btn--is-hidden-aneta');




// hamburger


const handleClick = () => {
  hamburger.classList.toggle('hamburger--is-active');
  piano.classList.toggle('piano--is-active');
};

hamburger.addEventListener('click', handleClick);

// piano 
const checkbox = document.getElementById('switch');

const keys = document.querySelectorAll('.key');

function hideLinks(link) {
  link.classList.toggle('is-hidden');
}

checkbox.addEventListener('change', () => {
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.classList.toggle('hide-links'); 
    setTimeout(() => hideLinks(link), 1000);
  });
});


keys.forEach(key => {
  key.addEventListener('click', function(e) {
    const noteAudio = document.getElementById(key.dataset.note);
    if (e.target !== e.currentTarget) {
      return;
    } else if (e.target.tagName === 'LI' && checkbox.checked === true) {
      noteAudio.currentTime = 0;     
      noteAudio.play();
    }
  });
});


// oNas

btnArek.addEventListener('click', () => {
  contentArek.classList.remove('is-hidden');
  contentArek.classList.add('is-visible1');
});

btnAneta.addEventListener('click', () => {
  contentAneta.classList.remove('is-hidden');
  contentAneta.classList.add('is-visible1');
});

btnHideArek.addEventListener('click', () => {  
  contentArek.classList.add('is-hidden'); 
  contentArek.classList.remove('is-visible1');  
});

btnHideAneta.addEventListener('click', () => {
  contentAneta.classList.add('is-hidden');
  contentAneta.classList.remove('is-visible1');
});


// Metody Nauczania

const btnVocal = document.querySelector('.btn-vocal');
const btnPiano = document.querySelector('.btn-piano');

const contentVocal = document.querySelector('.content--methods-vocal');
const contentPiano = document.querySelector('.content--methods-piano');

const btnHideVocal = document.querySelector('.btn--is-hidden-vocal');
const btnHidePiano = document.querySelector('.btn--is-hidden-piano');


btnVocal.addEventListener('click', () => {
  contentVocal.classList.remove('is-hidden');
  contentVocal.classList.add('is-visible1'); 
  contentVocal.classList.add('give-margin');  
});

btnPiano.addEventListener('click', () => {
  contentPiano.classList.remove('is-hidden');  
  contentPiano.classList.add('is-visible1'); 
  contentPiano.classList.add('give-margin');
});


btnHideVocal.addEventListener('click', () => {
    contentVocal.classList.add('is-hidden');
    contentVocal.classList.remove('is-visible1');
    contentVocal.classList.remove('give-margin');
  
});


btnHidePiano.addEventListener('click', () => {
    contentPiano.classList.add('is-hidden');
    contentPiano.classList.remove('is-visible1');
    contentPiano.classList.remove('give-margin');

});


// etapy wokalne

const phaseVocal1 = document.querySelector('#phaseVocal1');
const phaseVocal2 = document.querySelector('#phaseVocal2');
const phaseVocal3 = document.querySelector('#phaseVocal3');
const phaseVocal4 = document.querySelector('#phaseVocal4');


// btn etapy
const btnphaseVocal1 = document.querySelector('.btn-phase-vocal1');
const btnphaseVocal2 = document.querySelector('.btn-phase-vocal2');
const btnphaseVocal3 = document.querySelector('.btn-phase-vocal3');
const btnphaseVocal4 = document.querySelector('.btn-phase-vocal4');


btnphaseVocal1.addEventListener('click', () => {
  phaseVocal1.classList.remove('is-hidden');
  phaseVocal1.classList.add('is-visible');
});

btnphaseVocal2.addEventListener('click', () => {
  phaseVocal2.classList.remove('is-hidden');
  phaseVocal2.classList.add('is-visible');
});

btnphaseVocal3.addEventListener('click', () => {
  phaseVocal3.classList.remove('is-hidden');
  phaseVocal3.classList.add('is-visible');
});

btnphaseVocal4.addEventListener('click', () => {
  phaseVocal4.classList.remove('is-hidden');
  phaseVocal4.classList.add('is-visible');
});

// etapy pianino 

const phasePiano1 = document.querySelector('#phasePiano1');
const phasePiano2 = document.querySelector('#phasePiano2');
const phasePiano3 = document.querySelector('#phasePiano3');
const phasePiano4 = document.querySelector('#phasePiano4');

// btn etapy pianino
const btnphasePiano1 = document.querySelector('.btn-phase-piano1');
const btnphasePiano2 = document.querySelector('.btn-phase-piano2');
const btnphasePiano3 = document.querySelector('.btn-phase-piano3');
const btnphasePiano4 = document.querySelector('.btn-phase-piano4');

btnphasePiano1.addEventListener('click', () => {
  phasePiano1.classList.remove('is-hidden');
  phasePiano1.classList.add('is-visible');
});

btnphasePiano2.addEventListener('click', () => {
  phasePiano2.classList.remove('is-hidden');
  phasePiano2.classList.add('is-visible');
});

btnphasePiano3.addEventListener('click', () => {
  phasePiano3.classList.remove('is-hidden');
  phasePiano3.classList.add('is-visible');
});

btnphasePiano4.addEventListener('click', () => {
  phasePiano4.classList.remove('is-hidden');
  phasePiano4.classList.add('is-visible');
});

// Ceny 
const pricingVocal = document.getElementById('pricingVocal');
const pricingPiano = document.getElementById('pricingPiano');
const btnVocalPrices = document.querySelector('.btn-wokal-prices');
const btnPianoPrices = document.querySelector('.btn-piano-prices');


btnVocalPrices.addEventListener('click', () => {
  pricingVocal.classList.remove('is-hidden');
  pricingVocal.classList.add('is-visible');
});

btnPianoPrices.addEventListener('click', () => {
  pricingPiano.classList.remove('is-hidden');
  pricingPiano.classList.add('is-visible');
});

const hidePricesVocal = document.querySelector('.btn--is-hidden-pricing-vocal');
const hidePricesPiano = document.querySelector('.btn--is-hidden-pricing-piano');

hidePricesVocal.addEventListener('click', () => {
  pricingVocal.classList.toggle('is-hidden');
});

hidePricesPiano.addEventListener('click', () => {
  pricingPiano.classList.toggle('is-hidden');
});


// Strefa artystow

const zoneArrow = document.querySelector('.zone__box-arrow');
const zoneContent = document.querySelector('.zone__content');
const zoneHide = document.querySelector('.btn--is-hidden-zone');

zoneArrow.addEventListener('click', () => {
  zoneContent.classList.remove('is-hidden');
  zoneContent.classList.add('is-visible');

});

const zoneIcon = document.querySelectorAll('.zone__icon');


zoneIcon.forEach(icon => {
  icon.addEventListener('click', () => {
    zoneContent.classList.remove('is-hidden');
    zoneContent.classList.add('is-visible');
  });
});

zoneHide.addEventListener('click', () => {
  zoneContent.classList.remove('is-visible');
  zoneContent.classList.add('is-hidden'); 
});


// Odbierz prezent

const gift = document.querySelector('.btn-gift');
const giftBox = document.querySelector('.gift__box');
const hideGift = document.querySelector('.btn--is-hidden-gift');
const giftSection = document.querySelector('#odbierzPrezent');

gift.addEventListener('click', () => {
  giftBox.classList.remove('is-hidden');
  giftBox.classList.add('is-visible');
  giftSection.classList.remove('take-margin');
});

hideGift.addEventListener('click', () => {
  giftBox.classList.add('is-hidden');
  giftBox.classList.remove('is-visible');
  giftSection.classList.add('take-margin');
});



