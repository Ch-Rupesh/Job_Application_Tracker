import React from 'react';
import Head from 'next/head'; // If using Next.js
import styled, { createGlobalStyle } from 'styled-components'; // If using styled-components

// Global Styles (Equivalent to the large <style> block)
const GlobalStyle = createGlobalStyle`
  /* ... (All the CSS from the original <style> tag goes here) ... */
  html {
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
  }
  /* ... (rest of the css) */
`;

const Container = styled.div`
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  height: 42px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: center;
  padding: 0 12px;
  outline: none;
  cursor: pointer;
  transition-duration: 200ms;
  transition-property: all;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: "Inter","Roboto Flex";
  font-weight: 500;
  background: #1F8268;
  border: 1px solid #1F8268;
  width: auto;
  padding: 0 12px;
  height: 40px;
  border: 2px solid #1F8268;

  &:hover {
    box-shadow: 0px 4px 6px -4px rgba(24,39,75,0.12), 0px 8px 8px -4px rgba(24,39,75,0.08);
    background: transparent;
    color: #1F8268;
  }

  &:disabled {
    background: #dae0e5;
    border: none;
  }
`;

const SmallButton = styled(Button)`
    padding: 0 8px;
    border-radius: 2px;
    height: 32px;
    font-weight: 500;
`;


const Navbar = styled.nav`
  display: block;
  background: #fff;
  width: 100%;
  padding: 15px 1rem;
  z-index: 20;
  position: sticky;
  top: -2px;
  transition: 300ms all;
  border-bottom: 1px solid #e4e4e4;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNavbar = styled.nav`
  display: none;
  background: #fff;
  width: 100%;
  padding: 8px 16px;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid #e1e1e1;

  @media (max-width: 767px) {
    display: block;
  }
`;

const ApnaLogoContainer = styled.div`
  svg {
    height: 36px;
    width: 36px;
  }
`;


const HomePage = () => {
  return (
    <div>
      <Head>
        {/* ... (All the meta tags, link tags, and script tags from the original <head> go here) ... */}
        <title>Apna.co: Hire Candidates | Post Job | Search Jobs Online</title>
        <meta name="description" content=" " /> {/* Fix this: Add a proper description */}
        {/* ... */}
      </Head>
       <GlobalStyle /> {/* Include the global styles */}

      <Navbar>
          <Container>
            {/* Navbar content here */}
            <ApnaLogoContainer>
                {/* Apna Logo Here */}
            </ApnaLogoContainer>
            <Button>Post a Job</Button>
            <SmallButton>Login</SmallButton>
          </Container>
      </Navbar>

      <MobileNavbar>
          {/* Mobile Nav Content Here */}
      </MobileNavbar>

      {/* ... (The rest of your page content goes here) ... */}
      <Container>
        {/* Main Content of the Page */}
      </Container>
    </div>
  );
};

export default HomePage;