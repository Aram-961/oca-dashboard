import cryptoItems from '../../static/Recent';
import styles from './recent.module.css';

const RecentPurchase = () => {
    const { boxContainer, RecentBox, boxes, paymentBox, paymentContainer, coinContainer } = styles;
    return (
        <div className={`${RecentBox} box black2`}>
            <div>
                <h1 className='ww2 scroll is-size-4 mb-5'>Recent Purchases</h1>
            </div>
            <div className={`  ${boxContainer} pr-2`} style={{ overflowY: 'scroll', maxHeight: '100%' }}>
                <div className={boxes}>
                    {
                        cryptoItems.map((items) => {
                            return (
                                <div className={paymentBox} style={{ height: '100%' }}>
                                    <div className='is-flex is-align-items-center is-justify-content-space-between' style={{ flexDirection: 'row' }}>
                                        <div className='is-flex is-align-items-center'>
                                            <div className='mr-2'>
                                                <div className='black1'
                                                    style={{
                                                        borderRadius: '50%',
                                                        width: '50px',
                                                        height: '50px',
                                                        display: 'grid',
                                                        placeItems: 'center',
                                                    }}>
                                                    <img src={items.coinImg} alt="" width={20} />
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='ww2 mb-0'>{items.coin}</h1>
                                                <h1 className='ww is-size-6 has-text-weight-semibold mb-0'>{items.coinName}</h1>
                                            </div>
                                        </div>

                                        {/* 1 */}
                                        <div>
                                            <div className={coinContainer}>
                                                <h1 className='ww2 mb-0'>Amount</h1>
                                                <h1 className='ww has-text-weight-semibold'>{items.AmountOca}</h1>
                                            </div>

                                        </div>

                                        {/* 2 */}
                                        <div>
                                            <div className={coinContainer}>
                                                <h1 className='ww2 mb-0'>
                                                    Amount
                                                    <span className='blue1'>({items.coinName})</span>
                                                </h1>
                                                <h1 className='text-weight-semibold ww'>{items.AmountEth}</h1>
                                            </div>
                                        </div>

                                        {/* 3 */}
                                        <div>
                                            <div className={coinContainer}>
                                                <h1 className='mb-0 ww2'>From</h1>
                                                <h1 className='mb-0 text-weight-semibold ww'>{items.hash}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentPurchase;