import CertificateDetails from "@/components/Services/CertificateDetails";
import Details from "@/components/Services/Details";
import ServicesBanner from "@/components/Services/ServicesBanner";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner />
      <Details />
      <CertificateDetails />
    </div>
  );
}
