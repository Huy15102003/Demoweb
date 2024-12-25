// let a = prompt("Enter a:");
// let b = prompt("Enter b:");
// let c = prompt("Enter c:");
// if (a == 0) {
//     if (b == 0) {
//         if (c == 0) {
//             alert("vo so nghiem");
//         } else {
//             alert("vo nghiem");
//         }
//     }else {
//         let x = -c/b;
//         alert("nghiem cua pt: " + x);
//     }

// } else{
//     let denta = b*b - 4*a*c;
//     if (denta > 0) {
//         let x1 = (-b + Math.sqrt(denta))/(2*a);
//         let x2 = (-b - Math.sqrt(denta))/(2*a);
//         alert("co 2 nghiem phan biet: " + x1 + " va " + x2);
//     }else 
//         if (denta == 0) {
//             let x = -b/(2*a);
//             alert("co nghiem kep: " + x);
//         } else 
//         {
//             alert("vo nghiem");
//         }
// }
function clickBtn() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    if (numberOne == 0){
        if (numberTwo == 0){
            document.getElementById("result").innerText = "vo so nghiem";
        } else {
            document.getElementById("result").innerText = "vo nghiem";
        }
    }else{
        let x = - numberTwo/numberOne;
        document.getElementById("result").innerText = "nghiem duy nhat la" + x;
    }
}
function resize() {
    let pElement = document.getElementById("title");
    let resizeElement = document.getElementById("resize");
    pElement.style.fontSize = resizeElement.value + "px";
}

function changeBackground() {
    let bodyMain = document.getElementById("main");
    let pElement = document.getElementById("title");
}