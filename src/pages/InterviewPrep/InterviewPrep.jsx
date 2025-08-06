import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import moment from 'moment'
import SpinnerLoader from '../../components/Loader/SpinnerLoader'
import { AnimatePresence, motion } from 'framer-motion'
import { LuCircleAlert, LuListCollapse } from 'react-icons/lu'
import {toast} from "react-hot-toast"
import DashboardLayout from '../../components/Layout/DashboardLayout'
import RoleInfoHeader from './RoleInfoHeader'

const InterviewPrep = () => {

    const {sessionId} = useParams()

    const [sessionData, setSessionData] = useState(null)
    const [errorMsg, setErrorMsg] = useState("")

    const [openLearnMoreDrawer, setOpenLearnMoreDrawer] = useState(false)
    const [explanation, setExplanation] = useState(null)

    const [isLoading, setIsLoading] = useState(false)
    const [isUpdateLoader, setIsUpdateLoader] = useState(false)

    //fetch session data by sesssion ID
    const fetchSessionDetailsById = async () => {}

    //generate concept explanation
    const generateConceptExplanation = async (question) => {}

    //pin question
    const toggleQuestionPinStatus = async (questionId) => {}

    //add more questions to a session
    const uploadMoreQuestions = async () => {}

    useEffect(() => {
        if (sessionId) {
            fetchSessionDetailsById()
        }

        return () => {}
    }, [])
  return (
    <DashboardLayout>
        <RoleInfoHeader 
            role={sessionData?.role || ""}
            topicsToFocus={sessionData?.topicsToFocus || ""}
            experience={sessionData?.experience || "-"}
            questions={sessionData?.questions?.length || "-"}
            description={sessionData?.description || ""}
            lastUpdated={
                sessionData?.updatedAt
                ? moment(sessionData.updatedAt).format("Do MMM YYYY")
                : ""
            }
        />
    </DashboardLayout>
  )
}

export default InterviewPrep