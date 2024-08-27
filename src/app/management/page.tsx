import { RootManagementPage } from "@/templates/Management";

export const metadata = {
  title: "",
  description: "",
};

export default function ManagementPage() {
  return (
    <main id="management-page" className="min-w-[375px]">
      <RootManagementPage />
    </main>
  );
}
