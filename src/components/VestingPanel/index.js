import vestData from "../../static/vesting";
import vestingData from "../../static/vestingData";
import vestingDate from "../../static/vestingDate";
import styles from "./vesting.module.css";

const Vesting = () => {
  const { numberContainer, numberCircle } = styles;
  return (
    <div>
      <div>
        <h1 className="has-text-white has-text-weight-semibold is-size-4">
          Vesting
        </h1>
      </div>
      <div className="is-flex is-justify-content-space-between mb-5">
        {vestData.map((numbers) => {
          return (
            <div className={numberContainer} key={numbers.id}>
              <div className={`${numberCircle} ww `}>
                {numbers.vestingNumber}
              </div>
            </div>
          );
        })}
      </div>
      <div className="columns is-multiline mb-5">
        {vestingDate.map((items) => {
          return (
            <div
              className="column is-flex is-align-items-center is-6-widescreen is-6-fullhd is-12-touch"
              key={items.id}
            >
              <div
                className="black1"
                style={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img src={items.img} alt={items.label} width={30} />
              </div>
              <div>
                <h1 className="ww2">{items.claim}</h1>
                <h1 className="ww has-text-weight-semibold">{items.date}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="columns is-multiline mb-5">
        {vestingData.map((data) => {
          return (
            <div
              className="column is-flex is-align-items-center is-12-touch is-6 mb-5"
              key={data.id}
              style={{ gap: "12px" }}
            >
              <div className="black2" style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "grid",
                placeItems: "center",
              }}>
                <img src={data.img} alt="" />
              </div>
              <div>
                <div className="ww2">
                  <h1>{data.label}</h1>
                  <h1>{data.subtitle}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vesting;
