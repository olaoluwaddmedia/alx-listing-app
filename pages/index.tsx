import Card from "@/components/common/Card";
import { SAMPLE_LISTINGS } from "@/constants";

export default function Home() {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SAMPLE_LISTINGS.map((listing, index) => (
        <Card key={index} {...listing} />
      ))}
    </main>
  );
}
