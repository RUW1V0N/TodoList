export function newTask(title) {
    return {
        id: Date.now().toString(),
        title: title,
        isDone: false,
    };
}
