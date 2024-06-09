import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { IconButton, SvgIcon } from '@mui/material';
interface IAccordion {
  title: string;
  content: any;
}
const svgArrow = (style: string) => {
  return (
    <svg
      width="25"
      height="15"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.5861 8.0858C18.1956 7.69528 17.5624 7.69528 17.1719 8.0858L11.879 13.3787L6.58609 8.0858C6.19556 7.69528 5.5624 7.69528 5.17187 8.0858L4.46477 8.79291C4.07424 9.18343 4.07424 9.8166 4.46477 10.2071L10.8183 16.5607C11.4041 17.1465 12.3539 17.1465 12.9396 16.5607L19.2932 10.2071C19.6837 9.8166 19.6837 9.18343 19.2932 8.79291L18.5861 8.0858Z"
      />
    </svg>
  );
};
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  //   border: `0px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  fontFamily: 'Comfortaa',
  backgroundColor: 'white',
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'white',
  flexDirection: 'row-reverse',
  padding: '0px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: '0px !important',
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({ content, title }: IAccordion) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className=" border-b-[2px] border-background-main font-[Comfortaa]  ">
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={svgArrow(
            `${expanded ? '  fill-primary ' : ' fill-background-components-arrow'}  `,
          )}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="  text-[12px] font-[Comfortaa] !m-[0px] ">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className=" bg-background-components-collapse_content text-[12px] font-[Comfortaa] !m-[0px] ">
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
