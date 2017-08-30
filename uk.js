
const val1 = "30167b0eb4eef511ec82272b4b47a2d71471";
const val2 = "1319057cb23c1dcbf616876372617fff8b48";

var charCode1;
var charCode2;
var value = 0;
var result = "";
var length = val1.length / 2;

console.log(val1, val2);

for (var i = 0; i < val1.length; i += 2) {
  charCode1 = parseInt(val1.substr(i, 2), 16);
  charCode2 = parseInt(val2.substr(i, 2), 16);

  console.log(val1.substr(i, 2), val2.substr(i, 2));

  value = (charCode1 ^ charCode2).toString(16);
  
  if (value.length < 2) {
    value = "0" + value;
  }
  
  result += value;
}

console.log(result);
