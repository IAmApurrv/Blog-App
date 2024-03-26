# React Blog App

This is a simple blog app created using React. Users can perform CRUD (Create, Read, Update, Delete) operations on blog posts. Data is stored in a JSON file (`db.json`) and served using `json-server`.

## Installation

To run the app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/IAmApurrv/Blog-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Blog-App
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the JSON server:
   ```bash
   npx json-server --watch data/db.json --port 3001
   ```
5. Start the React app in another terminal:
   ```bash
   npm start
   ```

## Screenshots

### No Blogs
![No Blogs](/screenshots/no-blogs.png)

### Add Blog
![Add Blog](/screenshots/add-blog.png)

### All Blogs
![All Blogs](/screenshots/all-blogs.png)

### Blog Card
![Blog Card](/screenshots/blog-card.png)

### Update Blog
![Update Blog](/screenshots/update-blog.png)

### Updated Blog Card
![Updated Blog Card](/screenshots/updated-blog-card.png)

### 404 Page
![404 Page](/screenshots/404-page.png)

## Usage

- To view all blogs, navigate to the home page.
- To add a new blog, click on the "Add Blog" button in the navigation bar and fill out the form.
- To update a blog, click on the "Edit" button on the blog card and update the content.
- To delete a blog, click on the "Delete" button on the blog card.