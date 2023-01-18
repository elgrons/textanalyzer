# Test Driven Development Practice

#### By _**Eliot Gronstal, Vera Weikel**_

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_

## Description

Webpage to enter favorite things and practice arrays. 

Describe: wordCounter()

<!-- First Test -->
Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

<!-- //Second Test -->
Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

<!-- Third Test -->
Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

## Setup/Installation Requirements

* _Open a terminal console on your personal computer_
* _Navigate to your Desktop_
* _Type $ git clone the [repo]( https://github.com/QuietEvolver/test-driven-development-23.git)_
* _Navigate into the repo once cloned_
* _Once in the repository folder, open index.html in browser of choice._

## Known Bugs

* _No known bugs at this time._

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) _2023_ _Eliot Gronstal, Vera Weikel_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.