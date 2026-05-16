import StarField from '../components/StarField.jsx';
import Navbar    from '../components/Navbar.jsx';

export default function MainLayout({ children, view, setView, setSelectedDay }) {
  return (
    <div style={{ minHeight:'100vh', background:'#04080f' }}>
      <StarField />
      <Navbar view={view} setView={setView} setSelectedDay={setSelectedDay} />
      <main>{children}</main>
    </div>
  );
}
