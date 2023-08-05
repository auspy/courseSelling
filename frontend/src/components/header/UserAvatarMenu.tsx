"use client";
import { useState } from "react";
import AccountMenu from "../menus/AccountMenu";

const UserAvatarMenu = ({ username }: { username: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  return (
    <div>
      <button
        style={{
          height: 40,
          width: 40,
          background: `trasparent`,
          border: "1px solid var(--primary)",
          borderRadius: "50%",
          color: "var(--white)",
        }}
        onClick={handleClick}
        className="upper semi16 gcc"
      >
        {username[0]}
      </button>
      <AccountMenu setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
    </div>
  );
};

export default UserAvatarMenu;
