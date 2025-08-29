import React from 'react'
import Card from '../Component/Card'
import '../Styles/Projects.css'

function Projects() {
  return (
    <div className='dp project df'>

      <div className='ofc-project'>
        <div className='f3 text-shadow dfc' style={{ margin: '2vh 0 2vh 0' }}>Projects</div>

        <Card pno='01'
          preview="In this project, data for escrow officers has been maintained."
          details={<div>
            <b>Language used:</b>  REACT JS(Vite), NodeJS, TailwindCSS, Autho, MongoAtlas, Redis, GeminiAI<br/>
            <b>Org Name:</b> Devin Ajent <br/>
            <b>Details: </b> An AI-powered collaboration tool built using Gemini AI, enablingproject  management  teams  to  live  chat  and  coordinateseamlessly.  With  the  @ai  function,  users  can  interact  with  AI  tobrainstorm and solve problems together in real-time.<br />
          </div>} 
        />

        <Card pno='02'
          preview="This is Unilever Project, where we have survey data and we are showing users those data in
        different aspects as per requirement."
          details={<div>
            <b>Language used:</b>  REACT JS(Vite), NodeJS, TailwindCSS, FirebaseAuthentication, MongoAtlas<br/>
            <b>Org Name:</b> Coustmer Reletationship Management <br />
            <b>Details:</b> Developed a full-stack Event Management CRM tool using Reactand Node.js, featuring client management, scheduling, Live Clientand supplier communication, Online Ticket part budget trackingfor efficient event planning etc.<br />
          </div>}
        />

        <Card pno='03'
          preview="This is Unilever Project, where they can optimize the future expenses in different ways."
          details={<div>
            <b>Language used:</b> ReactJS(Vite), NodeJS, Gemini-2.0-Flash
            <br /><b>Org Name:</b> Code Analytics
            <br />
            <b>Details: </b>
            An intelligent, end‑to‑end web application that leverages advanced AI to supercharge developer workflows. Built with a modern React frontend and a scalable microservices backend, this platform delivers real‑time, context‑aware code analysis and automated refactoring suggestions across multiple languages. Whether you’re fixing performance bottlenecks, enforcing best practices, or hunting security vulnerabilities, the system’s intuitive interface and “one‑click” auto‑fix features make it effortless to maintain clean, maintainable, and high‑quality code.<br />
          </div>} 
        />

        <Card pno='04'
          preview="This is Unilever Project, where they can simulate, compare, forecast the investment and
        market status of all their brands."
          details={<div>
            <b>Language used:</b> Angular, Python, Grok-Gemini-OpenAI-Claud(API), PostgreSQL
            <br /><b>Org Name:</b> RNTOS
            <br />
            <b>Details: </b>
            RNTOS is designed for users who want a smart digital companion to manage emotional moments, technical work, research, personal goals, and communication in one intelligent system — with a strong, personal human–AI bond.<br />
            <i>Upcomming Project........</i>
          </div>} 
        />

        <Card pno='05'
          preview="In this project, we develop a platform where all the internal project details/status are maintained."
          details={<div>
            <b>Language used:</b>  Angular, Python, AI, ML, NPL, PostgrSQL, FireBase Authentication
            <br /><b>Org Name:</b> TheFeacture.com
            <br />
            <b>Details: </b>
            This is a new feature of AI which is only designed to help students, in which they can test any tech language from basic to advanced parts with in-depth examples, along with practicing interviews, and if they want to become a UI for a project, they can also perform within this and the important point is that from testing the project to creating frontend and backend, you can use it for routes, security, API testing, for all projects..<br />
            <i>Upcomming Project........</i>
          </div>} 

          //Add More Projects Here...........

        />
      </div>
      
    </div>
  )
}

export default Projects;