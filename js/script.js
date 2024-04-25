var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var k = 0;

document.getElementById("submitAnswer").addEventListener("click", ()=>{

    function cleanString(str) {
        return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }

    if (cleanString(document.getElementById("a1").value.toLowerCase()) === cleanString("transactions")) {
        a = 9
    }

    if (cleanString(document.getElementById("a2").value.toLowerCase()) === cleanString("ledger")) {
        b = 9
    }

    if (cleanString(document.getElementById("a3").value.toLowerCase()) === cleanString("encryption")) {
        c = 9
    }

    if (cleanString(document.getElementById("a4").value.toLowerCase()) === cleanString("blockchain")) {
        d = 9
    }

    if (cleanString(document.getElementById("a5").value.toLowerCase()) === cleanString("mining")) {
        e = 9
    }

    if (cleanString(document.getElementById("a6").value.toLowerCase()) === cleanString("the primary purpose of using encryption in cryptocurrency transactions is to provide security and safety")) {
        f = 9
    }

    if (cleanString(document.getElementById("a7").value.toLowerCase()) === cleanString(`the term used is "peer-to-peer system."`)) {
        g = 9
    }

    if (cleanString(document.getElementById("a8").value.toLowerCase()) === cleanString("cryptocurrency transactions are recorded and verified on a public ledger")) {
        h = 9
    }

    if (cleanString(document.getElementById("a9").value.toLowerCase()) === cleanString(`the distributed public ledger that records all cryptocurrency transactions is called the "blockchain."`)) {
        i = 9
    }

    if (cleanString(document.getElementById("a10").value.toLowerCase()) === cleanString(`the process is called "mining."`)) {
        j = 9
    }

    if (cleanString(document.getElementById("a11").value.toLowerCase()) === cleanString("bitcoin, ethereum, litecoin, ripple")) {
        k = 9
    }

    let result = (a + b + c + d + e + f + g + h + i + j + k);

    if (result === 99) {
        result = 100;
    }

    document.getElementById("showScore").innerHTML = result + "%"

    document.getElementById("resultBlock").style.display = "block"

    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    i = 0;
    j = 0;
    k = 0;
});