import React, { useState } from 'react';
import { Box, Checkbox, IconButton, Input, Flex } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(todo.id, newDescription);
    setIsEditing(false);
  };

  return (
    <Flex align="center" justify="space-between" p={2} borderWidth={1} borderRadius="md" mb={2}>
      <Checkbox isChecked={todo.completed} onChange={() => onUpdate(todo.id, null, !todo.completed)}>
        {isEditing ? (
          <Input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <Box as="span" textDecoration={todo.completed ? 'line-through' : 'none'}>
            {todo.description}
          </Box>
        )}
      </Checkbox>
      <Box>
        <IconButton aria-label="Edit" icon={<FaEdit />} size="sm" onClick={handleEdit} mr={2} />
        <IconButton aria-label="Delete" icon={<FaTrash />} size="sm" onClick={() => onDelete(todo.id)} />
      </Box>
    </Flex>
  );
};

export default TodoItem;