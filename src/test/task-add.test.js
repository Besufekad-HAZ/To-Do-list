const removecompleted = require('../tasks-list.js');
const { AllTask } = require('../tasks-list.js');

describe('add and remove tasks', () => {
  test('push', () => {
    const AllTask = new AllTask();
    const array = [
      { description: 'first', completed: false, index: 0 },
      { description: 'second', completed: false, index: 1 },
    ];
    expect(AllTask.push(array).length).toBe(3);
  });
  test('remove completed', () => {
    const array = [
      { description: 'first', completed: false, index: 0 },
      { description: 'second', completed: true, index: 1 },
    ];
    expect(removecompleted(array).length).toBe(1);
  });
  test('remove task', () => {
    const array = [
      { description: 'first', completed: false, index: 0 },
      { description: 'second', completed: false, index: 1 },
    ];
    expect(removecompleted(array).length).toBe(1);
  });
});
