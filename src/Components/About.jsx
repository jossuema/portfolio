/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a student at Universidad Tecnica de Machala in Ecuador. I love building technology and digital solutions focused on real-world problems";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  {name:"Python", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/python.png"},
  {name:"JavaScript", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/javascript.png"},
  {name:"Typescript", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/typescript.png"},
  {name:"Java", level:"Advanced", img:"https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"},
  {name:"C#", level:"Advanced", img:"https://img.icons8.com/color/48/000000/c-sharp-logo.png"},
  {name:"React", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/react-native.png"},
  {name:"Node.js", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/nodejs.png"},
  {name:"Express.js", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/express.png"},
  {name:"TensorFlow", level:"Beginner", img:"https://img.icons8.com/color/48/000000/tensorflow.png"},
  {name:"SQL Server", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/sql.png"},
  {name:"MySQL", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/mysql-logo.png"},
  {name:"MongoDB", level:"Beginner", img:"https://img.icons8.com/color/48/000000/mongodb.png"},
  {name:"PostgreSQL", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/postgreesql.png"},
  {name:"Git", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/git.png"},
  {name:"Linux", level:"Intermediate", img:"https://img.icons8.com/color/48/000000/linux.png"},
  {name:"Docker", level:"Beginner", img:"https://img.icons8.com/color/48/000000/docker.png"},
  {name:"Azure", level:"Beginner", img:"https://img.icons8.com/color/48/000000/azure-1.png"},
  {name:"Arduino", level:"Beginner", img:"https://img.icons8.com/color/48/000000/arduino.png"},
  {name:"LaTeX", level:"Beginner", img:"https://img.icons8.com/color/48/000000/latex.png"},
];

const skillDescription = "Here are some of the skills I have learned and used in my projects:";

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about some areas of current technology as software development, data science and electronics";

const About = ({aboutRef}) => {
  return (
    <section className="padding" id="about" style={{background:"#203a61"}} ref={aboutRef}>
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#203a61",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "5rem",
          border: "5px solid #0078d4",
        }}
      >
        <h2 style={{color:"white"}}>About Myself</h2>
        <p className="large" style={{color:"white", fontSize:"1.25rem"}}>{description}</p>
        <hr style={{borderColor:"#0078d4"}}/>
        <h3 style={{color:"white"}}>{skillDescription}</h3>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1rem",
            margin: "1rem 3rem",
            gap: "3rem",
            color: "white",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill.name}>
              <img
                src={skill.img}
                alt={skill.name}
                style={{ height: "2rem", width: "2rem", marginRight: "1rem" }}
              />
              {skill.name} - {skill.level}
            </li>
          ))}
        </ul>
        <hr style={{borderColor:"#0078d4"}}/>
        <p style={{ padding: "1rem 3rem 0", color:"white" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
