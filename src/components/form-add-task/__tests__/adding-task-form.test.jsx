import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AddingTaskForm } from '../adding-task-form';

describe('AddingTaskForm', () => {
  it('renders input with value and calls handlers on change and submit', () => {
    const onAddTitleToTask = vi.fn();
    const addTask = vi.fn();

    render(
      <AddingTaskForm onAddTitleToTask={onAddTitleToTask} addTask={addTask} taskTitle="abc" />,
    );

    const input = screen.getByPlaceholderText('New task title');
    expect(input.value).toBe('abc');

    fireEvent.change(input, { target: { value: 'x' } });
    expect(onAddTitleToTask).toHaveBeenCalled();

    const button = screen.getByText('Add');
    fireEvent.click(button);
    expect(addTask).toHaveBeenCalled();
  });
});
