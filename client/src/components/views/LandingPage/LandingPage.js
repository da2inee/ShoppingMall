import React, { useEffect,useState } from 'react'
import axios from "axios";
import Meta from 'antd/lib/card/Meta';
import {Card} from 'antd';

function LandingPage() {
    const [Products,setProducts] = useState([])
    useEffect(() => {
        axios.post('/api/product/products')
        .then(response => {
            if(response.data.success) { 
                setProducts(response.data.productInfo)
            } else{
                alert("샘플들을 가져오는데 실패했습니다.")
            }
        })
    },[])

    const renderCards = Products.map((product,index) => {
        return <Card 
        key ={index}
        cover={<img src={`http://localhost:5000/${product.images[0]}`}/>}>
            <Meta
            title ={product.title}
            description={`${product.price}`}
            />  sdsd
        </Card>
    },)

    return (
        
        <div style = {{width:'75%',margin:'3rem auto'}}>
            <div style={{textAlign:'center'}}>
                <h2>상품들</h2>
            </div>
            {renderCards}
            <Card>dfd</Card>
            
        </div>
        
    )
}

export default LandingPage
