import React from 'react';
import { render, fireEvent, screen, within, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Todo } from '../todo';

// mock localStorage for the test environment
function createMockStorage() {
  let store = {};
  return {
    getItem: (key) => (Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null),
    setItem: (key, value) => {
      store[key] = value;
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
}

// Mock task library used by the Todo component so tests don't depend on real localStorage
vi.mock('../../../lib/task', async () => {
  const actual = await vi.importActual('../../../lib/task');
  return {
    ...actual,
  };
});

describe('Todo component', () => {
  beforeEach(() => {
    cleanup();
    global.localStorage = createMockStorage();
    vi.restoreAllMocks();
  });

  it('renders empty state', () => {
    render(<Todo />);

    expect(screen.getByText('To Do List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('New task title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search task')).toBeInTheDocument();
    expect(screen.getByText(/Total tasks:\s*0/)).toBeInTheDocument();
    expect(screen.getByText('No tasks')).toBeInTheDocument();
  });

  it('adds a task and persists it to localStorage', () => {
    vi.spyOn(Date, 'now').mockReturnValue(123);

    render(<Todo />);

    const input = screen.getByPlaceholderText('New task title');
    fireEvent.change(input, { target: { value: 'Test task' } });

    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);

    expect(screen.queryByText('No tasks')).not.toBeInTheDocument();
    expect(screen.getByText('Test task')).toBeInTheDocument();
    expect(screen.getByText(/Total tasks:\s*1/)).toBeInTheDocument();

    const saved = JSON.parse(localStorage.getItem('task'));
    expect(saved).toHaveLength(1);
    expect(saved[0].title).toBe('Test task');
    expect(saved[0].id).toBe('123');
  });

  it('filters tasks using search input', () => {
    render(<Todo />);

    const addInput = screen.getByPlaceholderText('New task title');
    const addButton = screen.getByText('Add');

    fireEvent.change(addInput, { target: { value: 'Alpha' } });
    fireEvent.click(addButton);
    fireEvent.change(addInput, { target: { value: 'Beta' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText('Beta')).toBeInTheDocument();

    const search = screen.getByPlaceholderText('Search task');
    fireEvent.change(search, { target: { value: 'Al' } });

    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.queryByText('Beta')).not.toBeInTheDocument();
  });

  it('toggles task checked state and updates storage', () => {
    render(<Todo />);

    const addInput = screen.getByPlaceholderText('New task title');
    const addButton = screen.getByText('Add');

    fireEvent.change(addInput, { target: { value: 'ToggleTask' } });
    fireEvent.click(addButton);

    const item = screen.getByText('ToggleTask').closest('li');
    const checkbox = within(item).getByRole('checkbox');

    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    const saved = JSON.parse(localStorage.getItem('task'));
    expect(saved[0].isDone).toBe(true);
  });

  it('deletes a task and can delete all tasks', () => {
    render(<Todo />);

    const addInput = screen.getByPlaceholderText('New task title');
    const addButton = screen.getByText('Add');

    fireEvent.change(addInput, { target: { value: 'One' } });
    fireEvent.click(addButton);
    fireEvent.change(addInput, { target: { value: 'Two' } });
    fireEvent.click(addButton);

    const itemOne = screen.getByText('One').closest('li');
    const deleteBtn = within(itemOne).getByRole('button');
    fireEvent.click(deleteBtn);

    expect(screen.queryByText('One')).not.toBeInTheDocument();
    expect(screen.getByText(/Total tasks:\s*1/)).toBeInTheDocument();

    const deleteAll = screen.getByText('Delete All');
    fireEvent.click(deleteAll);

    expect(screen.getByText('No tasks')).toBeInTheDocument();
    const saved = JSON.parse(localStorage.getItem('task'));
    expect(saved).toHaveLength(0);
  });
});
