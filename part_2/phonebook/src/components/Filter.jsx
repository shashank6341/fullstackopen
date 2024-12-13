const Filter = ({ searchPerson, handleSearchPerson }) => {
  return (
    <div>
      filter shown with{" "}
      <input value={searchPerson} onChange={handleSearchPerson} />
    </div>
  );
};

export default Filter;
