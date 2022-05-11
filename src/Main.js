import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Main() {
    return (
        <div className="conteiner-main">
            <main>
                <div className="content">
                    <Stories />
                    <Posts />
                </div>
            </main>
            <Sidebar />
        </div>
    );
}