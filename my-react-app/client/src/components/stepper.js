import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Paper } from '@mui/material';

const WizardTimeline = () => {
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const topics = ['Timeline', 'Stats', 'Duels'];

  // Function to render content based on the selected topic
  const renderContent = () => {
    switch (selectedTopic) {
      case 'Timeline':
        return <p>Content for the Timeline topic goes here.</p>;
      case 'Stats':
        return <p>Content for the Stats topic goes here.</p>;
      case 'Duels':
        return <p>Content for the Duels topic goes here.</p>;
      default:
        return null;
    }
  };

  return (
    <div className='main-comp'>
      <Grid container spacing={2} style={{textAlign: 'center'}}>
        {topics.map((topic, index) => (
          <Grid item key={index} xs={4}>
            <Paper
              onClick={() => handleTopicClick(topic)}
              style={{ cursor: 'pointer', backgroundColor: selectedTopic === topic ? 'lightblue' : 'white' }}
            >
              {topic}
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedTopic}</DialogTitle>
        <DialogContent>
          {renderContent()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WizardTimeline;
