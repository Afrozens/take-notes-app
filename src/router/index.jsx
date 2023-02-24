import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import AddNotePage from "../pages/AddNotePage";
import TodoTaskPage from "../pages/TodoTaskPage";
import ErrorPage from "../pages/ErrorPage";
import { CategoryFiltersProvider } from "../contexts/CategoryFiltersContext";
import NotePage from "../pages/NotePage";

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
            element: (
              <CategoryFiltersProvider>
                <HomePage />
              </CategoryFiltersProvider>
            ),
          },
          {
            path: "/notes/add",
            element: <AddNotePage />,
          },
          {
            path: "/notes/:noteId",
            element: <NotePage />,
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
