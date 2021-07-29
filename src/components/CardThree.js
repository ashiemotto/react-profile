import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import img1 from '../assets/screen.png'
const CardThree = () => (
  <Card>
    <Image src={img1} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Leftover Variables</Card.Header>
      <Card.Meta>Created 2021</Card.Meta>
      <Card.Description>
        A website created to track food in your fridge and pantry that can suggest recipes 
        based on the ingredients you have on hand and by expiry date.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
          <a href='https://github.com/ashiemotto/left-over-variables' target="_blank">Github Repository</a>
          <br></br>
          <a href="https://ashiemotto.github.io/left-over-variables/" target="_blank">Leftover Variables Webpage</a>

    </Card.Content>
  </Card>
 
)

export default CardThree;