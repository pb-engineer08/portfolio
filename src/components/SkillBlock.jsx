export default function SkillBlock({ title, items }) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{items}</p>
    </div>
  );
}