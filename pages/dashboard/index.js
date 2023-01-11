import BuyOca from "../../src/components/BuyOCA";
import Wallet from "../../src/components/Wallet";
import CliffPeriod from "../../src/components/CliffPeriod";
import style from './dashboard.module.css';
import Vesting from "../../src/components/VestingPanel";
import RecentPurchase from "../../src/components/RecentPurchase";





const OcaDashboard = () => {
    const { root, DashboardContainer, panelRoot, container, box, BgContainer, bgContainer, item1, item2, item3, item4, vestingBg } = style;
    return (
        <div className={root}>
            <div className="container px-2" style={{ height: '100%' }}>
                <div className={DashboardContainer}>
                    <div className="columns px-2" style={{ height: '100%' }}>
                        <div className="column is-4">
                            <BuyOca />
                        </div>

                        <div className="column">
                            <div className={`${panelRoot} box has-background-black1 px-0 pb-0`}>
                                <div>
                                    <h1 className="title is-4 ww mb-5">Dashboard</h1>
                                </div>
                                <div className={`${container}`}>
                                    <div className={item1}>
                                        <div className="box black2" style={{ height: '100%' }}>
                                            <Wallet />
                                        </div>
                                    </div>
                                    <div className={item2}>
                                        <div className={`${BgContainer} box black2`} style={{ height: '100%' }}>
                                            <CliffPeriod />
                                        </div>
                                    </div>
                                    <div className={item3} style={{ height: '100%' }}>
                                        <div className={`box black2 ${bgContainer}`}>
                                            <Vesting />
                                        </div>
                                    </div>
                                    <div className={item4}>
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