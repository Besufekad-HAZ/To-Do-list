export function checking(array) {
  array.forEach((tsk) => {
    const checkbox = document.getElementById(`${tsk.index}-checkbox`);
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        tsk.completed = true;
        window.localStorage.setItem('to-do-list', JSON.stringify(array));
      } else {
        tsk.completed = false;
        window.localStorage.setItem('to-do-list', JSON.stringify(array));
      }
    });
  });
}

export function listchekedstat(array) {
  array.forEach((tsk) => {
    const checkbox = document.getElementById(`${tsk.index}-checkbox`);
    if (tsk.completed === true) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
}
