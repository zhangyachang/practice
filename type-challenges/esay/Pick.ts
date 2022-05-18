interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K> = string;

type TodoPreview = MyPick<Todo, 'title' | 'completed'>





const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}