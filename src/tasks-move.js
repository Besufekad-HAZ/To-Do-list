export function dragDrop(array) {
  array.forEach((tsk) => {
    const task = document.getElementById(tsk.index);
    task.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('index', tsk.index);
    });
    task.addEventListener('drop', (event) => {
      const draggedIndex = event.dataTransfer.getData('index');
      const dropIndex = tsk.index;
      const dragged = array[draggedIndex];
      const drop = array[dropIndex];
      array[draggedIndex] = drop;
      array[dropIndex] = dragged;
      dragged.index = dropIndex;
      drop.index = draggedIndex;
      task.setAttribute('draggable', false);
      window.localStorage.setItem('to-do-list', JSON.stringify(array));
      window.location.reload();
    });
    task.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
  });
}

export function mousedown(tsk) {
  const parent = tsk.parentElement;
  tsk.addEventListener('mousedown', () => {
    parent.setAttribute('draggable', true);
  });
}
