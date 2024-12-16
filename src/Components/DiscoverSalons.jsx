
import React from "react";
import { Link } from "react-router-dom";
import "./DiscoverSalon.css"

export default function DiscoverSalons() {
 
    const salons = [
        { id: 1, name: "Glam Studio", address: "123 Main St, New York", contact: "+1 555-123-4567" },
        { id: 2, name: "Elite Beauty", address: "456 Elm St, New York", contact: "+1 555-234-5678" },
        { id: 3, name: "Style Hub", address: "789 Oak St, New York", contact: "+1 555-345-6789" },
        { id: 4, name: "Charm Salon", address: "321 Maple Ave, Brooklyn", contact: "+1 555-456-7890" },
        { id: 5, name: "Trendy Touch", address: "654 Pine St, Brooklyn", contact: "+1 555-567-8901" },
        { id: 6, name: "Luxe Hair Lounge", address: "876 Birch Rd, Queens", contact: "+1 555-678-9012" },
        { id: 7, name: "Serenity Spa", address: "432 Willow Ln, Manhattan", contact: "+1 555-789-0123" },
        { id: 8, name: "Blush Beauty", address: "543 Cedar Ave, Manhattan", contact: "+1 555-890-1234" },
        { id: 9, name: "Polished & Perfect", address: "234 Cherry Blvd, Bronx", contact: "+1 555-901-2345" },
        { id: 10, name: "Golden Glow", address: "987 Walnut St, Bronx", contact: "+1 555-012-3456" },
        { id: 11, name: "Radiant Hair Co.", address: "654 Magnolia Dr, Staten Island", contact: "+1 555-123-6789" },
        { id: 12, name: "Velvet Touch", address: "345 Aspen Ct, Staten Island", contact: "+1 555-234-7890" },
        { id: 13, name: "Dazzle Salon", address: "765 Spruce Way, Harlem", contact: "+1 555-345-8901" },
        { id: 14, name: "Glossy Bliss", address: "876 Poplar St, Harlem", contact: "+1 555-456-9012" },
        { id: 15, name: "Shimmer Chic", address: "123 Birchwood Dr, Upper East Side", contact: "+1 555-567-0123" },
        { id: 16, name: "Elegant Edge", address: "321 Laurel Ln, Upper East Side", contact: "+1 555-678-1234" },
        { id: 17, name: "Vibrant Vibes", address: "234 Rosewood Ct, Chelsea", contact: "+1 555-789-2345" },
        { id: 18, name: "Radiance Room", address: "543 Sunset Blvd, Chelsea", contact: "+1 555-890-3456" },
        { id: 19, name: "Luxury Looks", address: "100 Pine St, New York", contact: "+1 555-987-6543" },
        { id: 20, name: "The Beauty Haven", address: "789 Horizon Ave, Williamsburg", contact: "+1 555-654-3210" },
      ];
      


  return (
    <div className="discover-salons">
      <h1>Discover Salons</h1>
      <div className="salon-list">
        {salons.map((salon) => (
          <div className="salon-card" key={salon.id}>
            <h2>{salon.name}</h2>
            <p>Address: {salon.address}</p>
            <p>Contact: {salon.contact}</p>
            <Link to={`/salons/${salon.id}`} className="details-button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
