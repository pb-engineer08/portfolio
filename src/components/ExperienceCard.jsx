export default function ExperienceCard({ title, company, period, points }) {
  return (
    <div className="border rounded-xl p-6 shadow-sm bg-white">
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-sm text-gray-500">
        {company} · {period}
      </p>
      <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}