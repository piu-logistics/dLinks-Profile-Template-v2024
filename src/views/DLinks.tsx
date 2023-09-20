import ContactDetails from "../components/Dlinks/ContactDetails";
import InterestAndCulture from "../components/Dlinks/InterestAndCulture";
import MoreInsights from "../components/Dlinks/MoreInsights";
import ProfileHeader from "../components/Dlinks/ProfileHeader";
import SocialLinks from "../components/Dlinks/SocialLinks";
import GenericTabs from "../components/Global/GenericTabs";
import Navbar from "../layout/Navbar";
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
  return (
    <>
      <Navbar />
      <ProfileHeader />
      <GenericTabs tabs={tabs} />
    </>
  );
};
export default DLinks;
