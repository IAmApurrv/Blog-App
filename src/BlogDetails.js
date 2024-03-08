import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:3001/blogs/' + id);
  const Navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:3001/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      Navigate('/');
    })
  }

  return (
    <div className="container mt-5 mb-5">
      {isPending && <div className="text-center">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {blog && (
        <div className="card col-lg-10 mx-auto" style={{ background: "#e5e5e5" }}>
          <div className="card-body">
            <h1 className="card-title text-primary text-center" style={{ fontSize: '3rem', padding: '10px' }}><b>{blog.title}</b></h1>
            <p className="card-text text-center mb-4">Posted by - {blog.author}</p>
            <p className="card-text" style={{ whiteSpace: 'pre-line' }}>{blog.body}</p>
            <button onClick={handleClick} className="btn btn-danger btn-lg btn-block w-100 mt-3">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
  // return (
  //   <div className="blog-details">
  //     { isPending && <div>Loading...</div> }
  //     { error && <div>{ error }</div> }
  //     { blog && (
  //       <article>
  //         <h2>{ blog.title }</h2>
  //         <p>Posted by - { blog.author }</p>
  //         <div>{ blog.body }</div>
  //         <button className="w-100" onClick={handleClick}>Delete</button>
  //       </article>
  //     )}
  //   </div>
  // );
}

export default BlogDetails;



// import { useParams, useNavigate } from "react-router-dom";
// import useFetch from "./useFetch";

// const BlogDetails = () => {

//     const { id } = useParams()
//     const { data: blog, error, isWaiting } = useFetch('http://localhost:3001/blogs/' + id)
//     const Navigate = useNavigate();

//     const handleClick = () => {
//         // console.log(blog.title + " blog is deleted.")
//         fetch('http://localhost:3001/blogs/' + blog.id, {
//             method: 'DELETE'
//         }).then(() => {
//             Navigate('/');
//         })
//     }

//     return (
//         <div className="blog-details">
//             {/* <h2>Blog Detail - {id}</h2> */}
//             {isWaiting && <div>Loading...</div>}
//             {error && <div>{error}</div>}
//             {blog && (
//                 <article>
//                     <h2>{blog.title}</h2>
//                     <p>Posted by - {blog.author}</p>
//                     <div>{blog.body}</div>
//                     <button onClick={handleClick}>Delete</button>
//                 </article>
//             )}
//         </div>
//     );
// }

// export default BlogDetails;
