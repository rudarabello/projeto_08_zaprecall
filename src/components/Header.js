import logoPequeno from "../assets/img/logo-pequeno.png";


export default function Header() {

    return (
        <div className="header">
            <div className="logo-pequeno"><img src={logoPequeno} alt="logoPequeno" /></div>
            <span className="title"> Zap Recall</span>
        </div>
        

    );
}

