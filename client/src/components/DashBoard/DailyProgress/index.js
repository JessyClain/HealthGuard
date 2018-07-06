import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    marginTop: 11,
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',

  },
  content: {
    flex: '1 0 auto',
  },
  button: {
    
  },
  input: {
    display: 'none',
  },
  divStyle: {
    padding: 14,
  },
  infoButton: {
    minWith: 0,
  },
  root: {
    flexGrow: 1,
  },

});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <div className={classes.divStyle}>

        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <Typography variant="headline">Water Intake</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button className={classes.infoButton}>
                  <InfoIcon />
                </Button>
              </Grid>
              <Grid item xs={6}>
                  <Button variant="contained" color="primary" aria-label="add" className={classes.button}>
                  Add
                    <AddIcon />
                  </Button>
              </Grid>
              <Grid item xs={6}>
               <Typography variant="headline">Glasses: 2</Typography>
              </Grid>
            </Grid>
            </CardContent>
          </div>
        </Card>



      <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <Typography variant="headline">Nutrition</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button className={classes.infoButton}>
                  <InfoIcon />
                </Button>
              </Grid>
              <Grid item xs={6}>
                  <Button variant="contained" color="primary" aria-label="add" className={classes.button}>
                  Add
                    <AddIcon />
                  </Button>
              </Grid>
              <Grid item xs={6}>
               <Typography variant="headline">Nutrition Points: 4</Typography>
              </Grid>
            </Grid>
            </CardContent>
          </div>
        </Card>

      <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <Typography variant="headline">Exercise</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button className={classes.infoButton}>
                  <InfoIcon />
                </Button>
              </Grid>
              <Grid item xs={6}>
                  <Button variant="contained" color="primary" aria-label="add" className={classes.button}>
                  Add
                    <AddIcon />
                  </Button>
              </Grid>
              <Grid item xs={6}>
               <Typography variant="headline">Hours Excercised: 1</Typography>
              </Grid>
            </Grid>
            </CardContent>
          </div>
        </Card>

      <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <Typography variant="headline">Weight</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button className={classes.infoButton}>
                  <InfoIcon />
                </Button>
              </Grid>
              <Grid item xs={6}>
                  <Button variant="contained" color="primary" aria-label="add" className={classes.button}>
                  Add
                    <AddIcon />
                  </Button>
              </Grid>
              <Grid item xs={6}>
               <Typography variant="headline">Current Weight: 180 lbs</Typography>
              </Grid>
            </Grid>
            </CardContent>
          </div>
        </Card>




    </div>


  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);