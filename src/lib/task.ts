export const createTask = (title) => {
    const trimmedTitle = title.trim();

    if (trimmedTitle) {
        return {
            id: Date.now().toString(),
            title: trimmedTitle,
            isDone: false
        };
    }

    return null;
}

export function filterTasks(tasks, searchField) {
    const trimmedValue = searchField.trim();

    if (!trimmedValue) {
        return tasks;
    }

    const value = trimmedValue.toLowerCase()
    return tasks.filter(({ title }) => title.toLowerCase().includes(value));
}

export function getTasksFromStorage() {
    const savedTasks = localStorage.getItem("task");

    if (!savedTasks) {
        return [];
    }

    const parsedTasks = JSON.parse(savedTasks);

    return Array.isArray(parsedTasks) ? parsedTasks : [];
}
