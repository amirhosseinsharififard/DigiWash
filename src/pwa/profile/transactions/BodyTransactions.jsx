import { Box,  Typography } from '@mui/material';

const BodyTransactions = () => {
    return (
        <>
         <Box display="flex" justifyContent="center">
            <Typography variant='body2' fontSize="16px" fontFamily="Vazir" color="rgb(116, 116, 116)" fontWeight="bold"> تراکنشی ثبت نشده است</Typography>
         </Box>   
        </>
    );
}

export default BodyTransactions;
