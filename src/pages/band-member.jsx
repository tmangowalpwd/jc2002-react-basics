import { useParams } from "react-router-dom";

const BandMemberPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>{params.namaMemberBand}</h1>
      <ul>
        <li>Instrument: Guitar</li>
        <li>Date of Birth: 24 Januari 1998</li>
        <li>Hobby: Fishing</li>
      </ul>
    </div>
  );
};

export default BandMemberPage;
