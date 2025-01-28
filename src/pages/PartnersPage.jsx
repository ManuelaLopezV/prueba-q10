import React from "react";
import PartnersProgram from "../components/partners/PartnersProgram";
import PartnersBenefits from "../components/partners/PartnersBenefits";
import PartnersAssociation from "../components/partners/PartnersAssociation";
import PartnersEligibility from "../components/partners/PartnersEligibility";
import PartnerSteps from "../components/partners/PartnerSteps";
import PartnersCTA from "../components/partners/PartnersCTA";
import Wave from "../components/layout/Wave";

function PartnersPage() {
  return (
    <>
      <PartnersProgram />
      <Wave />
      <PartnersBenefits />
      <PartnersAssociation />
      <PartnersEligibility />
      <PartnerSteps />
      <PartnersCTA />
    </>
  );
}

export default PartnersPage;
