import React,{useState} from "react";
import { Typography,Button,Form,Input } from "antd";
import Fileupload from "../../utils/FileUpload";
import axios from 'axios'; 

const {Title} = Typography;
const {TextArea} = Input;
const Continents = [
    {key:1,value: "Africa"},
    {key:2,value: "Europe"},
    {key:3,value: "Asia"},
    {key:4,value: "North America"},
    {key:5,value: "Africa"}
]


function UploadProductPage(props) {
    const [Title,setTitle] = useState("")
    const [Description,setDescription] = useState("")
    const [Price,setPrice] = useState(0)
    const [Continent,setContinent] = useState(1)
    const [Images,setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }
    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }
    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
    }
    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const submitHandler = (event) => {
        event.preventdefault();

        if(!Title || !Description || !Price || !Continent || !Images) {
            return alert("빈칸을 채워주세요.")
        }

        const body = {
            writer: props.user.userData._id,
            title: Title,
            description: Description,
            price: Price,
            images: Images,
            continents: Continent
        }
        axios.post("/api/product",body)
        .then(response =>{
            if(response.data.success) {
                alert("상품 업로드 성공")
                
            } else{
                alert("상품 업로드 실패")
            }
            
        })

    }

    return (
        <div style={{maxWidth: "700px", margin:"2rem auto"}}>
            <div style={{textAlign:'center', marginBottom:'2rem'}}>
                <h2>여행 상품 업로드</h2>
            </div>
            <form onSubmit={submitHandler}>

                <Fileupload refreshFuntion={updateImages}/>
                <br/> 
                <br/>
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={Title}/>
                <br/>
                <br/>
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value ={Description}/>
                <br/>
                <br/>
                <label>가격</label>
                <Input type="number" onChange={priceChangeHandler} value={Price}/>
                <br/>
                <br/>
                <select onChange ={continentChangeHandler} value={Continent}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                    <option></option>
                </select >
                <br/>
                <br/>
                <Button type="submit">
                    확인
                </Button>
                
                
            </form>
        </div>
    )
}
export default UploadProductPage;