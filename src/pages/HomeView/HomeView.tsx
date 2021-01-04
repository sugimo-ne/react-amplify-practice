import React , { useState , useEffect } from "react"
import {PageWithSidebar as Layout} from "../../layout/PageWithSidebar"
import "./index.css"
import API, { graphqlOperation } from "@aws-amplify/api";

import AddTip from '../../components/atoms/ToolTips/AddTip'
import PaperGroup from '../../components/molecules/Paper/PaperGroup'
import {calcDate} from '../../utils/CalcOneMonth'
import OneDaySchedule from '../../components/templates/OneDaySchedule/OneDaySchedule'
import Todo from '../../components/organism/Todo/Todo'

import {createOnedayTodo} from '../../graphql/mutations'

interface todayData{
    priority:number,
    name:string,
    is_complete:boolean,
    description:string,
    type:string
}

const HomeView: React.FunctionComponent = () => {
    const [todos , setTodos] = useState<todayData[]>([])
    const [schedules , setSchedules] = useState([])
    const [done , setDone] = useState([])

    const date = calcDate(null , null)
    const {
        dateData,
        getYear,
        getMonth,
        getDate,
        getDay,
        getDaycConvertion
    } = date
    const digit = (number:number) => {
        let numToString = number.toString()
        if(number < 10){
            numToString = "0"+numToString
        }
        return numToString
    }
    const today = `${getYear}-${digit(getMonth + 1)}-${digit(getDate)}`
    const fetchToday = () => {
        const todoData:todayData[] = [
            {
                priority:1,
                name:"最初のtodo",
                is_complete:false,
                description:"おおおおおおおおおおおおおおおおおお",
                type:"仕事、学校"
            },
            {
                priority:2,
                name:"2つめのtodo",
                is_complete:false,
                description:"おおおおおおおおおおおおおおおおおお",
                type:"プライベート"
            },
            {
                priority:3,
                name:"3のtodo",
                is_complete:false,
                description:"おおおおおおおおおおおおおおおおおお",
                type:"成長、自己研鑽"
            },
        ]
        setTimeout(()=>{
            setTodos(todoData)
        } , 5000)
    }

    useEffect(() => {
        fetchToday()
    } , [])

    return(
        <Layout title="本日の日程">
            <div className="flex">
                <div className="w-60">
                <h1>{getYear}年{getMonth + 1}月{getDate}日</h1>
                <p>{getDaycConvertion}曜日</p>
                <OneDaySchedule></OneDaySchedule>
                </div>
                <div className="w-40">
                <div className="sub_column" style={{"paddingTop":"80px"}}>
                    <Todo todos={todos} title={"睡眠予定時間xxまでのTodo"} postType={"OnedayTodo"} today={today}></Todo>
                    <Todo todos={todos} title={"一週間分のTodo"} postType={""} today={today}></Todo>
                </div>
                </div> 
            </div>
        </Layout>
    )
}

export default HomeView