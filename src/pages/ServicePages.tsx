import { ServicePageLayout } from "@/components/ServicePageLayout";
import { servicePages } from "@/content/site";
import { routes } from "@/lib/routes";

export function AcRepairPage() {
  return <ServicePageLayout content={servicePages[routes.acRepair]} />;
}

export function FurnaceRepairPage() {
  return <ServicePageLayout content={servicePages[routes.furnaceRepair]} />;
}

export function HvacInstallationPage() {
  return <ServicePageLayout content={servicePages[routes.hvacInstallation]} />;
}

export function HvacMaintenancePage() {
  return <ServicePageLayout content={servicePages[routes.hvacMaintenance]} />;
}

export function DuctworkPage() {
  return <ServicePageLayout content={servicePages[routes.ductwork]} />;
}

export function IndoorAirQualityPage() {
  return <ServicePageLayout content={servicePages[routes.indoorAirQuality]} />;
}

export function CommercialHvacPage() {
  return <ServicePageLayout content={servicePages[routes.commercialHvac]} />;
}
