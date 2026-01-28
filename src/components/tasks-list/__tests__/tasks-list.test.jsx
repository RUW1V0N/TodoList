import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Tasks } from '../tasks-list';

describe('Tasks (tasks-list)', () => {
  it('shows No tasks when empty', () => {
    render(<Tasks searchedTasks={[]} onToggleCheckedTask={vi.fn()} onDeleteTask={vi.fn()} />);
    expect(screen.getByText('No tasks')).toBeInTheDocument();
  });

  it('renders list of tasks', () => {
    const tasks = [
      { id: '1', title: 'A', isDone: false },
      { id: '2', title: 'B', isDone: true },
    ];

    render(<Tasks searchedTasks={tasks} onToggleCheckedTask={vi.fn()} onDeleteTask={vi.fn()} />);

    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });
});
