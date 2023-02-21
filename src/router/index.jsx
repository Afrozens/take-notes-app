import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import AddNotePage from "../pages/AddNotePage";
import EditNotePage from "../pages/EditNotePage";
import TodoTaskPage from "../pages/TodoTaskPage";
import ErrorPage from "../pages/ErrorPage";
import { CategoryFiltersProvider } from "../contexts/CategoryFiltersContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <CategoryFiltersProvider><HomePage /></CategoryFiltersProvider>,
          },
          {
            path: "/notes/add",
            element: <AddNotePage />,
          },
          {
            path: "/notes/edit/:noteId",
            element: <EditNotePage />,
          },
          {
            path: "/notes/delete/:noteId",
          },
          {
            path: "/task-todo",
            element: <TodoTaskPage />,
          },
        ],
      },
    ],
  },
]);
