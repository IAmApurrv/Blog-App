import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    // Fetch the existing blog data for given id and populate the form fields
    fetch(`http://localhost:3001/blogs/${id}`)
      .then(response => {
        if (!response.ok) {
          throw Error('Failed to fetch blog details');
        }
        return response.json();
      })
      .then(data => {
        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
      })
      .catch(error => console.error('Error fetching blog details:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0'); // Get day
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Get month (months are zero-based)
    const year = currentDate.getFullYear(); // Get year
    const hours = currentDate.getHours().toString().padStart(2, '0'); // Get hours
    const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Get minutes
    const seconds = currentDate.getSeconds().toString().padStart(2, '0'); // Get seconds

    const timestamp = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    // const IST = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

    const updatedBlog = { title, body, author, timestamp: timestamp };

    setIsWaiting(true);

    fetch(`http://localhost:3001/blogs/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog)
    })
      .then(() => {
        console.log("Blog updated successfully.");
        navigate(`/blogs/${id}`);
      })
      .catch(error => console.error('Error updating blog:', error))
      .finally(() => setIsWaiting(false));
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="offset-md-3 col-lg-8 mx-auto card" style={{ background: "#e5e5e5" }}>
          <div className="card-body">
            <h1 className="text-primary mb-2 text-center" style={{ fontSize: '3rem', padding: '10px' }}><b>Update Blog</b></h1>
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
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author :</label>
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
              {!isWaiting && <button className="w-100 btn btn-primary mt-3 btn-lg btn-block">Update Blog</button>}
              {isWaiting && <button disabled>Updating Blog</button>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
