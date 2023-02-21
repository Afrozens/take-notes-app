import { createContext, useState } from "react";

const CategoryFiltersContext = createContext();

const CategoryFiltersProvider = ({ children }) => {
  const [category, setCategory] = useState("All");

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const selectFilter = (data) => {
    if (category === "All") {
        const dataFilter = data.sort((a, b) => a.title > b.title ? 1 : -1)
        return dataFilter
    } else {
        const dataFilter = data.filter(el => el.category === category)
        return dataFilter
    }
  }

  const data = { category, setCategory, handleChangeCategory, selectFilter };

  return (
    <CategoryFiltersContext.Provider value={data}>
      {children}
    </CategoryFiltersContext.Provider>
  );
};

export default CategoryFiltersContext
export {CategoryFiltersProvider}