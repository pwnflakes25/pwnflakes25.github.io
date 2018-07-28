// $(document).ready(() => {

class Notaris {   //this create a class of Notaris
  constructor(Pnbp, CekSertifikat, Ppjb, KuasaUntukMenJual, Ajb, BalikNama, AjbMultiplier){
     this.Pnbp = Pnbp;
     this.CekSertifikat = CekSertifikat;
     this.Ppjb = Ppjb;
     this.KuasaUntukMenJual = KuasaUntukMenJual;
     this.Ajb = Ajb;
     this.multiplier = AjbMultiplier;
     this.BalikNama = BalikNama;
  }
};

//Creation of list of notaris
const Standard = new Notaris();
const ManshurIshak = new Notaris(230725, 300000, 1300000, 0, 0, 1000000, 1);
const MelatiSinaga = new Notaris(250000, 500000, 5000000, 2000000, 0, 4000000, 2);
const Michael = new Notaris(0, 600000, 0, 2000000, 0, 0, 1);


function calculateStandard(hargaTransaksi) {
  let pajakPenjual = 0.025 * hargaTransaksi;
  let pajakPembeli = (hargaTransaksi - 80000000) * 0.05;

  if (hargaTransaksi <= 250000000) {
    Standard.Pnbp = 50000;
  }
  else if (hargaTransaksi >= 250000000 && hargaTransaksi <= 1000000000 ) {
    Standard.Pnbp = 250000;
  }
  else if (hargaTransaksi > 1000000000) {
    Standard.Pnbp = 2500000;
  }

  Standard.CekSertifikat = 50000;
  Standard.Ppjb = 0.01 * hargaTransaksi;
  Standard.KuasaUntukMenJual = 0;
  Standard.Ajb = 0.01 * hargaTransaksi;
  Standard.BalikNama = 25000;
  Standard.multiplier = 1;

  function TotalBiaya(obj) {
      return Object.values(obj).reduce((a, b) => a + b); // Jumlahin semua Biaya yang ada di object notaris yg dipilih
  }

  function beautifyObject(obj) {
  var string = "";
  for (let property in obj) {
    string = string + property + ': ' + obj[property] + '     ';
  }
  return string;
  }

  let notarisFee = TotalBiaya(Standard);
  let totalPajak = pajakPembeli + pajakPenjual;
  let notarisFeeList = beautifyObject(Standard);
  let grandTotal = totalPajak + notarisFee;
  console.log(Standard);

  return [grandTotal, totalPajak, notarisFee, notarisFeeList]

};

function calculate(hargaTransaksi, namaNotaris) {   //function yg calculate biaya2 notaris

 //constant values dibawah ini:
  let pajakPenjual = 0.025 * hargaTransaksi;
  let pajakPembeli = (hargaTransaksi - 80000000) * 0.05;

  namaNotaris.Pnbp = (0.001 * hargaTransaksi) + 100000;
  namaNotaris.Ajb = (0.01 * hargaTransaksi) * namaNotaris.multiplier;



function TotalBiaya(obj) {
    return Object.values(obj).reduce((a, b) => a + b); // Jumlahin semua Biaya yang ada di object notaris yg dipilih
}

function SortingObject(obj) {           //this function lay out the object of biaya-biaya into a string
  let Objstr = JSON.stringify(obj);
  Objstr = JSON.stringify(obj, null, 4);
  return Objstr;
}

function beautifyObject(obj) {
var string = "";
for (let property in obj) {
  string = string + property + ': ' + obj[property] + '     ';
}
return string;
}

let notarisFee = TotalBiaya(namaNotaris);
let totalPajak = pajakPembeli + pajakPenjual;

let notarisFeeList = beautifyObject(namaNotaris);
let grandTotal = totalPajak + notarisFee;

return [grandTotal, totalPajak, notarisFee, notarisFeeList]
}


const displayResult = () => {
  let hargaUnit = document.getElementById('hargaUnit').value;
  let notarisChoice = document.getElementById('notarisList').value;

  if (hargaUnit === '') {
    $('#hargaUnit').toggleClass('emptyInputField');
    $('#formAlert').show();
  }

  else if (notarisChoice === 'Standard') {
    result = calculateStandard(hargaUnit);
    document.getElementById("totalAll").value = 'Rp. ' + result[0].toLocaleString();
    document.getElementById("totalPajak").value = 'Rp. ' + result[1].toLocaleString();
    document.getElementById("totalNotarisFee").value = 'Rp. ' + result[2].toLocaleString();
    document.getElementById("totalAll").readOnly = true;
    document.getElementById("totalPajak").readOnly = true;
    document.getElementById("totalNotarisFee").readOnly = true
    $('#answerBox').slideDown('slow');
    $('#formAlert').hide();
  }

  else {
    result = calculate(hargaUnit, eval(notarisChoice));
    document.getElementById("totalAll").value = 'Rp. ' + result[0].toLocaleString();
    document.getElementById("totalPajak").value = 'Rp. ' + result[1].toLocaleString();
    document.getElementById("totalNotarisFee").value = 'Rp. ' + result[2].toLocaleString();
    // Disable Input
    document.getElementById("totalAll").readOnly = true;
    document.getElementById("totalPajak").readOnly = true;
    document.getElementById("totalNotarisFee").readOnly = true
    $('#answerBox').slideDown('slow');
    $('#formAlert').hide();
  }
}

$('#calculateButton').on('click', displayResult);

$('#resetButton').on('click', function() {
   $('#answerBox').slideUp('slow');                           //reset the whole thing function
   document.getElementById('hargaUnit').value = '';
   $('#notarisList').prop('selectedIndex', 0);
   $('#hargaFieldLabel').html('Harga Unit: ');
});

$(".calculator-button").on('mouseenter',function() {
    $('.calculator-button').addClass('activeButton');
}).on('mouseleave', function(){                                        //handles the Navigation bar button
      $('.calculator-button').removeClass('activeButton');
}).on('click', function(){
    $('html,body').animate({
        scrollTop: $(".part1").offset().top},
        'slow');
});

$(".guide-button").on('mouseenter',function() {
    $('.guide-button').addClass('activeButton');
}).on('mouseleave', function(){                                        //handles guide button
      $('.guide-button').removeClass('activeButton');
}).on('click', function(){
 $('html,body').animate({
     scrollTop: $("#Petunjuk").offset().top},
     'slow');
})

$('.support-button').on('mouseenter', function() {
  $('.support-button').addClass('activeButton');                     //handles support button
}).on('mouseleave', function() {
  $('.support-button').removeClass('activeButton');
}).on('click', function() {
  $('html,body').animate({
      scrollTop: $(".support").offset().top},
      'slow');
});

$("#notarisList").on('change', function(){
  if (document.getElementById('notarisList').value === 'Standard') {
      $('#hargaFieldLabel').html('NJOP Unit: ');
  }
  else {
    $('#hargaFieldLabel').html('Harga Unit: ');
  }
})

$('#contributeSubmit').on('click', function() {
   $('.supportMessage').hide();
});


// });
