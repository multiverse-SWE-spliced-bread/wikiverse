import React, {useState, useEffect} from 'react';
import apiURL from '../api';

export const Page = ({page, setPageView, setCurrentPageView}) => {
const [fullPageDetails, setFullPageDetails] = useState({})



async function fetchAuthor(){
  try {
    //how do I pass the author id in this fetch path?
      const response = await fetch(`${apiURL}/wiki/${page.slug}`)
      const authorData = await response.json()
      setFullPageDetails(authorData)
      console.log(authorData)
  } catch (err) {
    console.log("Oh no an error!", err)
  }
}

function clickBackHandler() {
   setPageView({})
   setCurrentPageView(0)
}
async function clickDeleteHandler() {
  const response = await fetch(`${apiURL}/wiki/${page.slug}`, {
      method: 'DELETE',
     })
  const data = await response.json()
  console.log(data)
  setPageView({})
  setCurrentPageView(0)
}


useEffect(()=>{
  fetchAuthor()
}, [])

  return <div className='page-view'>
    <h3>{page.title}</h3>
    <p><b>Description:</b> {page.content}</p>
    <p><b>Author:</b> {fullPageDetails?.author?.name}</p>
    <div className='tags-group'>
    {
    (fullPageDetails?.tags) 
    ? [<p key={0}><b>Tags:</b></p>, ...fullPageDetails?.tags.map((t, i)=> <p key={i+1}>#{t.name}</p>)]
    : <p>Empty</p>
    }
    </div>

    <button onClick={clickBackHandler}>Back</button>
    <button onClick={clickDeleteHandler}>Delete</button>
  </div> 
} 
	