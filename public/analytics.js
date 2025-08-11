const ANALYTICS_CONFIG = {
    apiUrl: window.ANALYTICS_API_URL || 'http://localhost:4000/track'
};

function trackEvent(eventName) {
    try {
        if (!ANALYTICS_CONFIG.apiUrl) return;
        
        fetch(ANALYTICS_CONFIG.apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ event: eventName })
        }).catch(error => {
            console.log('Analytics tracking failed:', error);
        });
    } catch (error) {
        console.log('Analytics tracking error:', error);
    }
}

function trackPageVisit() {
    trackEvent("page_visit");
}

function trackCVClick() {
    trackEvent("click_CV");
}

// Hacer las funciones globales
window.trackEvent = trackEvent;
window.trackPageVisit = trackPageVisit;
window.trackCVClick = trackCVClick;
