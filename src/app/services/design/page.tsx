import { getServicesByCategory, categoryMeta } from "@/lib/services-data";
import CategoryServicesPage from "@/components/services/CategoryServicesPage";

export const metadata = {
  title: "Design Services | Heaps Lab",
  description: categoryMeta.design.description,
};

export default function DesignPage() {
  const services = getServicesByCategory("design");
  return <CategoryServicesPage category="design" services={services} meta={categoryMeta.design} />;
}
