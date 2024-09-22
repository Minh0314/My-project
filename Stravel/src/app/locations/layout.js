import Header from "@/Components/Header";

export default function LocationsLayout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
}
