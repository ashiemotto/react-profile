import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import img1 from '../assets/techbook.png'
import '../style/card.css'
const CardOne = () => (
  <Card>
    <Image src={img1} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Techbook Website</Card.Header>
      <Card.Meta>Created 2021</Card.Meta>
      <Card.Description>
        Techbook is a social media Website for people in the tech industry
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
      <a href="https://github.com/ashiemotto/techbook" target="_blank">Github Repository</a>
      <br></br>
      <a href="https://techbook2021.herokuapp.com/" target="_blank">Techbook Website</a>

    </Card.Content>
  </Card>
 
)

export default CardOne;