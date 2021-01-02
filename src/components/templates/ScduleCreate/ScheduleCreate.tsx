import React , { useState , useEffect } from "react"
import {PageWithSidebar as Layout} from "../../../layout/PageWithSidebar"
import "./index.css"

import Paper from '../../molecules/Paper/PaperGroup'
import BasicTable from '../../molecules/Table/BasicTable'
import DataTable from '../../molecules/Table/DataTable'

const ScheduleCreateView: React.FunctionComponent = () => {
   
    return(
            <div className="flex">
               <div className="w-60 p-5">
                    <Paper className={null}>
                        <BasicTable></BasicTable>
                    </Paper>
               </div>
               <div className="w-40 p-5">
                   <div className="sub_column">
                   <Paper className={null}>
                        <h3 className="p-5">１日分のtodo</h3>
                        <DataTable></DataTable>
                    </Paper>

                    <Paper className={null}>
                        <h3 className="p-5">１日分のtodo</h3>
                        <DataTable></DataTable>
                    </Paper>
                   </div>
               </div>
            </div>
    )
}

export default ScheduleCreateView