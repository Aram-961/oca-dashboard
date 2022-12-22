import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import styles from './dashboard.module.css'

const BuyOca = () => {
    const [increase, setIncrease] = useState('OCA Amount');
    const [decrease, setDecrease] = useState('0')
    const { buttonsPanel, amountOca, connectWallet } = styles;
    return (
        <div className='column'>
            <div className='box' style={{ background: '#21242C', padding: '20px' }}>
                <h1 className='is-size-3 has-text-white has-text-weight-semibold'>Buy</h1>
                <div className='box is-flex is-align-items-center is-justify-content-space-between my-4' style={{ background: '#2D2F3A' }}>
                    <div className=''>
                        <h1 className='has-text-white'>0.1USD</h1>
                        <h2 className='has-text-white'>Private Price</h2>
                        {/* <span className='has-has-text-primary'> OCA </span> */}
                    </div>
                    <div
                        className="has-background-black is-flex is-align-items-center is-justify-content-center"
                        style={{
                            padding: '0.6rem',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                        }}
                    >
                        <img src="/media/fees.svg" alt="" />
                    </div>
                </div>

                <div className='is-flex is-align-content-center'>
                    <img src="/media/Other 07.svg" alt="" />
                </div>

                <div className='buyPanel'>
                    <div className='box' style={{ background: '#2D2F3A' }}>
                        <div className='is-flex is-justify-content-center is-align-items-center'>
                            {/* <div className=''>
                                <button className={`${buttonsPanel}`}>
                                    +
                                </button>
                            </div> */}
                            <div className={`${amountOca}`}>
                                Amount OCA
                            </div>
                            {/* <div>
                                <button className={`${buttonsPanel}`}>
                                    -
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='currencyChange py-3'>
                    <div className='box is-flex is-align-items-center is-justify-content-space-between' style={{ background: '#2D2F3A' }}>
                        <div className=''>
                            <h1 className='has-text-white'>0</h1>
                            <h2>
                                Total
                                <span>25% OFF</span>
                            </h2>
                        </div>

                        {/* <select name='currency' id='cryptoCurrency'>
                            <option value="eth">
                                Eth
                            </option>
                            <option value="USDC">USDC</option>
                            <option value="USDT">USDT</option>
                            <option value="BUSD">BUSD</option>
                        </select> */}
                    </div>
                </div>
                <div className={`${connectWallet} py-2 has-text-centered`}>
                    <div className='box' style={{ background: '#3B62CC' }}>
                        <a className={`${connectWallet} has-text-white`}>
                            Connect Wallet
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyOca