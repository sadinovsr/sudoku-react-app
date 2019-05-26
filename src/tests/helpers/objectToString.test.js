import { objectToString } from '../../helpers/ObjectToString';

describe('objectToString()', () => {
  it('should convert sudoku object to string', () => {
    const output = '001000000200100800034000000010070000400000000000000980100000000000010008002000000';
    const object = {
      A1: '', A2: '', A3: '1', A4: '', A5: '', A6: '', A7: '', A8: '', A9: '', 
      B1: '2', B2: '', B3: '', B4: '1', B5: '', B6: '', B7: '8', B8: '', B9: '', 
      C1: '', C2: '3', C3: '4', C4: '', C5: '', C6: '', C7: '', C8: '', C9: '', 
      D1: '', D2: '1', D3: '', D4: '', D5: '7', D6: '', D7: '', D8: '', D9: '', 
      E1: '4', E2: '', E3: '', E4: '', E5: '', E6: '', E7: '', E8: '', E9: '', 
      F1: '', F2: '', F3: '', F4: '', F5: '', F6: '', F7: '9', F8: '8', F9: '', 
      G1: '1', G2: '', G3: '', G4: '', G5: '', G6: '', G7: '', G8: '', G9: '', 
      H1: '', H2: '', H3: '', H4: '', H5: '1', H6: '', H7: '', H8: '', H9: '8', 
      I1: '', I2: '', I3: '2', I4: '', I5: '', I6: '', I7: '', I8: '', I9: '', 
    }
    expect(objectToString(object)).toBe(output);
  })
})