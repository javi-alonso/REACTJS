import Card, { type CardProps } from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

export default function PropsPage() {
    const navigate = useNavigate();

    const demoCards: CardProps[] = [
        {
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
            title: 'Props de React',
            tags: ['react', 'props'],
            description: 'Las props son la forma en que pasamos datos de un componente padre a un hijo. Son inmutables y permiten crear componentes reutilizables.',
        },
        {
            image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop',
            title: 'Componentes Reutilizables',
            description: 'Al usar props, el mismo componente Card puede mostrar información totalmente diferente simplemente cambiando los valores que recibe.',
            optionalImage: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        },
        {
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
            title: 'TypeScript y Props',
            description: 'Definir interfaces para nuestras props nos ayuda a evitar errores y nos proporciona un mejor autocompletado en nuestro editor.',
            optionalImage: 'https://iesmartinezm.es/wp-content/uploads/2020/01/logo-mm.png',
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-4">
                        Uso de <span className="text-blue-600">props</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500">
                        Esta página demuestra cómo los componentes pueden recibir información dinámica a través de propiedades.
                    </p>
                    <div className="mt-8">
                        <Button
                            mode="outline"
                            text="Volver al Inicio"
                            action={() => navigate('/')}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {demoCards.map((card, index) => (
                        <Card
                            key={index}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                            optionalImage={card.optionalImage}
                            tags={card.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
