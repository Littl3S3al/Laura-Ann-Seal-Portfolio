AOS.init();


//services buttons
document.querySelector('.saleOfBusiness').onclick = function () {
    location.href = "servicesPages/saleOfBusinessAdvisory.html";
};
document.querySelector('.businessAquisition').onclick = function () {
    location.href = "servicesPages/businessAcquisitionAdvisory.html";
};
document.querySelector('.capitalRaising').onclick = function () {
    location.href = "servicesPages/capitalRaising.html";
};
document.querySelector('.businessValuations').onclick = function () {
    location.href = "servicesPages/businessValuation.html";
};
document.querySelector('.dueDilligence').onclick = function () {
    location.href = "servicesPages/dueDiligence.html";
};
document.querySelector('.strategy').onclick = function () {
    location.href = "servicesPages/strategy FormulationAndImplementation.html";
};
document.querySelector('.employeeShare').onclick = function () {
    location.href = "servicesPages/employeeShareOwnershipPlanEstablishment.html";
};
document.querySelector('.businessreengineering').onclick = function () {
    location.href = "servicesPages/businessReEngineering.html";
};
document.querySelector('.businessRescue').onclick = function () {
    location.href = "servicesPages/businessRecoveryAndRescue.html";
};


//contact us buttons
document.querySelector('.emailButton').onclick = function () {
    window.open('mailto: info@crestcapital.co.za');return false
};
document.querySelector('.callButton').onclick = function () {
    window.open('tel:+27 82 458 8792');return false
};
document.querySelector('.addressButton').onclick = function () {
    window.open('https://www.google.com/maps/place/The+Mall+Offices/@-26.1473619,28.0399803,17z/data=!3m1!4b1!4m5!3m4!1s0x1e950cf2d5053bcb:0xaa125331d3d3d5fb!8m2!3d-26.1473619!4d28.042169');return false
};
