import axios from "axios";


export default class ProductService{

    // CONNECT TO DATABASE HOST WITH AXIOS TO TAKE INFO
    
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall"); 
    }

    getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName=" + productName);
        // return axios.get(`http://localhost:8080/api/products/getByProductName?productName= ${productName}`);
    }
    

    getByProductId(productId){
       return axios.get("http://localhost:8080/api/products/getByProductId?productId=" + productId);

    }

    getByUnitPrice(unitPrice){
        return axios.get("http://localhost:8080/api/products/getByUnitPrice?unitPrice=" + unitPrice);
        
     }
}