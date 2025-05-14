'use client';

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ text, name, role }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md flex-none w-[300px] md:w-[350px]">
      <p className="text-gray-600">{text}</p>
      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{role}</span>
      </div>
    </div>
  );
} 