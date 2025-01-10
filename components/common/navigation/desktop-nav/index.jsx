import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
		<DesktopNav>
			<NavItem url="/">Home</NavItem>
			<NavItem url="about-us">About Us</NavItem>
			<NavItem dropdown title="Services">
				<Dropdown>
					<DropdownItem url="services/web-development">Web Development</DropdownItem>
					<DropdownItem url="services/ai-development">AI Development</DropdownItem>
					<DropdownItem url="services/it-services">IT Services</DropdownItem>
					<DropdownItem url="services/digital-marketing">Digital Marketing</DropdownItem>
					<DropdownItem url="services/ecommerce-solutions">Ecommerce Solutions</DropdownItem>
					<DropdownItem url="services/mobile-development">Mobile App Development</DropdownItem>

				</Dropdown>
			</NavItem>
			<NavItem extUrl="https://deansfort.medium.com/">
				Blog
			</NavItem>
			<NavItem url="contact-us">Contact Us</NavItem>
		</DesktopNav>
	);
}

export default DesktopMenu;
