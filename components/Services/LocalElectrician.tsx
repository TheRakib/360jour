import React from "react";
import TextTitle from "../Shared/TextTitle";
import { Button } from "@mui/material";

export default function LocalElectrician() {
  return (
    <div className="max-w-layout mx-auto mt-[80px] mb-[120px] ">
      <div className="bg-primary/10 h-[592px] grid grid-cols-1 md:grid-cols-2 ">
        <div className="col-span-1 p-[30px] flex flex-col gap-5  ">
          <TextTitle title="Find your local electrician" />
          <p className="text-[18px] text-black/70 tracking-tight">
            Here you can find your local electrician in your city and get help
            with all types of electrical work.All our electricians are certified
            and authorized to carry out both small and large electrical jobs.
          </p>
          <div className="flex flex-col gap-7 mt-auto">
            <Button
              className="w-[383px] h-[92px] capitalize text-[26px] border-2 rounded-lg "
              variant="outlined"
            >
              Electrician Södermalm
            </Button>
            <Button
              className="w-[383px] h-[92px] capitalize text-[26px] border-2 rounded-lg "
              variant="outlined"
            >
              Electrician Neck
            </Button>
            <Button
              className="w-[383px] h-[92px] capitalize text-[26px] border-2 rounded-lg "
              variant="outlined"
            >
              Electrician Solna
            </Button>
          </div>
        </div>
        <div className="col-span-1 ml-auto w-full md:w-[593px] h-full bg-white ">
          hello
        </div>
      </div>
    </div>
  );
}
