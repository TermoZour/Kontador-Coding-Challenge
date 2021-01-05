import React, {useState} from 'react';

// import logo from './logo.svg';
import './App.css';
import PostsOverview from "./PostsOverview";

function App() {
  const [nrOfPosts, setNrOfPosts] = useState(1);
  const [showGraph, setShowGraph] = useState(false);

  function onFormSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(event) => {
          onFormSubmit(event)
        }}>
          <label htmlFor="postsInput">Number of posts to make graph for:</label>
          <input type="number" id="postsInput" min="1" max="9999" value={nrOfPosts}
                 onChange={(event) => {
                   setShowGraph(false);
                   setNrOfPosts(parseInt(event.target.value));
                 }}/>
        </form>
        <button onClick={() => setShowGraph(true)}>Show graph</button>
        {showGraph && <PostsOverview postsToFetch={nrOfPosts}/>}
      </header>
    </div>
  );
}

export default App;
