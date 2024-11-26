import services from '@/services.json';
import ServiceCard from './ServiceCard';


const HomeServices = () => {
    return ( 
        <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
           <h2 className = "text-3xl font-bold text-blue-500 mb-6 text-center">Autism Information and support</h2>
          {services.length === 0 ? (
            <p>No service found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard  key={service._id} service={service}/>
              ))}
            </div>
          )}
        </div>
        <div className="container-xl lg:container m-auto px-4 py-6">
           <h2 className = "text-3xl font-bold text-blue-500 mb-6 text-center">Find autism services and events in your community</h2>
          {services.length === 0 ? (
            <p>No service found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard  key={service._id} service={service}/>
              ))}
            </div>
          )}
        </div>
        <div className="container-xl lg:container m-auto px-4 py-6">
           <h2 className = "text-3xl font-bold text-blue-500 mb-6 text-center">Find the resources right for you</h2>
          {services.length === 0 ? (
            <p>No service found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard  key={service._id} service={service}/>
              ))}
            </div>
          )}
        </div>
        <div className="container-xl lg:container m-auto px-4 py-6">
           <h2 className = "text-3xl font-bold text-blue-500 mb-6 text-center">Services Available</h2>
          {services.length === 0 ? (
            <p>No service found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard  key={service._id} service={service}/>
              ))}
            </div>
          )}
        </div>
        <div className="container-xl lg:container m-auto px-4 py-6">
           <h2 className = "text-3xl font-bold text-blue-500 mb-6 text-center">Life on the spectrum</h2>
          {services.length === 0 ? (
            <p>No service found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard  key={service._id} service={service}/>
              ))}
            </div>
          )}
        </div>
      </section>
      
        );
}
 
export default HomeServices;