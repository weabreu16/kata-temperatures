import { Temperature, TemperatureScale } from '../src/temperature';

describe("Temperature", () => {

  describe("ToString", () => {
    it("should return '5.48F' if Temperature(5.48, Fahrenheit)", () => {
      const temp = new Temperature(5.48, TemperatureScale.Fahrenheit);
      expect(temp.ToString()).toBe("5.48F");
    })
  });

  describe("ToFahrenheit", () => {
    it("should return the same value if is Fahrenheit", () => {
      const temp = new Temperature(5.48, TemperatureScale.Fahrenheit);
      expect(temp.ToFahrenheit()).toEqual({ value: 5.48, Scale: TemperatureScale.Fahrenheit });
    });

    it("should return 41.86F if receive 5.48C", () => {
      const temp = new Temperature(5.48, TemperatureScale.Celsius);
      expect(temp.ToFahrenheit()).toEqual({ value: 41.86, Scale: TemperatureScale.Fahrenheit });
    });

    it("should return -449.81F if receive 5.48K", () => {
      const temp = new Temperature(5.48, TemperatureScale.Kelvin);
      expect(temp.ToFahrenheit()).toEqual({ value: -449.81, Scale: TemperatureScale.Fahrenheit });
    });
  });

  describe("ToCelsius", () => {
    it("should return the same value if is Celsius", () => {
      const temp = new Temperature(5.48, TemperatureScale.Celsius);
      expect(temp.ToCelsius()).toEqual(temp);
    });

    it("should return -14.73C if receive 5.48F", () => {
      const temp = new Temperature(5.48, TemperatureScale.Fahrenheit);
      expect(temp.ToCelsius()).toEqual({ value: -14.73, Scale: TemperatureScale.Celsius });
    });

    it("should return -267.67C if receive 5.48K", () => {
      const temp = new Temperature(5.48, TemperatureScale.Kelvin);
      expect(temp.ToCelsius()).toEqual({ value: -267.67, Scale: TemperatureScale.Celsius });
    });
  });

  describe("ToKelvin", () => {
    it("should return the same value if is Kelvin", () => {
      const temp = new Temperature(5.48, TemperatureScale.Kelvin);
      expect(temp.ToKelvin()).toEqual(temp);
    });

    it("should return 278.63K if receive 5.48C", () => {
      const temp = new Temperature(5.48, TemperatureScale.Celsius);
      expect(temp.ToKelvin()).toEqual({ value: 278.63, Scale: TemperatureScale.Kelvin });
    });

    it("should return 258.42K if receive 5.48F", () => {
      const temp = new Temperature(5.48, TemperatureScale.Fahrenheit);
      expect(temp.ToKelvin()).toEqual({ value: 258.42, Scale: TemperatureScale.Kelvin });
    });
  });

  describe("Kelvin", () => {
    it("should throw error with 'Kelvin can't be zero or less' if receive 0K", () => {
      expect(() => { new Temperature(0, TemperatureScale.Kelvin) }).toThrowError("Kelvin can't be zero or less");
    });
	
	  it("should throw error with 'Kelvin can't be zero or less' if receive -5K", () => {
		  expect(() => { new Temperature(-5, TemperatureScale.Kelvin) }).toThrowError("Kelvin can't be zero or less");
	  });
  });

  describe("Add", () => {
    it("should return 5C if add 2C and 3C", () => {
      const tempA = new Temperature(2, TemperatureScale.Celsius);
      const tempB = new Temperature(3, TemperatureScale.Celsius);
      expect(tempA.Add(tempB)).toEqual({ value: 5, Scale: TemperatureScale.Celsius });
    });

    it("should return 15C if add 5C and 50F", () => {
      const tempA = new Temperature(5, TemperatureScale.Celsius);
      const tempB = new Temperature(50, TemperatureScale.Fahrenheit);
      expect(tempA.Add(tempB)).toEqual({ value: 15, Scale: TemperatureScale.Celsius });
    });

    it("should return 91F if add 50F and 5C", () => {
      const tempA = new Temperature(5, TemperatureScale.Celsius);
      const tempB = new Temperature(50, TemperatureScale.Fahrenheit);
      expect(tempB.Add(tempA)).toEqual({ value: 91, Scale: TemperatureScale.Fahrenheit });
    });

    it("should return 275.15K if add 1K + 1C", () => {
      const tempA = new Temperature(1, TemperatureScale.Celsius);
      const tempB = new Temperature(1, TemperatureScale.Kelvin);
      expect(tempB.Add(tempA)).toEqual({ value: 275.15, Scale: TemperatureScale.Kelvin });
    });
  });

  describe("Substract", () => {
    it("should return 1C if substract 3C and 2C", () => {
      const tempA = new Temperature(3, TemperatureScale.Celsius);
      const tempB = new Temperature(2, TemperatureScale.Celsius);
      expect(tempA.Substract(tempB)).toEqual({ value: 1, Scale: TemperatureScale.Celsius });
    });

    it("should return -5C if substract 5C and 50F", () => {
      const tempA = new Temperature(5, TemperatureScale.Celsius);
      const tempB = new Temperature(50, TemperatureScale.Fahrenheit);
      expect(tempA.Substract(tempB)).toEqual({ value: -5, Scale: TemperatureScale.Celsius });
    });

    it("should return 9F if substract 50F and 5C", () => {
      const tempA = new Temperature(5, TemperatureScale.Celsius);
      const tempB = new Temperature(50, TemperatureScale.Fahrenheit);
      expect(tempB.Substract(tempA)).toEqual({ value: 9, Scale: TemperatureScale.Fahrenheit });
    });

    it("should return 11.85K if substract 300K and 15C", () => {
      const tempA = new Temperature(15, TemperatureScale.Celsius);
      const tempB = new Temperature(300, TemperatureScale.Kelvin);
      expect(tempB.Substract(tempA)).toEqual({ value: 11.85, Scale: TemperatureScale.Kelvin });
    });
  });

  describe("MultiplyBy", () => {
    it("should return 6C if multiply 3C by 2C", () => {
      const tempA = new Temperature(3, TemperatureScale.Celsius);
      const tempB = new Temperature(2, TemperatureScale.Celsius);
      expect(tempA.MultiplyBy(tempB)).toEqual({ value: 6, Scale: TemperatureScale.Celsius });
    });

    it("should return 50C if multiply 5C by 50F", () => {
      const tempA = new Temperature(5, TemperatureScale.Celsius);
      const tempB = new Temperature(50, TemperatureScale.Fahrenheit);
      expect(tempA.MultiplyBy(tempB)).toEqual({ value: 50, Scale: TemperatureScale.Celsius });
    });

    it("should return 82F if multiply 2F by 5C", () => {
      const tempA = new Temperature(5, TemperatureScale.Celsius);
      const tempB = new Temperature(2, TemperatureScale.Fahrenheit);
      expect(tempB.MultiplyBy(tempA)).toEqual({ value: 82, Scale: TemperatureScale.Fahrenheit });
    });

    it("should return 274.15K if multiply 1K by 1C", () => {
      const tempA = new Temperature(1, TemperatureScale.Celsius);
      const tempB = new Temperature(1, TemperatureScale.Kelvin);
      expect(tempB.MultiplyBy(tempA)).toEqual({ value: 274.15, Scale: TemperatureScale.Kelvin });
    });
  });

  describe("DivideBy", () => {
    it("should return 1.5C if divide 3C by 2C", () => {
      const tempA = new Temperature(3, TemperatureScale.Celsius);
      const tempB = new Temperature(2, TemperatureScale.Celsius);
      expect(tempA.DivideBy(tempB)).toEqual({ value: 1.5, Scale: TemperatureScale.Celsius });
    });

    it("should return 0.5C if divide 5C by 50F", () => {
      const tempA = new Temperature(5, TemperatureScale.Celsius);
      const tempB = new Temperature(50, TemperatureScale.Fahrenheit);
      expect(tempA.DivideBy(tempB)).toEqual({ value: 0.5, Scale: TemperatureScale.Celsius });
    });

    it("should return 0.05F if divide 2F by 5C", () => {
      const tempA = new Temperature(5, TemperatureScale.Celsius);
      const tempB = new Temperature(2, TemperatureScale.Fahrenheit);
      expect(tempB.DivideBy(tempA)).toEqual({ value: 0.05, Scale: TemperatureScale.Fahrenheit });
    });


    it("should return 1K if divide 1K by -272.15C", () => {
      const tempA = new Temperature(-272.15, TemperatureScale.Celsius);
      const tempB = new Temperature(1, TemperatureScale.Kelvin);
      expect(tempB.DivideBy(tempA)).toEqual({ value: 1, Scale: TemperatureScale.Kelvin });
    });
  });
});
