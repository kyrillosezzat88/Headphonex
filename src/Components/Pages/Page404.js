import React , {useContext , useEffect} from 'react'
import { shopContext } from '../../Context/ShopContext'
const Page404 = () => {
    const {setWiteNav} = useContext(shopContext);
    useEffect(()=>{
        setWiteNav(true);
    },[])
    return(
        <div className="Erorr wow fadeIn" data-wow-delay='.2s'>
            <div className="num">
                <h1>404</h1>
                <h1>404</h1>
            </div>
            <h2> Opps Page Not Found !! :( </h2>
        </div>
    )
}
export default Page404