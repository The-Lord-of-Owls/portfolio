import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Import required components for page layout
import Header from './components/header'

//Import page components
import Home from './routes/home/layout'
import Projects from './routes/projects/layout'
import Contact from './routes/contact/layout'

//Import global CSS styling rules
import './index.css'

const router = createBrowserRouter( [
	{	//Display basic bio
		path: "/",
		element: <Home />
	},
	{	//Display projects I've worked on
		path: "/projects",
		element: <Projects />
	},
	{	//Display my contact information
		path: "/contact",
		element: <Contact />
	}
] )

createRoot( document.getElementById( 'root' )! ).render(
	<StrictMode>
		<Header />
		<RouterProvider router={ router } />
	</StrictMode>
)


