function Accordion () {
  
  const $accordion = document.querySelectorAll('.js-occlss-accordion')

  // Button attribute toggle
  var toggleDataAttr = function (btnElem) {
    var toggleParent = btnElem.parentElement.parentElement;
    var toggleContent = toggleParent.querySelector('.occlss-accordion__panel-content');
    btnElem.setAttribute('aria-expanded',btnElem.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    btnElem.classList.toggle('is-active');
    toggleContent.setAttribute('aria-expanded',toggleContent.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    toggleContent.style.display = toggleContent.style.display === 'none' ? '' : 'none';
  };

  for (var i = 0; i < $accordion.length;i++) {

    var acitms = $accordion.item(i).children;
    var $panelCounter = i;
    $accordion.item(i).setAttribute("role", "tablist");
    $accordion.item(i).setAttribute("multiselectable", "true");

    for (const key of Object.keys(acitms)) {

      console.log(acitms[key]);


      var $panelID = ($panelCounter);

      if(acitms[key].className === 'occlss-accordion__panel-title') {
          console.log($panelID);
          var btn = document.createElement('button');
          btn.setAttribute('class', 'occlss-accordion__panel-lnk');
          btn.setAttribute('aria-expanded', 'false');
          btn.setAttribute('id', `occlss-accordion-panel-${$panelID}`);
          btn.setAttribute('aria-controls', `occlss-accordion-panel-occlss-accordion-panel-${$panelID}`);
          btn.innerText = acitms[key].innerText;
          acitms[key].innerText = "";
          acitms[key].appendChild(btn);
          btn.onclick = function() {
            // set elements for data attribute toggle
            toggleDataAttr(this);
          };
      }

      if(acitms[key].className === 'occlss-accordion__panel-content') {
        console.log($panelID);
        acitms[key].setAttribute('id', `occlss-accordion-panel-${$panelID}`);
        acitms[key].setAttribute('aria-labelledby', `control-occlss-accordion-panel-${$panelID}`);
        acitms[key].setAttribute('aria-hidden', 'true');
        acitms[key].setAttribute('role', 'region');
        acitms[key].style.display = 'none';
      }

      console.log('-----------');

    }
  }

}

export default Accordion
