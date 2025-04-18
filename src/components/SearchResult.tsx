import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

export default function SearchResult() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dummyData = ["a", "b", "s"];
    const found = dummyData.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(found);
    setSubmitted(true);
  };

  return (
    <section className="containerOn">
        <div className="px-24 py-24">
        <h1 className="text-3xl font-bold mb-6">Search results</h1>
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <Input
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-gray-100 rounded-full h-[50px]"
            />
            <Button type="submit" className="bg-lime-400 hover:bg-lime-500 h-[50px] text-black px-12 font-medium">
                Search
            </Button>
        </form>

        {submitted && results.length === 0 && (
            <p className="text-sm text-gray-500">No matching results.</p>
        )}

        {results.length > 0 && (
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {results.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        )}
        </div>
    </section>
  );
}

