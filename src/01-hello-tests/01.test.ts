import {mult, sum, splitIntoWords} from './01';
let a = 1;
let b = 2;
let c = 3;


test.skip('sum should be correct', () => {
  //data



  //action
  const result = sum(a,c);

  //expect result

  expect(result).toBe(3)
})

test.skip('multiply should be correct', () => {
  //data

  const a = 1;
  const b = 2;
  const c = 3;

  //action
  const result = mult(a,b);

  //expect result

  expect(result).toBe(2)
})

test.skip('splitting into words shoud be correct',() => {
  const sent1 = 'hello my friend'
  const sent2 = 'JS the best  programming language.'


  //action
  const result1 = splitIntoWords(sent1);
  const result2 = splitIntoWords(sent2);

  //expect result

  expect(result1.length).toBe(3)
  expect(result1[0]).toBe("hello")
  expect(result1[1]).toBe("my")
  expect(result1[2]).toBe("friend")

  expect(result2.length).toBe(3)
  expect(result2[0]).toBe("JS")
  expect(result2[1]).toBe("the")
  expect(result2[2]).toBe("best")
  expect(result2[3]).toBe("programming")
  expect(result2[4]).toBe("language")

})