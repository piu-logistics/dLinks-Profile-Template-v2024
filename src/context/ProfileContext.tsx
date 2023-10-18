import { createContext, useState } from "react";
export type Profile = {
  id: string;
  name: string;
  deleted: boolean;
  description: string | null;
  createdAt: string;
  modifiedAt: string;
  registrationDate: string | null;
  preferredUsername: string;
  solanaCryptoassetPublicID: string;
  baseCharacterIAmMotherEarthLover: number;
  baseCharacteriAmWeb3Enthusiasts: number;
  baseCharacteriAmEnvironmentalScienceEnthusiasts: number;
  baseCharacteriAmPowerOfBlackIdentityEnthusiasts: number;
  reorderWeb6Functions: string[];
  threeAfricanCountries: string[];
  interestsInSTEAM: string[];
  preciousMaterialChoice: string[];
  orgProjectToJoin: string[];
  leadSourceCode: string | null;
  socialLink01: string | null;
  socialLink02: string | null;
  socialLink03: string | null;
  socialLink04: string | null;
  urlBiographic: string | null;
  registeredEmail: string | null;
  registeredMobileNumber: string | null;
  uploadedProfileImage: string | null;
  registeredFirstName: string | null;
  registeredLastName: string | null;
  registeredDisplayName: string | null;
  registeredCountryOfResidence: string | null;
  publicField: string[];
  privatefield: string[];
  hTLDPreference: string | null;
  statusOnWeb3: string;
  cancelMyRegistration: string;
  connectOrUpdateYourOnWeb3Passport: string;
  bitcoinCryptoassetPublicID: string | null;
  ethereumCryptoassetPublicID: string | null;
  cosmosCryptoassetPublicID: string | null;
  solanaCryptoassetPublicIDQRCodeURL: string | null;
  bitcoinCryptoassetPublicIDQRCodeURL: string | null;
  ethereumCryptoassetPublicIDQRCodeURL: string | null;
  activeOnWeb3PassportnftNumber: string | null;
  activeOnWeb3PassporttokenAddress: string | null;
  activeOnWeb3PassportofficialNFTImageUrl: string | null;
  lB9AbasicallyIAm: string | null;
  dopAbasicallyIAAm: string | null;
  cHbasicallyIAm: string | null;
  lB9ApositionRoleinOrg: string | null;
  lB9AorgName: string | null;
  lB9AsomeWordsAboutMyInterest: string | null;
  dopApositionRoleinOrg: string | null;
  dopAorgName: string | null;
  dopAsomeWordsAboutMyInterest: string | null;
  myEnhancedProfiles: string | null;
  cosmosCryptoassetPublicIDQRCodeURL: string | null;
  cSLbasicallyIAm: string | null;
  cSLpositionRoleinOrg: string | null;
  cSLorgName: string | null;
  cSLsomeWordsAboutMyInterest: string | null;
  cHpositionRoleinOrg: string | null;
  cHorgName: string | null;
  cHsomeWordsAboutMyInterest: string | null;
  cSLsectorsAndIndustries: string | null;
  cHsectorsAndIndustries: string | null;
  cSLextraEngagementInfo: string | null;
  cHextraEngagementInfo: string | null;
  lB9AhowIHeardAboutThis: string | null;
  cSLhowIHeardAboutThis: string | null;
  lB9AorgAddressPostalCode: string | null;
  cSLorgAddressPostalCode: string | null;
  cHorgAddressPostalCode: string | null;
  cHhowIHeardAboutThis: string | null;
  dopAhowIHeardAboutThis: string | null;
  dopAorgAddressPostalCode: string | null;
  lB9AorgAddressStreet: string | null;
  lB9AorgAddressCity: string | null;
  lB9AorgAddressState: string | null;
  lB9AorgAddressCountry: string | null;
  dopAorgAddressStreet: string | null;
  dopAorgAddressCity: string | null;
  dopAorgAddressState: string | null;
  dopAorgAddressCountry: string | null;
  cSLorgAddressStreet: string | null;
  cSLorgAddressCity: string | null;
  cSLorgAddressState: string | null;
  cSLorgAddressCountry: string | null;
  cHorgAddressStreet: string | null;
  cHorgAddressCity: string | null;
  cHorgAddressState: string | null;
  cHorgAddressCountry: string | null;
  createdById: string;
  createdByName: string;
  modifiedById: string;
  modifiedByName: string;
  assignedUserId: string;
  assignedUserName: string;
  contactId: string | null;
  contactName: string | null;
};
const initialProfile: Profile = {
  id: "",
  name: "",
  deleted: false,
  description: null,
  createdAt: "",
  modifiedAt: "",
  registrationDate: null,
  preferredUsername: "",
  solanaCryptoassetPublicID: "",
  baseCharacterIAmMotherEarthLover: 0,
  baseCharacteriAmWeb3Enthusiasts: 0,
  baseCharacteriAmEnvironmentalScienceEnthusiasts: 0,
  baseCharacteriAmPowerOfBlackIdentityEnthusiasts: 0,
  reorderWeb6Functions: [],
  threeAfricanCountries: [],
  interestsInSTEAM: [],
  preciousMaterialChoice: [],
  orgProjectToJoin: [],
  leadSourceCode: null,
  socialLink01: null,
  socialLink02: null,
  socialLink03: null,
  socialLink04: null,
  urlBiographic: null,
  registeredEmail: null,
  registeredMobileNumber: null,
  uploadedProfileImage: null,
  registeredFirstName: null,
  registeredLastName: null,
  registeredDisplayName: null,
  registeredCountryOfResidence: null,
  publicField: [],
  privatefield: [],
  hTLDPreference: null,
  statusOnWeb3: "",
  cancelMyRegistration: "",
  connectOrUpdateYourOnWeb3Passport: "",
  bitcoinCryptoassetPublicID: null,
  ethereumCryptoassetPublicID: null,
  cosmosCryptoassetPublicID: null,
  solanaCryptoassetPublicIDQRCodeURL: null,
  bitcoinCryptoassetPublicIDQRCodeURL: null,
  ethereumCryptoassetPublicIDQRCodeURL: null,
  activeOnWeb3PassportnftNumber: null,
  activeOnWeb3PassporttokenAddress: null,
  activeOnWeb3PassportofficialNFTImageUrl: null,
  lB9AbasicallyIAm: null,
  dopAbasicallyIAAm: null,
  cHbasicallyIAm: null,
  lB9ApositionRoleinOrg: null,
  lB9AorgName: null,
  lB9AsomeWordsAboutMyInterest: null,
  dopApositionRoleinOrg: null,
  dopAorgName: null,
  dopAsomeWordsAboutMyInterest: null,
  myEnhancedProfiles: null,
  cosmosCryptoassetPublicIDQRCodeURL: null,
  cSLbasicallyIAm: null,
  cSLpositionRoleinOrg: null,
  cSLorgName: null,
  cSLsomeWordsAboutMyInterest: null,
  cHpositionRoleinOrg: null,
  cHorgName: null,
  cHsomeWordsAboutMyInterest: null,
  cSLsectorsAndIndustries: null,
  cHsectorsAndIndustries: null,
  cSLextraEngagementInfo: null,
  cHextraEngagementInfo: null,
  lB9AhowIHeardAboutThis: null,
  cSLhowIHeardAboutThis: null,
  lB9AorgAddressPostalCode: null,
  cSLorgAddressPostalCode: null,
  cHorgAddressPostalCode: null,
  cHhowIHeardAboutThis: null,
  dopAhowIHeardAboutThis: null,
  dopAorgAddressPostalCode: null,
  lB9AorgAddressStreet: null,
  lB9AorgAddressCity: null,
  lB9AorgAddressState: null,
  lB9AorgAddressCountry: null,
  dopAorgAddressStreet: null,
  dopAorgAddressCity: null,
  dopAorgAddressState: null,
  dopAorgAddressCountry: null,
  cSLorgAddressStreet: null,
  cSLorgAddressCity: null,
  cSLorgAddressState: null,
  cSLorgAddressCountry: null,
  cHorgAddressStreet: null,
  cHorgAddressCity: null,
  cHorgAddressState: null,
  cHorgAddressCountry: null,
  createdById: "",
  createdByName: "",
  modifiedById: "",
  modifiedByName: "",
  assignedUserId: "",
  assignedUserName: "",
  contactId: null,
  contactName: null,
};
type ProfileContext = {
  profile: Profile;
  setProfile: (profile: Profile) => void;
};

export const profileContext = createContext<ProfileContext>({});

const ProfileProvider = (props: any) => {
  const [profile, setProfile] = useState<Profile>(initialProfile);

  const { Provider } = profileContext;

  return <Provider value={{ profile, setProfile }}>{props.children}</Provider>;
};

export default ProfileProvider;
