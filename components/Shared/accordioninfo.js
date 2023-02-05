import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import DividerLine from '@/components/layout/dividerLine';

const Biography = ({ biography, expand, setExpand, styles }) => {
  const classes = useStyles();
  const handleClick = () => setExpand(!expand);

  return (
    <>
      <DividerLine title="Biografíax" styles={styles} />
      <Accordion
        className={[
          classes.root,
          expand && classes.expansionPanelBackgroundActive,
        ].join(' ')}
      >
        <AccordionSummary
          className={classes.expansionPanel}
          onClick={() => handleClick()}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {expand && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ color: '#52575D' }}
              />
            </div>
          )}
          <Typography component="p" variant="body1">
            {biography}
            <br />
          </Typography>
          <Grid container justifyContent='flex-end' alignItems="center">
            <Grid item>
              <Typography
                style={{
                  display: !expand ? 'flex' : 'none',
                  alignItems: 'center',
                }}
              >
                Ver todo
                <ExpandMoreIcon />
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="p" variant="body1">
            {biography}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0px !important',
    '& .MuiAccordionSummary-content': {
      flexDirection: 'column',
    },
  },
  expansionPanelBackgroundActive: {
    boxShadow: '0px 5px 12px -5px rgba(0,0,0,0.75)',
  },
}));

export default Biography;
