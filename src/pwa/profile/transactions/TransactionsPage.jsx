import BodyTransactions from './BodyTransactions';
import HeaderTransactions from './HeaderTransactions';

const Transactions = () => {
    return (
        <>
            <HeaderTransactions pageAddress="تراکنش های اعتباری"/>
            <BodyTransactions />
        </>
    );
}

export default Transactions;
