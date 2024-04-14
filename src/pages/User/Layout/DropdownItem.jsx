import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import React from "react";

const DropdownItem = ({ title, dropdownItems }) => {
  const onClick = ({ key }) => console.log(key);

  const items = dropdownItems.map(({ name, path }) => ({
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={path}
        style={{ textDecoration: "none" }}
      >
        {name}
      </a>
    ),
  }));

  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
      placement="bottomLeft"
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {title}
          <DownOutlined />
        </Space>{" "}
      </a>
    </Dropdown>
  );
};

export default DropdownItem;
