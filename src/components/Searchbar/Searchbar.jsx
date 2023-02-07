import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import PacmanLoader from 'react-spinners/BeatLoader';
import { ImSearch, ImHome } from 'react-icons/im';
import { useState } from 'react';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

Notiflix.Notify.init({
  position: 'right-top',
  clickToClose: 'true',
});

const Searchbar = ({ submitPropValue }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = event => {
    setQuery( event.currentTarget.value.toLowerCase());
    // const { value } = event.currentTarget;
    // setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return Notiflix.Notify.warning('Please enter your query');
    }
    
    // !передаем значение query в проп наверх
    submitPropValue(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  const override = {
    // display: 'block',
    // margin: '0 auto',
    // borderColor: 'red',
  };

  const transfer = e => {
    document.location.href =
      'https://max-ignat.github.io/goit-react-hw-04-images/';
    setLoading(true);
  };
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch style={{ width: 22, height: 22 }} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          value={query}
          onChange={handleInputChange}
          name="query"
          // autofocus
          placeholder="Search images and photos"
        />
        <SearchFormButton type="button" onClick={transfer}>
          <ImHome style={{ width: 22, height: 22 }} />
          {loading && (
            <PacmanLoader
              color={'#3f51b5'}
              loading={loading}
              cssOverride={override}
              size={5}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </SearchFormButton>
      </SearchForm>
    </SearchbarHeader>
  );
};

export default Searchbar;

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
