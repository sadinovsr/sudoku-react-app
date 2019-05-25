import API from '../../helpers/SudokuAPI';

describe('SudokuAPI', () => {
  it('should return default headers', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    const headers = API.getDefaultHeaders();
    expect(headers).toEqual({
      Authorization: 'Bearer token',
      responseType: 'application/json'
    });
  });
})