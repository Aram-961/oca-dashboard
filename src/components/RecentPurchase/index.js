import cryptoItems from '../../static/Recent';
import styles from './recent.module.css';

const RecentPurchase = () => {
    const { boxContainer, RecentBox, purchaseBox, purchaseContainer, containerBox, CryptoList, coinContainer, bxHolder, } = styles;
    return (
        <div className={`${RecentBox} has-background-black2`}>
            <div>
                <h1 className='ww2 is-size-4'>Recent Purchases</h1>
            </div>
            <div className='columns is-multiline'>

            </div>
        </div>
    )
}

export default RecentPurchase;