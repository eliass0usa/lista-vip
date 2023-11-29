import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Footer() {
  return (
    <Card sx={{ marginTop: 2, backgroundColor: '#f5f5f5' }}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          VIP Project - {new Date().getFullYear()}
          {'.'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Footer;