import BuyOca from "../../src/components/BuyOCA";
import Wallet from "../../src/components/Wallet";
import CliffPeriod from "../../src/components/CliffPeriod";
import style from './dashboard.module.css';
import Vesting from "../../src/components/VestingPanel";
import RecentPurchase from "../../src/components/RecentPurchase";




const OcaDashboard = () => {
    const { root, Panel, containerGrid, box, item1, item2, item3, item4, BgContainer, vestingBg } = style;
    return (
        <div className={`${root}`}>
            <div className="container px-2" style={{ height: '100%' }}>
                <div className="columns px-2" style={{ height: '100%' }}>
                    <div className="column is-4">
                        <BuyOca />
                    </div>
                    <div className="column is-10">
                        <div className={`${Panel} my-6`}>
                            {/* Dashboard Title here */}
                            <div>
                                <h1 className="title is-size-4 has-text-white mb-5">Dashboard</h1>
                            </div>
                            <div className={`${containerGrid} is-flex-grow-1`}>
                                <div className={item1}>
                                    <div className={`${box} box`}>
                                        <Wallet />
                                    </div>
                                </div>

                                <div className={item2}>
                                    <div className={`box ${box} ${BgContainer}`}>
                                        <CliffPeriod />
                                    </div>
                                </div>

                                <div className={item3}>
                                    <div className={`${box} ${vestingBg} box`} style={{ margin: '20px 0' }}>
                                        <Vesting />
                                    </div>
                                </div>

                                <div className={item4}>
                                    <div className={`${box} box`}>
                                        <RecentPurchase />
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