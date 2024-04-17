export default function RecentSearch() {
  const searchData = [
    {
      search: "Portrait",
      id: 1,
    },
    {
      search: "Table",
      id: 2,
    },
    {
      search: "Buildings",
      id: 3,
    },
    {
      search: "Forest",
      id: 4,
    },
    {
      search: "Landscapes",
      id: 5,
    },
    {
      search: "Share",
      id: 6,
    },
    {
      search: "Office",
      id: 7,
    },
  ];
  return (
    <section className="bg-purple w-100 h-screen">
      <div className="flex flex-col bg-white">
        <h1>Recent Search</h1>

        <div className="flex flex-wrap gap-4 text">
          {searchData.map((search, id) => (
            <p  key={id}>{search.search}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
