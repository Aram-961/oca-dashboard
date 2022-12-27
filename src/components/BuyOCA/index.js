import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./buyoca.module.css";

const BuyOca = () => {
    const [amountOCA, setAmountOCA] = useState(0);
    const { box, buttonsPanel, panelInput, panelScreen, Box, connectWallet, connectButton, priceBox } = styles;

    const MaxAmount = 10000;


    const handleChange = (e) => {
        const OcaValue = e.target.value.replace(/,/g, '');
    }

    // use ternary op
    const handleIncrease = () => {
        if (+ amountOCA < MaxAmount) {
            setAmountOCA(+ amountOCA + 1);
        }
        console.log(amountOCA);
    };

    // use ternary op
    const handleDecrease = () => {
        if (+ amountOCA > 1) {
            setAmountOCA(+ amountOCA - 1);
        }
        console.log(amountOCA);
    };
    // continue working on the dropdown to jump on the other parts
    return (
        <div className="column">
            <div className={`box ${box}`} style={{ background: "#21242C" }}>
                <h1 className="is-size-3 has-text-white has-text-weight-semibold">
                    Buy
                </h1>
                <div
                    className={`${Box} box is-flex is-align-items-center is-justify-content-space-between my-4`}
                    style={{ background: "#2D2F3A", height: "75px" }}
                >
                    <div className="">
                        <h1 className="has-text-white">0.1USD</h1>
                        <h2 className="has-text-white">Private Price</h2>
                        {/* <span className='has-has-text-primary'> OCA </span> */}
                    </div>
                    <div
                        className="has-background-black is-flex is-align-items-center is-justify-content-center"
                        style={{
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
                                placeholder="Crypto"
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
