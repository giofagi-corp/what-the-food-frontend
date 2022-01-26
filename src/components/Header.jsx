import React, { useState } from 'react'
import TabMenu from '../components/TabMenu'

export default function Header(props) {
	const { handleSubmit } = props
	const { handleSearchInput } = props
	const { inputSearch } = props

	return (
		<div>
			<TabMenu />
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='search'
					value={inputSearch}
					onChange={handleSearchInput}
				/>
				<button type='submit'>+</button>
			</form>
		</div>
	)
}
