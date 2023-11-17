import ServicesBanner from "@/components/Services/ServicesBanner";
import Agreement from "@/components/Services/Washing/Agreement";
import CarWash from "@/components/Services/Washing/CarWash";
import DescriptionWashing from "@/components/Services/Washing/DescriptionWashing";
import FAQWashing from "@/components/Services/Washing/FAQWashing";
import Others from "@/components/Services/Washing/Others";
import ContactUs from "@/components/Shared/ContactUs";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Order a washing machine - we drive all over Stockholm"
        breadcrumb="Washing machine page"
        img="/services/washing-machine.png"
        titleClass="!text-center max-w-[763px]"
      />
      <DescriptionWashing />
      <CarWash />
      <Others />
      <Agreement />
      <FAQWashing />
      <ContactUs />
    </div>
  );
}