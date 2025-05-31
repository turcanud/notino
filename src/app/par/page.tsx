import Image from "next/image";

export default function page() {
  return (
    <div>
      <Image
        src="/assets/main/par-main.png"
        alt="Description"
        width={1000}
        height={500}
      />
    </div>
  );
}
