import { getServicesByCategory, categoryMeta } from "@/lib/services-data";
import CategoryServicesPage from "@/components/services/CategoryServicesPage";

export const metadata = {
  title: "Marketing Services | Heaps Lab",
  description: categoryMeta.marketing.description,
};

export default function MarketingPage() {
  const services = getServicesByCategory("marketing");
  return <CategoryServicesPage category="marketing" services={services} meta={categoryMeta.marketing} />;
}
