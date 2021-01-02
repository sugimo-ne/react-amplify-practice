import React , { useState , useEffect } from "react"
import {PageWithSidebar as Layout} from "../../layout/PageWithSidebar"
import "./index.css"


import {calcDate} from '../../utils/CalcOneMonth'
import OneDaySchedule from '../../components/templates/OneDaySchedule/OneDaySchedule'

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
            <div>
                <div className="flex">
                    <div className="w-75">
                    <h1>{getYear}年{getMonth + 1}月{getDate}日</h1>
                    <p>{getDaycConvertion}曜日</p>
                    <OneDaySchedule></OneDaySchedule>
                    </div>
                    <div className="w-25">
                    <div className="fixed">
                        <div>
                            <h3>今週のtodo</h3>
                            <ul>
                                {
                                    todos.map((item:todayData) => {
                                        return(
                                            <li>
                                                {item.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <h3>睡眠予定時間xxまでのTodo</h3>
                            <ul>
                                {
                                    todos.map((item:todayData) => {
                                        return(
                                            <li>
                                                {item.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    </div> 
                </div>
            </div>
        </Layout>
    )
}

export default HomeView