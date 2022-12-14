import React from 'react'

import Stack from "@mui/material/Stack"
import Tooltip from "@mui/material/Tooltip"
import {styled} from "@mui/material/styles"
import { afterLine } from '@utils'
import {
 AiFillLinkedin,
 AiOutlineInstagram,
 AiOutlineTwitter,
} from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'

function SocialMedias() {
 const AfterLine = afterLine({ width: '1px', height: '200px' })
 const StackDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  transition: 'all  300ms ease-in',
  '&:hover': {
   transform: 'translateY(-3px)',
   color: `${theme?.palette?.primary?.contrastText}`,
  },
 }))
 const socialsMedia = [
  {
   id: '1',
   href: 'https://github.com/sopranoelfuego',
   name: 'github',
   icon: <FiGithub />,
  },
  {
   id: '2',
   href: 'https://www.instagram.com/ishimwe.aubin/',
   name: 'instagram',
   icon: <AiOutlineInstagram />,
  },
  {
   id: '3',
   href: 'https://twitter.com/aubin.ishimwe',
   name: 'twiiter',
   icon: <AiOutlineTwitter />,
  },
  {
   id: '4',
   href: 'https://www.linkedin.com/in/aubin-ishimwe-308a7a206',
   name: 'linkedin',
   icon: <AiFillLinkedin />,
  },
 ]
 return (
  <Stack
   direction="column"
   alignItems="center"
   spacing={3}
   sx={{
    position: 'fixed',
    bottom: 0,
    left: 50,
    display: { xs: 'none', sm: 'block', md: 'flex' },
   }}
  >
   {socialsMedia?.map((value, key) => (
    <Tooltip key={key} title={value?.name}>
     <StackDiv>{value?.icon}</StackDiv>
    </Tooltip>
   ))}
   <Stack>
    <AfterLine />
   </Stack>
  </Stack>
 )
}

export default SocialMedias
