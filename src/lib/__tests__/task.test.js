import { describe, it, expect, beforeEach } from 'vitest';
import { createTask, filterTasks, getTasksFromStorage } from '../../lib/task';

describe('task utils', () => {
  it('createTask returns null for empty or whitespace title', () => {
    expect(createTask('')).toBeNull();
    expect(createTask('   ')).toBeNull();
  });

  it('createTask trims title and returns object', () => {
    const t = createTask('  hello  ');
    expect(t).toHaveProperty('id');
    expect(t.title).toBe('hello');
    expect(t.isDone).toBe(false);
  });

  it('filterTasks returns original list when search empty', () => {
    const tasks = [{ title: 'A' }, { title: 'B' }];
    expect(filterTasks(tasks, '')).toBe(tasks);
  });

  it('filterTasks is case-insensitive and matches substrings', () => {
    const tasks = [{ title: 'Alpha' }, { title: 'beta' }];
    const res = filterTasks(tasks, 'al');
    expect(res).toHaveLength(1);
    expect(res[0].title).toBe('Alpha');
  });

  describe('getTasksFromStorage', () => {
    beforeEach(() => {
      global.localStorage = {
        _store: {},
        getItem(key) {
          return this._store[key] ?? null;
        },
        setItem(key, value) {
          this._store[key] = String(value);
        },
      };
    });

    it('returns empty array when nothing saved', () => {
      expect(getTasksFromStorage()).toEqual([]);
    });

    it('parses saved array', () => {
      localStorage.setItem('task', JSON.stringify([{ id: '1' }]));
      expect(getTasksFromStorage()).toEqual([{ id: '1' }]);
    });
  });
});
