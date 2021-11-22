import React from "react";
import moment from 'moment';
import Head from 'next/head'

function arrayNotNull(array) {
  if (
    array !== undefined &&
    array !== null &&
    Array.isArray(array) &&
    array.length > 0
  ) {
    return true;
  }
  return false;
}
const PublicProfile = ({ props }) => {

  // const input = {
  //   issuedTo: "",
  //   badgeCriteria: "",
  //   badgeSkill: "",
  //   badgeDescription: "",
  //   issuedBy: "",
  //   issuedDate: "",
  //   expiryDate: "",
  //   logoURL: null
  // };
  // const [state, setState] = useState(input);

  // useEffect(() => {
  //   if (props.data && props.data[0]) {
  //     const { badgeData = null, badgeGraphicData = null, issuerData = null, recipientData = null, issueAt = '', validTo = '' } = props.data && props.data[0];
  //     setState({
  //       ...state,
  //       issuedTo: recipientData ? recipientData.name : "",
  //       badgeCriteria: badgeData ? badgeData.criteria : "",
  //       badgeSkill: badgeData ? badgeData.skill : "",
  //       badgeDescription: badgeData ? badgeData.description : "",
  //       issuedBy: issuerData ? issuerData.name : "",
  //       issuedDate: issueAt ? issueAt : "",
  //       expiryDate: validTo ? validTo : "",
  //       logoURL: badgeGraphicData ? badgeGraphicData.logo : null
  //     });
  //   }
  // }, [props.data]);

  return (
    <div className="parent-public">
      <div className="head-style">Issued Badge</div>
      {arrayNotNull(props.data) ?
        <div className="data-container">
          <Head>
          
            {/* <!-- Primary Meta Tags --> */}
            <title>Congratulations! Here is your certified badge for {props?.data[0]?.badgeData.criteria}.</title>
            <meta name="title" content={`Congratulations! Here is your certified badge for ${props?.data[0]?.badgeData.criteria}.`} />
            <meta name="description" content={`Hi ${props?.data[0]?.recipientData.name}, We congrats you on receiving the badge for ${props?.data[0]?.badgeData.skill} issued by ${props?.data[0]?.issuerData?.name} and  valid till ${moment(props?.data[0]?.validTo).format('DD/MM/YYYY')}.`} />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${process.env.live}/?id=${props?.id}`} />
            <meta property="og:title" content={`Congratulations! Here is your certified badge for ${props?.data[0]?.badgeData.criteria}.`} />
            <meta property="og:description" content={`Hi ${props?.data[0]?.recipientData.name}, We congrats you on receiving the badge for ${props?.data[0]?.badgeData.skill} issued by ${props?.data[0]?.issuerData?.name} and  valid till ${moment(props?.data[0]?.validTo).format('DD/MM/YYYY')}.`} />
            <meta property="og:image" content={`${props?.data[0]?.badgeGraphicData?.logo}`} />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`${process.env.live}/?id=${props?.id}`} />
            <meta property="twitter:title" content={`Congratulations! Here is your certified badge for ${props?.data[0]?.badgeData.criteria}.`} />
            <meta property="twitter:description" content={`Hi ${props?.data[0]?.recipientData.name}, We congrats you on receiving the badge for ${props?.data[0]?.badgeData.skill} issued by ${props?.data[0]?.issuerData?.name} and  valid till ${moment(props?.data[0]?.validTo).format('DD/MM/YYYY')}.`} />
            <meta property="twitter:image" content={`${props?.data[0]?.badgeGraphicData?.logo}`} />

          </Head>
          <img src={props?.data[0]?.badgeGraphicData?.logo} alt="badge" style={{ display: 'table-cell', width: '230px' }} />
          <div className="right-container">
            <div className="mb-60">
              <span className="text-style">Issued to</span>
              <span className="data-style">{props?.data[0]?.recipientData.name}</span>
            </div>
            <div className="mb-60">
              <span className="text-style">Issued Date</span>
              <span className="data-style">{moment(props?.data[0]?.issueAt).format('DD/MM/YYYY')}</span>
            </div>
            <div className="mb-60">
              <span className="text-style">Issued By</span>
              <span className="data-style">{props?.data[0]?.issuerData?.name}</span>
            </div>
            <div className="mb-60">
              <span className="text-style">Badge Criteria</span>
              <span className="data-style">{props?.data[0]?.badgeData.criteria}</span>
            </div>
            <div className="mb-60">
              <span className="text-style">Badge Skill</span>
              <span className="data-style">{props?.data[0]?.badgeData.skill}</span>
            </div>
            <div className="mb-60">
              <span className="text-style">Expiry Date</span>
              <span className="data-style">{moment(props?.data[0]?.validTo).format('DD/MM/YYYY')}</span>
            </div>
            <div className="description">Description</div>
            <div className="desc-data">{props?.data[0]?.badgeData?.description}</div>
          </div>
        </div> :
        <div className="data-container">
          <div className="expire-message">
            {`Badge doesn't exist. Please contact to administrator.`}
          </div>
        </div>
      }
      <div className="public-copyright">Copyright @2021</div>
    </div>
  );
}

export default PublicProfile;


