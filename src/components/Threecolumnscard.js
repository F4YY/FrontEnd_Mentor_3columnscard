import React from 'react';
import { Attribution, AttributionA, Styled3columnscard } from './styled/3columnscard.styled';
import { Container } from './styled/Container.styled';
import sedans from './images/icon-sedans.svg';
import suvs from './images/icon-suvs.svg';
import luxury from './images/icon-luxury.svg';
import { Card } from './Card';

const cards = [
  {
    icon: sedans,
    title: 'sedans',
    bgcolor: 'var(--Bright-orange)',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    bordrads:{
      desktop:{
        topleft :'8px',topright :'0',bottomright :'0',bottomleft :'8px',
      },
      mobile:{
        topleft:'8px',topright:'8px',bottomright:'0',bottomleft:'0'
      }
    }
  },
  {
    icon: suvs,
    title: 'suvs',
    bgcolor: 'var(--Dark-cyan)',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    bordrads:{
      desktop:{
        topleft :'0',topright :'0',bottomright :'0',bottomleft :'0',
      },
      mobile:{
        topleft:'0',topright:'0',bottomright:'0',bottomleft:'0'
      }
    }
  },
  {
    icon: luxury,
    title: 'luxury',
    bgcolor: 'var(--Very-dark-cyan)',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    bordrads:{
      desktop:{
        topleft :'0',topright :'8px',bottomright :'8px',bottomleft :'0',
      },
      mobile:{
        topleft:'0',topright:'0',bottomright:'8px',bottomleft:'8px'
      }
    }
  },
];

export const Threecolumnscard = () => {
  return (
    <Container>
      <Styled3columnscard>
        {cards.map((info)=>
          <Card
            key={info.title}
            icon={info.icon}
            title={info.title}
            bgcolor={info.bgcolor}
            description={info.description}
            bordrads={info.bordrads}
          />
        )}
      </Styled3columnscard>
      <Attribution>
      <AttributionA>
                <h4>Challenge by<a href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | 3 columns preview card.</a></h4>
            </AttributionA>
            <AttributionA>
                <h4>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></h4>
            </AttributionA>
        </Attribution>
    </Container>
  )
}
