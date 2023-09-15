import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Landing,
  Register,
  PersonalArea,
  ProtectedRoute,
} from "./pages/index-pages";
import ProtectedAdmin from "./pages/ProtectedAdmin";
import ProtectedJury from "./pages/ProtectedJury";
import AdminLogin from "./pages/admin-pages/AdminLogin";
import AdminPage from "./pages/admin-pages/AdminPage";
import { Toaster } from "react-hot-toast";
import AdminEvents from "./pages/admin-pages/AdminEvents";
import AllEvents from "./pages/admin-pages/AllEvents";
import AllUsers from "./pages/admin-pages/AllUsers";
import Nominations from "./pages/admin-pages/Nominations";
import AdminOrdersPage from "./pages/admin-pages/AdminOrdersPage";
import Register2 from "./pages/Register2";
import JuryRegister from "./pages/jury-pages/JuryRegister";
import JuryArea from "./pages/jury-pages/JuryArea";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <PersonalArea />
              </ProtectedRoute>
            }
          >
            <Route path="/personal-area" element={<PersonalArea />} />
          </Route>

          <Route
            path="/a-panel"
            element={
              <ProtectedAdmin>
                <AdminPage />
              </ProtectedAdmin>
            }
          >
            <Route path="/a-panel" element={<AdminPage />} />
          </Route>

          <Route
            path="/new-event"
            element={
              <ProtectedAdmin>
                <AdminEvents />
              </ProtectedAdmin>
            }
          >
            <Route path="/new-event" element={<AdminEvents />} />
          </Route>

          <Route
            path="/all-events"
            element={
              <ProtectedAdmin>
                <AllEvents />
              </ProtectedAdmin>
            }
          >
            <Route path="/all-events" element={<AllEvents />} />
          </Route>

          <Route
            path="/all-users"
            element={
              <ProtectedAdmin>
                <AllUsers />
              </ProtectedAdmin>
            }
          >
            <Route path="/all-users" element={<AllUsers />} />
          </Route>

          <Route
            path="/nominations"
            element={
              <ProtectedAdmin>
                <Nominations />
              </ProtectedAdmin>
            }
          >
            <Route path="/nominations" element={<Nominations />} />
          </Route>

          <Route
            path="/orders"
            element={
              <ProtectedAdmin>
                <AdminOrdersPage />
              </ProtectedAdmin>
            }
          >
            <Route path="/orders" element={<AdminOrdersPage />} />
          </Route>

          <Route
            path="/jury-area"
            element={
              <ProtectedJury>
                <JuryArea />
              </ProtectedJury>
            }
          >
            <Route path="/jury-area" element={<JuryArea />} />
          </Route>

          {/* <Route path="/landing" element={<Landing />} /> */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:ref" element={<Register2 />} />
          <Route path="/jury" element={<JuryRegister />} />
        </Routes>
        <Toaster
          position={"top-right"}
          reverseOrder={false}
          toastOptions={{
            duration: 6000,
            style: {
              padding: "1rem",
              backgroundColor: "#b88aa8",
              fontSize: "1rem",
              color: "white",
              // borderColor: "#ff00ff",
              // border: "2px solid #ff00ff",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
