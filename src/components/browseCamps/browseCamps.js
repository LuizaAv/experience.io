import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { bootcamps } from "../../Store/actionstest";


function BrowseBootcamps(){
// const [data, setData] = useState({})
    const dispatch = useDispatch()

    const x = useSelector(state=>state?.bootcamps?.data)

    
    useEffect (()=>{
        dispatch(bootcamps())
    },[dispatch])

    
    return (
        <div className="mainDiv">
            <div>
                <h2></h2>
            </div>
            {/* {console.log(x && x.data.data)} */}
           {
               x && x?.data?.data.map(dataitem => {
                    return (
                        <div >
                            <h3 style = {{color: "#E05433"}}>{dataitem.name}</h3>
                            <p>{dataitem.address}</p>
                            <p>{`${dataitem.careers},`}</p>
                        </div>
                    )
                })
           }
        </div>
    )
}

export default BrowseBootcamps

