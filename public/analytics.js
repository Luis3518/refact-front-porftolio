const ANALYTICS_CONFIG = {
    apiUrl: import.meta.env?.ANALYTICS_API_URL
};

function trackEvent(eventName) {
    try {
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

// Debug log
console.log('Analytics loaded with API URL:', ANALYTICS_CONFIG.apiUrl);
