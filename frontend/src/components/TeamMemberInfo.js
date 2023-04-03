import { Avatar, Card, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import teamMembers from './teamMembers';

const TeamMemberInfo = () => {
    return (
        <>
            {teamMembers.map(tm => (
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ minWidth: 250 }} elevation={3}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Avatar
                                src={'https://i.pravatar.cc/300'}
                                alt='Image of a person'
                                sx={{ width: '120px', height: '120px', margin: 'auto' }}
                            />
                            <Typography variant="h5" marginTop="12px">
                                {tm.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {tm.position}
                            </Typography>
                        </CardContent>
                        <Divider />
                        <CardActions
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <a href={tm.github}>
                                <GitHubIcon sx={{ color: '#284b63', fontSize: '28px', marginRight: '7px' }} />
                            </a>
                            <a href={tm.linkedin}>
                                <LinkedInIcon sx={{ color: '#284b63', fontSize: '28px', marginRight: '7px', marginLeft: '7px' }} />
                            </a>
                            <a href={tm.twitter}>
                                <TwitterIcon sx={{ color: '#284b63', fontSize: '28px', marginLeft: '7px' }} />
                            </a>
                        </CardActions>
                    </Card>
                </Grid>
            ))
            }
        </>
    )
}

export default TeamMemberInfo