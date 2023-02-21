const FormNote = ({ note }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter title note"
        className="input w-full mb-6"
        name="title"
        defaultValue={note?.title}
      />
      <textarea
        placeholder="Enter description note"
        className="textarea textarea-bordered textarea-lg h-40 w-full mb-6 resize-none"
        name="description"
        defaultValue={note?.description}
      />
      <select
        className="select select-bordered w-full mb-6"
        name="category"
        value={note?.category}
      >
        <option disabled selected >
          Category
        </option>
        <option value="Business">Business</option>
        <option value="Personal">Personal</option>
        <option value="Project">Project</option>
      </select>
    </>
  );
};

export default FormNote;
