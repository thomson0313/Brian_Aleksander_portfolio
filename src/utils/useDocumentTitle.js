import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = '';

        switch (path) {
            case '/home':
                title = 'Modern Development Support For Your IT Life | Smallcap AI Service LLC';
                break;
            case '/products':
                title = 'Smallcap AI Service LLC | Products';
                break;
            case '/product':
                title = 'Smallcap AI Service LLC | Product';
                break;
            case '/about':
                title = 'Smallcap AI Service LLC | About';
                break;
            case '/services':
                title = 'Smallcap AI Service LLC | Services';
                break;
            case '/contact':
                title = 'Smallcap AI Service LLC | Contact Us';
                break;
            default:
                title = 'Modern Development Support For Your IT Life | Smallcap AI Service LLC'; // Fallback title
        }

        document.title = title;
    }, [location]);
};

export default useDocumentTitle;
