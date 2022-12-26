import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import styles from "./buyoca.module.css";

const BuyOca = () => {
    const [amount, setAmount] = useState(0);
    const [increase, setIncrease] = useState("OCA Amount");
    const [decrease, setDecrease] = useState(0);
    const { buttonsPanel, panelInput, panelScreen, BuyPanel, amountOca, connectWallet } = styles;

    const MaxAmount = 10000;

    // use ternary op
    const handleIncrease = () => {
        if (+ increase < MaxAmount) {
            setIncrease(+ increase + 1);
        }
        console.log(increase);
    };

    // use ternary op
    const handleDecrease = () => {
        if (+ decrease > 1) {
            setDecrease(+ decrease - 1);
        }
        console.log(decrease);
    };
    return (
        <div className="column">
            <div className="box" style={{ background: "#21242C", padding: "20px" }}>
                <h1 className="is-size-3 has-text-white has-text-weight-semibold">
                    Buy
                </h1>
                <div
                    className="box is-flex is-align-items-center is-justify-content-space-between my-4"
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
                <div className={panelScreen} />
                <div className={BuyPanel}>
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
                                type="text"
                                placeholder="Name"
                            // value={formatNumber(amount)}
                            // onChange={handleAmountChange}
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
                        className="box is-flex is-align-items-center is-justify-content-space-between"
                        style={{ background: "#2D2F3A" }}
                    >
                        <div className="">
                            <h1 className="has-text-white">0</h1>
                            <h2>
                                Total
                                <span>25% OFF</span>
                            </h2>
                        </div>

                        {/* <Dropdown
                            options={CryptoItems}
                            // itemTemplate={optionsTemplate}
                            // valueTemplate={selectedCryptoTemplate}
                            // onChange={onCryptoChange}
                            // value={selectedCrypto}
                            placeholder="Crypto"
                            panelClassName="tab3-dropdown"
                        /> */}
                    </div>
                </div>
                <div className={`${connectWallet} py-2 has-text-centered`}>
                    <div className="box" style={{ background: "#3B62CC" }}>
                        <a className={`${connectWallet} has-text-white`}>Connect Wallet</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyOca;
