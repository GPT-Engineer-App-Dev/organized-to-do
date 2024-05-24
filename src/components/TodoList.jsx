import React, { useState } from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newTask = {
      id: Date.now(),
      description: newTodo,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const updateTodo = (id, newDescription, newCompleted) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, description: newDescription ?? todo.description, completed: newCompleted ?? todo.completed } 
        : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <VStack spacing={4}>
        <Input
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <Button onClick={addTodo} colorScheme="teal" width="100%">
          Add Task
        </Button>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onUpdate={updateTodo} onDelete={deleteTodo} />
        ))}
      </VStack>
    </Box>
  );
};

export default TodoList;