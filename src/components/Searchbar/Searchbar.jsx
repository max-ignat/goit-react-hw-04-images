import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

import { ImSearch } from 'react-icons/im';
import { useState }  from 'react';

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

  const handleInputChange = event => {
    // setQuery({ query: event.currentTarget.value.toLowerCase() });
    const { value } = event.currentTarget;
    setQuery(value);
  };


  const handleSubmit = event => {

    event.preventDefault();
    if (query.trim() === '') {
      return Notiflix.Notify.warning('Please enter your query');
    }

    submitPropValue( query );
    reset();
  };

  const reset = () => {
    setQuery('');
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
      </SearchForm>
    </SearchbarHeader>
  );
};

export default Searchbar;

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};

// export class Searchbar extends Component {
//   state = {
//     query: '',
    
//   };



//   handleQuerySearch = event => {
//     this.setState({
//       query: event.currentTarget.value.toLowerCase(),
//     });
//     // const { name, value } = event.currentTarget;
//     // this.setState({
//     //   [name]: value,
//     // });
//   };

//   handleSubmit = event => {
//     const { query } = this.state;
//     event.preventDefault();
//    if (query.trim() === '') {
//      return Notiflix.Notify.warning('Please enter your query');
//     }
    
//     this.props.qwe(query);
//     this.reset();
//   };

//   reset() {
//   this.setState({ query: '' })
// }

//   render() {
//     return (
//       <SearchbarHeader>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormButton type="submit">
//             <ImSearch style={{ width: 22, height: 22 }} />
//             <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//           </SearchFormButton>
//           <SearchFormInput
//             type="text"
//             autocomplete="off"
//             value={this.state.query}
//             onChange={this.handleQuerySearch}
//             name="query"
//             // autofocus
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
        
//       </SearchbarHeader>
//     );
//   }
// }

// export default Searchbar;

// Searchbar.propType = {
//   onSubmit: PropTypes.func.isRequired,
// };