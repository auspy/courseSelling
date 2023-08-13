"use client";
import PricingCard from "@/components/cards/PricingCard";
import CurveSlider from "@/components/slider/CurveSlider";
import Heading from "@/components/text/Heading";
import { dummyPricingData } from "@/data/dummy/data.pricing";
import muiTheme from "@/helper/muiTheme";
import { ContextDeviceType } from "@/state/contexts/context";
import { PricingType, RotateType } from "@/types/types.card";
import { ThemeProvider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useContext, useState } from "react";

const Pricing = () => {
  const [active, setActive] = useState(PricingType.Basic);
  const deviceType = useContext(ContextDeviceType);
  const isDesktop = deviceType === "desktop";
  const isTablet = deviceType === "tablet";
  type OrderType = (1 | 2 | 3)[];
  const [order, setOrder] = useState<OrderType>([1, 2, 3]);
  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    newAlignment: PricingType
  ) => {
    setActive(newAlignment);
    handleOrder(newAlignment);
  };
  const pricingData = dummyPricingData(active, handleChange);
  // todo instead of using order. transform can be used to put elements in place and then transition can be applied to transform
  const handleOrder = (selected: 0 | 1 | 2) => {
    // if order of selected order[PricingType.selected] == 2 no change
    // else incment till not 2
    console.log(order, selected);
    if (order[selected] == 2) {
      return;
    } else {
      let ord: OrderType = [...order];
      ord[selected] = 2;
      const arr: OrderType = [3, 1];
      for (let i = 0; i < 3; i++) {
        if (i == selected) {
          continue;
        }
        ord[i] = arr.pop()!;
        console.log(ord, arr);
      }
      setOrder(ord);
    }
  };
  return (
    <div
      className="topContainer pv100"
      style={{
        maxWidth: "95%",
        borderRadius: 30,
        marginInline: 25,
        overflow: "hidden",
      }}
    >
      <div className="fcc container1200">
        <Heading
          headingStyle={{
            maxWidth: 300,
            textAlign: "center",
          }}
          text=""
          highlightText="Pricing"
          afterHighlightText="plans tailored for you"
        />
        {!(isDesktop || isTablet) && (
          <ThemeProvider theme={muiTheme}>
            <ToggleButtonGroup
              className="mt50"
              sx={{ m: 1, width: "35ch" }}
              color="primary"
              value={active}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value={PricingType.Free}>Free</ToggleButton>
              <ToggleButton value={PricingType.Basic}>Basic</ToggleButton>
              <ToggleButton value={PricingType.Premium}>Premium</ToggleButton>
            </ToggleButtonGroup>
          </ThemeProvider>
        )}
        <div
          className={`frcsb w100 ${isDesktop ? "mt50" : "mt30"}`}
          style={{
            justifyContent: "space-evenly",
            transition: "2s ease",
          }}
        >
          {(isDesktop || isTablet ? true : active == PricingType.Free) && (
            <PricingCard
              {...pricingData[PricingType.Free]}
              rotate={isDesktop && RotateType.left}
              order={isTablet ? order[PricingType.Free] : "unset"}
            />
          )}
          {(isDesktop || isTablet ? true : active == PricingType.Basic) && (
            <PricingCard
              {...pricingData[PricingType.Basic]}
              order={isTablet ? order[PricingType.Basic] : "unset"}
            />
          )}
          {(isDesktop || isTablet ? true : active == PricingType.Premium) && (
            <PricingCard
              {...pricingData[PricingType.Premium]}
              rotate={isDesktop && RotateType.right}
              order={isTablet ? order[PricingType.Premium] : "unset"}
            />
          )}
        </div>
      </div>
      <div className="mt60">
        <CurveSlider />
      </div>
    </div>
  );
};

export default Pricing;
