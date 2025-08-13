import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Detail from "./pages/Detail.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Member from "./pages/Member.jsx";
import Location from "./pages/Location.jsx";
import Event from "./pages/Event.jsx";
import Event1 from "./pages/Event1.jsx";
import Event2 from "./pages/Event2.jsx";

export default function App() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}>
                        <Route path="member" element={<Member />} />
                        <Route path="location" element={<Location />} />
                    </Route>
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/event" element={<Event />}>
                        <Route path="one" element={<Event1 />} />
                        <Route path="two" element={<Event2 />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
        </>
    );
}
