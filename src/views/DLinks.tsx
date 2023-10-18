import { Button } from "@chakra-ui/react";
import ContactDetails from "../components/Dlinks/ContactDetails";
import InterestAndCulture from "../components/Dlinks/InterestAndCulture";
import MoreInsights from "../components/Dlinks/MoreInsights";
import ProfileHeader from "../components/Dlinks/ProfileHeader";
import SocialLinks from "../components/Dlinks/SocialLinks";
import GenericTabs from "../components/Global/GenericTabs";
import Navbar from "../layout/Navbar";
import { useContext, useEffect } from "react";
import { profileContext } from "../context/ProfileContext.js";
const tabs = [
  {
    label: "Contact Details",
    content: <ContactDetails />,
  },
  {
    label: "Interest & Culture",
    content: <InterestAndCulture />,
  },
  {
    label: "Social Links",
    content: <SocialLinks />,
  },
  {
    label: "More Insights",
    content: <MoreInsights />,
  },
];
const DLinks = () => {
  const { setProfile } = useContext(profileContext);
  async function makeAuthenticatedRequest() {
    const response = await fetch(
      "https://dlink.onweb3.net/api/v1/BasicDLinksProfile",
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${btoa("dlink_api_user" + ":" + "NpQetTVw30")}`,
        },
      }
    );
    const profile = await response.json();
    setProfile(profile.list[0]);
  }

  useEffect(() => {
    makeAuthenticatedRequest();
  }, []);
  return (
    <>
      <Navbar />
      <Button onClick={makeAuthenticatedRequest}>Make Request</Button>
      <ProfileHeader />
      <GenericTabs tabs={tabs} />
    </>
  );
};
export default DLinks;
