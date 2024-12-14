let homeTxt = document.getElementById("hTxt");
let projectTxt = document.getElementById("pTxt");
let linksTxt = document.getElementById("lTxt");
let aboutTxt = document.getElementById("aTxt");

let URParking = document.getElementById("urP")
let URParkingPic = document.getElementById("p1Pic");
let URParkingInfo = document.getElementById("urPI");

let armComputer = document.getElementById("armComp");
let armCompPic = document.getElementById("p2pic");
let armCompInfo = document.getElementById("acI");

let csr = document.getElementById("cyberSecRes");
let csrPic = document.getElementById("p3Pic");
let csrInfo = document.getElementById("csrInfoCont");

let hcir = document.getElementById("hciRes");
let hcirInfo = document.getElementById("hciRInfo");
let hcirPic = document.getElementById("p4Pic");


let URPchanged = 0;
let acChanged = 0;
let hciC = 0;
let csC = 0;


function changehTxtColor(){
    homeTxt.style.color = "#324aee"
}

function defaulthTxtColor(){
    homeTxt.style.color = "black";
}

function changepTxtColor(){
    projectTxt.style.color = "#324aee"
}

function defaultpTxtColor(){
    projectTxt.style.color = "black";
}

function changelTxtColor(){
    linksTxt.style.color = "#324aee"
}

function defaultlTxtColor(){
    linksTxt.style.color = "black";
}

function changeaTxtColor(){
    aboutTxt.style.color = "#324aee"
}

function defaultaTxtColor(){
    aboutTxt.style.color = "black";
}

function setAllDefaul(){
    defaulthTxtColor();
    defaultpTxtColor();
    defaultlTxtColor();
    defaultaTxtColor();

    URParkingPic.style.display = 'block';
    URParkingInfo.style.display = 'none';

    armCompPic.style.display = 'block';
    armCompInfo.style.display = 'none';

    csrPic.style.display = 'block';
    csrInfo.style.display = 'none';

    hcirPic.style.display = 'block';
    hcir.style.display = 'none;'

}

// Functions for home page

function displayURParkingInfo(){

    if (URPchanged == 0){
        URParkingPic.style.display = 'none';
        URParkingInfo.style.display = 'block';

        URPchanged+=1;
    }

    else{
        URParkingPic.style.display = 'block';
        URParkingInfo.style.display = 'none';

        URPchanged-=1;
    }
}

function displayArmComputerInfo(){
    console.log(acChanged)
    if (acChanged == 0){
        armCompPic.style.display = 'none';
        armCompInfo.style.display = 'block';

        acChanged+=1;
    }

    else{
        armCompPic.style.display = 'block';
        armCompInfo.style.display = 'none';

        acChanged-=1;
    }
}

homeTxt.addEventListener('mouseover',changehTxtColor);
homeTxt.addEventListener('mouseleave',defaulthTxtColor);

projectTxt.addEventListener('mouseover',changepTxtColor);
projectTxt.addEventListener('mouseleave',defaultpTxtColor);

linksTxt.addEventListener('mouseover',changelTxtColor);
linksTxt.addEventListener('mouseleave',defaultlTxtColor);

aboutTxt.addEventListener('mouseover',changeaTxtColor);
aboutTxt.addEventListener('mouseleave',defaultaTxtColor);

URParking.addEventListener('click',displayURParkingInfo);
//URParking.addEventListener('mouseover',)

armComputer.addEventListener('click',displayArmComputerInfo);
//armComputer.addEventListener('mouseover',);

window.addEventListener('DOMContentLoaded',setAllDefaul);