import { CsvFileReader} from './CsvFileReader';

const reader = new CsvFileReader('football.csv');

reader.read();

//Json
// const MatchResult ={
//     homeWin : 'H',
//     awayWin : 'A',
//     draw : 'D'
// };

//Enum
enum MatchResult{
    homeWin = 'H',
    awayWin = 'A',
    draw = 'D'
};
let manUnitedWins = 0;


for(let match of reader.data){
    if(match[1] === 'Man United' && match[5] === MatchResult.homeWin){
        manUnitedWins++;
    }else if(match[2] == 'Man United' && match[5] === MatchResult.awayWin){
        manUnitedWins++;
    }
}

console.log(`Man united won ${manUnitedWins} games`);