import CheckOut from "./CheckOut/CheckOut";
import EmpowerBusiness from "./EmpowerBusiness/EmpowerBusiness";
import ProjectsSlider from "./ProjectsSlider/ProjectsSlider";
import Trophies from "./Trophies/Trophies";


const ProjectsArea = () => {
    return (
        <div>
            <CheckOut/>
            <ProjectsSlider/>
            <Trophies></Trophies>
            <EmpowerBusiness/>
        </div>
    );
};

export default ProjectsArea;