import { InputForm } from "../field"
import { SearchIcon } from '../search-icon'
import styles from "./search.module.css"

export function Search(props){
    const {
        searchField,
        setSearchField
    } = props;
    return (
        <div className={styles.search}>
            <InputForm
                className = {styles.inputSearch}
                name = "search"
                autoComplete = "on"
                type = "search"
                placeholder = "Search task"
                value = {searchField}
                onChange = {(event) => setSearchField(event.target.value)}
            />
            <SearchIcon/>
        </div>
    )
}