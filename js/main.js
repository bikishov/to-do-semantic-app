const titleElem = $('.js-title');
const discriptionElem = $('.js-area');
const formElement = $('.js-form');
const taskElem = $('.js-todos-list');
const todosElem = $('.js-items');
const emptyListElem = $('.js-empty-list');

// Добавление задачи
formElement.on('submit',function(event) {
  event.preventDefault();

  const toDoItemTitle = titleElem.val();
  const toDoArea = discriptionElem.val();
  const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;

  emptyListElem.hide();

  todosElem.append(`
        <li class='item js-item'>
            <article>
                <header class='do-title'>
                    <h3 class='todo__header'>${toDoItemTitle}</h3>
                    <button class='clear js-clear' aria-label='Удалить дело' type='button'></button>
                    <button class='hide js-hide' aria-controls='item${id}' aria-label='Свернуть описания дела' aria-expanded=true type='button'></button>
                </header>
                <p class='do-discription js-discription' id='item${id}'>${toDoArea}</p>
            </article>
        </li>`);
  this.reset();
});

// Скрыть задачу
taskElem.on('click', '.js-hide', function() {
  const decriptionElem = $(this).parents('.js-item').find('.js-discription');
  if ($(this).attr('aria-expanded')==='true') {
    $(this).attr({
      'aria-expanded': false,
      'aria-label': 'Показать описание дела'
    });
  } else {
    $(this).attr({
      'aria-expanded': true,
      'aria-label': 'Свернуть описание дела'
    });
  }

  decriptionElem.slideToggle('slow');
  $(this).toggleClass('rotated');
});

//Удалить задачу
taskElem.on('click', '.js-clear', function() {
  const taskElem = $(this).parents('.js-item');
  taskElem.remove();
  if (!todosElem.children().length) {
    emptyListElem.show();
  }
});

