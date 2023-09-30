var fev = 0;
var cov = 0;
var snv = 0;
var ftv = 0;
var uwlv = 0;
var stv = 0;
var rnv = 0;
var swv = 0;
var nav = 0;
var sobv = 0;
var pav = 0;
var rhrv = 0;
var jpv = 0;
var rav = 0;
var mlv = 0;
var hev = 0;

function fec() {
  if (fev == 0) {
    fev = 1;
  } else if (fev == 1) {
    fev = 0;
  }
}

function coc() {
  if (cov == 0) {
    cov = 1;
  } else if (cov == 1) {
    cov = 0;
  }
}

function snc() {
  if (snv == 0) {
    snv = 1;
  } else if (snv == 1) {
    snv = 0;
  }
}

function ftc() {
  if (ftv == 0) {
    ftv = 1;
  } else if (ftv == 1) {
    ftv = 0;
  }
}

function uwlc() {
  if (uwlv == 0) {
    uwlv = 1;
  } else if (uwlv == 1) {
    uwlv = 0;
  }
}

function rnc() {
  if (rnv == 0) {
    rnv = 1;
  } else if (rnv == 1) {
    rnv = 0;
  }
}

function swc() {
  if (swv == 0) {
    swv = 1;
  } else if (swv == 1) {
    swv = 0;
  }
}

function stc() {
  if (stv == 0) {
    stv = 1;
  } else if (stv == 1) {
    stv = 0;
  }
}

function nac() {
  if (nac == 0) {
    nac = 1;
  } else if (nac == 1) {
    nac = 0;
  }
}

function sobc() {
  if (sobv == 0) {
    sobv = 1;
  } else if (sobv == 1) {
    sobv = 0;
  }
}

function pac() {
  if (pav == 0) {
    pav = 1;
  } else if (pav == 1) {
    pav = 0;
  }
}

function rwrc() {
  if (rhrv == 0) {
    rhrv = 1;
  } else if (rhrv == 1) {
    rhrv = 0;
  }
}

function jpc() {
  if (jpv == 0) {
    jpv = 1;
  } else if (jpv == 1) {
    jpv = 0;
  }
}

function mlc() {
  if (mlv == 0) {
    mlv = 1;
  } else if (mlv == 1) {
    mlv = 0;
  }
}

function rac() {
  if (stv == 0) {
    stv = 1;
  } else if (stv == 1) {
    stv = 0;
  }
}

function hec() {
  if (stv == 0) {
    stv = 1;
  } else if (stv == 1) {
    stv = 0;
  }
}

var inf = "You may have ";
function chk() {
  //alert('fever:'+fev+':cough:'+cov+':snee:'+snv+':uwl:'+uwlv+':stv:'+stv+':rn:'+rnv)

  if (fev === 1 && cov === 1 && stv === 1 && pav === 1) {
    inf = inf + "Influenza, ";
  }
  if (rnv === 1 && snv === 1 && stv === 1 && cov === 1 && hev === 1) {
    inf = inf + "Common Cold, ";
  }
  if (fev === 1 && ftv === 1 && cov === 1 && sobv === 1) {
    inf = inf + "COVID - 19, ";
  }
  if (ftv === 1 && uwlv === 1) {
    inf = inf + "Diabetes (Type 2), ";
  }
  if (jpv === 1 && swv === 1) {
    inf = inf + "Arthritis, ";
  }
  if (sobv === 1 && ftv === 1) {
    inf = inf + "Heart disease, ";
  }
  if (jpv === 1 && rhrv === 1) {
    inf = inf + "Anxiety, ";
  }
  if (mlv === 1) {
    inf = inf + "Alzheimer's, ";
  }
  if (nav === 1 && hev === 1) {
    inf = inf + "Migraine, ";
  }
  if (rav === 1) {
    inf = inf + "Ezecema, ";
  }
  if (inf == "You may have ") {
    inf = inf + "to contact a doctor @ teleconsult";
  }
  alert(inf);

  //if (fev===1&&cov===1){
  //  alert('ligma detected')
  //}
}
