import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function BasicTabs() {
  const defProjects = [
    {index: 0,
    name: "Ecommerce Website",
    tags: ['Python ', 'Flask ' , 'SQLAlchemy ', 'SQL ', 'HTML ', 'CSS '],
    link: 'https://github.com/ChrisSpescha/EcommerceWebsite'
    },
    {
    index: 1,
    name: "Personal Website",
    tags: ['Javascript', 'ReactJS', 'Material UI', 'React Router', 'HTML', 'CSS'],
    link: 'https://github.com/ChrisSpescha/React_Web'
    },
    {
    index: 2,  
    name: "React Chart",
    tags: ['Javascript', 'ReactJS', 'Axios', 'HTML', 'CSS'],
    link: 'https://github.com/ChrisSpescha/react-chart'
    }
  ]
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
      <Box className='container portfolio-page'>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} orientation="vertical">
            <Tab label="Item One" />
            <Tab label="Item Two"  />
            <Tab label="Item Three"  />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>

          <CardContent className=''>
            <Typography sx={{ fontSize: 24 }}  gutterBottom>
            {defProjects[0].name}
            </Typography>
            <Typography>
            Website with user, payment gateway, and messaging functionality
            </Typography>
            <br/>
            <Typography variant="body2">
            {defProjects[0].tags}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" href={defProjects[0].link}>Source</Button>
          </CardActions>

        </TabPanel>


        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>

      </Box>  
  );
}
