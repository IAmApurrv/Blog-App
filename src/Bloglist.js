import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (blogs !== undefined) {
            setLoading(false);
        }
    }, [blogs]);

    const truncateText = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };

    return (
        <div className="blog-list">
            <h1 className="text-primary mt-2 mb-2" style={{ fontSize: '3rem', padding: '10px', fontFamily: 'Roboto, sans-serif' }}><b>{title}</b></h1>
            <div className="row d-flex">
                {loading ? (
                    <div className="col">
                        <p>Loading...</p>
                    </div>
                ) : (
                    blogs && blogs.length ? (
                        blogs.map((blog) => (
                            <div className="col-md-6 mb-4" key={blog.id}>
                                <div className="card h-100" style={{ background: "#e5e5e5" }}>
                                    <div className="card-body">
                                        <h1><b className="card-title">{blog.title}</b></h1>
                                        <h4 className="card-text">Posted by - {blog.author}</h4>
                                        <p>{truncateText(blog.body, 30)}</p>
                                        <div className="card-footer">
                                            <Link to={`/blogs/${blog.id}`} className="btn btn-info btn-block w-100 text-white" style={{ fontSize: '1.5rem' }}><b>Read Blog</b></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col">
                            <p>No blogs to display</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Bloglist;




// return (
//     <div className="blog-list">
//         <h1 className="text-primary mt-2 mb-2" style={{ fontSize: '3rem', padding: '10px', fontFamily: 'Roboto, sans-serif' }}><b>{title}</b></h1>
//         <div className="row d-flex">
//             {blogs ? (
//                 blogs.map((blog) => (
//                     <div className="col-md-6 mb-4" key={blog.id}>
//                         <div className="card h-100" style={{ background: "#e5e5e5" }}>
//                             <div className="card-body">
//                                 <h1><b className="card-title">{blog.title}</b></h1>
//                                 <h4 className="card-text">Posted by - {blog.author}</h4>
//                                 <p>{truncateText(blog.body, 30)}</p>
//                                 <div className="card-footer">
//                                     <Link to={`/blogs/${blog.id}`} className="btn btn-info btn-block w-100 text-white" style={{ fontSize: '1.5rem' }}><b>Read Blog</b></Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <div className="col">
//                     <p>No blogs to display</p>
//                 </div>
//             )}
//         </div>
//     </div>
// );
// return (
//     <div className="blog-list">
//         <h2 style={{ color: '#0081a7' }}>{title}</h2>
//         {blogs.map((blog) => (
//             <div className="blog-preview" key={blog.id}>
//                 <Link to={`/blogs/${blog.id}`}>
//                     <h2>{blog.title}</h2>
//                     <p>Posted by - {blog.author}</p>
//                 </Link>
//             </div>
//         ))}
//     </div>
// );