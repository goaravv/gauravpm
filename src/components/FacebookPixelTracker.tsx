 import { useEffect } from 'react';
 import { useLocation } from 'react-router-dom';
 
 declare global {
   interface Window {
     fbq: (...args: any[]) => void;
   }
 }
 
 export const FacebookPixelTracker = () => {
   const location = useLocation();
 
   useEffect(() => {
     // Track page view on route change for SPA navigation
     if (typeof window.fbq === 'function') {
       window.fbq('track', 'PageView');
     }
   }, [location.pathname]);
 
   return null;
 };
 
 // Helper function to track custom events
 export const trackFBEvent = (eventName: string, params?: Record<string, any>) => {
   if (typeof window.fbq === 'function') {
     window.fbq('track', eventName, params);
   }
 };
 
 // Common event helpers
 export const trackLead = (params?: Record<string, any>) => trackFBEvent('Lead', params);
 export const trackCompleteRegistration = (params?: Record<string, any>) => trackFBEvent('CompleteRegistration', params);
 export const trackContact = (params?: Record<string, any>) => trackFBEvent('Contact', params);