export function toRna(str:string):string {
  //create an rna to dna map object
  interface rnaObjectKeys {
    [key: string]: string;
  }

interface rnaObj extends rnaObjectKeys {
  G:string;
  C:string;
  T:string;
  A:string;
}

let rnaMap: rnaObj =  {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  if (str.length ===1 && rnaMap[str]) {
    return rnaMap[str]
    //transcribe the dna to rna
  } else if (str.length === 1 && !rnaMap[str]){
    throw new Error("Invalid input DNA.");
  } else if (str.length > 1 && str.length % 4 !== 0){
    throw new Error("Invalid input DNA.");
  } else {
    let rna:string = '';
    for (let i = 0; i < str.length; i++){
      if (!(rnaMap[str[i]])){
        throw new Error("Invalid input DNA.");
      }
      rna += rnaMap[str[i]];
    }
    return rna;
  }
}
