import React from 'react';

const SearchForm = props => {

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type='text' name='user' value={props.value} onChange={props.handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchForm;