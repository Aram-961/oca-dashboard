import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import styles from "./buyoca.module.css";



const BuyOca = () => {
    const [amountOCA, setAmountOCA] = useState(0);
    const [crypto, setCrypto] = useState();
    const { boxPanel, buttonsPanel, panelInput, panelScreen, Box, connectWallet, connectButton, priceBox } = styles;

    const MaxOcaAmount = 1000;

    const CryptoItems = [
        { label: 'ETH', icon: '/media/logos/ETH.png', name: 'Ethereum' },
        { label: 'USDC', icon: '/media/logos/usdc.png', name: 'Usdc' },
        { label: 'USDT', icon: '/media/logos/usdt.png', name: 'Usdt' },
        { label: 'BUSD', icon: '/media/logos/busd.png', name: 'Busd' },
    ];


    const handleChange = (e) => {
        const OcaValue = e.target.value.replace(/,/g, '');
    }

    const CryptoChange = () => {
    }

    const handleIncrease = () => {
        if (amountOCA < MaxOcaAmount) {
            setAmountOCA(+ amountOCA + 1);
        }
        console.log(amountOCA);
    };

    const handleDecrease = () => {
        if (amountOCA > 0) {
            setAmountOCA(+ amountOCA - 1);
        }
        console.log(amountOCA);
    };

    const CurrencyChange = (i) => {
        setCrypto(i.value);
    }

    // coins options inside dropdown eth bnb etc..
    const CoinOptions = () => {
        return (
            <div>
                {
                    CryptoItems.map((options) => {
                        return (
                            <div>
                                <h1>{options.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div>
            <div className={`box ${boxPanel}`}>
                <h1 className="is-size-3 has-text-white has-text-weight-semibold">
                    Buy
                </h1>
                <div
                    className={`${Box} is-flex is-align-items-center is-justify-content-space-between my-4`}>

                    <div>
                        <h1 className="has-text-white">0.1USD</h1>
                        <h2 className="has-text-white">Private Price</h2>
                        {/* <span className='has-has-text-primary'> OCA </span> */}
                    </div>

                    <div
                        className="is-flex is-align-items-center is-justify-content-center"
                        style={{
                            background: '#191b1f',
                            padding: "0.6rem",
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                        }}
                    >
                        <img src="/media/fees.svg" alt="" />
                    </div>
                </div>

                {/* img here  */}
                <div className={`${panelScreen}`} />

                <div className={Box}>
                    <div
                        className="field is-flex is-justify-content-center is-align-items-center mb-0"
                        style={{ columnGap: '10px' }}
                    >
                        <div className="control">
                            <button type="button" className={buttonsPanel} onClick={handleDecrease}>
                                -
                            </button>
                        </div>
                        <div className="control flex-grow-1">
                            <input
                                className={panelInput}
                                value={amountOCA}
                                type="text"
                                placeholder="OCA AMOUNT"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="control">
                            <button type="button" className={buttonsPanel} onClick={handleIncrease}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="currencyChange py-3">
                    <div
                        className={`${Box} box is-flex is-align-items-center is-justify-content-space-between`}
                        style={{ background: "#2D2F3A" }}
                    >
                        <div className="">
                            <h1 className="has-text-white">0</h1>
                            <h2>
                                Total
                                <span>25% OFF</span>
                            </h2>
                        </div>

                        {/* dropdown here  */}
                        <div className="is-flex is-justify-content-end">
                            <Dropdown
                                placeholder="ETH"
                                panelClassName="tab3-dropdown"
                                options={CryptoItems}
                                itemTemplate={CoinOptions}
                                value={crypto}

                            />
                        </div>
                    </div>
                </div>
                <div className={`${connectWallet} py-2 has-text-centered`}>
                    <button className={`${connectButton} button is-fullwidth medium has-shadow has-border-radius-10`}>
                        <span>Connect Wallet</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuyOca;
