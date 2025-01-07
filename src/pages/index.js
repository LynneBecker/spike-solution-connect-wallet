import React from "react";

import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: calc(100vh - 90px);
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  width: 100%;
  max-width: 1200px;
  margin: 2rem;
  
  h1 {
    font-size: 2.5rem;
    color: #1a2a6c;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    color: #4a5568;
    line-height: 1.8;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.primary {
    background: linear-gradient(135deg, #1a2a6c, #b21f1f);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid #1a2a6c;
    color: #1a2a6c;
    
    &:hover {
      background: rgba(26, 42, 108, 0.1);
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Card>
        <h1>Welcome to ReOwn</h1>
        <p>Your gateway to secure and transparent digital asset management</p>
        <ButtonGroup>
          <Button className="primary">Get Started</Button>
          <Button className="secondary">Learn More</Button>
        </ButtonGroup>
      </Card>
    </HomeContainer>
  );
};

export default Home;



