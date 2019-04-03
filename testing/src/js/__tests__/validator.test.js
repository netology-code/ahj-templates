import { isValidInn } from '../validators';

test('it should return true for valid inn', () => {
  const input = '7715964180';
  
  expect(isValidInn(input)).toBe(true);
});
