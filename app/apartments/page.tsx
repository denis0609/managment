"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { getListing } from "@/lib/service";
import BottomNavigation from "@/components/BoottomNavigation";
import Individual from "@/components/Individual";
import { IndividualProps } from "@/lib/types";

interface PropertyCardProps {
  imageSrc: string;
  name: string;
  address: string;
  onClick?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageSrc,
  name,
  address,
  onClick,
}) => (
  <div
    className="flex gap-5 py-2.5 pr-20 pl-2.5 mt-4 max-w-full bg-white rounded-2xl shadow-sm w-[392px] cursor-pointer"
    onClick={onClick}
  >
    <img
      loading="lazy"
      src={imageSrc}
      className="shrink-0 aspect-square w-[70px]"
      alt={name}
    />
    <div className="flex flex-col my-auto">
      <div className="text-base font-bold text-slate-800">{name}</div>
      <div className="mt-3.5 text-sm text-gray-400">{address}</div>
    </div>
  </div>
);

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive,
  onClick,
}) => (
  <button
    className={`flex flex-col items-center ${isActive ? "text-sky-600" : "text-slate-800"
      }`}
    onClick={onClick}
  >
    <img
      loading="lazy"
      src={icon}
      className="shrink-0 aspect-square w-[30px]"
      alt={label}
    />
    <div className="mt-4 text-xs text-center whitespace-nowrap">{label}</div>
    {isActive && (
      <div className="shrink-0 self-center mt-2 w-4 h-2 bg-sky-600 rounded-full border-solid border-[3px] border-sky-600 border-opacity-20 stroke-[3px]" />
    )}
  </button>
);

interface Listings {
  propertyId: string,
  propertyName: string,
  address?: string,
  imageUrl?: string
}

const MyComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [listings, setListings] = React.useState<Listings[]>();
  const [filteredListings, setFilteredListings] = React.useState<Listings[]>();
  const [individualState, setIndividualState] = React.useState<boolean>(false);
  const [property, setProperty] = React.useState<IndividualProps>();
  const router = useRouter();

  React.useEffect(() => {
    putListings()
  }, [])

  const putListings = async () => {
    const listings = await getListing();
    setListings(listings)
    setFilteredListings(listings)
  }

  const navigateToAddApartment = () => {
    router.push("/house_manual");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredListings(listings);
    } else {
      const filtered = listings?.filter(listing =>
        listing.propertyName.toLowerCase().includes(query)
      );
      setFilteredListings(filtered);
    }
  };

  const handleAddListing = () => {
    navigateToAddApartment();
  };

  return (
    <>
    {!individualState? (
      <div className="flex flex-col items-center mx-auto w-full bg-gray-100 max-w-[480px]">
        <div className="flex flex-col self-stretch pb-4 w-full bg-white">
          <div className="flex gap-5 justify-between w-full">
            <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
              <div className="justify-center p-px">9:41</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
                className="shrink-0 w-3.5 aspect-square"
                alt="Signal"
              />
            </div>
            <div className="flex gap-2.5 justify-center px-6 py-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
                className="shrink-0 aspect-[1.28] w-[18px]"
                alt="Wifi"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224278a3f68c03a5c3e0be03694a56ab078add0750dd5a35667a57c030ea853?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
                className="shrink-0 aspect-[1.28] w-[18px]"
                alt="Network"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
                className="shrink-0 aspect-[1.92] w-[27px]"
                alt="Battery"
              />
            </div>
          </div>
          <div className="flex gap-5 self-center px-5 mt-4 w-full capitalize max-w-[432px]">
            <div className="text-xl font-bold text-slate-800">All Listings</div>
            <button
              className="flex flex-1 gap-1.5 self-start text-sm text-right text-sky-600"
              onClick={handleAddListing}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e0d5de82c7cb7999950d306fec4b9ee1af9947b0b0d58eab9a4265db1e28d70?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
                className="shrink-0 w-4 aspect-square"
                alt="Add"
              />
              <div>Add Listing</div>
            </button>
          </div>
        </div>
        <div className="flex gap-3.5 px-5 py-4 mt-5 w-full text-base text-gray-400 bg-white rounded-xl border border-solid border-slate-300 max-w-[392px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf0baeaf6acc0752e9ed7cb9cf2fc4ff9fcf4df893a89fb772706d9d0cabec9f?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
            className="shrink-0 self-start w-4 aspect-square"
            alt="Search"
          />
          <input
            type="text"
            className="flex-auto bg-transparent outline-none"
            placeholder="Type to search listings"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {filteredListings ? (filteredListings?.map(listing => (
          <PropertyCard
            key={listing.propertyId}
            // imageSrc={listing?.imageUrl}
            imageSrc=""
            name={listing.propertyName}
            // address={listing.address}
            address=""
            onClick={() =>{
              setIndividualState(true);
              setProperty({...listing})
            }}
          />
        ))) : (<></>)}
        <BottomNavigation activityState="Apartments" />
      </div>
    ):(
      <Individual {...property} />
    )}
    </>
  );
};

export default MyComponent;
