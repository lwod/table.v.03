
// const socket = new WebSocket('ws://localhost:5000/');
const socket = new WebSocket('wss://lwod.herokuapp.com/');


const App = () => {
    
    
    
    return (
        <div className={'div'}>
            <button onClick={()=>{socket.send(JSON.stringify({message:'some str wss'}))}}>Send data</button>
        </div>
    )
}

export default App