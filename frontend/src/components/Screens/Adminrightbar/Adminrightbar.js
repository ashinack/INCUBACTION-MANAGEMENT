import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Adminhome from '../Landing/Adminhome';
import Adminheader from '../../header/Adminheader';
import Approved from '../Managestatus/Approved';
import Processing from '../Managestatus/Processing'




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Adminheader/>
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Application List" {...a11yProps(0)} />
                <Tab label="Approved List" {...a11yProps(1)} />
                <Tab label="Processing List" {...a11yProps(2)} />
                    <Tab label="item four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Adminhome/>
                </TabPanel>
            <TabPanel value={value} index={1}>
               <Approved/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Processing/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                   
            </TabPanel>
            {/* <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel> */}
        </Box>
        </div>
    );
}
