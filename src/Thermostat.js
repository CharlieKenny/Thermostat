function Thermostat() {
  this.temp = 20;
  this.powerSave = true;
};

Thermostat.prototype.currentTemperature = function() {
  return this.temp;
};

Thermostat.prototype.increaseTemperature = function() {
  if ( this.powerSave===true && this.temp <25 ) {
    this.temp += 1;
  } else if (this.powerSave===false && this.temp <32) {
    this.temp += 1;
  }
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temp > 10) {
    this.temp -= 1;
  }  
};

Thermostat.prototype.resetTemperature = function() {
  this.temp = 20
};


Thermostat.prototype.powerSaveOn = function(){
  this.powerSave = true;
};


Thermostat.prototype.powerSaveOff = function(){
  this.powerSave = false;
};

Thermostat.prototype.colourDisplay = function(){
  if ( this.temp <= 18) { 
    return this.temp = "Green";
  }

  else if (this.temp <= 25 && this.temp >= 19) {
    return this.temp = "Yellow";
  }
  else {
    return this.temp = "Red"
  }
};



