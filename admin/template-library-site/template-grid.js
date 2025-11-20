/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useCallback } from "@wordpress/element";

const TemplateGrid = ({
    item = '',
    imageUrl,
    title,
    is_premium = false,
    activeTab,
    tags = [],
    preview_url,
    read_more_url = '',
    templateType,
}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleDemo = useCallback(() => {
        if (preview_url && preview_url.trim() !== '') {
            window.open(preview_url, '_blank');
        } else {
            toast.warn("No preview URL available", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    }, [preview_url]);

    const handleReadMore = useCallback(() => {
        if (read_more_url && read_more_url.trim() !== '') {
            window.open(read_more_url, '_blank');
        } else {
            toast.warn("No preview URL available", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    }, [preview_url]);


    return (
        <>
            <div
                className="fb-template-library-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`fb-template-library-card-img ${templateType !== 'patterns' ? 'scroll-img' : ''}`}>
                    <img src={`https://template-library.boomdevshub.com/storage/${imageUrl}`} alt={title || "Template preview"} />
                    <div className={`fb-template-badge ${is_premium ? "pro" : "free"}`}>
                        {is_premium ? "PRO" : "FREE"}
                    </div>
                    {isHovered && (
                        <div className="fb-template-overlay">
                            <div className="fb-template-overlay-content">
                                <button className="fb-demo-btn" onClick={handleDemo}>
                                    <span>Demo</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M8.32425 2.25C5.58753 2.25493 4.15442 2.32213 3.23856 3.23814C2.25018 4.22667 2.25018 5.81769 2.25018 8.99968C2.25018 12.1817 2.25018 13.7728 3.23856 14.7613C4.22692 15.7498 5.81769 15.7498 8.99925 15.7498C12.1807 15.7498 13.7715 15.7498 14.7599 14.7613C15.6757 13.8453 15.7429 12.4119 15.7478 9.67476" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.4169 2.62224L8.28644 9.7941M15.4169 2.62224C15.0464 2.25128 12.5506 2.28586 12.023 2.29337M15.4169 2.62224C15.7874 2.99321 15.7528 5.4922 15.7453 6.02051" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                {activeTab === 'sites' && (<button className="fb-demo-btn" onClick={handleReadMore}>
                                    <span>Read More</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M8.32425 2.25C5.58753 2.25493 4.15442 2.32213 3.23856 3.23814C2.25018 4.22667 2.25018 5.81769 2.25018 8.99968C2.25018 12.1817 2.25018 13.7728 3.23856 14.7613C4.22692 15.7498 5.81769 15.7498 8.99925 15.7498C12.1807 15.7498 13.7715 15.7498 14.7599 14.7613C15.6757 13.8453 15.7429 12.4119 15.7478 9.67476" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.4169 2.62224L8.28644 9.7941M15.4169 2.62224C15.0464 2.25128 12.5506 2.28586 12.023 2.29337M15.4169 2.62224C15.7874 2.99321 15.7528 5.4922 15.7453 6.02051" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>)}
                            </div>
                        </div>
                    )}
                </div>

                <div className="fb-template-library-card-content">
                    <div className="fb-template-library-card-content-top">
                        <div className="fb-template-tags">
                            {tags?.length > 0 && tags.map((tag, index) => (
                                <span key={index}>
                                    {tag}
                                    {index < tags.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                        {item && (
                            <div className="fb-template-library-card-date">
                                <span>
                                    Last Modified: {item.dateAndTime.month} {item.dateAndTime.day}, {item.dateAndTime.year}
                                </span>
                            </div>
                        )}

                    </div>
                    <div className="fb-template-library-card-content-bottom">
                        <h3 className="fb-template-title">{title}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TemplateGrid;