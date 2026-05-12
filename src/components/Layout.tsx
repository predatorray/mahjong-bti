import React, { ReactNode } from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LanguageMenu from '../i18n/LanguageMenu';
import { useT } from '../i18n/useLangContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const t = useT();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'text.primary',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}
          >
            {t.app_title}
          </Typography>
          <LanguageMenu />
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="md"
        sx={{
          flex: 1,
          py: { xs: 3, sm: 5 },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
