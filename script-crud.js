const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionartarefa = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')

const tarefas = []

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionartarefa.classList.toggle('hidden')
})

formAdicionartarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value
    }
    tarefas.push(tarefa)
    localStorage.setItem('tarefas', tarefas)
})