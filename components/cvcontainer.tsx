const fetchCV = async (query: string) => {
  console.log(query);
};

export default async function CVContainer({ query }: { query: string }) {
  const invoices = await fetchCV(query);
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
      <img
        alt="Product Image"
        className="w-full h-48 object-cover"
        height={300}
        src="/placeholder.svg"
        style={{
          aspectRatio: "300/300",
          objectFit: "cover",
        }}
        width={300}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Acme Prism Tee
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-1">$29.99</p>
      </div>
    </div>
  );
}
