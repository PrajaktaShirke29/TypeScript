import { Sorter } from "./sorter";
import {  NumbersCollection } from "./NumberCollection";
import {  CharactersCollection} from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Storing with number
const numberCollection = new NumbersCollection([10,30,20,-90]);
// const sorter = new Sorter(numberCollection)
numberCollection.sort();
console.log(numberCollection.data);


// Storing with character
const charactersCollection = new CharactersCollection('dcfa');
// const sorterCharacter =new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);


// Storing with LinkedList
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();