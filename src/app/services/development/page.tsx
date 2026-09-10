import { getServicesByCategory, categoryMeta } from "@/lib/services-data";
import CategoryServicesPage from "@/components/services/CategoryServicesPage";

export const metadata = {
  title: "Development Services | Heaps Lab",
  description: categoryMeta.development.description,
};

export default function DevelopmentPage() {
  const services = getServicesByCategory("development");
  return <CategoryServicesPage category="development" services={services} meta={categoryMeta.development} />;
}
