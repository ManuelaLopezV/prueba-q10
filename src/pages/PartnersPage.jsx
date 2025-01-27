import React from "react";
import PartnersProgram from "../components/partners/PartnersProgram";
import PartnersBenefits from "../components/partners/PartnersBenefits";
import PartnersAssociation from "../components/partners/PartnersAssociation";
import PartnersEligibility from "../components/partners/PartnersEligibility";
import PartnersSection from "../components/partners/PartnersSection";
import PartnersCTA from "../components/partners/PartnersCTA";

function PartnersPage() {
  return (
    <>
      <PartnersProgram />
      <PartnersBenefits />
      <PartnersAssociation />
      <PartnersEligibility />
      <PartnersSection />
      <PartnersCTA />
    </>
  );
}

export default PartnersPage;
