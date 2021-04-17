
// const socket = new WebSocket('ws://localhost:5000/');
const socket = new WebSocket('wss://lwod.herokuapp.com/');


const App = () => {
    
    
    
    return (
        <div className={'div'}>
            <div onClick={()=>{socket.send(JSON.stringify({message:'some str wss'}))}}>some str: {}</div>
        </div>
    )
}

export default App