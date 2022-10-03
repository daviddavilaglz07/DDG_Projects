// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specNum, arrayDna) => {
  return {
    specimenNum: specNum,
    dna: arrayDna,
    mutate(){
      let randomBase = Math.floor(Math.random() * 15);
      let base = this.dna[randomBase];
      do{
        let newBase = returnRandBase();
        if(base !== newBase){
          this.dna[randomBase] = newBase;
          break;
        }
      } while(true)
    },
    compareDNA(pAequor){
      let equals = 0;
      for(let i = 0; i < 15; i++){
        if(this.dna[i] === pAequor.dna[i]){
          equals++;
        }
      }
      let percentage = Math.floor((equals/15) * 100);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common`);
    },
    willLikelySurvive(){
      let amount = 0;
      for(const base of this.dna){
        if(base === 'C' || base === 'G'){
          amount++;
        }
      }
      let percentage = Math.floor((amount / 15) * 100);
      if(percentage >= 60){
        return true;
      }
      return false;
    }
  };
};

let pAequorSurvive = [];
let consectutive = 1;
while(pAequorSurvive.length < 30){
  const obj = pAequorFactory(consectutive, mockUpStrand());
  if(obj.willLikelySurvive()){
    pAequorSurvive.push(obj);
  }
  consectutive++;
}
console.log(pAequorSurvive)




