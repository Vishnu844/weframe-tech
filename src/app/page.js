import Breadcrumbs from "@/components/Breadcrumbs";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { products } from "@/constants";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col sm:px-[15%] px-[10%] pt-[4%]">
        <Navbar />
        <Breadcrumbs />
        <Header />
        <section className="content mt-14">
          <Filters />
          <div className="products">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  kultivar={product.kultivar}
                  THC={product.THC}
                  newItem={product.newItem}
                />
              );
            })}
          </div>
        </section>
        <Pagination />
      </main>
      <Footer />
    </>
  );
}
