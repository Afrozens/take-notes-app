import React, { useContext } from "react";
import CategoryFiltersContext from "../contexts/CategoryFiltersContext";

const CategoryFilter = () => {
  const { category, handleChangeCategory: handleChange } = useContext(
    CategoryFiltersContext
  );
  return (
    <div className="flex">
      <input
        className="h-0 w-0"
        type="radio"
        name="category"
        value="All"
        id="all"
        checked={category === "All"}
        onChange={handleChange}
      />
      <label
        htmlFor="all"
        className={category === "All" ? "btn-checked" : "btn btn-sm"}
      >
        All
      </label>

      <input
        className="h-0 w-0"
        type="radio"
        name="category"
        value="Business"
        id="business"
        checked={category === "Business"}
        onChange={handleChange}
      />
      <label
        htmlFor="business"
        className={category === "Business" ? "btn-checked" : "btn btn-sm"}
      >
        <div className="badge badge-xs mr-1 badge-primary md:mr-2"></div>
        Business
      </label>

      <input
        className="h-0 w-0"
        type="radio"
        name="category"
        value="Project"
        id="project"
        checked={category === "Project"}
        onChange={handleChange}
      />
      <label
        htmlFor="project"
        className={category === "Project" ? "btn-checked" : "btn btn-sm"}
      >
        <div className="badge badge-xs mr-1 badge-secondary md:mr-2"></div>
        Project
      </label>

      <input
        className="h-0 w-0"
        type="radio"
        name="category"
        value="Personal"
        id="personal"
        checked={category === "Personal"}
        onChange={handleChange}
      />
      <label
        htmlFor="personal"
        className={category === "Personal" ? "btn btn-checked" : "btn btn-sm"}
      >
        <div className="badge badge-xs mr-1 badge-accent md:mr-2"></div>
        Personal
      </label>
    </div>
  );
};

export default CategoryFilter;
