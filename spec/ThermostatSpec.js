describe('Thermostat', function(){

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('on instantiation', function() {

    it('has a temperature of 20', function() {
      expect(thermostat.currentTemperature()).toEqual(20);
    });
  });

  describe('temperature increase', function(){
    it('goes up by 1 degree', function(){
     thermostat.increaseTemperature();
     expect(thermostat.currentTemperature()).toEqual(21);
    });
  });

  describe('temperature is decreased',function(){
    it('goes down by 1 degree', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.currentTemperature()).toEqual(19);
    });
  });

  describe('Minimum temperature', function(){
    it('of 10 degrees', function(){
    thermostat.temp = 10;
    thermostat.decreaseTemperature();
      expect(thermostat.currentTemperature()).toEqual(10);
    });
  });

  describe('Thermostat reset button', function(){
    it('returns temp to 20 when pressed', function(){
      thermostat.decreaseTemperature();
      thermostat.resetTemperature();  
      expect(thermostat.currentTemperature()).toEqual(20);
    });
  });

  describe('power save mode',function(){
    it('has a maximum temp of 25', function(){
      thermostat.powerSaveOn();
      thermostat.temp = 25;
      thermostat.increaseTemperature();
      expect(thermostat.temp).toEqual(25);
    });
  });

  describe('power save mode off',function(){
    it('has a maximum temp of 32', function(){
      thermostat.powerSaveOff();
      thermostat.temp = 32;
      thermostat.increaseTemperature();
      expect(thermostat.temp).toEqual(32);
    });

    it('still can increase the temperature if it is less than 32', function() {
      thermostat.powerSaveOff();
      thermostat.temp = 26;
      thermostat.increaseTemperature();
      expect(thermostat.temp).toEqual(27);
    });

  });


  describe('display changes', function(){
    it('to green if temperature below 18', function(){
      thermostat.temp = 18;
      expect(thermostat.colourDisplay()).toEqual("Green");
    });
  });

  describe('display changes', function(){
    it('to yellow if temperature between 19 and 25', function(){
      thermostat.temp = 18;
      thermostat.increaseTemperature();
      expect(thermostat.currentTemperature()).toEqual(19);
      expect(thermostat.colourDisplay()).toEqual("Yellow");
    });
  });

  describe('display changes', function(){
    it('to red if temperature above 25', function(){
      thermostat.powerSaveOff();
      thermostat.temp = 25;
      thermostat.increaseTemperature();
      expect(thermostat.currentTemperature()).toEqual(26);
      expect(thermostat.colourDisplay()).toEqual("Red");
    });
  });
});
