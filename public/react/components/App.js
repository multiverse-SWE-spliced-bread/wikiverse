import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page';
import {AddPage} from './AddPage'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pagesCollection, setPagesCollection] = useState([]);
	const [currentPageView, setCurrentPageView] = useState(0)
	const [pageView, setPageView] = useState({})

	const currentPageContent = [
		[
			<h2 key={0} >Current Articles</h2>,
			<p key={1} onClick={() =>setCurrentPageView(2)}>Add Article</p>, 
			<PagesList key={2} setPageView={setPageView} setCurrentPageView={setCurrentPageView} pages={pagesCollection} />
		],
		<Page page={pageView} setPageView={setPageView} setCurrentPageView={setCurrentPageView}/>,
		<AddPage setCurrentPageView={setCurrentPageView}/>
		]
	

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPagesCollection(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	},[currentPageView]);

	return (
		<main>	
      	<div id="header">
		  <h1>WikiVerse</h1>
		</div>
		

			{
				currentPageContent[currentPageView]
			}

			 
			
			
		</main>
	)
}