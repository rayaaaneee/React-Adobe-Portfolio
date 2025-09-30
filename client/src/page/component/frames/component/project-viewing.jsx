import { useRef, useEffect } from "react";

export const ProjectViewing = ({ project, title }) => {

	const currentProjectSquareRef = useRef(null);

	useEffect(() => {
		
		var growing = true;
		const animateProjectViewing = () => {

			switch(growing){
				case true:
					currentProjectSquareRef.current.classList.add('animate');
					break;
				case false:
					currentProjectSquareRef.current.classList.remove('animate');
					break;
				default:
					break;
			}

			growing = !growing;

		}

		// Animation interval
		let intervalAnimationCurrentProjectViewing = setInterval(animateProjectViewing, 3000);

		return () => {
			clearInterval(intervalAnimationCurrentProjectViewing);
		}
	});

    return (
        <a 
			href={ `/project/${project && project.getFile()}` }
			className='current-project-viewing' 
			download 
			ref={currentProjectSquareRef}
			title={ title }>
			<img className='img-current-project-viewing' src={ project && (project.getDarkReactIcon()) } alt='project-icon' draggable="false" />
		</a>
    )
};
