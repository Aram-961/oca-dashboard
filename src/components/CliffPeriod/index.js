import cliffData from "../../static/cliffperiod";

const CliffPeriod = () => {
    return (
        <div className="is-flex is-flex-direction-column">
            <h1 className="has-text-white has-text-weight-semibold is-size-5 mb-5">Cliff Period</h1>
            <div className="columns is-multiline py-5">
                {

                    cliffData.map((items) => {
                        return (
                            <div className="column is-flex is-align-items-center" style={{ gap: '10px' }}>
                                <div
                                    className="is-flex is-align-items-center"
                                    style={{
                                        background: '#191b1f',
                                        padding: '0.6rem',
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                    }}
                                >
                                    <img src={items.img} alt={items.label} />
                                </div>
                                <div>
                                    <h1 className="is-size-6 has-text-weight-medium" style={{ color: '#bebebe' }}>{items.start}</h1>
                                    <h2 className="has-text-white is-size-5 has-text-weight-semibold">{items.Date}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="columns is-multiline">
                <div className="column is-flex is-align-items-center" style={{gap: '10px'}}>
                    <div
                        className="is-flex is-align-items-center"
                        style={{
                            background: '#191b1f',
                            padding: '0.6rem',
                            borderRadius: '19%',
                            width: '50px',
                            height: '50px',
                        }}
                    >
                        <img src="/media/time.svg" alt='time.svg' />
                    </div>
                    <div>
                        <h1 className="has-text-white">Duration</h1>
                        <h2 className="has-text-white is-size-5">3 Months</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CliffPeriod;