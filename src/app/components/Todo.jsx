import {useEffect, useState} from "react";
import {endpoint} from "../core/const.js";

export const Todo = ({todoId}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        let ignore = false
        setIsLoading(true)
        fetch(`${endpoint}${todoId}`)
            .then(res => res.json())
            .then(d => {
                if (!ignore) {
                    setData(d)
                    setError(undefined)
                }
            })
            .catch(e => {
                if (!ignore) {
                    setError(e)
                    setData(undefined)
                }
            })
            .finally(() => {
                if (!ignore) {
                    setIsLoading(false)
                }
            })
        return () => {
            ignore = true
        }
    }, [todoId])

   return <div>{
       isLoading ? <span>Loading...</span> :
           error ? <h3>Some ERROR happened!</h3> :
           <div>Todo title: <strong>{data.title}</strong></div>
   }</div>
}
