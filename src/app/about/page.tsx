import { RootAboutPage } from "@/templates/about";

export const metadata = {
  title: "",
  description: "",
};

export default function AboutPage() {
  return (
    <main id="about-page" className="min-w-[375px]">
      <RootAboutPage />
    </main>
  );
}
