# The Super Galactic Age Calculator (CodeReview5)
#### This was made as an exercise in setting up and working in a modern developer environment for Epicodus
#### Created by Peter Wells
 _Updated: 11/15/19_

## Description

>The purpose of this site is to take a users age and habits and use this information to calculate both their age on other planets based on their yearly cycle and calculate a life expectancy for them.

## Installation

1. Clone/Download the Git Repository at: https://github.com/unfinishedideas/codereview5.git
2. Navigate to the directory with terminal (or your preferred console)
3. type 'npm install' to get the appropriate nodeModules
4. type 'npm run build' to build a distribution
5. open ./dist/index.html in your favorite browser

## Known Bugs

None at present

## Behavior Tree
### AgeCalc

App will take in a user's age and calculate how old they are on different planets.

| Behavior      | Input        | Output  |
| ------------- |:-------------| :-----  |
| App will take in a person's age and return and error if it is not a number | 'Sup' Years | Error: Character other than number submitted |
| App will take in a person's age and return and error if it is not a positive integer | -5 Years | Error: Number not a positive integer |
| App will take in a person's age and return their age in Mercury Years (.24 Earth) | 20 Years | 83 Mercury Years |
| App will take in a person's age and return their age in Venus Years (.62 Earth) | 20 Years | 32 Venus Years |
| App will take in a person's age and return their age in Mars Years (1.88 Earth) | 20 Years | 10 Mars Years |
| App will take in a person's age and return their age in Jupiter Years (11.86 Earth) | 20 Years | 1 Jupiter Years |

### HealthCalc

App will take in a person's lifestyle choices and determine their expected age.

| Behavior      | Input        | Output  |
| ------------- |:-------------| :-----  |
| App will not accept NaN for health value  | healthInput = ["I'm so healthy, bro"]  | Err: Health can't be NaN |
| App will loop through the healthInput array and add the values to the person's expectedAge property (which starts at 80) | healthInput = [5, 5, 5]  | expectedAge = 95 |
| If a person has lived past their expectancy; determine how many years past that they have lived | 80 Years Old  / (expectancy result = 75) | 5 years beyond expectancy |


## Support and contact

If you have any issues viewing this site or any general questions about how to open please email me at
_PeteTheBeatWells@gmail.com_

## Technologies Used

_This site uses the following technologies_

 **HTML**
 _for construction_

 **CSS**
_for general styling_

**JavaScript**
_for back-end business logic and functionality_

**Bootstrap 4.3.1**
_for containers / grid layout / button graphics_

**jQuery-3.4.1**
_for front-end interfacing_

### License
Copyright (c) 2019 Peter Wells  
Licensed under the GPL license.
