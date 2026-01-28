import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TotalInfo } from '../total-info';

describe('TotalInfo', () => {
  it('shows zero and no delete button when empty', () => {
    render(<TotalInfo tasks={[]} onDeleteAllTasks={vi.fn()} />);
    expect(screen.getByText(/Total tasks:\s*0/)).toBeInTheDocument();
    expect(screen.queryByText('Delete All')).not.toBeInTheDocument();
  });

  it('shows count and delete button when tasks exist', () => {
    const onDeleteAllTasks = vi.fn();
    render(<TotalInfo tasks={[{ id: '1' }]} onDeleteAllTasks={onDeleteAllTasks} />);
    expect(screen.getByText(/Total tasks:\s*1/)).toBeInTheDocument();
    const btn = screen.getByText('Delete All');
    fireEvent.click(btn);
    expect(onDeleteAllTasks).toHaveBeenCalled();
  });
});
