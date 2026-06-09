import { ServicePageLayout } from "@/components/ServicePageLayout";
import { servicePages } from "@/content/site";
import { routes } from "@/lib/routes";

export function AirConditioningPage() {
  return <ServicePageLayout content={servicePages[routes.airConditioning]} />;
}

export function HeatingPage() {
  return <ServicePageLayout content={servicePages[routes.heating]} />;
}

export function DuctworkPage() {
  return <ServicePageLayout content={servicePages[routes.ductwork]} />;
}

export function IndoorAirQualityPage() {
  return <ServicePageLayout content={servicePages[routes.indoorAirQuality]} />;
}

export function CommercialPage() {
  return <ServicePageLayout content={servicePages[routes.commercial]} />;
}

export function EmergencyHvacRepairPage() {
  return <ServicePageLayout content={servicePages[routes.emergencyHvacRepair]} />;
}
