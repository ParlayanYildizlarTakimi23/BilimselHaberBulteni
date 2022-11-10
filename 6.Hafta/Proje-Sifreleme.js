var gSifre2 ="Selam";

console.log("Hashli sifreniz= "+sifrele(gSifre2));

function sifrele(parametre) {
    const Hmap = new Map();
    var dict = {};
    var gSifre = parametre;

    Hmap.set("0","dodore");
    Hmap.set("1","dorere");
    Hmap.set("2","dodoso");
    Hmap.set("3","dodefa");
    Hmap.set("4","dodomi");
    Hmap.set("5","doredo");
    Hmap.set("6","dodofa");
    Hmap.set("7","dodoti");
    Hmap.set("8","dododo");
    Hmap.set("9","dodola");

    Hmap.set("a", "doremi");
    Hmap.set("b", "fatiso");
    Hmap.set("c", "fasore");
    Hmap.set("ç", "reSofa");
    Hmap.set("d", "misomi");
    Hmap.set("e", "domisi");
    Hmap.set("f", "domila");
    Hmap.set("g", "tidodo");
    Hmap.set("ğ", "sososo");
    Hmap.set("h", "tifami");
    Hmap.set("i", "relafa");
    Hmap.set("ı", "ladore");
    Hmap.set("j", "redodo");
    Hmap.set("k", "domiso");
    Hmap.set("l", "lalala");
    Hmap.set("m", "retiti");
    Hmap.set("n", "lamila");
    Hmap.set("o", "milafa");
    Hmap.set("ö", "sotiti");
    Hmap.set("p", "reremi");
    Hmap.set("r", "remiso");
    Hmap.set("s", "miredo");
    Hmap.set("ş", "midodo");
    Hmap.set("t", "refala");
    Hmap.set("u", "famiso");
    Hmap.set("ü", "fasofa");
    Hmap.set("v", "mimire");
    Hmap.set("y", "misifa");
    Hmap.set("z", "fatido");
    Hmap.set("x", "ladoti");
    Hmap.set("w", "latila");
    Hmap.set("q", "mifami");
            
    Hmap.set("A", "lamiso");
    Hmap.set("B", "famifa");
    Hmap.set("C", "samimi");
    Hmap.set("Ç", "tititi");
    Hmap.set("D", "tiredo");
    Hmap.set("E", "tilafa");
    Hmap.set("F", "sotiso");
    Hmap.set("G", "solaso");
    Hmap.set("Ğ", "doreso");
    Hmap.set("H", "ladoso");
    Hmap.set("İ", "dorela");
    Hmap.set("I", "somimi");
    Hmap.set("J", "doreti");
    Hmap.set("K", "lasoti");
    Hmap.set("L", "domido");
    Hmap.set("M", "lasomi");
    Hmap.set("N", "lamido");
    Hmap.set("O", "domire");
    Hmap.set("Ö", "timila");
    Hmap.set("P", "domimi");
    Hmap.set("R", "tidodo");
    Hmap.set("S", "domifa");
    Hmap.set("Ş", "tisofa");
    Hmap.set("T", "titido");
    Hmap.set("U", "tisodo");
    Hmap.set("Ü", "tilati");
    Hmap.set("V", "Lamire");
    Hmap.set("Y", "Latiti");
    Hmap.set("Z", "timiso");
    Hmap.set("X", "lasodo");
    Hmap.set("W", "tifala");
    Hmap.set("Q", "tirere");


    for (var i=0; i<gSifre.length; i++) {
        var ayr=gSifre.substring(i, i+1);
        dict[i] = ayr;
    }
    var hashliSifre = "";
    for (var i=0; i<gSifre.length; i++) {
        hashliSifre = hashliSifre + Hmap.get(dict[i]);
    }

    return(hashliSifre);

}