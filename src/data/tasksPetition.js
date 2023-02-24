const url = "http://localhost:3000";

export const getTasks = async () => {
  const res = await fetch(`${url}/tasks`);
  const data = await res.json();
  return data;
};

export const setTask = async (data) => {
  const res = await fetch(`${url}/tasks`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateTask = async (data) => {
  const res = await fetch(`${url}/tasks/${data.id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteTask = async (id) => {
  const res = await fetch(`${url}/tasks/${id}`, {
    method: "DELETE",
  })
}