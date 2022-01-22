import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';


const ProgressCard = (props) => (
  <Card style={{width:'20rem',height:'10rem'}}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h5"
            sx={{ justifyContent: 'space-between' }}
          >
           {props.text.lastWOD}
           <Typography
           color="textPrimary"
            gutterBottom
            variant="h6"
          >
           {props.info.title}
          
          </Typography>
          </Typography>
          
          <Typography
            color="textSecondary"
            variant="h5"
          >
         {props.text.lastTime}
        
         <Typography
            color="textPrimary"
            variant="h5"
          >
      {props.info.how}
          </Typography>
          </Typography>
        </Grid>
      
      </Grid>
    </CardContent>
  </Card>
);

export default ProgressCard;
