import MenuComponent from "@/components/shared/menu";

export default function Home() {
  return (
    <main>
      <MenuComponent additionalInformation="hello world" />
      <h1>Home Page</h1>
    </main>
  );
}
