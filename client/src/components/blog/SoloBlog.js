import { Image } from "react-bootstrap";

const SoloBlog = ({ blog }) => {


  return (
    <div>
      <div className="blogContainers">
        {blog.length !== 0 ? (
          blog.map((Blog) => {
            return (
              <div key={Blog.id} className="mb-2 ">
                <div className="blogBox">
                  <Image
                    className="blogImg"
                    src={Blog.image}
                    alt={Blog.title}
                    fluid
                  />
                  <div className="blogInfos">
                  
                    <span className="mainBtn1"> {Blog.category}</span> 

                    <h1 className="mainTitle">{Blog.title}</h1>

                    <div className="BlogWriter">
                      <div>
                        <div></div> {Blog.writer}
                      </div>
                      <div> 
                        <div></div> {Blog.createdAt}
                      </div>
                    </div>
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

export default SoloBlog;
