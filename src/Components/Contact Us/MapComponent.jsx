import React from 'react';

const MapComponent = () => {
  return (
    <div className="map">
      <div style={{ width: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2042363565055!2d79.0260037!3d28.8182577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a8de7ee581563%3A0x97cb9d2b4b7942da!2sThe+wellness+Gym!5e0!3m2!1sen!2sin!4v1716213446010!5m2!1sen!2sin"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
