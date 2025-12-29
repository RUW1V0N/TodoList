export function NewTask(title){
    if(title.trim().length > 0){
        return{
            id: Date.now().toString(),
            title: title,
            isDone: false
        };}
}