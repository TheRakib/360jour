import AgreementDescription from "@/components/Services/Agreement/AgreementDescription";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ContactUs from "@/components/Shared/ContactUs";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Service Agreement"
        breadcrumb="Service agreement page "
        img="/services/agreement/banner.png"
      />
      <AgreementDescription />
      <ContactUs />
    </div>
  );
}
