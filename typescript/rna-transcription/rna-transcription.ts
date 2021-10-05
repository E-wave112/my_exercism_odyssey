export function toRna(str: string): string {
  //create an rna to dna map object
  interface rnaObjectKeys {
    [key: string]: string;
  }

  interface rnaObj extends rnaObjectKeys {
    G: string;
    C: string;
    T: string;
    A: string;
  }

  let rnaMap: rnaObj = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  try {
    let rna: string = '';
      for (let i = 0; i < str.length; i++) {
        if (!(rnaMap[str[i]])) {
          throw new Error("Invalid input DNA.");
        }
        rna += rnaMap[str[i]];
      }
      return rna;
    } catch (error) {
    throw new Error('Invalid input DNA.');
  }
}
