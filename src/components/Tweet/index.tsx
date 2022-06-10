import React from 'react';

 import  {Container, Retweeted, NasaIcon, Body, 
          Avatar, Content, Header,
          Dot, Description,ImageContent, Icons, 
          Status, ComentIcon, RetweetIcon, LikeIcon  } from './styles';

const Tweet: React.FC = () => {
  return (
      < Container>
        <Retweeted>
            <NasaIcon/>
            Você retweetou
        </Retweeted>
        <Body>
            <Avatar/>
        </Body>
        <Content>
            <Header>
               <strong> Nasa </strong> 
               <span> @nasa </span>
               <Dot/>
                <time>01 de jun</time>
            </Header>
            <Description> We are Nasa 🚀</Description>

            <ImageContent/> 
            <Icons>
                <Status>
                    <ComentIcon/>
                    180
                </Status>
                <Status>
                    <RetweetIcon/>
                    100
                </Status>
                <Status>
                    <LikeIcon/>
                    1800
                </Status>
            </Icons>
        </Content>


      </Container>
  )
  
}

export default Tweet;
