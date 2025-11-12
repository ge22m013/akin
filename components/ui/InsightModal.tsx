import React, { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { Content } from '../../App';

interface ContentModalProps {
  content: Content | null;
  onClose: () => void;
}

const InsightModal: React.FC<ContentModalProps> = ({ content, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    if (content) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = '';
    };
  }, [content, onClose]);
  
  return (
    <AnimatePresence>
        {content && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-8 md:p-12 text-left"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800" aria-label="Close modal">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                    
                    <p className="text-base font-semibold text-akin-cyan uppercase tracking-wide">{content.category}</p>
                    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-akin-text-dark tracking-tight">{content.title}</h2>
                    <div className="mt-6 prose prose-lg max-w-none text-akin-text-light prose-headings:text-akin-text-dark prose-strong:text-akin-text-dark prose-ul:list-disc prose-ul:pl-6 prose-li:my-1" dangerouslySetInnerHTML={{ __html: content.content }}></div>
                </motion.div>
            </div>
        )}
    </AnimatePresence>
  );
};

export default InsightModal;