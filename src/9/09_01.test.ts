function increaseAge(u: UserType) {
  u.age++ // u.age = u.age + 1
}

type UserType = {
  name: string
  age: number
}



test.skip('reference type test', () => {


  let user: UserType = {
    name: 'Dimych',
    age: 32

  };

  increaseAge(user)
  expect(user.age).toBe(33)


  const superman = user
  superman.age = 1000

  expect(user.age).toBe(1000)
})

test.skip('array test', () => {
  let users = [
    {
      name: 'Dimych',
      age: 32,
    },
    {
      name: 'Egor',
      age: 22,
    },
  ];

  let admins = users

  admins.push({name: 'Bandit', age: 10})

  expect(users[2]).toEqual({name: 'Bandit', age: 10})
})


test('value type', () => {

  let usersCount = 100;
  let adminsCount = usersCount

  adminsCount = 101

  expect(usersCount).toBe(100)
  expect(adminsCount).toBe(101)
})

