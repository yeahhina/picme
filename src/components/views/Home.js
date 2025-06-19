import { useNavigate } from 'react-router-dom';
function Home(){
    const navigate = useNavigate();
    return (
        <div className="home">
            <button onClick={()=> navigate('/camera')}>CLICK HERE to START</button>
        </div> 
    )
}
export default Home;