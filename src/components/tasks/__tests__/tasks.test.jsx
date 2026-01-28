import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ItemList } from '../tasks';

describe('ItemList', () => {
  it('renders task and responds to toggle and delete', () => {
    const onToggleCheckedTask = vi.fn();
    const onDeleteTask = vi.fn();
    const task = { id: '42', title: 'TaskTitle', isDone: false };

    render(
      <ItemList
        className="cls"
        task={task}
        onToggleCheckedTask={onToggleCheckedTask}
        onDeleteTask={onDeleteTask}
      />,
    );

    const li = screen.getByTitle('TaskTitle');
    const checkbox = within(li).getByRole('checkbox');
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(onToggleCheckedTask).toHaveBeenCalled();

    const delBtn = within(li).getByRole('button');
    fireEvent.click(delBtn);
    expect(onDeleteTask).toHaveBeenCalledWith('42');
  });
});
