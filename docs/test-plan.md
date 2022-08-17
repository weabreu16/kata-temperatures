# Test Plan
I used the test framework Jest, if you want to run the tests, use the following command:
```
npm run test
```

## End To End Tests
There is only one component in this project and does not have an interaction with another components, so, there is no end to end tests.

## Unit Tests
Temperature
  ToString
    √ should return '5.48F' if Temperature(5.48, Fahrenheit)
  ToFahrenheit
    √ should return the same value if is Fahrenheit
    √ should return 41.86F if receive 5.48C
    √ should return -449.81F if receive 5.48K
  ToCelsius
    √ should return the same value if is Celsius 
    √ should return -14.73C if receive 5.48F 
    √ should return -267.67C if receive 5.48K 
  ToKelvin
    √ should return the same value if is Kelvin 
    √ should return 278.63K if receive 5.48C 
    √ should return 258.42K if receive 5.48F 
  Kelvin
    √ should throw error with 'Kelvin can't be zero' if receive 0K 
  Add
    √ should return 5C if add 2C and 3C 
    √ should return 15C if add 5C and 50F 
    √ should return 91F if add 50F and 5C 
    √ should return 275.15K if add 1K and 1C 
  Substract
    √ should return 1C if substract 3C and 2C
    √ should return -5C if substract 5C and 50F 
    √ should return 9F if substract 50F and 5C
    √ should return -273.15K if substract 1K and 1C 
  MultiplyBy
    √ should return 6C if multiply 3C by 2C 
    √ should return 50C if multiply 5C by 50F
    √ should return 82F if multiply 2F by 5C
    √ should return 274.15K if multiply 1K by 1C
  DivideBy
    √ should return 1.5C if divide 3C by 2C 
    √ should return 0.5C if divide 5C by 50F
    √ should return 0.05F if divide 2F by 5C 
    √ should return 1K if divide 1K by -272.15C
