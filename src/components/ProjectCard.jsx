export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded-xl p-6 shadow-sm bg-white">
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-indigo-600">
        View Project
      </a>
    </div>
  );
}