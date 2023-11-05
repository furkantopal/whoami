import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './App.css';

function App() {
  return (
    <Container className="App" maxWidth="sm" sx={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ marginBottom: '10px' }}>
        Furkan Topal
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
        Software Engineer
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '30px', lineHeight: '1.6' }}>
        I have always been passionate about what I do. I think that’s the key. 
        My educational background and self-learning perseverance made me a critical thinker and diligent. 
        I strongly believe in the importance of communication and collaboration. To keep my creativity alive, 
        I easily deal with changes to learn new things and try to reinvent myself again and again. 
        I think this essence will be the vital asset to have for the next decade to keep moving forward.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        <Link href="https://www.linkedin.com/in/furkantopal/" target="_blank" rel="noopener">
          <LinkedInIcon sx={{ fontSize: 30, margin: '0 10px' }} />
        </Link>{' '}
        <Link href="https://github.com/furkantopal" target="_blank" rel="noopener">
          <GitHubIcon sx={{ fontSize: 30, margin: '0 10px' }} />
        </Link>
      </Typography>
    </Container>
  );
}

export default App;
