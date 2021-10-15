import { ResistorColor } from './resistor-color-duo'


describe('Resistor Colors', () => {
  test('Brown and black', () => {
    expect(ResistorColor.decodedValue(['brown', 'black'])).toEqual(10)
  })

  test('Blue and grey', () => {
    expect(ResistorColor.decodedValue(['blue', 'grey'])).toEqual(68)
  })

  test('Yellow and violet', () => {
    expect(ResistorColor.decodedValue(['yellow', 'violet'])).toEqual(47)
  })

  test('Orange and orange', () => {
    expect(ResistorColor.decodedValue(['orange', 'orange'])).toEqual(33)
  })

  test('Ignore additional colors', () => {
    expect(ResistorColor.decodedValue(['green', 'brown', 'orange'])).toEqual(51)
  })
})
