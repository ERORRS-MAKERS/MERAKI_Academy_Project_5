import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { setLogin } from "./service/redux/reducers/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");
    const patientId = localStorage.getItem("patientId");

    if (token && userId && role && patientId) {
      dispatch(setLogin({ token, userId, role, patientId }));
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
