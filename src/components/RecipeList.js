import { useState, useEffect } from 'react'
import axios from 'axios'
import AddProject from './../components/AddProject'
import ProjectCard from './../components/ProjectCard'

const API_URI = process.env.REACT_APP_API_URI

export default function RecipeList() {
	const [projects, setProjects] = useState([])
	const storedToken = localStorage.getItem('authToken')

	const getAllProjects = () => {
		const storedToken = localStorage.getItem('authToken')
		axios.get(`${API_URI}/api/projects`, {
			headers: { Authorization: `Bearer ${storedToken}` },
		})
			.then(response => setProjects(response.data))
			.catch(error => console.log(error))
	}
	useEffect(() => {
		getAllProjects()
	}, [])

	return (
		<div className='ProjectListPage'>
			<AddProject refreshProjects={getAllProjects} />
			{projects.map(project => (
				<ProjectCard key={project._id} {...project} />
			))}
		</div>
	)
}
