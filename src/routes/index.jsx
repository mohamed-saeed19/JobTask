import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
