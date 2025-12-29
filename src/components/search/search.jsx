import { Input } from "../field"
import { SearchIcon } from '../search-icon'
import styles from "./search.module.css"

export function Search(props){
    const {
        onFilterTasks,
        searchField,
    } = props;
    return (
        <div className={styles.search}>
            <Input
                className = {styles.inputSearch}
                name = "search"
                autoComplete = "on"
                type = "search"
                placeholder = "Search task"
                value = {searchField}
                onChange = {onFilterTasks}
            />
            <SearchIcon/>
        </div>
    )
}