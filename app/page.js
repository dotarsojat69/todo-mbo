import SearchBar from "@/components/ui/searchbar";
import { getLocalData } from "@/getdata";

export default async function Home() {
  const posts = await getLocalData
  
  return (
    <main className="max-w-screen flex flex-col items-center justify-between p-6">
      <SearchBar />
      <div className="p-6">
        <h1 className="text-bold text-2xl">Todo List</h1>
      </div>
    </main>
);
}
