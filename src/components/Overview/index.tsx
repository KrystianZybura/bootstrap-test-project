import airplane from "../../assets/airplane.svg";
import walletFill from "../../assets/walletFill.svg";
import patchCheckFill from "../../assets/patchCheckFill.svg";
import { OverviewSection } from "./styled";

const Overview = () => (
  <OverviewSection className="d-flex flex-column flex-md-row justify-content-around align-items-center fs-5">
    <div>
      <img className="me-2" src={airplane} alt="airplane icon" />3 Amazing
      Destinations
    </div>
    <div>
      <img className="me-2" src={walletFill} alt="airplane icon" />
      Only pay 5% up front
    </div>
    <div>
      <img className="me-2" src={patchCheckFill} alt="airplane icon" />
      1000's of customers
    </div>
  </OverviewSection>
);

export default Overview;
