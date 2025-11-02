import Image from "next/image";

export default function Example() {
  return (
    <div>
      <Image 
        src="/assets/house.jpg" 
        alt="House"
        width={600}
        height={400}
        className="rounded-lg"
      />
    </div>
  );
}