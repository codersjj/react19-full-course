import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Post from "../pages/Post";
import NotFound from "../pages/NotFound";
import AppLayout from "../layout/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="post/:id" element={<Post />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
