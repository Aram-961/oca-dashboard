import styles from './recent.module.css';

const RecentPurchase = () => {
    const { box } = styles;
    return (
        <div className={`${box}`}>
            <div>
                <h1 className="has-text-white is-size-4">Recent Purchases</h1>
            </div>
        </div>
    )
}

export default RecentPurchase;