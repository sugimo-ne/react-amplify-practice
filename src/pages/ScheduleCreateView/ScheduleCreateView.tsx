import React , { useState , useEffect } from "react"
import {PageWithSidebar as Layout} from "../../layout/PageWithSidebar"
import "./index.css"

import ScheduleCreate from '../../components/templates/ScduleCreate/ScheduleCreate'

const ScheduleCreateView: React.FunctionComponent = () => {
   
    return(
        <Layout title="スケジュール作成">
            <ScheduleCreate></ScheduleCreate>
        </Layout>
    )
}

export default ScheduleCreateView