import React from "react";

const SearchFilter = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex justify-end mt-6">
        <form action="#">
          <input
            type="text"
            className="border-2 border-slate-300 focus:outline-none focus:border-blue-700 rounded-full p-2"
            placeholder="Masukan kata kunci"
          />
          <select
            name="select"
            id="select"
            className="border-2 border-slate-300 focus:outline-none focus:border-blue-700 rounded-full p-2 ml-3"
          >
            <option value="">Pilihan 1</option>
            <option value="">Pilihan 2</option>
            <option value="">Pilihan 3</option>
            <option value="">Pilihan 4</option>
            <option value="">Pilihan 5</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default SearchFilter;
