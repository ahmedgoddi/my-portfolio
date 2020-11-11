import React from 'react'
import Avatar from "./image/slider-facebook-new-profile.jpg"
import Imag2 from "./image/proj.png"
import "./style.css"


const portfolio = () =>{
    return(
        <div>
            <header>
                <h1  className="h111"> ahmed goddi</h1>             
                <ul className="navMenu">
                    <li><a href ="#" >About</a></li>
                    <li><a href ="#" >Projects</a></li>
                    <li><a href ="#" >Contact</a></li>
                </ul>
                
            </header>
            <section id="about-me">
                <h1>Hello my name is <span class="text-important">AHMED GODDI</span> ,<br />
        and i make a horrible websites
        </h1>
        <img className="avatar" src={Avatar} alt="avatar" />
        </section>
        <br/>
        <h1 className="h11">PROJECTS</h1>
        <div className="projects-container">
            
            <div className="project-card ">
            <img src={Imag2} alt="project" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
            </p>
            <p> Github <a href="#">Link</a></p>
            </div>
            <div className="project-card ">

            <img src={Imag2} alt="project" />x
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
            </p>
            <p> Github <a href="#">Link</a></p>
            </div>
            <div className="project-card ">

            <img src={Imag2} alt="project" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
            </p>
            <p> Github <a href="#">Link</a></p>
            </div>
        </div>
        
            <section id ="contact">
                <h2 className="text-important">contact me</h2>
                <form>
                    <label>Full Name</label>
                    <input type="text" placeholder="your Name" />

                    <label>Email</label>
                    <input type="email" placeholder="Email" />

                    <label>Message</label>
                    <textarea rows="5" cols="40"></textarea>
                    <button>Send</button>
                </form>
            </section>
            <footer>
                <p>Copyritghts &copy; GOMYCODE 2020</p>
            </footer>
        </div>
    )
}


export default portfolio