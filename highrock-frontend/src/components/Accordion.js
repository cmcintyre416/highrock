import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function SimpleAccordion({faq}) {
  return <Accordion className="accordion">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className="accordion-question">{faq.question}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography className="accordion-answer">
        {faq.answer}
      </Typography>
    </AccordionDetails>
  </Accordion>
}
