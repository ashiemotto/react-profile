import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import img1 from '../assets/Weather.png'
const CardFour = () => (
  <Card>
    <Image src={img1} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Weather Dashboard</Card.Header>
      <Card.Meta>Created 2021</Card.Meta>
      <Card.Description>
        A website created to provide the current weather forecast and long range forecast 
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
        <a href='https://github.com/ashiemotto/Weather-dashboard' target="_blank">Github Repository</a>
        <br></br>
        <a href="https://ashiemotto.github.io/Weather-dashboard/" target="_blank">Weather-dashboard</a>

    </Card.Content>
  </Card>
 
)

export default CardFour;