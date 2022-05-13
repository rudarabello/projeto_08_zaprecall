import logo from "./assets/img/logo.png";


export default function Init({setTela}) {

  
      
    return (
        <main className="content-initial">
            <div className="logo"><img src={logo} alt="logoTela"/></div>
            <h1 className="initial-recall">Zap Recall</h1>
            <button className="initial-button" onClick={()=>setTela('tela')}>Iniciar Recall!!!</button>
        </main>
    );
}