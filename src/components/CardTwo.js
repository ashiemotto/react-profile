import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import img1 from '../assets/Scratch.png'
const CardTwo = () => (
  <Card>
    <Image src={img1} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Scratch Game</Card.Header>
      <Card.Meta>Created 2021</Card.Meta>
      <Card.Description>
        Game I created using Scratch platform
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
      <a href="https://scratch.mit.edu/projects/482652740" target="_blank">Scratch Cat and Mouse</a>

    </Card.Content>
  </Card>
 
)

export default CardTwo;