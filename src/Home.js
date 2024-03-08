import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const { data: blogs, error, isWaiting } = useFetch('http://localhost:3001/blogs')

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {isWaiting && <div className="text-center">Loading...</div>}
                    {/* {blogs && <Bloglist blogs={blogs} title="All Blogs" />} */}
                    <div className="text-center">
                        {/* <h2 className="text-primary mb-4">All Blogs</h2> */}
                        <Bloglist blogs={blogs} title="All Blogs" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;

// npx json-server --watch data/db.json --port 3001
// npm start
/*
    http://localhost:3001/blogs
    /blogs          GET     fetch all blogs
    /blogs/{id}     GET     fetch a single data
    /blogs          POST    add a new blog
    /blogs/{id}     DELETE  delete a blog
*/