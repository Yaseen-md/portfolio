import React from 'react';

const ContactInfoItem = ({ icon, title, value, link }) => {
  return (
    <div className="flex items-start">
      <div className="p-2 bg-secondary/30 rounded-md mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-foreground">{title}</h4>
        {link ? (
          <a 
            href={link} 
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-foreground/70">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfoItem;