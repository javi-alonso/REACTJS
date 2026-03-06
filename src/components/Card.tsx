export interface CardProps {
    image: string;
    title: string;
    description: string;
    optionalImage?: string;
    tags?: string[]
}
export default function Card({ image, title, description, optionalImage, tags }: CardProps) {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-2 group">
            <div className="relative h-56 overflow-hidden">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={image}
                    alt={title}
                />
                {optionalImage && (
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden transition-transform duration-300 hover:scale-125">
                        <img src={optionalImage} alt="Optional" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
            <div className="px-6 py-5">
                <div className="font-extrabold text-2xl mb-2 text-gray-800">{title}</div>
                <p className="text-gray-600 text-base leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-2 pb-6 flex gap-2">
                {tags?.map((tag) => (
                    <span key={`tag-${tag}`} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">{tag}</span>

                ))}
            </div>
        </div>
    );
}