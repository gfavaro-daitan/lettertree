const LetterTree = (n: number, letter: string) => {
  let spacing = 1;
  for (let i = 0; i < n; i++) {

      for (let j = (n - i); j > 0; j--) {
        document.querySelector("body")!.innerText += "\xa0";
        if (j == 1) document.querySelector("body")!.innerText += letter;
      }

      if (i > 0) {
        console.log(spacing);
        for (let j = spacing; j > 0; j--) {
          document.querySelector("body")!.innerText += "\xa0";
        }
        spacing += 2;
        document.querySelector("body")!.innerText += letter;
      }

      document.querySelector("body")!.innerText += "\n";
   
  }


 

};

let TreeSize: string;
let TreeWidth: string = "Nan";

do {
  TreeSize = prompt("Size of the tree:")!;
  if (isNaN(+TreeSize)) alert("Please type a number!");
  console.log(+TreeSize);
} while (isNaN(+TreeSize));


let character = prompt("Write a character")!;

LetterTree(+TreeSize, character);
