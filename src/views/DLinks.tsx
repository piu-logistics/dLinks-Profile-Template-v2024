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
  const url = new URL(window.location.href);
  const subdomain = url.hostname.split(".")[0];

  async function makeAuthenticatedRequest() {
    const response = await fetch(
      `https://apinode1.alkebulanmeta.network:3000/?username=${subdomain}`,
      {
        method: "GET",
      }
    );
    const profile = await response.json();

    setProfile(profile);
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
