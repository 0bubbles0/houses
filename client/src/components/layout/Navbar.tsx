import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";
import "./Navbar.css";

interface NavItem {
  url: string;
  title: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

export const Navbar = ({ navItems }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav>
      {navItems.map((item: NavItem) => (
        <Button
          key={item.url}
          variant="primary"
          onClick={() => navigate(item.url)}
        >
          {item.title}
        </Button>
      ))}
    </nav>
  );
};
