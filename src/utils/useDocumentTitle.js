import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = '';

        switch (path) {
            case '/home':
                title = 'Modern Development Support For Your IT Life | Brian Aleksander Service LLC';
                break;
            case '/products':
                title = 'Brian Aleksander Service LLC | Products';
                break;
            case '/product':
                title = 'Brian Aleksander Service LLC | Product';
                break;
            case '/about':
                title = 'Brian Aleksander Service LLC | About';
                break;
            case '/services':
                title = 'Brian Aleksander Service LLC | Services';
                break;
            case '/contact':
                title = 'Brian Aleksander Service LLC | Contact Us';
                break;
            default:
                title = 'Modern Development Support For Your IT Life | Brian Aleksander Service LLC'; // Fallback title
        }

        document.title = title;
    }, [location]);
};

export default useDocumentTitle;
