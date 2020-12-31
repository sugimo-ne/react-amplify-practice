const week = ["日" , "月" , "火" , "水" , "木" , "金" , "土"]

export const calcDate = (year:number|null , date:any|null) => { 
    const dateData = year ? new Date(year , date) : new Date()
    const getYear = dateData.getFullYear()
    const getMonth = dateData.getMonth()
    const getDate = dateData.getDate()
    const getDay = dateData.getDay()
    const getDaycConvertion = week[getDay]
    return {
        dateData,
        getYear,
        getMonth,
        getDate,
        getDay,
        getDaycConvertion
    }
}

export const calcCalender = (year:number|null , dateSource:any|null) => {
    const calender = []
    const date = calcDate(year , dateSource)
    const firstDate = getFirstDate(date.getYear , date.getMonth)
    const lastDate = getLastDate(date.getYear , date.getMonth)
     let dayData = firstDate.getFirstDay
     for(let i = 0; i < dayData; i++){
         let empty = {}
         calender.push(empty)
     }
     for(let i = firstDate.getFirstDate; i <= lastDate.getLastDate; i ++){
         let createOneDay = {
            date:0,
            day:""
         }
          createOneDay.date = i
          createOneDay.day = week[dayData%7]
         calender.push(createOneDay)
         dayData++
     }
    const row = Math.ceil(calender.length/7)
    return{
        calender,
        row
    }
}

export const getFirstDate = (firstYear:any , month:any) => {
    const calcDate = new Date(firstYear, month, 1)
    const getFirstDay = calcDate.getDay() 
    const getFirstDate = calcDate.getDate()
    return {
        getFirstDay,
        getFirstDate
    };
}
export const getLastDate = (lastYear:any , month:any) => {
    const calcDate =new Date(lastYear, month + 1, 0);
    const getLastDay = calcDate.getDay()
    const getLastDate = calcDate.getDate() 
    return {
        getLastDay,
        getLastDate
    }
}


export const CalcOneMonth = (year:number|null , date:any|null) => {
    const result = calcCalender(year ,date)
    return{
        result,
    }
}

