const url = "http://localhost:3000";

export const getNotes = async () => {
  const res = await fetch(`${url}/notes`);
  const data = await res.json();
  return data
};

export const getNote = async (id) => {
  const res = await fetch(`${url}/notes/${id}`);
  const data = await res.json();
  return data
};

export const setNote = async (data) => {
  const res = await fetch(`${url}/notes`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const editNote = async (data) => {
  const res = await fetch(`${url}/notes/${data.id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
  await res.json()
}

export const deleteNote = async (id) => {
  const res = await fetch(`${url}/notes/${id}`, {
    method: "DELETE",
  });
};
