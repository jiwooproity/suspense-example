import { createBrowserRouter } from "react-router-dom";
import Main from "@/page/main";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
    },
  ],
  { basename: "/suspense-example" }
);

export default router;
