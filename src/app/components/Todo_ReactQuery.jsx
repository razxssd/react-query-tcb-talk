import {useQuery} from "@tanstack/react-query";
import {endpoint} from "../core/const.js";

export const Todo_ReactQuery = ({todoId}) => {
    const { isLoading, data, error } = useQuery({
        queryKey: ['todo', todoId],
        queryFn: () =>
            fetch(`${endpoint}/${todoId}`).then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }
                return res.json()
            }),
    })

    return <div>{
        isLoading ? <span>Loading...</span> :
            error ? <h3>Some ERROR happened!</h3> :
                <div>Todo title rendered with React Query: <strong>{data.title}</strong></div>
    }</div>
}
