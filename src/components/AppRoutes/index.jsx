import {
    BrowserRouter as Router,
    Routes,
    Route,
    HashRouter,
} from "react-router"

import Navigation from "../Navigation"
import Home from "../../pages/Home"
import CommentSystem from "../../pages/CommentSystem"
import CounterApp from "../../pages/CounterApp"
import ProductList from "../../pages/ProductList"
import TodoList from "../../pages/TodoList"
import WeatherApp from "../../pages/WeatherApp"
import ProfileCard from "../../pages/ProfileCard"
import Button from "../../pages/Button"

function AppRoutes() {
    return (
        <Router>
            <Navigation />
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<CounterApp />} />
                    <Route path="/todo" element={<TodoList />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/comments" element={<CommentSystem />} />
                    <Route path="/profile" element={<ProfileCard />} />
                    <Route path="/weather" element={<WeatherApp />} />
                    <Route path="/buttons" element={<Button />} />
                </Routes>
            </HashRouter>
        </Router>
    )
}

export default AppRoutes
