function calculate(){
  const principalInput = document.querySelector("#principal");
  const rateInput = document.querySelector("#rate");
  const yearsInput = document.querySelector("#years");
  const totalAmount = document.querySelector("#total-amount");
  
  const principal = Number(principalInput.value);
  const rate = Number(rateInput.value / 100);
  const years = Number(yearsInput.value);
  
  const result = principal * (Math.pow((1 + rate), years) - 1);

  totalAmount.innerHTML = `$ ${principal + result}`
}

