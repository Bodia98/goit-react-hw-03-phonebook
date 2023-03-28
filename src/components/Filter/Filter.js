import PropTypes from 'prop-types';
import { SearchInput, SearchInputContainer } from './FilterStyled';
export const SearchContainer = ({ filter, handleSearch }) => {
  return (
    <SearchInputContainer>
      <SearchInput
        type="text"
        value={filter}
        onChange={handleSearch}
      ></SearchInput>
    </SearchInputContainer>
  );
};

SearchContainer.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
