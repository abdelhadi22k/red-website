import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SoloAdminBlogPage = ({ blog }) => {
    return (
        <div>
            <div className="blogContainers2">
                {blog.length !== 0 ? (
                    blog.map((Blog) => {
                        return (
                            <div key={Blog.id} className="mb-2 ">
                                <div className="blogBox2">
                                    <Link to={`/AdminBlog/${Blog.slug}`}>
                                        <Image
                                            className="blogImg"
                                            src={Blog.image}
                                            alt={Blog.title}
                                            fluid
                                        />
                                    </Link>
                                    <div className="blogInfos">
                                      
                                        <h1>{Blog.title}</h1>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h3>No Project</h3>
                )}
            </div>
        </div>
    );
};

export default SoloAdminBlogPage;
