import styled from 'styled-components';

export const PageContent = styled.div`
  width: 100%; 
  min-height: 100vh;
  margin: 0 auto; 
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
  padding: 0 20px; 
  margin: 0 auto; 
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
`;

export const HeroImage = styled.img`
  width: 100%; 
  max-width: 400px; 
  height: auto; 
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 40px;
  font-weight: 400;
`;

export const FeaturesSection = styled.section`
  width: 100%;
  padding: 80px 20px; 
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  width: 80%; 
  margin: 0 auto; 
`;

export const FeatureIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const FeatureText = styled.p`
  font-size: 1.4rem;
  color: #fff;
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 40px 0;
  background-color: #000;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
`;