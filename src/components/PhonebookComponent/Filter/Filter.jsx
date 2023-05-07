import { FilterWrapper, FilterInput, Button } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(changeFilter(value));
  };

  const clearFilter = () => {
    dispatch(changeFilter(''));
  };

  return (
    <>
      <FilterWrapper>
        <label htmlFor="filter">
          <FilterInput
            type="text"
            id="filter"
            name="filter"
            value={filter}
            onChange={handleFilterChange}
          />
        </label>

        <Button type="button" onClick={clearFilter}>
          Clear
        </Button>
      </FilterWrapper>
    </>
  );
};