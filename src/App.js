import React from 'react';
import logo from './logo.svg';
import './App.css';
import WorkExperience from "./components/WorkExperience";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class MyJumbotron extends React.Component {
    render() {
        return <div>
            <div className="MyJumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Alonso R. Arteaga</h1>
                    <p className="lead">B.S. of Computer Science</p>
                </div>
            </div>
        </div>
    }
}

const Experiences = [
    {
        employer: "Insight Global",
        image: "https://dw-wp-production.imgix.net/2019/10/Obama.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=546&w=970",
        title: "[Contractor] Software Developer",
        location: "Warrenville, IL",
        duration: "January 2019",
        description: "[Contractor] Software Developer",
        tasks: ["Integrate Laravel PHP web app with 3rd-party services", "Develop large codebase with Golang", "Elastic ingest engineer"]
    },
    {
        employer: "Label Insight, inc.",
        image: "https://dw-wp-production.imgix.net/2019/10/Obama.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=546&w=970",
        title: "Backend Software Engineering Intern",
        location: "Chicago, IL",
        duration: "Summer 2018",
        description: "Backend Software Engineering Intern",
        tasks: ["TDD with Java, Spring Boot, Mockito", "CI/CD with docker, github, CircleCI, and AWS", "OCR with Google Vision, parsing and filtering with python"]
    },
    {
        employer: "Northern Illinois University",
        image: "https://www.niu.edu/communication-standards/_images/downloads/images/logo_thumbs/NIUtag_vert_3Clr-web.png",
        location: "DeKalb, IL",
        title: "Bachelor of Science in Computer Science",
        duration: "2016-2018",
        description: "Bachelor of Science in Computer Science",
        tasks: ["C++, C#, and Assembler x86 courses", "VP of Hispanic Engineering club for 2017-2018"]
    }
];

const Projects = [
    {
        employer: "Server LED Monitoring",
        image: "https://alonsoarteaga.me/content/images/2019/11/example.gif",
        title: "[Contractor] Software Developer",
        location: "Warrenville, IL",

        description: "some brief description of employers mission lorem ipsum test test test",
        tasks: ["did a thing with x", "did this other thing in y seconds with 20% of improvement", "maintained z for always on uptime"]
    },
    {
        employer: "Label Insight, inc.",
        image: "https://alonsoarteaga.me/content/images/2019/05/Screen-Shot-2019-05-27-at-1.40.35-PM.png",
        title: "Backend Software Engineering Intern",
        location: "Chicago, IL",
        description: "some brief description of employers mission lorem ipsum test test test",
        tasks: ["did a thing with x", "did this other thing in y seconds with 20% of improvement", "maintained z for always on uptime"]
    },
    {
        employer: "Northern Illinois University",
        image: "https://i.makeagif.com/media/5-15-2020/OjVuiO.gif",
        location: "DeKalb, IL",
        title: "Bachelor of Science in Computer Science",

        description: "some brief description of employers mission lorem ipsum test test test",
        tasks: ["did a thing with x", "did this other thing in y seconds with 20% of improvement", "maintained z for always on uptime"]
    }
];

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/Archive">
                    <Archive/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            {/*</div>*/}
        </Router>
    );
}

function Home() {
    return <div className="App container" style={{paddingBottom: "3rem"}}>
        <MyJumbotron/>
        <div className="text-center">
            <h1 className="MyHeading">Hello World!</h1>
            <p className="lead">Hi! My name is Alonso Arteaga, a Junior Software Developer currently
                working with Golang, Elastic Stack, and Kubernetes.

                On my free time, I'm playing around with servers at home. Someday I'll have something worthy
                of r/homelab. Also, I've been experimenting with raspberry pi's and different sensors
                like temperature humidity, CO2, etc. and built a simple weather station.
                My most recent project is a small LED website healthcheck monitoring device that sits by my
                desk.
                Check out my latest write-up at https://alonsoarteaga.me. </p>
        </div>
        <h1 className="MyHeading">Work Experience</h1>
        <WorkExperience experiences={Experiences}/>
        <hr/>
        <h1 className="MyHeading">Projects</h1>
        <WorkExperience experiences={Projects}/>
        <div>
            <div className="card flex-md-row flex-column" style={{margin: "2rem", borderRadius: "8px"}}>
                <img src="https://i.makeagif.com/media/5-15-2020/OjVuiO.gif"
                     alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Portfolio Archive</h5>
                    <p className="card-text">A look of all the versions this website has gone through over the
                        years</p>
                    <a href="/Archive" className="btn btn-primary">Go Back In Time</a>
                </div>
            </div>
        </div>
    </div>
}

function Archive() {
    return <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                            content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>;

}

export default App;
