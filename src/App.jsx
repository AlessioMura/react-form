import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="container">
        <h1 className='py-4'>Blog posts</h1>

        <form>

          <div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Blog Title" aria-label="Blog Title" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
            </div>

          </div>

        </form>

      </div>
    </>
  )
}

export default App
