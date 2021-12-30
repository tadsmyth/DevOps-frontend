import React, { useEffect, useContext, useState } from 'react';
import CreatingTasks from '../bodyComponents/CreatingTasks'
import dataContext from '../Context'
import TaskCard from '../bodyComponents/TaskCard';
import TaskCardNone from '../bodyComponents/TaskCardNone';

function Dashboard(props) {
    let datum = useContext( dataContext )
    let [projectTasks, setProjectTasks] = useState([])
    
    useEffect( () => {

    if(datum.projects.length){
        console.log("Current active project", datum.currentProject);
        // current project ID is a useState for the current active project - currently hard coded to first project in the array
        let currentProjID = datum.currentProject._id //replace with datum.currentProject when currentProject useStateworks
        const tempArr = datum.tasks.filter(task => task.projectID === currentProjID)
        
        // setProjectTasks([datum.projects[0]]) //replace with tempARR when currentProject useStateworks
        
        let tasksNotStarted = []
        let tasksInReview = []
        let tasksInProgress = []

        tempArr.map( (task) => {
            if (task.status === "inProgress")
                tasksInProgress.push(task)
            else if (task.status === "inReview")
                tasksInReview.push(task)
            else if (task.status === "notStarted")
                tasksNotStarted.push(task)
        })
        
        let obj = {
            all: tempArr,
            tasksInProgress: tasksInProgress,
            tasksInReview: tasksInReview,
            tasksNotStarted: tasksNotStarted
        }
        
        setProjectTasks(tempArr)

        }
    }, [datum])
    
    return (
        <>
        <div className="contain">
        <div className='bg-secondary'>
            {/* <CurrentProject /> */}
            {/* div for the buttons bar at the top */}
            <div className='d-flex flex-row-reverse mt-5 pt-3 px-2'>
                <CreatingTasks />
            </div>
            
                {/* Not Started */}
            <div class="container fluid p-5 mt-5 bg-danger w-25 mw-75">
                <div class="card-columns">
                    {projectTasks.length >0 ? 
                        projectTasks.map((task) => {
                        return <TaskCard task={task} />}) 
                        : <TaskCardNone />}
                </div>
            </div>
            
            {/* In Progress */}
            <div class="container p-5 mt-5 bg-warning w-25 mw-50">
                {projectTasks.length >0 ? 
                    projectTasks.map((task) => {
                    return <TaskCard task={task} />}) 
                    : <TaskCardNone />}
            </div>

{/* In Review */}
<div class="container p-5 mt-5 bg-success w-25 mw-50">
                {projectTasks.length >0 ? 
                    projectTasks.map((task) => {
                    return <TaskCard task={task} />}) 
                    : <TaskCardNone />}
            </div>
                </div>
                </div>
                </>
                );
            }
export default Dashboard;