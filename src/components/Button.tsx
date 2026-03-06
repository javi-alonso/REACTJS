import React from 'react';

type ButtonMode = 'normal' | 'outline' | 'text';

interface ButtonProps {
    mode: ButtonMode;
    text: string;
    action: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ mode, text, action, className = '' }) => {
    const baseStyles = 'px-8 py-3 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-center focus:outline-none inline-block cursor-pointer';

    const modeStyles: Record<ButtonMode, string> = {
        normal: 'bg-black text-white hover:bg-gray-900 hover:shadow-xl hover:-translate-y-1',
        outline: 'border-2 border-black text-black hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1',
        text: 'text-black hover:bg-gray-100',
    };

    return (
        <button
            onClick={action}
            className={`${baseStyles} ${modeStyles[mode]} ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
