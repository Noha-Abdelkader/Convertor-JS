document.body.style.cssText = `
margin:0;
padding:0;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
height :100vh;
background: linear-gradient(to bottom , rgb(12, 4, 80) ,  rgb(41, 1, 71)) ;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
// ===========================================================

let dataContainer = document.createElement("div");
let contanier = document.createElement("div");
let dollarInput = document.createElement("input");
let poundInput = document.createElement("input");
let head = document.createElement("h1");

head.innerText = "Convert US Dollars to Egyptian Pounds";


dollarInput.style.cssText=`
display: block;
padding: 1rem;
border-radius: 5px;
border: none;
width: 80%;
margin: 2rem auto;
font-size:2rem;
box-shadow: 0 0 10px 5px  rgb(102, 56, 94);
`;

poundInput.style.cssText=`
display: block;
padding: 1rem;
border-radius: 5px;
border: none;
width: 80%;
margin: 2rem auto;
font-size:2rem;
box-shadow: 0 0 10px 5px  rgb(102, 56, 94);
`;

dollarInput.setAttribute("type", "number");
poundInput.setAttribute("type", "number");

dollarInput.setAttribute("placeholder", "USD");
poundInput.setAttribute("placeholder", "EGP");

dataContainer.style.cssText = `
padding:3rem;
border: 10px solid white;
border-radius:70px;
box-shadow: 0 0 20px 10px   rgb(164, 136, 160); 
`;

contanier.style.cssText = `
color:white;
text-align:center;
`;

contanier.appendChild(head);
contanier.appendChild(dollarInput);
contanier.appendChild(poundInput);
dataContainer.appendChild(contanier);
document.body.appendChild(dataContainer);

poundInput.onkeyup = function () {
  let result = this.value / 30.90;
  dollarInput.value = result;
};

dollarInput.onkeyup = function () {
  let result = this.value * 30.90;
  poundInput.value = result;
};
