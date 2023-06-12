import BasicAnimLayout from "@/components/animtedLayouts/BasicAnimLayout";
import GroupOne from "@/components/homePage/GroupOne";
import GroupThree from "@/components/homePage/GroupThree";
import GroupTwo from "@/components/homePage/GroupTwo";

export default function Home() {
  return (
    <BasicAnimLayout>
      <GroupOne />
      <GroupTwo />
      <GroupThree />
    </BasicAnimLayout>
  );
}
