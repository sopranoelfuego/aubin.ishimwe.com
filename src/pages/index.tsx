import { Header } from '@components'
import { Box, useTheme } from '@mui/material'
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import { Layout } from '@layout'
import { Hero } from '@components'
import AboutMe from '@components/AboutMe'
import ContactMe from '@components/ContactMe'
import Projects from '@components/Projects'

const Home = () => {
 const theme = useTheme()
 return (
  <>
   <NextSeo
      title="aubin ishimwe"
      
      description="hello my name is aubin ishimwe am a web developper and this is my personal portefolio and blog included"
    //   canonical="https://www.canonical.ie/"
    additionalLinkTags={[
        {
          rel: 'icon',
          href: 'logo.png',
        }]}
    twitter={{
        handle: '@aubinishimwe2',
        site: '@aubinishimwe2',
        cardType: 'summary_large_image',
      }}
    />
   <Box
    sx={{
     bgcolor: `${theme?.palette?.background?.default}`,
     fontFamily: 'monospace',
    }}
   >
    <Header />
    <Layout>
     <Hero />
     <AboutMe />
     <Projects />
     <ContactMe />
    </Layout>
   </Box>
  </>
 )
}

export default Home
