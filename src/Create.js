import { useState } from "react";
// import { useHistory } from "react-router-dom"; // In "react-router-dom" v6 --> useHistory hook has been replaced with useNavigate
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const [author, setAuthor] = useState('mario');
  const [author, setAuthor] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent refresh of page after clicking button
    const blog = { title, body, author };
    // console.log(blog);

    setIsWaiting(true)

    fetch('http://localhost:3001/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog added.")
      // history.go(-1);
      // history.push('/');
      navigate('/');
    })
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="offset-md-3 col-lg-8 mx-auto card" style={{ background: "#e5e5e5" }}>
          <div className="card-body">

            <h1 className="text-primary mb-2 text-center" style={{ fontSize: '3rem', padding: '10px' }}><b>Add a New Blog</b></h1>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title :</label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </ div>

              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author :</label>
                {/* <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                >
                  <option value="Apurrv">Apurrv</option>
                  <option value="AA">AA</option>
                </select> */}
                <input
                  type="text"
                  id="author"
                  className="form-control"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="body" className="form-label">Body :</label>
                <textarea
                  id="body"
                  className="form-control"
                  required
                  value={body}
                  cols="30" rows="10"
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>

              {!isWaiting && <button className="w-100 btn btn-success mt-3 btn-lg btn-block">Add Blog</button>}
              {isWaiting && <button disabled>Adding Blog</button>}

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
