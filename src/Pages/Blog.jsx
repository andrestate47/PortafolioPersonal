import React from "react";
import "../styles/Blog.css";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Mi primer blog",
      date: "21 de enero de 2025",
      description: "Este es un breve resumen de mi primer blog sobre desarrollo web.",
      category: "Desarrollo Web",
      tags: ["React", "JavaScript"],
    },
    {
      id: 2,
      title: "Cómo mejorar la productividad como programador",
      date: "15 de enero de 2025",
      description: "Consejos prácticos para optimizar tu tiempo y trabajar de manera eficiente.",
      category: "Productividad",
      tags: ["Tips", "Organización"],
    },
    {
        id: 3,
        title: "Cómo mejorar la productividad como programador",
        date: "15 de enero de 2025",
        description: "Consejos prácticos para optimizar tu tiempo y trabajar de manera eficiente.",
        category: "Productividad",
        tags: ["Tips", "Organización"],
      },
      {
        id: 4,
        title: "Cómo mejorar la productividad como programador",
        date: "15 de enero de 2025",
        description: "Consejos prácticos para optimizar tu tiempo y trabajar de manera eficiente.",
        category: "Productividad",
        tags: ["Tips", "Organización"],
      },
      {
        id: 5,
        title: "Cómo mejorar la productividad como programador",
        date: "15 de enero de 2025",
        description: "Consejos prácticos para optimizar tu tiempo y trabajar de manera eficiente.",
        category: "Productividad",
        tags: ["Tips", "Organización"],
      },
      {
        id: 6,
        title: "Cómo mejorar la productividad como programador",
        date: "15 de enero de 2025",
        description: "Consejos prácticos para optimizar tu tiempo y trabajar de manera eficiente.",
        category: "Productividad",
        tags: ["Tips", "Organización"],
      },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h2>{blog.title}</h2>
            <p className="blog-date">{blog.date}</p>
            <p className="blog-description">{blog.description}</p>
            <p className="blog-category">Categoría: {blog.category}</p>
            <div className="blog-tags">
              {blog.tags.map((tag, index) => (
                <span key={index} className="blog-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
