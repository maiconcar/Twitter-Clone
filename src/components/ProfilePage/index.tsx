import React from 'react';
import Feed from '../Feed';

import { Container,
         Banner,
         Avatar,
         ProfileData,
         LocationIcon, 
         CakeIcon,
         Followage,
         EditButton
         } from './styles';

const ProfilePage: React.FC = () => {
  return (
        <Container>
          <Banner>
            <Avatar />
          </Banner>
    
          <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
    
            <h1> Maicon Cardoso </h1>
            <h2> @maicon_cardoso</h2>
    
            <p>
              Developer
            </p>
    
            <ul>
              <li>
                <LocationIcon />
                Curitiba, Brasil
              </li>
              <li>
                <CakeIcon />
                Nascido(a) em 23 de outubro de 1994
              </li>
            </ul>
    
            <Followage>
              <span>
                seguindo <strong>94</strong>
              </span>
              <span>
                <strong> 672</strong> seguidores
              </span>
            </Followage>
          </ProfileData>

          <Feed />

          </Container>
          )
}

export default ProfilePage;
