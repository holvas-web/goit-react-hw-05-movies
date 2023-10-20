import {FcSearch} from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm, SearchFormInput, SearchFormButton, Wrapper } from "./SearchBar.styled";
import { useState } from "react";

export const SearchBar = ({ value, onChange }) => {
    const [query, setQuery] = useState(value);
  
    const inputSubmit = (evt) => {
      evt.preventDefault();
      
      if (query.trim() === '') {
        toast.info('Oops! Search query is empty!');
      } else if (!query.match(/^[a-zA-Z0-9\s]*$/)) {
        toast.error('Oops! Invalid characters in search query!');
      } else if (query.match(/(\w).*\1/)) {
        toast.error('Oops! Duplicate characters are not allowed!');
      } else {
        toast.success('We found some movies for you!', {
          icon: '🚀',
        });

      }
        onChange(query);
        setQuery('');
      };
  
  
    return (  
      <Wrapper>
        <SearchForm onSubmit={inputSubmit}>
          <SearchFormButton type="submit">
            <FcSearch size={22} />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={(evt) => setQuery(evt.target.value)}
          />
        </SearchForm>
      </Wrapper>
    );
  };

  
  
  
  
  
  
