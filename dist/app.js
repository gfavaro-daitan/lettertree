"use strict";
var LetterTree = function (n, letter) {
    var spacing = 1;
    for (var i = 0; i < n; i++) {
        for (var j = (n - i); j > 0; j--) {
            document.querySelector("body").innerText += "\xa0";
            if (j == 1)
                document.querySelector("body").innerText += letter;
        }
        if (i > 0) {
            console.log(spacing);
            for (var j = spacing; j > 0; j--) {
                document.querySelector("body").innerText += "\xa0";
            }
            spacing += 2;
            document.querySelector("body").innerText += letter;
        }
        document.querySelector("body").innerText += "\n";
    }
};
var TreeSize;
var TreeWidth = "Nan";
do {
    TreeSize = prompt("Size of the tree:");
    if (isNaN(+TreeSize))
        alert("Please type a number!");
    console.log(+TreeSize);
} while (isNaN(+TreeSize));
var character = prompt("Write a character");
LetterTree(+TreeSize, character);
