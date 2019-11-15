# Pizza Time Pizzeria (Code Review 4)
#### This was made as an exercise using objects for Epicodus
#### Created by Peter Wells
 _Updated: 11/9/19_

## Description

>The purpose of this site is to allow the user to order multiple pizzas with many toppings and calculate their price and display it to the user. It uses objects and object methods to accomplish this.

## Installation

1. Clone/Download the Git Repository at: https://github.com/unfinishedideas/codereview4.git
2. Open index.html in your favorite browser

## Known Bugs

* ~~Bug found where if the user deletes a pizza and returns to the order screen they will be unable to pull the correct pizza on the current display. Cause has to do with the way updateSelectedPizza() works.~~ fixed 11/9/19

## Behavior Tree
### AgeCalc

App will take in a user's age and calculate how old they are on different planets.

| Behavior      | Input        | Output  |
| ------------- |:-------------| :-----  |
| App will take in a person's age and return and error if it is not a number | 'Sup' Years | Error: Character other than number submitted |
| App will take in a person's age and return and error if it is not a positive integer | -5 Years | Error: Number not a positive integer |
| App will take in a person's age and return their age in Mercury Years (.24 Earth) | 20 Years | 4 Mercury Years |
| App will take in a person's age and return their age in Venus Years (.62 Earth) | 20 Years | 12 Venus Years |
| App will take in a person's age and return their age in Mars Years (1.88 Earth) | 20 Years | 37 Mars Years |
| App will take in a person's age and return their age in Jupiter Years (11.86 Earth) | 20 Years | 237 Jupiter Years |

### HealthCalc

App will take in a person's lifestyle choices and determine A: a health value from 1-100 and B: a life expectancy for them.

| Behavior      | Input        | Output  |
| ------------- |:-------------| :-----  |
| App will not accept NaN for health value  | healthInput = ["I'm so healthy, bro"]  | Err: Health can't be NaN |
| App will loop through the healthInput array and add the values to the person's expectedAge property (which starts at 80) | healthInput = [5, 5, 5]  | expectedAge = 95 |

<!-- ### expectCalc -->
<!-- | If a person has lived past their expectancy; determine how many years past that they have lived | 20 Years Old  /  | 237.2 Jupiter Years | -->



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
_for containers / grid layout_

**jQuery-3.4.1**
_for front-end interfacing_

### License
Copyright (c) 2019 Peter Wells  
Licensed under the GPL license.
