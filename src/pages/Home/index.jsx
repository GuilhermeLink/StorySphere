import React from 'react';
import {
  HomeWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  FeaturesSection,
  Feature,
  FeatureIcon,
  FeatureText,
  HeroImage,
  Footer,
  PageContent
} from './styled';
import Add from '../../assets/add_circle.png';
import Header from '../../components/Header';
import Book2 from '../../assets/books2.png';

const Home = ({ handleLogout }) => {
  return (
    <PageContent>
      <Header handleLogout={handleLogout} />
      <HomeWrapper>
        <HeroSection>
          <div>
            <HeroTitle>Explore a Universe of Stories</HeroTitle>
            <HeroSubtitle>Manage your readings easily and enjoyably</HeroSubtitle>
          </div>
          <div>
            <HeroImage src={Book2} alt="Books" />
          </div>
        </HeroSection>

        <FeaturesSection>
          <Feature>
            <FeatureIcon src={Add} alt="add icon" />
            <FeatureText>Create and edit your favorite stories</FeatureText>
          </Feature>

          <Feature>
            <FeatureIcon src={Add} alt="add icon" />
            <FeatureText>Organize your collection of books and manga</FeatureText>
          </Feature>

          <Feature>
            <FeatureIcon src={Add} alt="add icon" />
            <FeatureText>Share your recommendations with fellow readers</FeatureText>
          </Feature>
        </FeaturesSection>

        <Footer>© 2024 StorySphere. All rights reserved.</Footer>
      </HomeWrapper>
    </PageContent>
  );
};

export default Home;