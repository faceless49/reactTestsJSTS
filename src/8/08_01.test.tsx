
type UsersType = {
  [key: string] : {id: number, name: string}
}
let users: UsersType

beforeEach(() => {
  users = {
    '101': {id: 101, name: 'Dimych'},
    '555555': {id: 555555, name: 'Natasha'},
    '1099199': {id: 1099199, name: 'Valerya'},
    '1': {id: 1, name: 'Katya'},
  }
})


test('should select corresponding user', () => {
  users['1'].name = 'Ekaterina'
  expect(users['1'].name).toBe('Ekaterina')

})

test('should delete corresponding user', () => {
  delete users['1']
  expect(users['1']).toBeUndefined()

})

