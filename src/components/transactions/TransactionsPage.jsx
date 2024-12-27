import { Box } from '@mui/material';
import BodyTransactions from './BodyTransactions';
import HeaderTransactions from './HeaderTransactions';

const Transactions = () => {
    return (
        <Box >
            <HeaderTransactions pageAddress="تراکنش های اعتباری"/>
            <BodyTransactions />
        </Box>
    );
}

export default Transactions;
