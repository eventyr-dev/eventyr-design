import React, { useState } from 'react';
import { Button } from './Button';
import { X, Cookie } from 'lucide-react';

export type CookieConsentProps = {
    /**
     * Visual style of the consent banner
     * @default 'simple'
     */
    variant?: 'simple' | 'detailed';
    /**
     * Whether the banner is fixed to the bottom of the viewport
     * @default true
     */
    fixed?: boolean;
    /**
     * Callback when cookies are accepted
     */
    onAccept?: () => void;
    /**
     * Callback when cookies are declined (only available in detailed view)
     */
    onDecline?: () => void;
    /**
     * URL for the privacy policy link
     */
    privacyPolicyUrl?: string;
    /**
     * Custom title text
     */
    title?: string;
    /**
     * Custom description text
     */
    description?: string;
};

export const CookieConsent: React.FC<CookieConsentProps> = ({
    variant = 'simple',
    fixed = true,
    onAccept,
    onDecline,
    privacyPolicyUrl = '#',
    title = 'We use cookies',
    description = 'We use cookies to enhance your browsing experience and analyze our traffic.',
}) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const handleAccept = () => {
        setIsVisible(false);
        onAccept?.();
    };

    const handleDecline = () => {
        setIsVisible(false);
        onDecline?.();
    };

    const containerClasses = fixed
        ? "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        : "w-full p-4 md:p-6";

    return (
        <div className={containerClasses}>
            <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border border-stone-200 shadow-xl rounded-xl p-6 md:flex md:items-center md:justify-between gap-6 animate-fadeIn">

                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                            <Cookie size={20} />
                        </div>
                        <h3 className="font-bold text-stone-800 text-lg">{title}</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        {description}{' '}
                        <a
                            href={privacyPolicyUrl}
                            className="text-emerald-700 font-medium hover:text-emerald-800 underline decoration-emerald-300 underline-offset-2"
                        >
                            Read our Privacy Policy
                        </a>.
                    </p>
                </div>

                <div className={`flex flex-col sm:flex-row gap-3 mt-6 md:mt-0 ${variant === 'simple' ? 'sm:w-auto' : ''}`}>
                    {variant === 'detailed' && (
                        <Button variant="outline" onClick={handleDecline} className="justify-center">
                            Decline All
                        </Button>
                    )}
                    <Button variant="primary" onClick={handleAccept} className="justify-center whitespace-nowrap">
                        Accept Cookies
                    </Button>
                </div>

                {!fixed && (
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 md:hidden"
                    >
                        <X size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};
