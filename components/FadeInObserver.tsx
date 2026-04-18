'use client';

import { useEffect } from 'react';

export default function FadeInObserver() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const observeElements = (container: ParentNode | Document) => {
            const elements = container.querySelectorAll('.fade');
            elements.forEach((el) => {
                if (!el.classList.contains('fade-visible')) {
                    observer.observe(el);
                }
            });
        };

        observeElements(document);

        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        if (node.classList.contains('fade')) {
                            observer.observe(node);
                        }
                        observeElements(node);
                    }
                });
            });
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return null;
}
