module.exports = function Factory() {

let Paper;
let Cardboard;
let Glass;
let Metal;
let Cans;

function setQty(qty){
    Paper = qty.Paper;
    Cardboard = qty.Cardboard;
    Glass = qty.Glass;
    Metal = qty.Metal;
    Cans = qty.Cans;
}

function getQty(){
    return{
       Paper,
       Cardboard,
       Glass,
       Metal,
       Cans
    }
}

/*function materialQty(qty){
    var numbers = /[1-100]/g;
    var regexQty = qty.replace(numbers, "")

    if(qty!== ""){
      return regexQty;
    }
}



function totalValue(){
  let Total = 0;
   if(Paper !== 0){
     Total += 10 * Paper;
   } else if (Cardboard !== ""){
     Total += 20 * Cardboard;
   } return Total;
}
*/
     return {
//         totalValue,
//         materialQty,
         setQty,
         getQty,
     }
}
