export function newTask(title){
    const trimmedTitle = title.trim();
    if(trimmedTitle.length > 0){
        return{
            id: Date.now().toString(),
            title: trimmedTitle,
            isDone: false
        };}
}