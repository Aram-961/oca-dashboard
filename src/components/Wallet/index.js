const Wallet = () => {
    return (
        <div className="is-flex  is-align-items-center is-justify-content-space-between">
            <h1 className="has-text-white is-size-5">
                Wallet
                <span>
                    <h1 className="title has-text-white is-4 has-text-weight-semibold">0 OCA</h1>
                </span>
            </h1>
            <div
                className="is-flex is-align-items-center"
                style={{
                    background: '#191b1f',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                }}
            >
                <img src="/media/wallet.svg" alt="" />
            </div>
        </div>
    );
}
export default Wallet;