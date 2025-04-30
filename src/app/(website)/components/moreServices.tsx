const MoreServices = () => {
    const moreServices = [
      { name: "Home Renovation", desc: "Full interior work", icon: "" },
      { name: "Car Washing", desc: "Doorstep service", icon: "" },
      { name: "CCTV Installation", desc: "Secure your space", icon: "" },
      { name: "Home Renovation", desc: "Full interior work", icon: "" },
      { name: "Car Washing", desc: "Doorstep service", icon: "" },
      { name: "CCTV Installation", desc: "Secure your space", icon: "" },
    ];
  
    return (
      <div className="mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Explore More Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 px-2">
          {moreServices.map((s, i) => (
            <div key={i} className="p-6 bg-white shadow-md rounded-xl">
              <div className="w-12 h-12 bg-gray-300 rounded-full mb-4" />
              <h3 className="font-semibold text-lg">{s.name}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MoreServices;
  