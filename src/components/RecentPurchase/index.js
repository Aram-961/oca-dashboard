import cryptoItems from '../../static/Recent';
import styles from './recent.module.css';

const RecentPurchase = () => {
    const { boxContainer, box, containerBox, CryptoList, coinContainer, } = styles;
    return (
        <div className={`${boxContainer}`}>
            <div>
                <h1 className="has-text-white is-size-4 has-text-weight-semibold">Recent Purchases</h1>
                <div className={containerBox}>
                    <div>
                        {
                            cryptoItems.map((items) => {
                                return (
                                    <div className={`${CryptoList} ${box}`}>
                                        <div className={`is-flex is-align-items-center`} style={{}}>
                                            <div className='is-flex is-align-items-center ' style={{ gap: '10px' }}>
                                                <div
                                                    className='is-flex is-align-items-center is-justify-content-center'
                                                    style={{
                                                        background: '#191b1f',
                                                        borderRadius: '50%',
                                                        width: '50px',
                                                        height: '50px',
                                                        placeItems: 'center'
                                                    }}
                                                >
                                                    <img src={items.coinImg} width={17} />
                                                </div>
                                                <div>
                                                    <h1 className='has-text-white mb-0'>Ethereum</h1>
                                                    <h1 className='has-text-white has-text-weight-semibold mb-0'>{items.coinName}</h1>
                                                </div>

                                                <div className={coinContainer}>

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
        </div>
    )
}

export default RecentPurchase;