import BuyOca from "../../src/components/BuyOCA";
import Wallet from "../../src/components/Wallet";
import CliffPeriod from "../../src/components/CliffPeriod";
import style from './dashboard.module.css';




const OcaDashboard = () => {
    const { root, Panel, containerGrid, box, item1, item2, BgContainer } = style;
    return (
        <div className={`${root}`}>
            <div className="container px-2" style={{ height: '100%' }}>
                <div className="columns px-2" style={{ height: '100%' }}>
                    <div className="column is-4">
                        <BuyOca />
                    </div>
                    <div className="column is-4">
                        <div className={`${Panel} my-6`}>
                            {/* Dashboard Title here */}
                            <div>
                                <h1 className="title is-size-4 has-text-white mb-5">Dashboard</h1>
                            </div>
                            <div className={`${containerGrid} is-flex-grow-1`}>
                                <div className={item1}>
                                    <div className={`${box} box`} style={{ height: '100%' }}>
                                        <Wallet />
                                    </div>
                                </div>

                                <div className={item2} style={{margin: '20px 0',}}>
                                    <div className={`${box} ${BgContainer} box is-flex is-flex-column`} style={{ height: '100%' }}>
                                        <CliffPeriod />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OcaDashboard;