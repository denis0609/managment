"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+ App Router
import { getAllTeam } from "@/lib/service";
import BottomNavigation from "@/components/BoottomNavigation";

type TeamMemberProps = {
  name: string;
  role: string;
  email: string;
  phoneNumber: string;
  photo: string;
  onEdit: () => void;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  email,
  phoneNumber,
  photo,
  onEdit,
}) => (
  <article className="flex flex-col p-4 mt-4 w-full bg-white rounded-2xl shadow-sm max-w-[392px]">
    <div className="flex gap-5 justify-between px-0.5 w-full text-base">
      <div className="flex gap-4">
        <img
          loading="lazy"
          src={photo}
          alt={`${name}'s profile`}
          className="shrink-0 aspect-square w-[50px]"
        />
        <div className="flex flex-col self-start mt-1.5">
          <h3 className="font-bold text-slate-800">{name}</h3>
          <p className="mt-4 text-gray-400">{role}</p>
        </div>
      </div>
      <button
        onClick={onEdit}
        className="flex gap-1.5 self-end mt-8 text-sky-600 whitespace-nowrap"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3da6a2cf997517bb2a1180aa06394714b82d79171e8dd7f2b19f6c9b8b2e16da?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
          alt=""
          className="shrink-0 aspect-square w-[18px]"
        />
        <span className="my-auto">Edit</span>
      </button>
    </div>
    <hr className="shrink-0 mt-3 h-px border border-dashed bg-zinc-300 border-zinc-300" />
    <div className="flex gap-5 justify-between mt-3">
      <div className="flex flex-col self-start mt-1 text-base text-slate-800">
        <p>{email}</p>
        <p className="mt-4">{phoneNumber}</p>
      </div>
      <div className="flex flex-col">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/18ba718ed40abd284b749932f11b8c3243c8a7a50075da558a1f62d78bd02da5?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
          alt=""
          className="self-end aspect-square w-[18px]"
        />
        <div className="flex gap-4 mt-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/af0039707a37542b38b05438a211e6dd2a3796a0567ebd7a8916405812e55b2e?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
            alt=""
            className="shrink-0 aspect-square w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5535975f9154b1dd8b66b6a476d8e5f4e457e13533f2a8c7c9f6ac5bca1db482?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
            alt=""
            className="shrink-0 aspect-square w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/367ca4a6275a567c4411a6568b4eaec4175e2808dbccef169a4cfc8225938a81?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
            alt=""
            className="shrink-0 aspect-square w-[18px]"
          />
        </div>
      </div>
    </div>
  </article>
);

type NavItemProps = {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col ${isActive ? "text-sky-600" : "text-slate-800"}`}
  >
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="self-center aspect-square w-[30px]"
    />
    <p className="mt-4">{label}</p>
    {isActive && (
      <div className="shrink-0 mt-2 h-2 bg-sky-600 rounded-full border-solid border-[3px] border-sky-600 border-opacity-20 stroke-[3px]" />
    )}
  </button>
);

const MyComponent: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberProps[]>([]);
  const [filteredMembers, setFilteredTeamMembers] = React.useState<TeamMemberProps[]>();

  React.useEffect(() => {
    putTeammembers()
  }, [])

  const putTeammembers = async () => {
    const allMembers = await getAllTeam();
    console.log(allMembers);
    
    setTeamMembers(allMembers)
    setFilteredTeamMembers(allMembers)
  }

  const [activeNavItem, setActiveNavItem] = useState("Team");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // Initialize the useRouter hook

  const handleAddMember = () => {
    router.push("/my_team/add"); // Programmatically navigate to /my_team/add
  };

  const handleEditMember = (index: number) => {
    console.log(`Edit member at index ${index}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    
    setSearchQuery(query);

    if (query === "") {
      setFilteredTeamMembers(teamMembers);
    } else {
      const filtered = teamMembers?.filter(teamMember =>
        teamMember.name.toLowerCase().includes(query)
      );
      setFilteredTeamMembers(filtered);
    }
  };

  const handleNavItemClick = (label: string) => {
    setActiveNavItem(label);
  };

  return (
    <div className="flex flex-col items-center mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col self-stretch pb-4 w-full bg-white">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
            <time className="justify-center p-px">9:41</time>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              alt=""
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              alt=""
              className="shrink-0 aspect-[1.28] w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b758dec230011747af2734df3d80950a15f75c839697b9a1c7f0353df7454040?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              alt=""
              className="shrink-0 aspect-[1.28] w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              alt=""
              className="shrink-0 aspect-[1.92] w-[27px]"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between self-center px-5 mt-4 w-full capitalize max-w-[432px]">
          <h1 className="text-xl font-bold text-slate-800">My Team</h1>
          <button
            onClick={handleAddMember}
            className="flex gap-1.5 self-start text-sm text-right text-sky-600"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b26f1b8740f0d1a588b9e5c1c64614993912ed57623357092b5ff557f46c602e?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              alt=""
              className="shrink-0 w-4 aspect-square"
            />
            <span>Add Member</span>
          </button>
        </div>
      </header>
      <form
        onSubmit={handleSearch}
        className="flex gap-5 justify-between px-5 py-4 mt-5 w-full text-base text-gray-400 bg-white rounded-xl border border-solid border-slate-300 max-w-[392px]"
      >
        <div className="flex gap-3.5 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ad6d507edc6dabda210ae1e5061c422619ab795264350c0165a51932c6f1a12?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
            alt=""
            className="shrink-0 self-start w-4 aspect-square"
          />
          <input
            type="search"
            placeholder="Type to search..."
            className="flex-auto bg-transparent border-none outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <button type="submit" aria-label="Search">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd8fbb5e980d994b27854f36014bc594311eecc09ac9f812683bfc69e5bb946c?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
            alt=""
            className="shrink-0 w-5 aspect-square"
          />
        </button>
      </form>
      <main>
        {filteredMembers?.map((member, index) => (
          <TeamMember
            key={index}
            {...member}
            onEdit={() => handleEditMember(index)}
          />
        ))}
      </main>
      <BottomNavigation activityState="Team" />
    </div>
  );
};

export default MyComponent;
