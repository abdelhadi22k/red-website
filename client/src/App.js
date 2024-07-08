import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from './page/HomePage';
import Portfolio from './page/Portfolio';
import BlogPage from './page/BlogPage';
import BlogDetels from './components/blog/BlogDetels';
import AdminPage from './page/admin/project/AdminPage';
import Add_project from "./page/admin/project/Add-project";
import Add_Blog from './page/admin/blog/Add_Blog';
import AdminProject from "./page/admin/project/AdminProject";
import AdminUpdate from "./page/admin/project/AdminUpdate";
import AdminBlogPage from "./page/admin/blog/AdminBlogPage";
import AdminBlogDetels from "./components/blog/adminBlog/AdminBlogDetels";
import SearchPage from "./page/SearchPage";
import AddOpinions from "./page/admin/opinion/AddOpinions";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Blog/:slug" element={<BlogDetels />} />
        <Route path="/search" element={<SearchPage />} />



        <Route path="/Admin-acos-12333" element={<AdminPage />} />

        <Route path="/Admin-acos-12333/add-project-24234" element={<Add_project />} />

        <Route path="/Admin-acos-12333/AdminProject-35345" element={<AdminProject />} />

        <Route path="/Admin-acos-12333/project/:id" element={<AdminUpdate />} />

        <Route path="/Admin-acos-12333/add_Blog-23423235" element={<Add_Blog />} />

        <Route path="/Admin-acos-12333/AdminBlog-2352355" element={<AdminBlogPage />} />

        <Route path="/AdminBlog-2352355/:slug" element={<AdminBlogDetels />} />

        <Route path="/Admin-acos-12333/AdminAddOpinions-84620347" element={<AddOpinions />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
