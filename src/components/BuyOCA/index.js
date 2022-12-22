import { useState } from 'react';
import styles from './dashboard.module.css'

const BuyOca = () => {
    const [increase, setIncrease] = useState('OCA Amount');
    const [decrease, setDecrease] = useState('0')
    const { buttonsPanel } = styles;
    return (
        <div className='column is-3'>
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
                    <div className='box'>
                        <div className='is-flex is-align-items-center'>
                            <div className=''>
                                <button className={`${buttonsPanel}`}>
                                    +
                                </button>
                            </div>
                            <div>
                                Amount OCA
                            </div>
                            <div>
                                <button className={`${buttonsPanel}`}>
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyOca