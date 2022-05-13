import Header from "./Header.js";
import Footer from "./Footer";

export default function Questions() {

    return (
        <main>
            <div>
                <Header/>
            </div>
            <div className="content-questions">
                <button className="question-button"><span>Pergunta 1</span> <ion-icon name="play-outline"></ion-icon></button>
                <button className="question-button"><span>Pergunta 2</span> <ion-icon name="play-outline"></ion-icon></button>
                <button className="question-button"><span>Pergunta 3</span> <ion-icon name="play-outline"></ion-icon></button>
                <button className="question-button"><span>Pergunta 4</span> <ion-icon name="play-outline"></ion-icon></button>
            </div>
            <div>
                <Footer/>
            </div>
        </main>
    );
}

