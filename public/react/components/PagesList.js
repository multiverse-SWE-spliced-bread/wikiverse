import React from 'react';

export const PagesList = ({pages, setIsPageView, setPageView}) => {
	const clickHandler = (page) => {
		setIsPageView(true)
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
