import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div style={{
                display: 'flex',
                justifyContent: 'center'
        }}>

            <Card style={{
                    width: '40vh',
                    margin: '1%'
                }} 
                className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://avatars.githubusercontent.com/u/5589323?v=4"
                title="Sunny Lee"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Sunny Lee
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    I'm Sunny Lee, and I am an explorer of the developer world. I like to see how new things work and experiment with different technologies and a cominations of technologies. Currently, I am emphasizing in JavaScript but, will explore other languages.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href="https://github.com/sunny-lee3" target="_blank"  size="small" color="primary">
                My GitHub
                </Button>
                <Button href="https://www.linkedin.com/in/sunnylee3/" target="_blank" size="small" color="primary">
                My LinkedIn
                </Button>
            </CardActions>
            </Card>

            <Card style={{
                width: '40vh',
                margin: '1%'
                }}  
                className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://avatars.githubusercontent.com/u/63610157?v=4"
            title="Tek Jones"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Tek Jones
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            I'm an Air Force Veteran gone full stack developer, with an endless passion to surround myself with clean code and great design. After a high-pressure military career, I took that discipline and applied it to a visual communications program at the International College in Bangkok. After 15+ years in many design leadership roles and teamwork settings, I'm expanding my skill sets into web and software development. I think my experience in Design principles is a big advantage in helping me distill down the most impactful development features needed to make the most effective and engaging end products.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {/* Enter your GitHub link and LinkedIn */}
            <Button href="https://github.com/Tekthree" target="_blank" size="small" color="primary">
                My GitHub
            </Button>
            <Button  href="https://www.linkedin.com/in/tek-jones-54b39562/" target="_blank"size="small" color="primary">
            My LinkedIn
            </Button>
        </CardActions>
        </Card>

        <Card style={{
                    width: '40vh',
                    margin: '1%'
                }} 
                className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://avatars.githubusercontent.com/u/74191805?v=4"
            title="Louis Lassegue"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Louis Lassegue
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            I am Louis Lassegue, a Full-Stack Software Developer. After 15 years in a retail environment specializing in inventory, logistics, and customer service. I’ve learned how to lead a diverse team in different environments. I’m currently working to improve my skills in coding. I would like to work for a company that focuses on providing solutions to everyday problems. Additionally, it is important that the organization prides itself on creating an environment of inclusion and that encourages divergent thinking for solutions and ideas.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {/* Enter your GitHub and LinkedIn */}
            <Button href="https://github.com/mrloulass" target="_blank" size="small" color="primary">
            My GitHub
            </Button>
            <Button  href="https://www.linkedin.com/in/louis-lassegue-4269531bb" target="_blank"size="small" color="primary">
            My LinkedIn
            </Button>
        </CardActions>
        </Card>

        <Card style={{
                width: '40vh',
                margin: '1%'
                }}  
            className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://avatars.githubusercontent.com/u/38057919?v=4"
            title="Cullen Sharp"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Cullen Sharp
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Fullstack Web Developer with hands-on experience designing and developing web applications from concept to release. Motivated self-starter focused on working at the intersection of art, design, and technology to create immersive and intuitive user experiences.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button href="https://github.com/CullenSharp" target="_blank" size="small" color="primary">
            My GitHub
            </Button>
            <Button href="https://www.linkedin.com/in/cullensharp/" target="_blank" size="small" color="primary">
            My LinkedIn
            </Button>
        </CardActions>
        </Card>
        </div>
    );
}