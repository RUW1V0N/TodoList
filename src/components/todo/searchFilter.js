export function searchFilter(tasks, searchField) {
    const filterField = searchField.trim().toLowerCase();

    if (filterField.length === 0) return tasks;

    return tasks.filter(({ title }) => title.toLowerCase().includes(filterField));
}
