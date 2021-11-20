import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function SelectedBtn() {
    const icon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="white"/>
    <path d="M14.5 21C14.3684 21.0008 14.2379 20.9755 14.1161 20.9258C13.9943 20.876 13.8834 20.8027 13.79 20.71C13.6963 20.617 13.6219 20.5064 13.5711 20.3846C13.5203 20.2627 13.4942 20.132 13.4942 20C13.4942 19.868 13.5203 19.7373 13.5711 19.6154C13.6219 19.4936 13.6963 19.383 13.79 19.29L17.1 16L13.92 12.69C13.7337 12.5026 13.6292 12.2492 13.6292 11.985C13.6292 11.7208 13.7337 11.4674 13.92 11.28C14.013 11.1863 14.1236 11.1119 14.2454 11.0611C14.3673 11.0103 14.498 10.9842 14.63 10.9842C14.762 10.9842 14.8927 11.0103 15.0146 11.0611C15.1364 11.1119 15.247 11.1863 15.34 11.28L19.2 15.28C19.3832 15.4669 19.4859 15.7182 19.4859 15.98C19.4859 16.2418 19.3832 16.4931 19.2 16.68L15.2 20.68C15.1102 20.7769 15.0022 20.8551 14.882 20.91C14.7619 20.965 14.632 20.9955 14.5 21V21Z" fill="#3671E9"/>
    </svg>
    
    return (
        <div  data-aos="flip-up">
        <button className="Currencies-btn-selected" >
           Start mining<span>{icon}</span>
        </button>
        </div>
    )
}
