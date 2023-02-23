export class AllTask {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = 0;
  }

  push(array) {
    this.index = array.length;
    array.push(this);
    window.localStorage.setItem('to-do-list', JSON.stringify(array));
    window.location.reload();
  }
}

export function removecompleted(array) {
  const tobeDeleted = [];
  array.forEach((tsk) => {
    if (tsk.completed === true) {
      tobeDeleted.push(tsk);
      const filteredArray = array.filter(
        (uniqueTask) => !tobeDeleted.includes(uniqueTask),
      );
      filteredArray.forEach((tsk) => {
        tsk.index = filteredArray.indexOf(tsk);
      });
      window.localStorage.setItem('to-do-list', JSON.stringify(filteredArray));
      window.location.reload();
    }
  });
}

export function removeAll(array) {
  array = [];
  window.localStorage.setItem('to-do-list', JSON.stringify(array));
  window.location.reload();
}

export function taskEdit(array) {
  array.forEach((tsk) => {
    const description = document.getElementById(`${tsk.index}-description`);
    const dragBtn = document.getElementById(`${tsk.index}-drag`);
    const trashBtn = document.getElementById(`${tsk.index}-trash`);
    description.addEventListener('click', () => {
      description.setAttribute('contenteditable', true);
      description.classList.add('rename_task');
      dragBtn.style.display = 'none';
      trashBtn.style.display = 'block';
    });
    document.addEventListener('dblclick', () => {
      description.setAttribute('contenteditable', false);
      description.classList.remove('editing');
      dragBtn.style.display = 'block';
      trashBtn.style.display = 'none';
      tsk.description = description.innerHTML;
      window.localStorage.setItem('to-do-list', JSON.stringify(array));
      window.location.reload();
    });
  });
}

export function taskRemove(array) {
  array.forEach((tsk) => {
    const tobeDeleted = [];
    const trashBtn = document.getElementById(`${tsk.index}-trash`);
    trashBtn.addEventListener('click', () => {
      tobeDeleted.push(tsk);
      const filteredArray = array.filter(
        (uniqueTask) => !tobeDeleted.includes(uniqueTask),
      );
      filteredArray.forEach((tsk) => {
        tsk.index = filteredArray.indexOf(tsk);
      });
      window.localStorage.setItem('to-do-list', JSON.stringify(filteredArray));
      window.location.reload();
    });
  });
}
