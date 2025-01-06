import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/home/home-eight/header/multi-page";

function LayoutEight({ children }) {
	return (
		<>
		<div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <p className="text-sm font-medium">
                        Meet our new product for buying new and exclusive products at Meet My Mart
                    </p>
                    <button className="bg-white text-green-600 px-3 py-1 rounded-full text-xs font-semibold hover:bg-green-50 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEight;
