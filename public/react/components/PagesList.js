import React from 'react';

export const PagesList = ({pages, setPageView, setCurrentPageView}) => {
	const clickHandler = (page) => {
		setCurrentPageView(1)
		setPageView(page)
	}

	return <>
		{
			pages.map((page, idx) => {
				return <h3 key={idx} onClick={() => clickHandler(page)}>{page.title}</h3>
			})
		}
	</>
} 
