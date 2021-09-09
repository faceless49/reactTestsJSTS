test.skip('should take old men older then 90', () => {
  const ages = [18, 20, 22, 1, 100, 90, 14];

  // const predicate = (age: number) => age > 90
  // ? В метод фильтр мы кладем свой предикат
  // ? Все что true он возращает в новый массив

  const oldAges = ages.filter((age: number) => age > 90);

  expect((oldAges.length)).toBe(1)
  expect(oldAges[0]).toBe(100)

})


test.skip('should chipcourses < 100', () => {
  const courses = [{title: 'CSS', price: 110},
    {title: 'js', price: 200},
    {title: 'React', price: 150}
  ]

  // const chipPredicate = (course: CourseType) => course.price < 160

  const chipCourses = courses.filter((course: CourseType) => course.price < 160);

  expect((chipCourses.length)).toBe(2)
  expect(chipCourses[0].title).toBe('CSS')
  expect(chipCourses[1].title).toBe('React')

})

test.skip('get only completed tasks', () => {
  const tasks = [
    {id: 1, title: 'Bread', isDone: false},
    {id: 2, title: 'Milk', isDone: true},
    {id: 3, title: 'Salt', isDone: false},
    {id: 4, title: 'Sugar', isDone: true},
  ]

  const completedTasks = tasks.filter(t => t.isDone)
  expect(completedTasks.length).toBe(2)
  expect(completedTasks[0].id).toBe(2)
  expect(completedTasks[1].id).toBe(4)
})


test('get only Uncompleted tasks', () => {
  const tasks = [
    {id: 1, title: 'Bread', isDone: false},
    {id: 2, title: 'Milk', isDone: true},
    {id: 3, title: 'Salt', isDone: false},
    {id: 4, title: 'Sugar', isDone: true},
  ]

  const completedTasks = tasks.filter(t => !t.isDone)
  expect(completedTasks.length).toBe(2)
  expect(completedTasks[0].id).toBe(1)
  expect(completedTasks[1].id).toBe(3)
})


export getBuildingWithStaffCountGreaterThen () => {

}