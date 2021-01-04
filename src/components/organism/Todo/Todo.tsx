import React , { useState , useEffect } from "react"
import API, { graphqlOperation } from "@aws-amplify/api";
import {createOnedayTodo} from '../../../graphql/mutations'

import PaperGroup from '../../molecules/Paper/PaperGroup'
import AddTip from '../../atoms/ToolTips/AddTip'


import SimpleModal from '../../molecules/Modal/SimpleModal'
import Multiline from '../../atoms/Inputs/TextField/Multiline'
import BasicTextField from '../../atoms/Inputs/TextField/BasicTextField'
import RadioButtonsGroup from '../../atoms/Inputs/TextField/RadioButtonGroup'
import OutlinedButton from '../../atoms/Button/OutLineButton'
import SimpeSelect from '../../atoms/Inputs/SelectBox/SimpleSelectBox'


interface Todo{
    priority:number,
    name:string,
    is_complete:boolean,
    description:string,
    type:string
}
interface Props{
    todos:Todo[],
    title:string,
    postType:string,
    today:any
}


const Todo: React.FunctionComponent<Props> = ({todos , title , postType , today}) => {
    const priorityList = [1 , 2 , 3 ,4 , 5]
    const kindList = ["緊急" , "仕事、作業" , "プライベート" , "自己成長、自己研鑽" , "リラックス" , "人間関係" , "その他"]
    const [name , setName] = useState('')
    const [kindOf , setKindof] = useState('')
    const [priority , setPriority] = useState(1)
    const [is_conplete , setIs_conplete] = useState(false)
    const [description , setDescription] = useState("")
    // const [type , setType] = useState("OnedayTodo")
    const renderAddTodo = () => {
        return(
        <div>
          <h2 id="simple-modal-title">todoを追加</h2><span>{today}</span>
          <form className="flex_wrap">
              <div className='w-50'>
              <BasicTextField setValue={setName} value={name} label={"タイトル"}></BasicTextField>
              <br></br>
              <br></br>
              <SimpeSelect setValue={setKindof} value={kindOf} selectList={kindList} title={"種類"}></SimpeSelect>
              <br></br>
              <br></br>
              <Multiline setValue={setDescription} value={description} label={"詳細"}></Multiline>
              </div>
              <div className="p-5 center w-50">
              <RadioButtonsGroup data={priorityList} value={priority} setValue={setPriority} title={"優先度"}></RadioButtonsGroup>
              </div>
            <OutlinedButton text={"追加"} color={"primary"} onClick={() => {onTodo()}}></OutlinedButton>
          </form>
        </div>
        )
    }
    
    const onTodo = async() => {
        const res = await API.graphql(graphqlOperation(createOnedayTodo , {input: {
            priority,
            name,
            is_conplete,
            description,
            type:postType,
            kindOf,
            date:today,
            is_deleted:false,
        }}));
        setName('')
        setKindof('')
        setPriority(1)
        setDescription('')
        console.log(res)
    }
    return(
        <PaperGroup className={null}>
            <div className="relative">
                <h3>{title}</h3>
                <ul>
                    {
                        todos.map((item:Todo) => {
                            return(
                                <li>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="absolute right bottom">
                <SimpleModal>
                    {
                        renderAddTodo()
                    }
                </SimpleModal>
                </div>
            </div>
            
        </PaperGroup>
    )
}

export default Todo