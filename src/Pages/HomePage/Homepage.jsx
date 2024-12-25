import "./style.css"
import Itemcard from '../../Components/Itemcard';
import data from './data.json'


const Homepage = () => {
    const itemData = data.data
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {itemData.map((item,index)=>{
                    return(
                        <Itemcard
                        key={index}
                    title={item.title}
                    text={item.text}
                    link={item.link}
                    buttonText={item.buttonText}
                    imageSrc={item.imageSrc}
                />
                    )
                })}
            </div>
        </div>
    )
}

export default Homepage