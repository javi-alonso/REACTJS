import { useNavigate } from 'react-router';
import Button from './components/Button';

function App() {
  const navigate = useNavigate();

  const navigationItems = [
    {
      title: 'Uso de props',
      description: 'Aprende cómo pasar datos entre componentes de forma eficiente.',
      path: '/props',
      icon: '📦',
      color: 'bg-blue-50 text-blue-700 border-blue-100'
    },
    {
      title: 'Renderizado condicional',
      description: 'Domina las técnicas para mostrar contenido basado en estados.',
      path: '/conditional',
      icon: '🌗',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100'
    },
    {
      title: 'Gestión de estado',
      description: 'Gestión avanzada de objetos, spread operator y estados anidados.',
      path: '/state',
      icon: '🧠',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100'
    },
    {
      title: 'Efectos y Paginación',
      description: 'Implementación de paginación dinámica usando useEffect y state.',
      path: '/effect',
      icon: '📄',
      color: 'bg-amber-50 text-amber-700 border-amber-100'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
            <span className="text-blue-600 italic">REACT JS</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Selecciona un módulo
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {navigationItems.map((item) => (
            <div
              key={item.path}
              className={`group relative p-8 rounded-3xl border ${item.color} shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white`}
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
              <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                {item.description}
              </p>
              <Button
                mode="normal"
                text="Explorar →"
                action={() => navigate(item.path)}
                className="w-full"
              />
            </div>
          ))}
        </div>

        <footer className="text-center pt-8 border-t border-slate-200">
          <p className="text-slate-400 text-sm font-medium">{new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
