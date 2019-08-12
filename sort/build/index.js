"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Storing with number
var numberCollection = new NumberCollection_1.NumbersCollection([10, 30, 20, -90]);
// const sorter = new Sorter(numberCollection)
numberCollection.sort();
console.log(numberCollection.data);
// Storing with character
var charactersCollection = new CharactersCollection_1.CharactersCollection('dcfa');
// const sorterCharacter =new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);
// Storing with LinkedList
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
