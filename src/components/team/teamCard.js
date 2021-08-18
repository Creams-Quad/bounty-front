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
                image="https://thumbs-prod.si-cdn.com/dOgDrtOszaZn_DGhZAiv3rd4CA4=/fit-in/1600x0/https://public-media.si-cdn.com/filer/Chicken-Conquerer-631.jpg"
                title="Sunny Lee"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Sunny Lee
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Software Developer specializing in JavaScript and interested with front-end technologies.
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
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8708b282-11b3-4bfc-ba55-a69569fa7d4f/d7uytq-80cf788a-0523-4fc1-ad95-e9574010bee4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg3MDhiMjgyLTExYjMtNGJmYy1iYTU1LWE2OTU2OWZhN2Q0ZlwvZDd1eXRxLTgwY2Y3ODhhLTA1MjMtNGZjMS1hZDk1LWU5NTc0MDEwYmVlNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gPnvuVy23dylFhV-eaHfTi_4EJdEzrDcvyGH3zjaS8M"
            title="Tek Jones"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Tek Jones
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                *Description goes here*
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {/* Enter your GitHub link and LinkedIn */}
            <Button href="https://github.com/Tekthree" target="_blank" size="small" color="primary">
                My GitHub
            </Button>
            <Button  href="" target="_blank"size="small" color="primary">
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
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4yoNZ76zuhUm_OD7LZtF2ObCjDUHyHSqElO6wfsthsvxBON_xw3-eo73U6ELeDMuN6U&usqp=CAU"
            title="Louis Lessegue"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Louis Lessegue
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                *Description goes here*
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {/* Enter your GitHub and LinkedIn */}
            <Button href="https://github.com/mrloulass" target="_blank" size="small" color="primary">
            My GitHub
            </Button>
            <Button  href="" target="_blank"size="small" color="primary">
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
            image="https://images.fineartamerica.com/images-medium-large-5/madonna-and-child-kirsten-beitler.jpg"
            title="Cullen Sharp"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Cullen Sharp
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                *Description goes here*
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button href="https://github.com/CullenSharp" target="_blank" size="small" color="primary">
            My GitHub
            </Button>
            <Button href="" target="_blank" size="small" color="primary">
            My LinkedIn
            </Button>
        </CardActions>
        </Card>
        </div>
    );
}