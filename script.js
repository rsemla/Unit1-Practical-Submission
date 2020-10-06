var numbers=[-30, 14, 66, 21, 72, -4];
var num = [];


function myFunction(number) {
  var that = this;
    
  this.number = numbers[i];
  
  this.element = document.createElement("div");
  this.numEle = document.createElement("div2");
  this.eleEle = document.createElement("div3");
  
  this.numEle.innerHTML = "The number is " + this.number;
  
  if (this.number < 0) {
    this.eleEle.innerHTML += " and below 0";
  }
  else if (this.number > 50) {
    this.eleEle.innerHTML += " and greater than 50";
  }
  else if (this.number === 14) {
    this.eleEle.innerHTML += " and equals 14";
  }
  else {
    this.eleEle.innerHTML += "";
  }
  this.numEle.addEventListener("click", function(){
    that.incNumber();    
    })
  
  
  this.element.appendChild(this.numEle);
  this.element.appendChild(this.eleEle);
  document.body.appendChild(this.element);  
}
myFunction.prototype.incNumber = function(){
  this.number = this.number + 1;  
  this.numEle.innerHTML = "The number is " + this.number;

}
for (var i = 0; i < numbers.length; i++) {
  num.push(new myFunction(numbers[i]))
}