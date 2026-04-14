import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

export const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};
