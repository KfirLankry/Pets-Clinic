const FilterPet = (props: any) => {
  return (
    <>
      <input
        className="p-1 mx-1.5 border-solid border-2 border-lightgrey rounded-md shadow w-3/12"
        type="search"
        placeholder="Patient Name..."
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <input
        className="p-1 border-solid border-2 border-lightgrey rounded-md shadow w-3/12"
        type="search"
        placeholder="Pet Name..."
        onChange={(e) => props.setSearchPetName(e.target.value)}
      />
      <select
        className="p-1.5 mx-1 border-solid border-2 border-lightgrey rounded-md shadow w-3/12"
        aria-label="Default select example"
        onChange={(e) => props.setSelect(e.target.value)}
      >
        <option value={""}>All</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Parrot">Parrot</option>
      </select>
    </>
  );
};

export default FilterPet;
