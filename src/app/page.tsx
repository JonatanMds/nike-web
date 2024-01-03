import Header from "./components/Header";
import ProductListing from "./components/ProductListing";

export default function Home() {

  


  return (
    <main className="flex min-h-screen flex-col items-center py-6 text-xs">
      <Header />
      <ProductListing />     
    </main>
  )
}
