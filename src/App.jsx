import { useState } from 'react'
import './App.css'

const blogsTitlesList = []


function App() {

  const [blogsTitles, setBlogsTitles] = useState(blogsTitlesList)
  const [newBlogTitle, setNewBlogTitle] = useState('')


  function addBlogTitle(e) {
    e.preventDefault()
    console.log(blogsTitles);
    
    setBlogsTitles([
      ...blogsTitles,
      newBlogTitle
    ])
    
    setNewBlogTitle('')
  }


  return (
    <>
      <div className="container">
        <h1 className='py-4'>Blog posts</h1>

        <form onSubmit={addBlogTitle}>

          <div>
            <label htmlFor="task" className="form-label">Submit your own blog title!</label>
            <div className="input-group mb-3">

              <input type="text" className="form-control" placeholder="Blog Title" aria-label="Blog Title" aria-describedby="button-addon2" value={newBlogTitle} onChange={e => setNewBlogTitle(e.target.value)} />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>

            </div>

          </div>


        </form>
        <ul className="list-group">
          <li className="list-group-item"></li>
        </ul>

      </div>
    </>
  )
}

export default App
