import htmlIcon from "../assets/img/html-icon.png";
import cssIcon from "../assets/img/css-icon.png";
import jsIcon from "../assets/img/javascript-icon.png";
import accessIcon from "../assets/img/accessibility-icon.png";

import SubjectButton from "../component/SubbjectButton";
const Home = () => {
    return (
        <main className="flex">
            <section className="intro">
                <h1>Welcome to the <br/><span>Frontend Quiz!</span></h1>
                <p>Pick a subject to get started.</p>
            </section>
            <section>
               <SubjectButton img={htmlIcon} subject={"HTML"} />
               <SubjectButton img={cssIcon} subject={"CSS"} />
               <SubjectButton img={jsIcon} subject={"JavaScript"} />
               <SubjectButton img={accessIcon} subject={"ReactJS"} />
            </section> 
        </main>
    )
}

export default Home;