import React from "react";

function Logo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <a href="/">
        <img src="https://1drv.ms/i/c/bb3df104a22402a1/IQPE3LHDD6UqSY0XC9zI4FlXAeQMzTDhBHR7Rrbu_GPYDEI?width=256" alt="eve" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
