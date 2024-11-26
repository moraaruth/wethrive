import services from '@/services.json'
import ServiceCard from '@/components/ServiceCard'
import BlogCard from '@/components/BlogCard'
import blogs from '@/blogs.json'
const Services = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
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
        {blogs.length === 0 ? (
          <p>No blog found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard  key={blog._id} blog={blog}/>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
