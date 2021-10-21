import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductDetail() {

  let { name } = useParams(); // PARAMETRELERİ OBJE OLARAK VERİR

  // aRRAY []
  // oBJECT {}
  
  const [product, setProduct] = useState({});

  useEffect(()=>{
    let productService = new ProductService()
    productService.getByProductName(name).then(result=>setProduct(result.data.data))
  },[])


  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMaGF8lf7RbiZBnbqQW63hI-WTHPBI768Og&usqp=CAU"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Header>${product.unitPrice}</Card.Header>
            <Card.Description>
              Ürün ayrıntıları ve detayları
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Sepete Ekle
              </Button>
              <Button basic color="red">
                Sepetten Çıkar
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}