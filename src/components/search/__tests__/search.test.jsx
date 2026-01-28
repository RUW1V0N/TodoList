import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Search } from '../search';

describe('Search', () => {
  it('renders input  with value and calls onInput ', () => {
    const onInput  = vi.fn();
    const { getByPlaceholderText } = render(
      <Search searchField="abc" onInput ={onInput } />
    );
    const input  = getByPlaceholderText('Search task');
    expect(input .value).toBe('abc');
    fireEvent.change(input , { target: { value: 'x' } });
    expect(onInput ).toHaveBeenCalled();
  });
});
