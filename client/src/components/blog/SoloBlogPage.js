import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SoloBlogPage = ({ blog }) => {
    return (
        <div>
            <div className="blogContainers2">
                {blog.length !== 0 ? (
                    blog.map((Blog) => {
                        return (
                            <div key={Blog.id} className="mb-2 ">
                                <div className="blogBox2">
                                    <Link to={`/Blog/${Blog.slug}`}>
                                        <Image
                                            className="blogImg" 
                                            src={Blog.image}
                                            alt={Blog.title}
                                            fluid
                                        />
                                    </Link>
                                    <h1 className="mainTitle">{Blog.title}</h1>
                                    <span className="mainBtn1"> {Blog.category}</span> 

                                  
                                </div>
                                
                            </div>
                        );
                    })
                ) : (
                    <h3>No Blogs</h3>
                )}
            </div>
        </div>
    );
};

export default SoloBlogPage;
