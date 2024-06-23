import reactLogo from '../assets/react.svg'
import './App.css'
import {Todo} from "./components/Todo.jsx";
import {Todo_ReactQuery} from "./components/Todo_ReactQuery.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient()

function App() {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>React Query Code Examples</h1>
            <div className="card">
                <Todo todoId={'1'}/>
                <Todo_ReactQuery todoId={'1'}/>
            </div>
        </QueryClientProvider>
    )
}

export default App
