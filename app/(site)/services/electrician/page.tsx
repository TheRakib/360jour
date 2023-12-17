import BannerFAQ from "@/components/Services/BannerFAQ";
import CertificateDetails from "@/components/Services/CertificateDetails";
import Details from "@/components/Services/Details";
import LocalElectrician from "@/components/Services/LocalElectrician";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ServicesContactUs from "@/components/Services/ServicesContactUs";
import ServicesDetails from "@/components/Services/ServicesDetails";
import React from "react";

// Certifierade elektriker
// Elektriska tjänster
// Akut elektrisk hjälp
// Elektriska reparationer
// Elektriska installationer
// 24/7 elektrisk assistans
// Erfarna elektriska lösningar
// Kvalificerade elektriker
// Auktoriserade elektriker
// Elektriskt underhåll
// Elektrisk säkerhet
// Elektrisk kabeldragning
// Felsökning av elektriska problem
// Bostadselektriker
// Kommersiella elektriska tjänster
// Elektriska entreprenörer nära mig
// Elektriker i [Ditt stad/område]
// Reaktion på elektriska nödsituationer
// Elektriskt hantverk"

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Elektriker i Stockholm."
        breadcrumb="Elektriker sida"
        img="/services/banner.png"
      />
      <Details {...detailsProps} />
      <CertificateDetails />
      <ServicesDetails />
      <BannerFAQ />
      <LocalElectrician />
      <ServicesContactUs />
    </div>
  );
}

const detailsProps = {
  description: {
    para1:
      "Behöver du en elektriker i Stockholm? Vi är här för att hjälpa dig!",
    para2: `Vi erbjuder expertinstallationer och reparationer av elektriska system för företag och hem, och vi är tillgängliga 365 dagar om året. Kontakta oss så hjälper vi dig omedelbart!`,
  },
  title2: "Pålitliga elektriska installatörer i Stockholm",
  description2Limit: 52,
  description2:
    "Har jordfelsbrytaren plötsligt löst ut och nu är maten i frysen på väg att bli dålig? Oavsett vilket elrelaterat problem du står inför, kan du lita på att våra elektriker är välkvalificerade för jobbet. Vi finns tillgängliga dygnet runt för konsultation och hjälp med dina elbehov. ",
};
