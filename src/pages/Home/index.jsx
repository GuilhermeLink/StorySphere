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
  PageContent,
  ComicImage,
  FeatureBox
} from './styled';
import Add from '../../assets/add_circle.svg';
import Header from '../../components/Header';
import Book2 from '../../assets/books2.png';
import Comic from '../../assets/comics.png';

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
          <HeroImage src={Book2} alt="Books" />
        </HeroSection>

        <FeaturesSection>
          <div>
            <ComicImage src={Comic} alt="Comic" />
          </div>
          <FeatureBox>
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
          </FeatureBox>
        </FeaturesSection>

        <Footer>© 2024 StorySphere. All rights reserved.</Footer>
      </HomeWrapper>
    </PageContent>
  );
};

export default Home;