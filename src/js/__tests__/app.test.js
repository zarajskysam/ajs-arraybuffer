import ArrayBufferConverter, { getBuffer } from '../app';

test('ArrayBufferTest', () => {
  const testStr = 'Hello World!';
  const testBuffer = getBuffer(testStr);
  ArrayBufferConverter.load(testBuffer);
  const recivied = ArrayBufferConverter.toString();
  expect(recivied).toBe(testStr);
});
