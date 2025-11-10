import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

// Loading Skeleton Component
const LoadingSkeleton = () => (
    <div className="system-status-card">
        <div className="skeleton-heading"></div>
        
        <div className="status-list">
            {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="status-item skeleton-item">
                    <div className="status-info">
                        <div className="skeleton-line skeleton-label"></div>
                        <div className="skeleton-line skeleton-message"></div>
                    </div>
                    <div className="skeleton-icon"></div>
                </div>
            ))}
        </div>

        <div className="bottom-stats">
            <div className="stat-box skeleton-stat">
                <div className="skeleton-line skeleton-number"></div>
                <div className="skeleton-line skeleton-stat-label"></div>
            </div>

            <div className="stat-row">
                <div className="stat-box skeleton-stat">
                    <div className="skeleton-line skeleton-number"></div>
                    <div className="skeleton-line skeleton-stat-label"></div>
                </div>

                <div className="stat-box skeleton-stat">
                    <div className="skeleton-line skeleton-number"></div>
                    <div className="skeleton-line skeleton-stat-label"></div>
                </div>
            </div>
        </div>
    </div>
);

const SystemRequirements = () => {
    const [healthInfo, setHealthInfo] = useState(null);

    useEffect(() => {
        fetchHealthInfo();
    }, []);

    const fetchHealthInfo = async () => {
        try {
            const response = await apiFetch({ path: '/wp/v2/frontis-blocks/system-health' });
            setHealthInfo(response);
        } catch (error) {
            console.error('Error fetching system health info:', error);
        }
    };

    if (!healthInfo) {
        return <LoadingSkeleton />;
    }

    return (
        <div className="system-status-card">
            <h2 className="heading-3">Latest updates</h2>
            
            <div className="status-list">
                {/* PHP Version - Good */}
                <div className="status-item status-good">
                    <div className="status-info">
                        <div className="status-label">PHP Version <div className="status-value status-value-good">8.0.12</div></div>
                        <div className="status-message">No known issue detected</div>
                    </div>
                    <div className="status-icon">
                        <CheckIcon />
                    </div>
                </div>

                {/* WordPress Version - Good */}
                {/* PHP Version - Good */}
                <div className="status-item status-good">
                    <div className="status-info">
                        <div className="status-label">PHP Version <div className="status-value status-value-good">8.0.12</div></div>
                        <div className="status-message">No known issue detected</div>
                    </div>
                    <div className="status-icon">
                        <CheckIcon />
                    </div>
                </div>


                {/* Server SSL - Critical */}
                <div className="status-item status-critical">
                    <div className="status-info">
                        <div className="status-label">Server SSL <div className="status-value status-value-error">Not Installed</div></div>
                        <div className="status-message">A critical issue has been identified</div>
                    </div>
                    <div className="status-icon">
                        <ErrorIcon />
                    </div>
                </div>

                {/* WP Debug - Warning */}
                <div className="status-item status-warning">
                    <div className="status-info">
                        <div className="status-label">WP Debug <div className="status-value status-value-warning">Enabled</div></div>
                        <div className="status-message">An informal issue has been identified</div>
                    </div>
                    <div className="status-icon">
                        <WarningIcon />
                    </div>
                </div>

                {/* Memory Limit - Good */}
                <div className="status-item status-good">
                    <div className="status-info">
                        <div className="status-label">Memory Limit <div className="status-value status-value-good">40M</div></div>
                        <div className="status-message">No known issue found</div>
                    </div>
                    <div className="status-icon">
                        <CheckIcon />
                    </div>
                </div>
            </div>

            {/* Bottom Stats Section */}
            <div className="bottom-stats">
                <div className="stat-box total-elements-box">
                    <div className="stat-number">100</div>
                    <div className="stat-label">Total Elements</div>
                    <div className="stat-icon">
                        <GridIcon />
                    </div>
                </div>

                <div className="stat-row">
                    <div className="stat-box active-box">
                        <div className="stat-number">82</div>
                        <div className="stat-label">Active</div>
                        <div className="stat-icon">
                            <CheckCircleIcon />
                        </div>
                    </div>

                    <div className="stat-box inactive-box">
                        <div className="stat-number">18</div>
                        <div className="stat-label">Inactive</div>
                        <div className="stat-icon">
                            <CircleIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Icon Components
const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2C4.688 2 2 4.688 2 8C2 11.312 4.688 14 8 14C11.312 14 14 11.312 14 8C14 4.688 11.312 2 8 2ZM6.8 11L3.8 8L4.646 7.154L6.8 9.302L11.354 4.748L12.2 5.6L6.8 11Z" fill="#2ED573"/>
    </svg>
);

const WarningIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4867 2H5.51333L2 5.51333V10.4867L5.51333 14H10.4867L14 10.4867V5.51333L10.4867 2ZM8 11.5333C7.52 11.5333 7.13333 11.1467 7.13333 10.6667C7.13333 10.1867 7.52 9.8 8 9.8C8.48 9.8 8.86667 10.1867 8.86667 10.6667C8.86667 11.1467 8.48 11.5333 8 11.5333ZM8.66667 8.66667H7.33333V4.66667H8.66667V8.66667Z" fill="#FFC048"/>
    </svg>
);

const ErrorIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2C4.688 2 2 4.688 2 8C2 11.312 4.688 14 8 14C11.312 14 14 11.312 14 8C14 4.688 11.312 2 8 2ZM11 8.6H5V7.4H11V8.6Z" fill="#EE5253"/>
    </svg>
);

const GridIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.1314 3.71476L20.2954 6.87873L17.1314 10.0427L13.9674 6.87873L17.1314 3.71476ZM8.56745 4.2514V8.72345H4.0954V4.2514H8.56745ZM19.7476 15.4315V19.9036H15.2755V15.4315H19.7476ZM8.56745 15.4315V19.9036H4.0954V15.4315H8.56745ZM17.1314 0.550781L10.8035 6.86755L17.1314 13.1955L23.4594 6.86755L17.1314 0.550781ZM10.8035 2.01538H1.85938V10.9595H10.8035V2.01538ZM21.9836 13.1955H13.0395V22.1396H21.9836V13.1955ZM10.8035 13.1955H1.85938V22.1396H10.8035V13.1955Z" fill="#DFE2E8"/>
    </svg>
);

const CheckCircleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 5.18L10.59 16.6L6.35 12.36L7.76 10.95L10.59 13.78L20.59 3.78L22 5.18ZM19.79 10.22C19.92 10.79 20 11.39 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C13.58 4 15.04 4.46 16.28 5.25L17.72 3.81C16.1 2.67 14.13 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 10.81 21.78 9.67 21.4 8.61L19.79 10.22Z" fill="#DFE2E8"/>
    </svg>
);

const CircleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.37 8.45 20 10.15 20 12C20 16.42 16.42 20 12 20Z" fill="#DFE2E8"/>
    </svg>
);

export default SystemRequirements;