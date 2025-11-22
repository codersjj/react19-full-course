import { Link, Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <nav className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="post/12">Post</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
