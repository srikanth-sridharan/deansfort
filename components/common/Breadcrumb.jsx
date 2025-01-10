import Arrow from "@/public/images/about/arrow.png";
import Image from "next/image";
import Link from "next/link";
function BreadCrumb({ title }) {
	return (
		<div className="sofax-breadcrumb">
			<div className="container">
				<h1 className="post__title">{title}</h1>
				
			</div>
		</div>
	);
}

export default BreadCrumb;
