import { FilterWrapper, SubHeader, FilterInput } from './Filter.styled';

export const Filter = ({ filterValue, handleFilter }) => {
  return (
    <FilterWrapper>
      <SubHeader>Find contacts by name</SubHeader>
      <FilterInput
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Filter may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </FilterWrapper>
  );
};
