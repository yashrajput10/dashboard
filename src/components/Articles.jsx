import React, { useState } from "react";

const Articles = () => {
  const generatedArticles = [
    {
      title: "How to Learn JavaScript",
      keyword: "JavaScript",
      words: 1200,
      createdOn: "2025-05-18",
    },
    {
      title: "Introduction to React",
      keyword: "React",
      words: 1500,
      createdOn: "2025-05-17",
    },
    {
      title: "Understanding TypeScript",
      keyword: "TypeScript",
      words: 1300,
      createdOn: "2025-05-16",
    },
    {
      title: "Node.js for Beginners",
      keyword: "Node.js",
      words: 1400,
      createdOn: "2025-05-15",
    },
    {
      title: "Mastering CSS Flexbox",
      keyword: "CSS",
      words: 1100,
      createdOn: "2025-05-14",
    },
    {
      title: "Building REST APIs with Express",
      keyword: "Express",
      words: 1600,
      createdOn: "2025-05-13",
    },
    {
      title: "Getting Started with MongoDB",
      keyword: "MongoDB",
      words: 1250,
      createdOn: "2025-05-12",
    },
    {
      title: "Vue.js Crash Course",
      keyword: "Vue.js",
      words: 1450,
      createdOn: "2025-05-11",
    },
    {
      title: "Asynchronous JavaScript Explained",
      keyword: "Async JS",
      words: 1350,
      createdOn: "2025-05-10",
    },
    {
      title: "Deploying Apps with Vercel",
      keyword: "Deployment",
      words: 1000,
      createdOn: "2025-05-09",
    },
  ];

  const publishedArticles = [
    {
      title: "CSS for Beginners",
      keyword: "CSS",
      words: 900,
      createdOn: "2025-05-16",
    },
    {
      title: "Understanding Tailwind CSS",
      keyword: "Tailwind",
      words: 1100,
      createdOn: "2025-05-15",
    },
  ];

  const scheduledArticles = [
    {
      title: "Node.js for Backend Development",
      keyword: "Node.js",
      words: 1800,
      createdOn: "2025-05-14",
    },
  ];

  const archivedArticles = [
    {
      title: "Old JavaScript Techniques",
      keyword: "JavaScript",
      words: 1000,
      createdOn: "2024-12-01",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("generated");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = {
    generated: generatedArticles,
    published: publishedArticles,
    scheduled: scheduledArticles,
    archived: archivedArticles,
  };

  const filteredArticles = articles[selectedCategory].filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Articles</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 w-full sm:w-auto"
          onClick={() => setSelectedCategory("generated")}
        >
          Generated Articles
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 w-full sm:w-auto"
          onClick={() => setSelectedCategory("published")}
        >
          Published Articles
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 w-full sm:w-auto"
          onClick={() => setSelectedCategory("scheduled")}
        >
          Scheduled Articles
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 w-full sm:w-auto"
          onClick={() => setSelectedCategory("archived")}
        >
          Archived Articles
        </button>
      </div>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full sm:w-1/2 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full mx-4 relative animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
            <p className="mb-2">
              <strong>Keyword:</strong> {selectedArticle.keyword}
            </p>
            <p className="mb-2">
              <strong>Word Count:</strong> {selectedArticle.words}
            </p>
            <p className="mb-4">
              <strong>Created On:</strong> {selectedArticle.createdOn}
            </p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
              onClick={() => setSelectedArticle(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto max-h-[500px] overflow-y-auto border rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-black">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-black">
                Article Title
              </th>
              <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-black">
                Keyword [Traffic]
              </th>
              <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-black">
                Words
              </th>
              <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-black">
                Created On
              </th>
              <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-black">
                Action
              </th>
              <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-black">
                Publish
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.map((article, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-sm text-gray-700">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {article.title}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {article.keyword}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {article.words}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {article.createdOn}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <button
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2"
                    onClick={() => setSelectedArticle(article)}
                  >
                    View
                  </button>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">
                  <div className="relative">
                    <button
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                      onClick={() =>
                        document
                          .getElementById(`dropdown-${index}`)
                          ?.classList.toggle("hidden")
                      }
                    >
                      Options
                    </button>
                    <ul
                      id={`dropdown-${index}`}
                      className="absolute hidden right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
                    >
                      <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <i className="fab fa-github"></i> GitHub
                      </li>
                      <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <i className="fab fa-wordpress"></i> WordPress
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
            {filteredArticles.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No articles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Articles;
