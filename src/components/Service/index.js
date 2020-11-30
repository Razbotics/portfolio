import React from "react";
import {
  ServiceCard,
  ServiceContainer,
  ServiceHeader,
  ServiceIcon,
  ServiceWrapper,
  ServiceCardTitle,
  ServiceCardSubtitle,
} from "./ServiceComponents";

function Service({ contents }) {
  return (
    <ServiceContainer id="services">
      <ServiceHeader>Services</ServiceHeader>
      <ServiceWrapper>
        {contents.map((content) => (
          <ServiceCard>
            <ServiceIcon src={content.icon} />
            <ServiceCardTitle>{content.title}</ServiceCardTitle>
            <ServiceCardSubtitle>{content.subtitle}</ServiceCardSubtitle>
          </ServiceCard>
        ))}
      </ServiceWrapper>
    </ServiceContainer>
  );
}

export default Service;
