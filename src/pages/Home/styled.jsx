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
  margin: 0 auto; 
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%; 
  background-color: #f1c40f;
  color: #000000;
  text-align: center;
`;

export const HeroImage = styled.img`
  width: 100%; 
  max-width: 500px;  
  height: auto;
  object-fit: contain;
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
  background-color: #111;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
  width: 100%; 
  margin: 0 auto; 
`;

export const FeatureBox = styled.div`
  padding: 80px 20px;
`;

export const ComicImage = styled.img`
  width: 100%; 
  max-width: 500px; 
  border-radius: 5%;
  height: auto; 
`;

export const FeatureIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 50%;
`;

export const FeatureText = styled.p`
  font-size: 1.4rem;
  color: #fff;
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 20px 0;
  background-color: #6f6f6f;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
`;
