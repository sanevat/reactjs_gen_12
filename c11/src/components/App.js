// vendor imports
import { useState, useEffect } from 'react';
// components
import Popup from './widgets/Popup';
// styles
import '../assets/styles/global.css';

const App = () => {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    /* fetch('https://jsonplaceholder.typicode.com/posts/1') // GET, POST, PUT, PATCH, DELETE
      .then(response => { // Promise
        // console.log(response);
        return response.json();
      })
      .then(data => { // data
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      }); */

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIsDataFetched(true);
        setAlbums(data);
      })
      .catch(error => {
        setIsDataFetched(true);
        setError('Error fetching albums');
      });
  }, []);


  /* fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        userId: 123,
        title: 'My new post',
        body: 'My new post content'
    }),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': Bearer token
    }
  }); */

  const setAlbumDetails = (index) => {
    setSelectedAlbum(albums[index]);
  };

  return (
    <div id='app'>
      {/* Task 01 - From https://jsonplaceholder.typicode.com/.
                      * fetch all albums
      */}

      {/* Task 02 - Display the albums title */}

      {isDataFetched
        ?
        error === ''
          ?
          <>
            <h2>Albums</h2>
            {albums.slice(0, 10).map((album, index) => {
              return (
                <Album
                  key={album.id}
                  index={index}
                  title={album.title}
                  setAlbumDetails={setAlbumDetails}
                />
              )
            })
            }
            {selectedAlbum && <Popup album={selectedAlbum} />}
          </>
          :
          <h2>{error}</h2>
        :
        <h2>Loading data..</h2>
      }
    </div>
  );
};

const Album = (props) => {
  const handleTitleClick = () => {
    props.setAlbumDetails(props.index);
  };

  return (
    <p onClick={handleTitleClick}>{props.title}</p>
  );
};

/* Homework 11
  * Implement feature to close the popup on click on x.
  1. Create navigation menu with two pages - Home, Users.
  2. From https://jsonplaceholder.typicode.com/.
     * fetch all users
  3. Display only the name of the users. On click on the user name, show the details for the user in a popup.
*/

export default App;
