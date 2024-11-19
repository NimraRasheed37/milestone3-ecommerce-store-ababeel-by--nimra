import BooksCards from "@/components/BooksCards";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Header />
    <Navbar />
    <HeroSection />
    <Categories />
    <BooksCards />
    <Footer />
    </>
  );
}
