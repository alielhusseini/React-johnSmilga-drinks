import { useGlobalContext } from "../context";
import { useRef, useEffect } from "react";

const SearchForm = () => {

    const { setSearch } = useGlobalContext();
    const searchValue = useRef(''); // or use the useState instead

    useEffect(() => {
        // focus on the input upon loading
        searchValue.current.focus();
    })

    return (
        <section className="section search" onSubmit={ e => e.preventDefault() }>
            <form className="search-form">
                <div className="form-control">
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input type="text" id="name" ref={ searchValue } onChange={ () => setSearch(searchValue.current.value) }/>
                </div>
            </form>
        </section>
    );
}
 
export default SearchForm;