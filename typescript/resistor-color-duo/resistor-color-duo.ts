export class ResistorColor {


  static colorKey: { [key: string]: number } = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
  }

  static decodedValue(colors: string[]): number {
    let newArr:number[] = []
    try {
      colors.forEach(element => {
        newArr.push(ResistorColor.colorKey[element])
      });
  
      return Number(newArr.slice(0,2).join(''));
    } catch (error) {
      throw new Error('An error occurred!')
      
    }

  }

}
