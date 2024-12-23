const calculate = document.querySelector('.calculate');


const reset = document.querySelector('.reset');
const getDiscount = document.querySelector('.get-discount');



const billPrice = document.getElementById('bill-price');
const discountAmount = document.getElementById('discount-amount');

const discountPrice = document.getElementById('discount-price');

calculate.addEventListener('click', billCalculation);

function billCalculation() {

  if(billPrice.value <2000){
    // discountAmount.value = '0';
    finalPrice = billPrice.value;
   discountPrice.value = finalPrice;
  }
  else if(billPrice.value >= 2000 && billPrice.value < 5000){
    discountAmount.value = '4';
    discount = (billPrice.value * 4)/100;
   finalPrice = billPrice.value - discount;
    discountPrice.value = finalPrice;
  }
  else if(billPrice.value >= 5000 && billPrice.value < 10000){
    discountAmount.value = '6';
    discount = (billPrice.value * 6)/100;
    finalPrice = billPrice.value - discount;
    discountPrice.value = finalPrice;
  }
  else{
    discountAmount.value = '10';
    discount = (billPrice.value * 10)/100;
    finalPrice = billPrice.value - discount;
     discountPrice.value = finalPrice;
  }

}

reset.addEventListener('click', resetButton);

function resetButton(){
   billPrice.value = '';
   discountAmount.value = '';
   discountPrice.value = '';


}

// getDiscount.addEventListener('click', toGetDiscount);

// function toGetDiscount(){
//   if(billPrice.value <2000){
//     discountAmount.value = '0';
//   }
//   else if(billPrice.value >= 2000 && billPrice.value < 5000){
//     discountAmount.value = '4';
//   }
//   else if(billPrice.value >= 5000 && billPrice.value < 10000){
//     discountAmount.value = '6';
//   }
//   else{
//     discountAmount.value = '10';
//   }
// }


// let bill = 3000;

// if(bill < 2000){
//   total = bill;
//   console.log(total);
// }
// else if(bill >= 2000 && bill < 5000){
//   discount = (bill * 4)/ 100;
//   total = bill - discount;
//   console.log(total);
// }
// else if(bill >= 5000 && bill < 10000){
//   discount = (bill * 6)/100;
//   total = bill - discount;
//   console.log(total);
// }
// else{
//   discount = (bill * 10)/100;
//   total = bill - discount;
//   console.log(total);
// }




 // const totalDiscount = (billPrice.value * discountAmount.value) / 100; 
  // const finalPrice = billPrice.value - totalDiscount; 

  // discountPrice.value = finalPrice; 

  

