import React from "react"
import {PageWithSidebar as Layout} from "../../layout/PageWithSidebar"
import Calender from "../../components/templates/Calender/Calender"
import "./index.css"

import {calcDate} from "../../utils/CalcOneMonth"

const CalenderView: React.FunctionComponent = () => {
    const date = calcDate(null , null)
    return(
        <Layout title="カレンダー">
            <div>
            <h2>{date.getYear}:{date.getMonth + 1}月</h2>
            <Calender></Calender>
            </div>
        </Layout>
    )
}

export default CalenderView