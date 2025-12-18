'use client';

import { motion } from 'framer-motion';
import { CardPageConfig } from '@/types/page';

export default function CardPage({ config, embedded = false }: { config: CardPageConfig; embedded?: boolean }) {
    // Determine if this is an awards page (use smaller images) or projects page (use larger images)
    const isAwardsPage = config.title.toLowerCase().includes('award');
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className={embedded ? "mb-4" : "mb-8"}>
                <h1 className={`${embedded ? "text-2xl" : "text-4xl"} font-serif font-bold text-primary mb-4`}>{config.title}</h1>
                {config.description && (
                    <p className={`${embedded ? "text-base" : "text-lg"} text-neutral-600 dark:text-neutral-500 max-w-2xl`}>
                        {config.description}
                    </p>
                )}
            </div>

            <div className={`grid ${embedded ? "gap-4" : "gap-6"}`}>
                {config.items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className={`bg-white dark:bg-neutral-900 ${embedded ? "p-4" : "p-6"} rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all duration-200 hover:scale-[1.01]`}
                    >
                        {/* Image/GIF Display - Support both single image and multiple images */}
                        {(item.image || item.images) && (
                            <div className="mb-4">
                                {item.images && item.images.length > 0 ? (
                                    // Multiple images - display in grid
                                    <div className="grid grid-cols-2 gap-3">
                                        {item.images.map((img, imgIndex) => (
                                            <div 
                                                key={imgIndex}
                                                className="rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex justify-center"
                                            >
                                                <img 
                                                    src={img} 
                                                    alt={`${item.title} ${imgIndex + 1}`}
                                                    className={`w-auto h-auto object-contain ${
                                                        isAwardsPage 
                                                            ? 'max-w-full max-h-48' 
                                                            : 'max-w-full max-h-80'
                                                    }`}
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : item.image ? (
                                    // Single image
                                    <div className={`rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 ${
                                        isAwardsPage ? 'flex justify-center' : ''
                                    }`}>
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className={`${
                                                isAwardsPage 
                                                    ? 'w-auto h-auto max-w-md max-h-64 object-contain' 
                                                    : 'w-full h-auto object-cover'
                                            }`}
                                            loading="lazy"
                                        />
                                    </div>
                                ) : null}
                            </div>
                        )}
                        
                        <div className="flex justify-between items-start mb-2">
                            <h3 className={`${embedded ? "text-lg" : "text-xl"} font-semibold text-primary`}>
                                {item.link ? (
                                    <a 
                                        href={item.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:text-accent transition-colors duration-200"
                                    >
                                        {item.title}
                                    </a>
                                ) : (
                                    item.title
                                )}
                            </h3>
                            {item.date && (
                                <span className="text-sm text-neutral-500 font-medium bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                                    {item.date}
                                </span>
                            )}
                        </div>
                        {item.subtitle && (
                            <p className={`${embedded ? "text-sm" : "text-base"} text-accent font-medium mb-3`}>{item.subtitle}</p>
                        )}
                        {item.content && (
                            <p className={`${embedded ? "text-sm" : "text-base"} text-neutral-600 dark:text-neutral-500 leading-relaxed`}>
                                {item.content}
                            </p>
                        )}
                        {item.tags && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-800/50 px-2 py-1 rounded border border-neutral-100 dark:border-neutral-800">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
