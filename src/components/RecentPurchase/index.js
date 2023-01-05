import cryptoItems from '../../static/Recent';
import styles from './recent.module.css';

const RecentPurchase = () => {
    const { boxContainer, box, purchaseBox, purchaseContainer, containerBox, CryptoList, coinContainer, bxHolder,} = styles;
    return (
        <div>
            <div className='is-flex is-justify-content-space-between'>
                <h1 className="title is-4 has-text-white mb-5">Recent Purchases</h1>
                <h1 className='has-text-white'>
                    <a className='has-text-white is-size-5 has-text-weight-semibold' href="#">View All</a>
                </h1>
            </div>
            <div className={`${containerBox}`}>
                <div className={boxContainer}>
                    {
                        cryptoItems.map((items) => {
                            return (
                                <div className={purchaseBox} key={items.id}>
                                    <div className={`${purchaseContainer}`}>
                                        <div className='is-flex is-align-items-center'>
                                            <div className='mr-2'>
                                                <div className='is-flex is-align-items-center is-justify-content-center' style={{
                                                    background: '#191b1f',
                                                    borderRadius: '50%',
                                                    width: '50px',
                                                    height: '50px',
                                                }}>
                                                    <img src={items.coinImg} alt="" width={18} />
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='has-text-grey is-size-5'>{items.coin}</h1>
                                                <h2 className='has-text-white is-size-5 has-text-weight-semibold'>{items.coinName}</h2>
                                            </div>
                                        </div>

                                        <div className={bxHolder}>
                                            <div className={coinContainer}>
                                                <h1 className='has-text-white'>
                                                    Amount
                                                    <span>(ETH)</span>
                                                </h1>
                                                <h2>{items.AmountEth}</h2>
                                            </div>

                                            <div className={coinContainer}>
                                                <h1 className='has-text-white'>
                                                    Amount
                                                    <span>(OCA)</span>
                                                </h1>
                                                <h2>{items.AmountOca}</h2>
                                            </div>

                                            <div className={coinContainer}>
                                                <h1 className='has-text-white'>
                                                    From
                                                </h1>
                                                <h2>{items.hash}</h2>
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