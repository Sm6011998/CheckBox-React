import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Button, Typography, Divider, Card, CardContent } from '@mui/material';
import { toast } from 'react-toastify';

const CheckboxList = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [pages, setPages] = useState([
        { name: 'Page 1', checked: false },
        { name: 'Page 2', checked: false },
        { name: 'Page 3', checked: false },
        { name: 'Page 4', checked: false }
    ]);

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setPages(pages.map(page => ({ ...page, checked: newSelectAll })));
    };

    const handlePageChange = (index) => {
        const newPages = [...pages];
        newPages[index].checked = !newPages[index].checked;
        setPages(newPages);


        if (newPages[index].checked) {
            setSelectAll(false);
        } else if (newPages.every(page => page.checked === false)) {
            setSelectAll(false);
        }
    };

    const SubmitFunc = ()=>{
        toast.success("Checkbox Data Submitted!")

    }

    return (
        <Box sx={{display:"flex",justifyContent:"center",paddingTop:"4rem",backgroundColor:"#ffedd5",height:"100%" }}>
             <Card sx={{ width:375,}}>
        <CardContent>
        <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox sx={{left:"19rem",'& .MuiSvgIcon-root': { fontSize: 30} }}
                            checked={pages?.filter((user)=>user?.checked !== true).length<1}
                            onChange={handleSelectAll}
                        />
                    }
                    label="All pages"
                />
                <Divider />
                {pages.map((page, index) => (
                    <FormControlLabel
                    label={page.name}
                        key={index}
                        control={
                            <Checkbox sx={{left:"19rem",'& .MuiSvgIcon-root': { fontSize: 30}}}
                                checked={page.checked}
                                onChange={() => handlePageChange(index)}
                            />
                        }
                        
                    />
                ))}
                <Divider />
                <Button variant="contained" onClick={SubmitFunc} sx={{ mt: 2, width: '100%',backgroundColor:"#facc15",
                    ":hover":{backgroundColor:"#fde68a"},color:"black" }}>Done</Button>
            </FormGroup>
 
        </CardContent>
  
      </Card>

        </Box>
       

       
    );
};

export default CheckboxList;
