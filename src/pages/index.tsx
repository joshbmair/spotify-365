import PageLayout from "@/components/PageLayout";
import WelcomeCard from "@/components/index/WelcomeCard";

export default function Home(): JSX.Element {
  return (
    <PageLayout siteSubtitle="Home">
      <WelcomeCard />
    </PageLayout>
  );
}
