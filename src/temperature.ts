
export enum TemperatureScale {
  Fahrenheit = "F",
  Celsius = "C",
  Kelvin = "K"
};

function round(num: number): number {
  return +(Math.round(+(num + "e+2")) + "e-2");
};

export class Temperature {
  constructor(
    public value: number,
    public readonly Scale: TemperatureScale
  ) {
    if (value <= 0 && Scale === TemperatureScale.Kelvin)
      throw new Error("Kelvin can't be zero or less");
  }

  Add(other: Temperature): Temperature {
    if (this.Scale === other.Scale)
      return new Temperature(round(this.value + other.value), this.Scale);

    if (this.Scale === TemperatureScale.Celsius)
      return new Temperature(round(this.value + other.ToCelsius().value), this.Scale);

    if (this.Scale === TemperatureScale.Fahrenheit)
      return new Temperature(round(this.value + other.ToFahrenheit().value), this.Scale);

    return new Temperature(round(this.value + other.ToKelvin().value), this.Scale);
  }

  Substract(other: Temperature): Temperature {
    if (this.Scale === other.Scale)
      return new Temperature(round(this.value - other.value), this.Scale);

    if (this.Scale === TemperatureScale.Celsius)
      return new Temperature(round(this.value - other.ToCelsius().value), this.Scale);

    if (this.Scale === TemperatureScale.Fahrenheit)
      return new Temperature(round(this.value - other.ToFahrenheit().value), this.Scale);

    return new Temperature(round(this.value - other.ToKelvin().value), this.Scale);
  }

  MultiplyBy(other: Temperature): Temperature {
    if (this.Scale === other.Scale)
      return new Temperature(round(this.value * other.value), this.Scale);

    if (this.Scale === TemperatureScale.Celsius)
      return new Temperature(round(this.value * other.ToCelsius().value), this.Scale);

    if (this.Scale === TemperatureScale.Fahrenheit)
      return new Temperature(round(this.value * other.ToFahrenheit().value), this.Scale);

    return new Temperature(round(this.value * other.ToKelvin().value), this.Scale);
  }

  DivideBy(other: Temperature): Temperature {
    if (this.Scale === other.Scale)
      return new Temperature(round(this.value / other.value), this.Scale);

    if (this.Scale === TemperatureScale.Celsius)
      return new Temperature(round(this.value / other.ToCelsius().value), this.Scale);

    if (this.Scale === TemperatureScale.Fahrenheit)
      return new Temperature(round(this.value / other.ToFahrenheit().value), this.Scale);

    return new Temperature(round(this.value / other.ToKelvin().value), this.Scale);
  }

  ToString() {
    return `${this.value}${this.Scale}`;
  }

  ToFahrenheit(): Temperature {
    if (this.Scale === TemperatureScale.Celsius) {
      const fahrenheit = round((this.value * 9 / 5) + 32);
      return new Temperature(fahrenheit, TemperatureScale.Fahrenheit);
    }

    if (this.Scale === TemperatureScale.Kelvin) {
      const fahrenheit = round((this.value - 273.15) * (9 / 5) + 32);
      return new Temperature(fahrenheit, TemperatureScale.Fahrenheit);
    }

    return this;
  }

  ToCelsius(): Temperature {
    if (this.Scale === TemperatureScale.Fahrenheit) {
      const celsius = round((this.value - 32) * 5 / 9);
      return new Temperature(celsius, TemperatureScale.Celsius);
    }

    if (this.Scale === TemperatureScale.Kelvin) {
      const celsius = round(this.value - 273.15);
      return new Temperature(celsius, TemperatureScale.Celsius);
    }

    return this;
  }

  ToKelvin(): Temperature {
    if (this.Scale === TemperatureScale.Celsius) {
      const kelvin = round(this.value + 273.15);
      return new Temperature(kelvin, TemperatureScale.Kelvin);
    }

    if (this.Scale === TemperatureScale.Fahrenheit) {
      const kelvin = round((this.value - 32) * (5 / 9) + 273.15);
      return new Temperature(kelvin, TemperatureScale.Kelvin);
    }

    return this;
  }
};

