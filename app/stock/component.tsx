// component.tsx
"use client";
import BottomNavigation from "@/components/BoottomNavigation";
import * as React from "react";

interface StockItem {
  depotId: string;
  depotName: string;
  image?: string;
  items: { itemName: string; quantity: number; status: "Low" | "High" }[];
}

interface StockManagementProps {
  stockItems?: StockItem[];
}

const StockManagement: React.FC<StockManagementProps> = ({
  stockItems = [],
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddStock = () => {
    console.log("Add stock clicked");
  };

  const filteredItems = stockItems.filter((item) =>
    item.depotName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col self-stretch pb-4 w-full bg-white">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              className="shrink-0 aspect-[1.28] w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b758dec230011747af2734df3d80950a15f75c839697b9a1c7f0353df7454040?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              className="shrink-0 aspect-[1.28] w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              className="shrink-0 aspect-[1.92] w-[27px]"
            />
          </div>
        </div>
        <div className="flex gap-5 self-center px-5 mt-4 w-full capitalize max-w-[432px]">
          <div className="flex-auto text-xl font-bold text-slate-800">
            Stock Management
          </div>
          <button
            onClick={handleAddStock}
            className="flex gap-1.5 self-start text-sm text-right text-sky-600"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b26f1b8740f0d1a588b9e5c1c64614993912ed57623357092b5ff557f46c602e?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              className="shrink-0 w-4 aspect-square"
            />
            <div>Add Stock</div>
          </button>
        </div>
      </div>
      <div className="flex gap-3.5 px-5 py-4 mt-5 w-full text-base text-gray-400 bg-white rounded-xl border border-solid border-slate-300 max-w-[392px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/797bb789958444aff2aacc70d3500123be29d6f8bc8de4727633506dfe295e42?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
          className="shrink-0 self-start w-4 aspect-square"
        />
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={handleSearch}
          className="flex-auto bg-transparent outline-none"
        />
      </div>
      {filteredItems.map((item) => (
        <div
          key={item.depotId}
          className="flex gap-4 px-3.5 py-2.5 mt-5 w-full bg-white rounded-2xl shadow-sm max-w-[392px]"
        >
          <img
            loading="lazy"
            src={item.image}
            className="shrink-0 max-w-full aspect-square w-[107px]"
          />
          <div className="flex flex-col my-auto">
            <div className="text-base font-bold text-slate-800">
              {item.depotName}
            </div>
            {item.items.map((subItem, index) => (
              <div key={index} className="flex gap-2.5 mt-4">
                <div className="text-base text-gray-400">
                  {subItem.quantity} {subItem.itemName}
                </div>
                <div
                  className={`flex gap-1.5 px-1.5 py-1 text-xs whitespace-nowrap rounded-[50px] ${subItem.status === "Low"
                      ? "text-red-500 bg-red-500 bg-opacity-10"
                      : "text-green-500 bg-green-500 bg-opacity-10"
                    }`}
                >
                  <img
                    loading="lazy"
                    src={`http://b.io/ext_${subItem.status === "Low" ? "28" : "29"
                      }`}
                    className="shrink-0 my-auto w-2 aspect-square"
                  />
                  <div>{subItem.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <BottomNavigation activityState="StockMgmt" />
    </div>
  );
};

export default StockManagement;
