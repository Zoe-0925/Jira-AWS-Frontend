import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ProjectTableHOC from "../Components/Project/ProjectTableHOC"
import NavBar from "../Components/Shared/NavBar"
import CreateProjectDialog from "../Components/Project/CreateProjectDialog"
import { Button } from '@material-ui/core'
import { Row, Col } from "reactstrap"
import { selectCurrentUserId } from "../Reducers/Selectors"
import { mockgetUserAndProjectData } from "../Actions/user.actions"

const ProjectList = () => {
    const dispatch = useDispatch()
    const [isCreateProjectOpen, setOpenCreateProject] = useState(false)
    const currentUserId = useSelector(selectCurrentUserId)

    useEffect(() => {
        if (currentUserId === "") {
            dispatch(mockgetUserAndProjectData())
        }
        // eslint-disable-next-line
    }, [])

    return (<div className="main">
        <NavBar />
        <div className="body">
            <Row>
                <Col md="1">  <p align="left" className="project-list-title">Project</p></Col>
                <Col ></Col>
                <Col md="2">  <Button align="right" className="create-pj-btn" onClick={() => setOpenCreateProject(true)}>Create project</Button></Col>
            </Row>
            <ProjectTableHOC />
            <CreateProjectDialog open={isCreateProjectOpen} setOpen={setOpenCreateProject} />
        </div>
    </div>)
}

export default ProjectList