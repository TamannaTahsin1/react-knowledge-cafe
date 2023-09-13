import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  // event handler
  const handleAddBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookamrk => bookmarks.id !==id)
    setBookmarks(remainingBookmarks)

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs 
      handleAddBookmark={handleAddBookmark}
      handleMarkAsRead = {handleMarkAsRead}>
      </Blogs>
      <Bookmarks 
      bookmarks={bookmarks}
      readingTime={readingTime}>

      </Bookmarks>
      </div>
      
    </>
  )
}

export default App
