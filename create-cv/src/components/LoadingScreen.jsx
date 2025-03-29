import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "< MailTo.Code />";

    // Función para aplicar color a cada parte del texto según su parte
    const getStyledText = (text) => {
        const styledText = [];

        // Leemos letra por letra
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '<') {
                styledText.push(<span className="text-white">&lt;</span>);
            } else if (text[i] === 'M' && text.substring(i, i + 4) === 'Mail') {
                styledText.push(<span className="text-white">Mail</span>);
                i += 3; // Saltar los 3 caracteres restantes de "Mail"
            } else if (text[i] === 'T' && text.substring(i, i + 2) === 'To') {
                styledText.push(<span className="text-blue-500">To</span>);
                i += 1; // Saltar el carácter 'o' de "To"
            } else if (text[i] === '.' && text.substring(i, i + 5) === '.Code') {
                styledText.push(<span className="text-green-500">.Code</span>);
                i += 4; // Saltar los 4 caracteres restantes de ".Code"
            } else {
                styledText.push(text[i]); // Si no coincide, agregar el carácter normal
            }
        }

        return styledText;
    };

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {getStyledText(text)}
                <span className="animate-blink ml-1">|</span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};
